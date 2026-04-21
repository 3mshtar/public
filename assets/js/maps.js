(function () {
  const data = window.VMB_DATA || {};
  const MOSQUES = (data.mosques || []).map((m) => {
    const collected = Number(m.collected ?? m.cost ?? 0) || 0;
    const progress = Number(m.progress || 0) || 0;
    let fullAmount = Number(m.fullAmount || 0) || 0;
    if (!fullAmount) {
      fullAmount = progress > 0 && progress < 100 ? Math.round((collected / (progress / 100)) / 1000) * 1000 : collected;
    }
    return { ...m, collected, fullAmount, progress };
  });

  const MAP_STYLE_URL = 'https://api.maptiler.com/maps/streets-v4/style.json?key=57lMnWNn4izcfORali4H';
  const COLORS = {
    active: '#c89f4a',
    complete: '#0f6d62',
    selected: '#173431'
  };

  const TEXTS = {
    ar: {
      mapEyebrow: 'الخريطة التفاعلية',
      mapTitle: 'خريطة المشاريع في السويد',
      mapLead: 'اضغط على أي نقطة أو بطاقة لعرض معلومات المسجد وتفاصيل المشروع.',
      listTitle: 'قائمة المشاريع',
      all: 'الكل',
      active: 'نشطة',
      completed: 'مكتملة',
      selectedHint: 'يمكنك التنقل بين المشاريع من الخريطة أو من القائمة.',
      locationLabel: 'الموقع',
      dateLabel: 'التاريخ',
      collectedLabel: 'تم جمع',
      fullLabel: 'المبلغ الكامل',
      progressLabel: 'النسبة',
      projectStatusLabel: 'حالة المشروع',
      fundingStatusLabel: 'حالة جمع المبلغ',
      fundingOpen: 'جمع التبرعات مستمر',
      fundingComplete: 'اكتمل جمع المبلغ',
      status_started: 'المشروع في بدايته',
      status_active: 'قيد التنفيذ',
      status_completed: 'مكتمل',
      loadingMap: 'جاري تحميل الخريطة…',
      mapLoadFailed: 'تعذر تحميل الخريطة حالياً.',
      currentMapTitle: 'موقع الحملة الحالية',
      currentMapLead: 'خريطة مباشرة لموقع المشروع الحالي داخل السويد.'
    },
    sv: {
      mapEyebrow: 'Interaktiv karta',
      mapTitle: 'Projektkarta i Sverige',
      mapLead: 'Klicka på en punkt eller ett kort för att se moskéns information och projektets detaljer.',
      listTitle: 'Projektlista',
      all: 'Alla',
      active: 'Pågående',
      completed: 'Klart',
      selectedHint: 'Du kan växla mellan projekten från kartan eller listan.',
      locationLabel: 'Plats',
      dateLabel: 'Datum',
      collectedLabel: 'Insamlat',
      fullLabel: 'Fullt belopp',
      progressLabel: 'Procent',
      projectStatusLabel: 'Projektstatus',
      fundingStatusLabel: 'Insamlingsstatus',
      fundingOpen: 'Insamlingen pågår',
      fundingComplete: 'Insamlingen är klar',
      status_started: 'Projektstart',
      status_active: 'Pågående',
      status_completed: 'Slutförd',
      loadingMap: 'Laddar karta…',
      mapLoadFailed: 'Kartan kunde inte laddas just nu.',
      currentMapTitle: 'Plats för aktuell kampanj',
      currentMapLead: 'Direkt karta över den aktuella kampanjens plats i Sverige.'
    }
  };

  let campaignsState = null;
  let currentState = null;

  function getLang() {
    return localStorage.getItem('vmb-lang') || document.documentElement.lang || 'ar';
  }

  function tt(key) {
    const active = getLang();
    return (TEXTS[active] && TEXTS[active][key]) || TEXTS.ar[key] || key;
  }

  function formatCurrency(value) {
    const formatted = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Number(value || 0));
    return getLang() === 'ar' ? `${formatted} KR` : `${formatted} KR`;
  }

  function fundingText(item) {
    return Number(item.progress || 0) >= 100 ? tt('fundingComplete') : tt('fundingOpen');
  }

  function projectStatusText(item) {
    return tt(`status_${item.status || 'active'}`);
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function makeFeature(item) {
    return {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [Number(item.lng), Number(item.lat)] },
      properties: {
        id: item.id,
        name: item.name,
        city: item.city,
        year: item.year,
        collected: item.collected,
        fullAmount: item.fullAmount,
        progress: item.progress,
        status: item.status || 'active'
      }
    };
  }

  function featureCollection(items) {
    return { type: 'FeatureCollection', features: items.map(makeFeature) };
  }

  function popupMarkup(item) {
    return `
      <div class="map-popup">
        <div class="map-popup-title">${escapeHtml(item.name)}</div>
        <div class="map-popup-meta">${escapeHtml(item.city)}${item.year ? ` • ${escapeHtml(item.year)}` : ''}</div>
        <div class="map-popup-line"><span>${tt('collectedLabel')}</span><strong>${formatCurrency(item.collected)}</strong></div>
        <div class="map-popup-line"><span>${tt('fullLabel')}</span><strong>${formatCurrency(item.fullAmount)}</strong></div>
        <div class="map-popup-line"><span>${tt('progressLabel')}</span><strong>${Number(item.progress || 0).toFixed(0)}%</strong></div>
      </div>`;
  }

  function renderMapI18n() {
    document.querySelectorAll('[data-map-i18n]').forEach((el) => {
      const key = el.getAttribute('data-map-i18n');
      el.textContent = tt(key);
    });
    document.querySelectorAll('[data-map-filter]').forEach((btn) => {
      btn.textContent = tt(btn.getAttribute('data-map-filter'));
    });
  }

  function selectedCardMarkup(item) {
    return `
      <div class="selected-project-card">
        <div class="selected-head">
          <div>
            <div class="eyebrow mb-3"><i class="bi bi-stars"></i> ${tt('mapEyebrow')}</div>
            <div class="selected-title">${escapeHtml(item.name)}</div>
            <div class="selected-meta">${escapeHtml(item.city)}${item.year ? ` • ${escapeHtml(item.year)}` : ''}</div>
          </div>
          <span class="badge-soft">${Number(item.progress || 0).toFixed(0)}%</span>
        </div>
        <div class="campaigns-feature-grid">
          <div class="mini-stat-card"><span>${tt('collectedLabel')}</span><strong>${formatCurrency(item.collected)}</strong></div>
          <div class="mini-stat-card"><span>${tt('fullLabel')}</span><strong>${formatCurrency(item.fullAmount)}</strong></div>
          <div class="mini-stat-card"><span>${tt('progressLabel')}</span><strong>${Number(item.progress || 0).toFixed(0)}%</strong></div>
        </div>
        <div class="project-progress-wrap">
          <div class="d-flex justify-content-between small-muted mb-2"><span>${tt('progressLabel')}</span><strong>${Number(item.progress || 0).toFixed(0)}%</strong></div>
          <div class="progress"><div class="progress-bar" style="width:${Math.min(Number(item.progress || 0), 100)}%"></div></div>
        </div>
        <div class="project-status-stack mt-3">
          <div><strong>${tt('fundingStatusLabel')}:</strong> ${fundingText(item)}</div>
          <div><strong>${tt('projectStatusLabel')}:</strong> ${projectStatusText(item)}</div>
        </div>
        <div class="map-note">${tt('selectedHint')}</div>
      </div>`;
  }

  function projectRowMarkup(item, active) {
    return `
      <button type="button" class="campaigns-project-row${active ? ' is-active' : ''}" data-project-id="${item.id}">
        <div class="title-line">
          <div>
            <div class="project-name">${escapeHtml(item.name)}</div>
            <div class="project-meta">${escapeHtml(item.city)}${item.year ? ` • ${escapeHtml(item.year)}` : ''}</div>
          </div>
          <span class="badge-soft">${Number(item.progress || 0).toFixed(0)}%</span>
        </div>
        <div class="campaigns-project-grid">
          <div class="mini-stat-card"><span>${tt('collectedLabel')}</span><strong>${formatCurrency(item.collected)}</strong></div>
          <div class="mini-stat-card"><span>${tt('fullLabel')}</span><strong>${formatCurrency(item.fullAmount)}</strong></div>
          <div class="mini-stat-card"><span>${tt('progressLabel')}</span><strong>${Number(item.progress || 0).toFixed(0)}%</strong></div>
        </div>
        <div class="project-progress-wrap">
          <div class="progress"><div class="progress-bar" style="width:${Math.min(Number(item.progress || 0), 100)}%"></div></div>
        </div>
      </button>`;
  }

  function bindCampaignList() {
    if (!campaignsState || !campaignsState.listEl) return;
    campaignsState.listEl.querySelectorAll('[data-project-id]').forEach((btn) => {
      btn.addEventListener('click', () => selectCampaign(Number(btn.getAttribute('data-project-id')), true));
    });
  }

  function renderCampaignList() {
    if (!campaignsState || !campaignsState.listEl) return;
    const items = campaignsState.visibleItems;
    campaignsState.listEl.innerHTML = items.map((item) => projectRowMarkup(item, item.id === campaignsState.selectedId)).join('');
    const badge = document.getElementById('campaignsVisibleCount');
    if (badge) badge.textContent = String(items.length);
    bindCampaignList();
  }

  function updateCampaignSource() {
    if (!campaignsState || !campaignsState.map || !campaignsState.map.isStyleLoaded()) return;
    const source = campaignsState.map.getSource('mosques');
    const selectedSource = campaignsState.map.getSource('selected-mosque');
    if (source) source.setData(featureCollection(campaignsState.visibleItems));
    const selectedItem = campaignsState.visibleItems.find((item) => item.id === campaignsState.selectedId) || campaignsState.visibleItems[0];
    if (selectedSource) selectedSource.setData(selectedItem ? featureCollection([selectedItem]) : featureCollection([]));
  }

  function selectCampaign(id, fly) {
    if (!campaignsState) return;
    const item = campaignsState.visibleItems.find((entry) => entry.id === id) || campaignsState.visibleItems[0];
    if (!item) return;
    campaignsState.selectedId = item.id;
    if (campaignsState.cardEl) campaignsState.cardEl.innerHTML = selectedCardMarkup(item);
    renderCampaignList();
    updateCampaignSource();
    if (campaignsState.popup) {
      campaignsState.popup
        .setLngLat([Number(item.lng), Number(item.lat)])
        .setHTML(popupMarkup(item))
        .addTo(campaignsState.map);
    }
    if (fly && campaignsState.map) {
      campaignsState.map.flyTo({ center: [Number(item.lng), Number(item.lat)], zoom: Math.max(campaignsState.map.getZoom(), window.innerWidth < 768 ? 5.8 : 6.3), speed: 0.7, essential: true });
    }
    const activeRow = campaignsState.listEl && campaignsState.listEl.querySelector(`[data-project-id="${item.id}"]`);
    if (activeRow) activeRow.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function applyFilter(filterName) {
    if (!campaignsState) return;
    campaignsState.filter = filterName;
    campaignsState.visibleItems = MOSQUES.filter((item) => {
      if (filterName === 'completed') return Number(item.progress || 0) >= 100;
      if (filterName === 'active') return Number(item.progress || 0) < 100;
      return true;
    });
    document.querySelectorAll('[data-map-filter]').forEach((btn) => btn.classList.toggle('is-active', btn.getAttribute('data-map-filter') === filterName));
    const selectedStillVisible = campaignsState.visibleItems.some((item) => item.id === campaignsState.selectedId);
    campaignsState.selectedId = selectedStillVisible ? campaignsState.selectedId : (campaignsState.visibleItems[0] ? campaignsState.visibleItems[0].id : null);
    renderCampaignList();
    updateCampaignSource();
    if (!campaignsState.visibleItems.length) {
      if (campaignsState.cardEl) campaignsState.cardEl.innerHTML = `<div class="vmb-map-empty">${tt('mapLoadFailed')}</div>`;
      return;
    }
    if (campaignsState.map) {
      const bounds = new maplibregl.LngLatBounds();
      campaignsState.visibleItems.forEach((item) => bounds.extend([Number(item.lng), Number(item.lat)]));
      campaignsState.map.fitBounds(bounds, { padding: window.innerWidth < 768 ? 40 : 70, maxZoom: 5.5, duration: 700 });
    }
    selectCampaign(campaignsState.selectedId, false);
  }

  function initCampaignsPage() {
    const container = document.getElementById('campaignsMapCanvas');
    const cardEl = document.getElementById('campaignsProjectCard');
    const listEl = document.getElementById('campaignsProjectList');
    if (!container || !cardEl || !listEl || typeof maplibregl === 'undefined') return;

    if (campaignsState && campaignsState.map) {
      campaignsState.map.remove();
    }

    renderMapI18n();
    container.innerHTML = '';
    campaignsState = {
      map: null,
      popup: new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 18 }),
      cardEl,
      listEl,
      filter: 'all',
      visibleItems: MOSQUES.slice(),
      selectedId: (MOSQUES.find((item) => Number(item.progress || 0) < 100) || MOSQUES[0] || {}).id || null
    };

    const map = new maplibregl.Map({
      container,
      style: MAP_STYLE_URL,
      center: [15.5, 62.5],
      zoom: window.innerWidth < 768 ? 4.1 : 4.4,
      minZoom: 3.4,
      attributionControl: true,
      cooperativeGestures: true
    });
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: false }), getLang() === 'ar' ? 'top-left' : 'top-right');
    campaignsState.map = map;

    map.on('load', () => {
      map.addSource('mosques', { type: 'geojson', data: featureCollection(campaignsState.visibleItems) });
      map.addSource('selected-mosque', { type: 'geojson', data: featureCollection([]) });

      map.addLayer({
        id: 'mosques-points',
        type: 'circle',
        source: 'mosques',
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 4, 6, 7, 10],
          'circle-color': ['case', ['>=', ['to-number', ['get', 'progress']], 100], COLORS.complete, COLORS.active],
          'circle-stroke-width': 2.5,
          'circle-stroke-color': '#ffffff',
          'circle-opacity': 0.95
        }
      });

      map.addLayer({
        id: 'selected-point-shadow',
        type: 'circle',
        source: 'selected-mosque',
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 4, 11, 7, 17],
          'circle-color': 'rgba(23,52,49,0.18)'
        }
      });
      map.addLayer({
        id: 'selected-point',
        type: 'circle',
        source: 'selected-mosque',
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 4, 8, 7, 12],
          'circle-color': COLORS.selected,
          'circle-stroke-width': 3,
          'circle-stroke-color': '#ffffff'
        }
      });

      const bounds = new maplibregl.LngLatBounds();
      MOSQUES.forEach((item) => bounds.extend([Number(item.lng), Number(item.lat)]));
      map.fitBounds(bounds, { padding: window.innerWidth < 768 ? 35 : 70, maxZoom: 5.5, duration: 0 });

      map.on('click', 'mosques-points', (event) => {
        const feature = event.features && event.features[0];
        if (!feature) return;
        selectCampaign(Number(feature.properties.id), true);
      });
      map.on('mouseenter', 'mosques-points', () => { map.getCanvas().style.cursor = 'pointer'; });
      map.on('mouseleave', 'mosques-points', () => { map.getCanvas().style.cursor = ''; });

      document.querySelectorAll('[data-map-filter]').forEach((btn) => {
        btn.onclick = () => applyFilter(btn.getAttribute('data-map-filter'));
      });

      applyFilter('all');
    });

    map.on('error', () => {
      if (cardEl) cardEl.innerHTML = `<div class="vmb-map-empty">${tt('mapLoadFailed')}</div>`;
    });
  }

  function toNumber(input, fallback) {
    if (input === null || input === undefined || input === '') return fallback;
    let s = String(input).trim().replace(/\s+/g, '');
    s = s.replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
    s = s.replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
    s = s.replace(/[^0-9,.-]/g, '');
    if (!s) return fallback;
    const hasComma = s.includes(',');
    const hasDot = s.includes('.');
    if (hasComma && hasDot) {
      if (s.lastIndexOf(',') > s.lastIndexOf('.')) s = s.replace(/\./g, '').replace(',', '.');
      else s = s.replace(/,/g, '');
    } else if (hasComma) {
      const parts = s.split(',');
      s = (parts.length > 2 || (parts.length === 2 && parts[1].length === 3)) ? parts.join('') : s.replace(',', '.');
    } else if (hasDot) {
      const parts = s.split('.');
      if (parts.length > 2 || (parts.length === 2 && parts[1].length === 3)) s = parts.join('');
    }
    const n = Number(s);
    return Number.isFinite(n) ? n : fallback;
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let value = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === '"') {
        if (inQuotes && text[i + 1] === '"') { value += '"'; i += 1; }
        else inQuotes = !inQuotes;
      } else if (ch === ',' && !inQuotes) {
        row.push(value.trim());
        value = '';
      } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
        if (ch === '\r' && text[i + 1] === '\n') i += 1;
        row.push(value.trim());
        if (row.some((cell) => cell !== '')) rows.push(row);
        row = [];
        value = '';
      } else {
        value += ch;
      }
    }
    if (value || row.length) {
      row.push(value.trim());
      if (row.some((cell) => cell !== '')) rows.push(row);
    }
    return rows;
  }

  function readFlexibleCampaign(rows, fallbackCurrent) {
    if (!Array.isArray(rows) || !rows.length) return null;
    const current = { ...(fallbackCurrent || {}) };
    const aliases = {
      goal: ['goal', 'target', 'malsumman', 'المبلغالمطلوب', 'المبلغالمستهدف', 'المبلغالمطلوب', 'المبلغ الكامل', 'المبلغالكامل', 'المبلغ المطلوب'],
      raised: ['raised', 'collected', 'insamlat', 'المبلغالمجموع', 'المبلغالمحصل', 'المبلغ المحصل', 'المبلغ المجموع'],
      remaining: ['remaining', 'kvar', 'المبلغالمتبقي', 'المبلغ المتبقي'],
      title: ['title', 'name', 'campaign', 'العنوان', 'اسم الحملة'],
      location: ['location', 'city', 'الموقع', 'المدينة'],
      updatedAt: ['updatedat', 'updated', 'lastupdate', 'آخر تحديث', 'اخر تحديث'],
      notes: ['notes', 'message', 'ملاحظات', 'رسالة'],
      imageUrl: ['imageurl', 'image', 'الصورة']
    };
    const normalize = (value) => String(value || '').toLowerCase().replace(/\s+/g, '').replace(/[-_]/g, '');
    const matchField = (key) => Object.entries(aliases).find(([, values]) => values.includes(normalize(key)))?.[0] || null;

    const pairs = {};
    rows.forEach((row) => {
      const left = row[0];
      const right = row[1];
      const leftField = matchField(left);
      const rightField = matchField(right);
      if (leftField && right !== undefined) pairs[leftField] = right;
      else if (rightField && left !== undefined) pairs[rightField] = left;
    });

    if (!Object.keys(pairs).length && rows[0]) {
      const headers = rows[0].map((h) => matchField(h) || normalize(h));
      const dataRow = rows[1] || [];
      headers.forEach((header, index) => { pairs[header] = dataRow[index]; });
    }

    const goal = toNumber(pairs.goal, current.goal || 0);
    const remaining = toNumber(pairs.remaining, current.remaining || 0);
    let raised = toNumber(pairs.raised, current.raised || 0);
    if ((!Number.isFinite(raised) || raised === 0) && Number.isFinite(goal) && Number.isFinite(remaining) && goal >= remaining) {
      raised = goal - remaining;
    }
    const progress = goal > 0 ? ((raised / goal) * 100) : 0;
    return {
      ...current,
      title: pairs.title || current.title,
      location: pairs.location || current.location,
      goal,
      raised,
      remaining: Number.isFinite(remaining) && remaining >= 0 ? remaining : Math.max(goal - raised, 0),
      progress,
      updatedAt: pairs.updatedAt || current.updatedAt,
      notes: pairs.notes || current.notes,
      imageUrl: pairs.imageUrl || current.imageUrl
    };
  }

  async function loadCurrentCampaignData() {
    const fallbackCurrent = data.currentCampaign || {};
    const cfg = data.currentCampaignSheet || {};

    async function tryAppsScript(url) {
      const response = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), { cache: 'no-store' });
      const payload = await response.json();
      const src = payload && payload.data ? payload.data : payload;
      if (!src || typeof src !== 'object') return null;
      const goal = toNumber(src.goal ?? src.target, fallbackCurrent.goal || 0);
      let raised = toNumber(src.raised ?? src.collected, fallbackCurrent.raised || 0);
      let remaining = toNumber(src.remaining, fallbackCurrent.remaining || 0);
      if ((!Number.isFinite(raised) || raised === 0) && Number.isFinite(goal) && Number.isFinite(remaining) && goal >= remaining) {
        raised = goal - remaining;
      }
      if (!Number.isFinite(remaining)) remaining = Math.max(goal - raised, 0);
      return {
        ...fallbackCurrent,
        ...src,
        goal,
        raised,
        remaining,
        progress: goal > 0 ? (raised / goal) * 100 : 0
      };
    }

    async function tryCsv(url) {
      const response = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), { cache: 'no-store' });
      const text = await response.text();
      return readFlexibleCampaign(parseCsv(text), fallbackCurrent);
    }

    try {
      if (cfg.appsScriptUrl) {
        const apps = await tryAppsScript(cfg.appsScriptUrl);
        if (apps) return apps;
      }
    } catch (error) {}

    try {
      if (cfg.csvUrl) {
        const csv = await tryCsv(cfg.csvUrl);
        if (csv) return csv;
      }
    } catch (error) {}

    return fallbackCurrent;
  }

  async function initCurrentCampaignMap() {
    const container = document.getElementById('currentCampaignMapCanvas');
    if (!container || typeof maplibregl === 'undefined') return;

    if (currentState && currentState.map) {
      currentState.map.remove();
    }

    container.innerHTML = '';
    const c = await loadCurrentCampaignData();
    const match = MOSQUES.find((m) => String(c.location || '').toLowerCase().includes(String(m.city || '').toLowerCase()) || String(c.title || '').toLowerCase().includes(String(m.city || '').toLowerCase()));
    const item = {
      id: 'current-campaign',
      name: c.title || 'Current campaign',
      city: c.location || 'Sweden',
      year: c.updatedAt || '',
      lat: match ? match.lat : 58.9958,
      lng: match ? match.lng : 16.2072,
      collected: Number(c.raised || 0),
      fullAmount: Number(c.goal || 0),
      progress: Number(c.progress || 0),
      status: Number(c.progress || 0) >= 100 ? 'completed' : 'active'
    };

    const map = new maplibregl.Map({
      container,
      style: MAP_STYLE_URL,
      center: [Number(item.lng), Number(item.lat)],
      zoom: window.innerWidth < 768 ? 7 : 7.7,
      minZoom: 4,
      attributionControl: true,
      cooperativeGestures: true
    });
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: false }), getLang() === 'ar' ? 'top-left' : 'top-right');
    currentState = { map };
    map.on('load', () => {
      map.addSource('current-campaign-source', { type: 'geojson', data: featureCollection([item]) });
      map.addLayer({
        id: 'current-campaign-ring',
        type: 'circle',
        source: 'current-campaign-source',
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 5, 16, 10, 26],
          'circle-color': 'rgba(15,109,98,0.16)'
        }
      });
      map.addLayer({
        id: 'current-campaign-point',
        type: 'circle',
        source: 'current-campaign-source',
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 5, 9, 10, 14],
          'circle-color': COLORS.selected,
          'circle-stroke-width': 3,
          'circle-stroke-color': '#ffffff'
        }
      });
      new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 18 })
        .setLngLat([Number(item.lng), Number(item.lat)])
        .setHTML(popupMarkup(item))
        .addTo(map);
    });
  }

  function scheduleRebuild() {
    window.setTimeout(() => {
      renderMapI18n();
      initCampaignsPage();
      initCurrentCampaignMap();
    }, 120);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderMapI18n();
    initCampaignsPage();
    initCurrentCampaignMap();
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-lang-btn]')) scheduleRebuild();
  });
})();
