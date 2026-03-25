
(function () {
  const texts = {
    ar: {
      siteName: 'Vi Mår Bra',
      siteTagline: 'حملة إعمار وتطوير المساجد في السويد',
      navHome: 'الرئيسية', navCampaigns: 'الحملات السابقة', navCurrent: 'الحملة الحالية', navMembership: 'العضوية', navAbout: 'من نحن', navContact: 'تواصل معنا',
      heroEyebrow: 'معاً نصنع صدقة جارية',
      heroTitle: 'حملة عصرية لإعمار وتطوير المساجد في السويد',
      heroLead: 'منصة خيرية غير ربحية تربط المتبرع بالأثر الحقيقي، وتعرض الإنجازات والاحتياجات الجارية بلغة واضحة وهوية حديثة تبعث الثقة والسكينة.',
      heroCta1: 'تبرع الآن', heroCta2: 'شاهد الإنجازات', heroBubble1: '25 مسجدًا في مسيرة العطاء', heroBubble2: 'شفافية مباشرة وأرقام حية',
      stat1: 'مسجدًا ساهمنا فيه', stat2: 'إجمالي الميزانية', stat3: 'مشاريع مكتملة', stat4: 'لغتان',
      homeBlockTitle: 'منصة تجمع الجمال والثقة والوضوح', homeBlockText: 'تم تصميم الموقع ليقدم رحلة متكاملة: قصة الحملة، إنجازات سابقة، حملة حالية متصلة بالتحديثات، عضوية داعمة، ووسائل تواصل وتبرع سهلة على كل جهاز.',
      whyTitle: 'لماذا Vi Mår Bra مختلفة؟', whyLead: 'ليست مجرد صفحة تبرع، بل واجهة مؤثرة توضح أين يذهب الدعم وكيف يتحول إلى صدقة جارية تخدم بيوت الله والمجتمع.',
      feat1t: 'شفافية مباشرة', feat1d: 'عرض واضح للأرقام والمستهدف ونسبة التقدم بما يعزز الثقة لدى الزائر والمتبرع.',
      feat2t: 'خريطة الإنجاز', feat2d: 'كل مسجد يظهر على خريطة السويد مع نافذة معلومات مختصرة وسهلة.',
      feat3t: 'أمانة في العرض', feat3d: 'عرض أمين للحملات والبيانات والحالة الحالية لكل مشروع دون مبالغة أو غموض.',
      feat4t: 'دعم متنوع', feat4d: 'وسائل تبرع متعددة تسهّل المشاركة وتمنح الزائر تجربة واضحة ومريحة.',
      journeyTitle: 'كيف تتحول المساهمة إلى أثر؟', step1: 'استقبال احتياج المسجد أو المشروع', step2: 'إطلاق الحملة وتحديد الهدف', step3: 'تحديث المبالغ والتقدم بشفافية', step4: 'عرض النتيجة والإنجاز للمجتمع',
      previewTitle: 'نماذج من الحملات السابقة', previewLead: 'كل بطاقة تمثل مشروعًا حقيقيًا ساهمت فيه الحملة داخل مدن السويد.',
      donateTitle: 'كن جزءًا من صدقة جارية ممتدة', donateText: 'اختر الوسيلة الأنسب لك وادعم إعمار وتطوير المساجد في مختلف المدن السويدية.',
      donateSwish: 'التبرع عبر Swish', donateStripe: 'التبرع عبر Stripe', donatePaypal: 'التبرع عبر PayPal',
      campaignsTitle: 'الحملات السابقة والإنجازات', campaignsLead: 'خريطة وقائمة توضح لكل مسجد: تم جمع، المبلغ الكامل، النسبة، وحالة المشروع.',
      totalCollected: 'إجمالي ما جمعناه', totalMosques: 'إجمالي المساجد', completedProjects: 'اكتمل جمع المبلغ', totalFull: 'إجمالي المبالغ الكاملة',
      currentTitle: 'الحملة الحالية', currentLead: 'الحملة الحالية مستقلة عن الحملات السابقة، وتُعرض أرقامها بشكل واضح ومباشر مع تحديثات متواصلة.',
      goal: 'المبلغ الكامل', raised: 'المبلغ المحصل', remaining: 'المبلغ المتبقي', lastUpdated: 'آخر تحديث', donateNow: 'ادعم الحملة الآن',
      currentHint: 'هنا يتم تحديث كل مبلغ وكل تبرع لحظة بلحظة ليظهر للزائر مستوى التقدم والاحتياج بصورة واضحة وشفافة.', currentLocation: 'موقع الحملة الحالية', liveSync: 'تحديث مباشر',
      membershipTitle: 'عضوية داعمة مستمرة', membershipLead: 'ادخل كعضو مساهم وكن جزءًا من العطاء المستمر الذي يبني المساجد ويدعم المشاريع ذات الأولوية.',
      membershipCardTitle: 'عضوية Vi Mår Bra', membershipCardText: 'الاشتراك يتم بشكل آمن عبر Stripe Checkout، ليكون دعمك الشهري ثابتًا وسهلًا.', membershipBtn: 'اشترك الآن',
      member1: 'مساهمة شهرية سهلة', member2: 'دعم أسرع للمشاريع ذات الأولوية', member3: 'وسيلة آمنة واحترافية للدفع', donationMethodsTitle: 'طرق التبرع الأخرى',
      aboutTitle: 'من نحن', aboutLead: 'منظمة غير ربحية تعمل على إعمار وتطوير المساجد داخل السويد، عبر حملات شفافة، شراكات مجتمعية، ودعم يركز على الأثر الحقيقي.',
      missionTitle: 'رسالتنا', missionText: 'توجيه التبرعات إلى مشاريع المساجد التي تحتاج تطويرًا أو توسعة أو تجهيزًا، مع عرض النتائج للمجتمع والمتبرعين بوضوح ومسؤولية.',
      visionTitle: 'رؤيتنا', visionText: 'أن تصبح Vi Mår Bra مرجعًا موثوقًا للمبادرات التي تمنح المساجد حضورًا أجمل، دورًا أوسع، ومكانة أقوى في المدن السويدية.',
      valuesTitle: 'قيمنا', value1: 'الشفافية', value2: 'الصدق', value3: 'الاستدامة', value4: 'الأمانة',
      contactTitle: 'تواصل معنا', contactLead: 'هل يحتاج مسجدكم دعماً؟ هل ترغب بالمساعدة أو التعاون؟ راسلنا مباشرة وسنعود إليكم بإذن الله.',
      whatsapp: 'واتساب', email: 'البريد الإلكتروني', sendMsg: 'أرسل رسالتك', name: 'الاسم الكامل', mosqueName: 'اسم المسجد', phone: 'رقم الهاتف', message: 'رسالتك', submit: 'إرسال الطلب',
      footerText: 'Vi Mår Bra — حملة غير ربحية لإعمار وتطوير المساجد في السويد.',
      popupYear: 'التاريخ', popupCollected: 'تم جمع', popupFull: 'المبلغ الكامل', popupProgress: 'النسبة', popupStatus: 'حالة المشروع', fundingStatus: 'حالة جمع المبلغ',
      started: 'المشروع في بدايته', active: 'المشروع قيد التنفيذ', completed: 'المشروع مكتمل', fundingComplete: 'اكتمل جمع المبلغ', fundingOpen: 'جمع التبرعات مستمر', currency: 'كرونة',
      locationLabel: 'الموقع', amountLive: 'تحديثات مستمرة', contactSuccess: 'شكراً لك. تم تجهيز النموذج لإرسال رسالتك مباشرة إلى بريد المنظمة.'
    },
    sv: {
      siteName: 'Vi Mår Bra',
      siteTagline: 'Kampanj för att bygga och utveckla moskéer i Sverige',
      navHome: 'Hem', navCampaigns: 'Tidigare kampanjer', navCurrent: 'Aktuell kampanj', navMembership: 'Medlemskap', navAbout: 'Om oss', navContact: 'Kontakt',
      heroEyebrow: 'Tillsammans skapar vi en sadaqa jariya',
      heroTitle: 'En modern kampanj för att bygga och utveckla moskéer i Sverige',
      heroLead: 'En ideell plattform som kopplar givaren till verklig påverkan och visar resultat, behov och pågående insamlingar med ett varmt och modernt uttryck.',
      heroCta1: 'Donera nu', heroCta2: 'Se resultaten', heroBubble1: '25 moskéer i resan', heroBubble2: 'Live siffror och tydlig transparens',
      stat1: 'Moskéer vi har stöttat', stat2: 'Total budget', stat3: 'Slutförda projekt', stat4: 'Två språk',
      homeBlockTitle: 'En plattform som förenar skönhet, förtroende och tydlighet', homeBlockText: 'Sajten berättar kampanjens historia, visar tidigare insatser, presenterar en aktuell kampanj med live-data, erbjuder medlemskap och gör kontakt och donation enkel på alla enheter.',
      whyTitle: 'Varför är Vi Mår Bra annorlunda?', whyLead: 'Det här är inte bara en donationssida. Det är en upplevelse som tydliggör vart stödet går och hur det blir till en bestående välgörenhet för Allahs hus och samhället.',
      feat1t: 'Direkt transparens', feat1d: 'Tydlig visning av belopp, mål och procent som stärker besökarens förtroende.',
      feat2t: 'Karta över insatserna', feat2d: 'Varje moské visas på Sverigekartan med en snabb informationsruta.',
      feat3t: 'Tillit och trovärdighet', feat3d: 'Responsiv, snabb och stilren design med stöd för både arabiska och svenska.',
      feat4t: 'Flera sätt att ge', feat4d: 'Flera donationssätt gör det enkelt att delta med tydlighet och trygghet.',
      journeyTitle: 'Hur blir ditt stöd till verklig påverkan?', step1: 'Vi tar emot behov från moskéer och projekt', step2: 'Vi lanserar kampanjen och sätter målet', step3: 'Vi uppdaterar belopp och framsteg öppet', step4: 'Vi visar slutresultat och genomförda insatser',
      previewTitle: 'Urval av tidigare kampanjer', previewLead: 'Varje kort representerar ett verkligt projekt som kampanjen har bidragit till i Sverige.',
      donateTitle: 'Bli en del av en pågående sadaqa jariya', donateText: 'Välj det sätt som passar dig bäst och stöd renovering och utveckling av moskéer i hela Sverige.',
      donateSwish: 'Donera via Swish', donateStripe: 'Donera via Stripe', donatePaypal: 'Donera via PayPal',
      campaignsTitle: 'Tidigare kampanjer och resultat', campaignsLead: 'Karta och lista som visar för varje moské: insamlat belopp, fullt belopp, procent och projektstatus.',
      totalCollected: 'Totalt insamlat av oss', totalMosques: 'Antal moskéer', completedProjects: 'Insamling klar', totalFull: 'Totala projektbelopp',
      currentTitle: 'Aktuell kampanj', currentLead: 'Siffrorna för den aktuella kampanjen visas tydligt och uppdateras löpande utan koppling till tidigare kampanjer.',
      goal: 'Fullt mål', raised: 'Insamlat', remaining: 'Kvar', lastUpdated: 'Senast uppdaterad', donateNow: 'Stöd kampanjen nu',
      currentHint: 'Här uppdateras varje belopp och varje donation löpande så att besökaren ser framsteg och behov tydligt.', currentLocation: 'Plats för aktuell kampanj', liveSync: 'Direkt uppdatering',
      membershipTitle: 'Löpande stödmedlemskap', membershipLead: 'Bli stödmedlem och var med i ett kontinuerligt givande som bygger moskéer och stärker prioriterade projekt.',
      membershipCardTitle: 'Vi Mår Bra-medlemskap', membershipCardText: 'Anslutningen sker säkert via Stripe Checkout så att ditt månatliga stöd blir enkelt och professionellt.', membershipBtn: 'Bli medlem nu',
      member1: 'Enkel återkommande gåva', member2: 'Snabbare stöd till prioriterade projekt', member3: 'Säker och professionell betalning', donationMethodsTitle: 'Andra donationssätt',
      aboutTitle: 'Om oss', aboutLead: 'En ideell organisation som arbetar för att bygga upp och utveckla moskéer i Sverige genom transparenta kampanjer, lokala samarbeten och stöd med verklig påverkan.',
      missionTitle: 'Vårt uppdrag', missionText: 'Att rikta donationer till mosképrojekt som behöver utveckling, utbyggnad eller utrustning och att visa resultaten tydligt för både samhälle och givare.',
      visionTitle: 'Vår vision', visionText: 'Att Vi Mår Bra ska bli en pålitlig referens för initiativ som ger moskéer ett starkare uttryck, större roll och djupare förankring i svenska städer.',
      valuesTitle: 'Våra värderingar', value1: 'Transparens', value2: 'Påverkan', value3: 'Hållbarhet', value4: 'Ansvar och amanah',
      contactTitle: 'Kontakta oss', contactLead: 'Behöver er moské stöd? Vill du hjälpa till eller samarbeta? Skriv till oss direkt så återkommer vi, in shaa Allah.',
      whatsapp: 'WhatsApp', email: 'E-post', sendMsg: 'Skicka ditt meddelande', name: 'Fullständigt namn', mosqueName: 'Moskéens namn', phone: 'Telefonnummer', message: 'Ditt meddelande', submit: 'Skicka förfrågan',
      footerText: 'Vi Mår Bra — ideell kampanj för att bygga och utveckla moskéer i Sverige.',
      popupYear: 'Datum', popupCollected: 'Insamlat', popupFull: 'Fullt belopp', popupProgress: 'Procent', popupStatus: 'Projektstatus', fundingStatus: 'Insamlingsstatus',
      started: 'Projektstart', active: 'Pågående', completed: 'Slutförd', currency: 'kr',
      locationLabel: 'Plats', amountLive: 'Löpande uppdateringar', contactSuccess: 'Tack. Formuläret är förberett för att skicka ditt meddelande direkt till organisationens e-post.'
    }
  };

  const data = window.VMB_DATA;
  data.mosques = (data.mosques || []).map((m) => {
    const collected = Number(m.collected ?? m.cost ?? 0);
    let progress = Number(m.progress || 0);
    if (!Number.isFinite(progress)) progress = 0;
    let fullAmount = Number(m.fullAmount || 0);
    if (!fullAmount) {
      if (progress > 0 && progress < 100) fullAmount = Math.round((collected / (progress / 100)) / 1000) * 1000;
      else fullAmount = collected;
    }
    return { ...m, collected, fullAmount, progress };
  });

  const totals = {
    collected: data.mosques.reduce((sum, m) => sum + Number(m.collected || 0), 0),
    full: data.mosques.reduce((sum, m) => sum + Number(m.fullAmount || 0), 0),
    completed: data.mosques.filter(m => Number(m.progress) >= 100).length,
  };
  totals.active = data.mosques.filter(m => Number(m.progress) < 100).length;

  function lang() {
    return localStorage.getItem('vmb-lang') || document.documentElement.lang || 'ar';
  }

  function setDir(activeLang) {
    const dir = activeLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = activeLang;
    document.documentElement.dir = dir;
    document.body.setAttribute('dir', dir);
    const bootstrapCss = document.getElementById('bootstrapCss');
    if (bootstrapCss) {
      bootstrapCss.href = activeLang === 'ar'
        ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css'
        : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    }
  }

  function t(key) {
    return (texts[lang()] && texts[lang()][key]) || texts.ar[key] || key;
  }

  function formatNumber(value, type='number') {
    const activeLang = lang();
    const formatted = new Intl.NumberFormat(activeLang === 'ar' ? 'ar-EG' : 'sv-SE', { maximumFractionDigits: 0 }).format(Number(value || 0));
    if (type === 'currency') return `${formatted} ${t('currency')}`;
    return formatted;
  }

  function translatePage() {
    const activeLang = lang();
    setDir(activeLang);
    document.querySelectorAll('[data-i18n]').forEach(el => el.innerHTML = t(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
    document.querySelectorAll('[data-lang-btn]').forEach(btn => btn.classList.toggle('active', btn.dataset.langBtn === activeLang));
    const titleMeta = document.querySelector('[data-page-title]');
    if (titleMeta) document.title = `${titleMeta.dataset.pageTitle} | Vi Mår Bra`;
    const year = document.getElementById('yearNow');
    if (year) year.textContent = new Date().getFullYear();
  }

  function animateValue(el, value, type = 'number') {
    if (!el) return;
    const target = Number(value || 0);
    const startTime = performance.now();
    const duration = 1200;
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      if (type === 'currency') el.textContent = formatNumber(current, 'currency');
      else if (type === 'percent') el.textContent = `${current.toFixed(1)}%`;
      else el.textContent = formatNumber(current);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function hydrateCounters() {
    animateValue(document.getElementById('kpiMosques'), data.mosques.length);
    animateValue(document.getElementById('kpiBudget'), totals.collected, 'currency');
    animateValue(document.getElementById('kpiCompleted'), totals.completed);
    animateValue(document.getElementById('kpiLangs'), 2);
    animateValue(document.getElementById('statsTotalCollected'), totals.collected, 'currency');
    animateValue(document.getElementById('statsTotalMosques'), data.mosques.length);
    animateValue(document.getElementById('statsCompletedProjects'), totals.completed);
    animateValue(document.getElementById('statsTotalFull'), totals.full, 'currency');
  }

  function fundingText(m) {
    return Number(m.progress) >= 100 ? t('fundingComplete') : t('fundingOpen');
  }

  function statusText(status) {
    return t(status);
  }

  function renderPreview() {
    const target = document.getElementById('mosqueSummaryList');
    if (!target) return;
    target.innerHTML = data.mosques.slice(0, 6).map((m) => `
      <div class="col-md-6 col-xl-4 reveal">
        <div class="card-soft p-4 h-100">
          <div class="d-flex justify-content-between align-items-start gap-3">
            <div>
              <h5 class="fw-bold mb-1">${m.name}</h5>
              <div class="small-muted">${m.city} • ${m.year}</div>
            </div>
            <span class="badge-soft">${m.progress}%</span>
          </div>
          <div class="small-muted mt-3">${t('popupCollected')}: ${formatNumber(m.collected, 'currency')}</div>
          <div class="small-muted">${t('popupFull')}: ${formatNumber(m.fullAmount, 'currency')}</div>
        </div>
      </div>`).join('');
  }

  function renderCampaignsList(listTarget) {
    listTarget.innerHTML = data.mosques.map((m) => `
      <div class="mosque-item mb-3 reveal">
        <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <h5 class="fw-bold mb-1">${m.name}</h5>
            <div class="small-muted">${m.city} • ${m.year}</div>
          </div>
          <span class="badge-soft">${m.progress}%</span>
        </div>
        <div class="row g-2 mb-3">
          <div class="col-4"><div class="card-soft p-3 text-center h-100"><div class="small-muted mb-1">${t('popupCollected')}</div><strong>${formatNumber(m.collected, 'currency')}</strong></div></div>
          <div class="col-4"><div class="card-soft p-3 text-center h-100"><div class="small-muted mb-1">${t('popupFull')}</div><strong>${formatNumber(m.fullAmount, 'currency')}</strong></div></div>
          <div class="col-4"><div class="card-soft p-3 text-center h-100"><div class="small-muted mb-1">${t('popupProgress')}</div><strong>${m.progress}%</strong></div></div>
        </div>
        <div class="progress mb-2"><div class="progress-bar" style="width:${Math.min(Number(m.progress)||0,100)}%"></div></div>
        <div class="small-muted"><strong>${t('fundingStatus')}:</strong> ${fundingText(m)}</div>
        <div class="small-muted"><strong>${t('popupStatus')}:</strong> ${statusText(m.status)}</div>
      </div>`).join('');
  }

  function initCampaignsMap() {
    const mapTarget = document.getElementById('campaignsMap');
    const listTarget = document.getElementById('campaignsList');
    if (!listTarget) return;
    renderCampaignsList(listTarget);

    if (!mapTarget) return;
    if (typeof L === 'undefined') {
      mapTarget.innerHTML = '<div class="d-flex align-items-center justify-content-center h-100 small-muted p-4">Map unavailable</div>';
      return;
    }

    if (!window.vmbMap) {
      window.vmbMap = L.map('campaignsMap', { scrollWheelZoom: false, zoomControl: true }).setView([62.2, 16.5], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(window.vmbMap);
    }
    if (window.vmbMarkers) window.vmbMarkers.forEach(marker => window.vmbMap.removeLayer(marker));

    window.vmbMarkers = data.mosques.map((m) => {
      const marker = L.circleMarker([m.lat, m.lng], {
        radius: 9,
        fillColor: m.progress >= 100 ? '#0f6d62' : '#c89f4a',
        color: '#ffffff',
        weight: 2,
        fillOpacity: 0.95
      }).addTo(window.vmbMap);
      marker.bindPopup(`
        <div style="min-width:240px">
          <div style="font-weight:800;margin-bottom:5px">${m.name}</div>
          <div style="font-size:13px;color:#607774">${m.city}</div>
          <hr style="margin:10px 0">
          <div><strong>${t('popupYear')}:</strong> ${m.year}</div>
          <div><strong>${t('popupCollected')}:</strong> ${formatNumber(m.collected, 'currency')}</div>
          <div><strong>${t('popupFull')}:</strong> ${formatNumber(m.fullAmount, 'currency')}</div>
          <div><strong>${t('popupProgress')}:</strong> ${m.progress}%</div>
          <div><strong>${t('fundingStatus')}:</strong> ${fundingText(m)}</div>
          <div><strong>${t('popupStatus')}:</strong> ${statusText(m.status)}</div>
        </div>`);
      return marker;
    });
  }

  function normalizeKey(key) {
    return (key || '').toString().trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
  }

  function readFlexibleCampaign(rows) {
    if (!rows || !rows.length) return null;
    const current = { ...data.currentCampaign };

    const keyMap = {
      title: ['title','campaign','kampanj','namn','titel','الحملة','اسم'],
      location: ['location','plats','stad','city','الموقع','المدينة'],
      goal: ['goal','target','mål','total','amount','المبلغالكامل','المبلغالمطلوب','الهدف','المطلوب'],
      raised: ['raised','insamlat','collected','paid','المبلغالمحصل','المبلغالمجموع','المجموع'],
      remaining: ['remaining','kvar','left','rest','المبلغالمتبقي','المتبقي'],
      progress: ['progress','framsteg','percent','procent','النسبة'],
      updatedAt: ['updatedat','updated','date','senastuppdaterad','آخرupdate','آخرالتحديث'],
      notes: ['notes','note','description','beskrivning','ملاحظات','وصف']
    };

    const aliasToField = {};
    Object.entries(keyMap).forEach(([field, aliases]) => {
      aliases.forEach(alias => { aliasToField[alias] = field; });
    });

    const firstRow = rows[0] || [];
    const headerKeys = firstRow.map(normalizeKey);
    const headerHasKnownAliases = headerKeys.some(k => aliasToField[k]);

    if (rows.length > 1 && headerHasKnownAliases) {
      const values = rows[1] || [];
      headerKeys.forEach((key, idx) => {
        const field = aliasToField[key];
        if (!field) return;
        const value = values[idx];
        if (['goal', 'raised', 'remaining', 'progress'].includes(field)) current[field] = toNumber(value, current[field]);
        else current[field] = value || current[field];
      });
    } else {
      rows.forEach((row) => {
        const c0 = row[0];
        const c1 = row[1];
        const k0 = normalizeKey(c0);
        const k1 = normalizeKey(c1);
        if (aliasToField[k0]) {
          const field = aliasToField[k0];
          if (['goal', 'raised', 'remaining', 'progress'].includes(field)) current[field] = toNumber(c1, current[field]);
          else current[field] = c1 || current[field];
        } else if (aliasToField[k1]) {
          const field = aliasToField[k1];
          if (['goal', 'raised', 'remaining', 'progress'].includes(field)) current[field] = toNumber(c0, current[field]);
          else current[field] = c0 || current[field];
        }
      });
    }

    if (!current.remaining && current.goal && current.raised) current.remaining = Math.max(current.goal - current.raised, 0);
    if ((!current.progress || current.progress < 0) && current.goal && current.raised) current.progress = (current.raised / current.goal) * 100;
    return current;
  }

  function toNumber(value, fallback) {
    if (value === undefined || value === null || value === '') return Number(fallback || 0);
    const cleaned = value.toString().replace(/[^\d.,-]/g, '').replace(/,(?=\d{3}\b)/g, '').replace(',', '.');
    const num = Number(cleaned);
    return Number.isFinite(num) ? num : Number(fallback || 0);
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let value = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === '"') {
        if (inQuotes && text[i + 1] === '"') { value += '"'; i++; }
        else inQuotes = !inQuotes;
      } else if (ch === ',' && !inQuotes) {
        row.push(value.trim()); value = '';
      } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
        if (ch === '\r' && text[i + 1] === '\n') i++;
        row.push(value.trim());
        if (row.some(cell => cell !== '')) rows.push(row);
        row = []; value = '';
      } else {
        value += ch;
      }
    }
    if (value || row.length) { row.push(value.trim()); if (row.some(cell => cell !== '')) rows.push(row); }
    return rows;
  }

  async function loadCurrentCampaign() {
    const current = { ...data.currentCampaign };
    const cfg = data.currentCampaignSheet || {};

    async function applyRowsFromCsv(url) {
      const res = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), { cache: 'no-store' });
      const text = await res.text();
      const rows = parseCsv(text);
      return readFlexibleCampaign(rows);
    }

    async function applyJsonFromAppsScript(url) {
      const res = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), { cache: 'no-store' });
      const payload = await res.json();
      const src = payload && payload.data ? payload.data : payload;
      if (!src || typeof src !== 'object') return null;
      return {
        ...current,
        title: src.title || src.name || current.title,
        location: src.location || src.city || current.location,
        goal: toNumber((src.goal ?? src.target), current.goal),
        raised: toNumber((src.raised ?? src.collected), current.raised),
        remaining: toNumber(src.remaining, current.remaining),
        progress: toNumber(src.progress, current.progress),
        updatedAt: src.updatedAt || src.updated_at || cfg.sourceLabel || current.updatedAt,
        notes: src.notes || src.note || current.notes,
        imageUrl: src.imageUrl || src.image || current.imageUrl
      };
    }

    try {
      let dynamic = null;
      if (cfg.appsScriptUrl && !cfg.appsScriptUrl.includes('PASTE_YOUR')) {
        dynamic = await applyJsonFromAppsScript(cfg.appsScriptUrl);
      } else if (cfg.jsonUrl) {
        dynamic = await applyJsonFromAppsScript(cfg.jsonUrl);
      } else if (cfg.csvUrl) {
        dynamic = await applyRowsFromCsv(cfg.csvUrl);
      }
      if (dynamic) {
        if ((!dynamic.remaining && dynamic.remaining !== 0) && dynamic.goal && dynamic.raised >= 0) dynamic.remaining = Math.max(dynamic.goal - dynamic.raised, 0);
        if ((!dynamic.progress && dynamic.progress !== 0) && dynamic.goal && dynamic.raised >= 0) dynamic.progress = (dynamic.raised / dynamic.goal) * 100;
        dynamic.updatedAt = dynamic.updatedAt || cfg.sourceLabel || 'Live';
        return { ...current, ...dynamic };
      }
      return current;
    } catch (err) {
      return current;
    }
  }

  async function renderCurrentCampaign() {
    const box = document.getElementById('currentCampaignBox');
    if (!box) return;
    const c = await loadCurrentCampaign();
    const titleEl = document.getElementById('currentTitleText');
    if (titleEl) titleEl.textContent = c.title;
    const locationEl = document.getElementById('currentLocationText');
    if (locationEl) locationEl.textContent = c.location;
    const updatedEl = document.getElementById('lastUpdatedValue');
    if (updatedEl) {
      const maybeDate = new Date(c.updatedAt);
      updatedEl.textContent = Number.isNaN(maybeDate.getTime()) ? c.updatedAt : maybeDate.toLocaleString(lang() === 'ar' ? 'ar-EG' : 'sv-SE');
    }
    const noteEl = document.getElementById('currentCampaignNote');
    if (noteEl) noteEl.textContent = c.notes || t('currentHint');
    const bar = document.getElementById('currentProgressBar');
    const label = document.getElementById('currentProgressLabel');
    if (bar) bar.style.width = `${Math.min(Number(c.progress || 0), 100)}%`;
    if (label) label.textContent = `${Number(c.progress || 0).toFixed(1)}%`;
    animateValue(document.getElementById('goalValue'), c.goal, 'currency');
    animateValue(document.getElementById('raisedValue'), c.raised, 'currency');
    animateValue(document.getElementById('remainingValue'), c.remaining, 'currency');

    const imageEl = document.getElementById('currentCampaignImage');
    const imageLink = document.getElementById('currentCampaignImageLink');
    if (imageEl && c.imageUrl) imageEl.src = c.imageUrl;
    if (imageLink) imageLink.href = '../current/index.html';

    const mapTarget = document.getElementById('currentCampaignMap');
    if (mapTarget && typeof L !== 'undefined') {
      const match = data.mosques.find(m => (c.location || '').toLowerCase().includes(m.city.toLowerCase()) || (c.title || '').toLowerCase().includes(m.city.toLowerCase()));
      const lat = match ? match.lat : 62.0;
      const lng = match ? match.lng : 15.0;
      if (!window.currentMap) {
        window.currentMap = L.map('currentCampaignMap', { scrollWheelZoom: false, zoomControl: true }).setView([lat, lng], match ? 7 : 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(window.currentMap);
      } else {
        window.currentMap.setView([lat, lng], match ? 7 : 5);
      }
      if (window.currentMarker) window.currentMap.removeLayer(window.currentMarker);
      window.currentMarker = L.marker([lat, lng]).addTo(window.currentMap).bindPopup(`<strong>${c.title}</strong><br>${c.location}`).openPopup();
    }
  }

  function hydrateLinks() {
    document.querySelectorAll('[data-membership-link]').forEach(el => el.href = data.links.membership);
    document.querySelectorAll('[data-swish-link]').forEach(el => el.href = data.links.swish);
    document.querySelectorAll('[data-stripe-donate-link]').forEach(el => el.href = data.links.stripeDonate);
    document.querySelectorAll('[data-paypal-link]').forEach(el => el.href = data.links.paypal);
    document.querySelectorAll('[data-email-link]').forEach(el => { el.href = `mailto:${data.links.email}`; el.textContent = data.links.email; });
    document.querySelectorAll('[data-whatsapp-link]').forEach(el => {
      const raw = data.links.whatsapp.replace(/[^\d]/g, '');
      el.href = `https://wa.me/${raw}`;
      el.textContent = data.links.whatsapp;
    });

    const form = document.getElementById('contactForm');
    if (form) form.action = `https://formsubmit.co/${data.links.email}`;
    const sent = new URLSearchParams(window.location.search).get('sent');
    if (sent === '1' && form) {
      const note = document.createElement('div');
      note.className = 'alert alert-success rounded-4 mb-4';
      note.textContent = t('contactSuccess');
      form.prepend(note);
    }
  }

  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    items.forEach(el => observer.observe(el));
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-lang-btn]');
    if (!btn) return;
    localStorage.setItem('vmb-lang', btn.dataset.langBtn);
    translatePage();
    hydrateCounters();
    renderPreview();
    initCampaignsMap();
    renderCurrentCampaign();
    if (document.getElementById('currentCampaignBox')) {
      window.setInterval(renderCurrentCampaign, 10000);
    }
    hydrateLinks();
    initReveal();
  });

  document.addEventListener('DOMContentLoaded', function () {
    translatePage();
    hydrateCounters();
    renderPreview();
    initCampaignsMap();
    renderCurrentCampaign();
    if (document.getElementById('currentCampaignBox')) {
      window.setInterval(renderCurrentCampaign, 10000);
    }
    hydrateLinks();
    initReveal();
  });
})();
