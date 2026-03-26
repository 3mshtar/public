
(function () {
  const texts = {
    ar: {
      siteName: 'Vi Mår Bra',
      siteTagline: 'حملة إعمار وتطوير المساجد في السويد',
      navHome: 'الرئيسية', navCampaigns: 'الحملات السابقة', navCurrent: 'الحملة الحالية', navMembership: 'العضوية', navAbout: 'من نحن', navContact: 'تواصل معنا',
      heroEyebrow: 'معاً نصنع صدقة جارية',
      heroTitle: 'حملة خيرية لإعمار وتطوير المساجد في السويد',
      heroLead: 'منصة خيرية غير ربحية تربط المتبرع بالأثر الحقيقي، وتعرض الإنجازات والاحتياجات الجارية بلغة واضحة وهوية حديثة تبعث الثقة والسكينة.',
      heroCta1: 'تبرع الآن', heroCta2: 'شاهد الإنجازات', heroBubble1: '25 مسجدًا في مسيرة العطاء', heroBubble2: 'شفافية مباشرة وأرقام حية',
      stat1: 'مسجدًا ساهمنا فيه', stat2: 'إجمالي الميزانية', stat3: 'مشاريع مكتملة', stat4: 'لغتان',
      homeBlockTitle: 'منصة تجمع الأمانة والثقة والوضوح', homeBlockText: 'تم تصميم الموقع ليقدم رحلة متكاملة: قصة الحملة، إنجازات سابقة، حملة حالية متصلة بالتحديثات، عضوية داعمة، ووسائل تواصل وتبرع سهلة على كل جهاز.',
      whyTitle: 'لماذا Vi Mår Bra مختلفة؟', whyLead: 'ليست مجرد صفحة تبرع، بل واجهة مؤثرة توضح أين يذهب الدعم وكيف يتحول إلى صدقة جارية تخدم بيوت الله والمجتمع.',
      feat1t: 'شفافية مباشرة', feat1d: 'عرض واضح للأرقام والمستهدف ونسبة التقدم بما يعزز الثقة لدى الزائر والمتبرع.',
      feat2t: 'خريطة الإنجاز', feat2d: 'كل مسجد يظهر على خريطة السويد مع نافذة معلومات مختصرة وسهلة.',
      feat3t: 'أمانة في العرض', feat3d: 'عرض أمين للحملات والبيانات والحالة الحالية لكل مشروع دون مبالغة أو غموض.',
      feat4t: 'تجربة واضحة', feat4d: 'عرض منظم وواضح يسهل على الزائر متابعة الحملات والنتائج بثقة وراحة.',
      journeyTitle: 'كيف تتحول المساهمة إلى أثر؟', step1: 'استقبال احتياج المسجد أو المشروع', step2: 'إطلاق الحملة وتحديد الهدف', step3: 'تحديث المبالغ والتقدم بشفافية', step4: 'عرض النتيجة والإنجاز للمجتمع',
      previewTitle: 'نماذج من الحملات السابقة', previewLead: 'كل بطاقة تمثل مشروعًا حقيقيًا ساهمت فيه الحملة داخل مدن السويد.',
      donateTitle: 'كن جزءًا من صدقة جارية ممتدة', donateText: 'اختر الوسيلة الأنسب لك وادعم إعمار وتطوير المساجد في مختلف المدن السويدية.',
      donateSwish: 'التبرع عبر Swish', donateStripe: 'التبرع عبر Stripe', donatePaypal: 'التبرع عبر PayPal',
      campaignsTitle: 'الحملات السابقة والإنجازات', campaignsLead: 'خريطة وقائمة توضح لكل مسجد: تم جمع، المبلغ الكامل، النسبة، وحالة المشروع.',
      totalCollected: 'إجمالي ما جمعناه', totalMosques: 'إجمالي المساجد', completedProjects: 'اكتمل جمع المبلغ', totalFull: 'إجمالي المبالغ الكاملة',
      currentTitle: 'الحملة الحالية', currentLead: 'الحملة الحالية مستقلة عن الحملات السابقة، وتُعرض أرقامها بشكل واضح ومباشر مع تحديثات متواصلة.',
      goal: 'المبلغ الكامل', raised: 'المبلغ المحصل', remaining: 'المبلغ المتبقي', lastUpdated: 'آخر تحديث', donateNow: 'ادعم الحملة الآن',
      currentHint: 'هنا يتم تحديث كل مبلغ وكل تبرع لحظة بلحظة ليظهر للزائر مستوى التقدم ومسار الحملة بصورة واضحة وشفافة.', currentLocation: 'موقع الحملة الحالية', liveSync: 'تحديث مباشر', donationModalTitle: 'اختر طريقة التبرع للحملة الحالية', donationModalLead: 'اختر وسيلة التبرع الأنسب لك لدعم مسجد Katrineholm مباشرة.', donateViaSwish: 'تبرع سريع عبر سويش', donateViaStripe: 'تبرع بالبطاقة عبر Stripe', donateViaPaypal: 'تبرع عبر PayPal',
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
      heroTitle: 'En välgörenhetskampanj för att bygga och utveckla moskéer i Sverige',
      heroLead: 'En ideell plattform som kopplar givaren till verklig påverkan och visar resultat, behov och pågående insamlingar med ett varmt och modernt uttryck.',
      heroCta1: 'Donera nu', heroCta2: 'Se resultaten', heroBubble1: '25 moskéer i resan', heroBubble2: 'Live siffror och tydlig transparens',
      stat1: 'Moskéer vi har stöttat', stat2: 'Total budget', stat3: 'Slutförda projekt', stat4: 'Två språk',
      homeBlockTitle: 'En plattform som förenar ärlighet, förtroende och tydlighet', homeBlockText: 'Sajten berättar kampanjens historia, visar tidigare insatser, presenterar en aktuell kampanj med live-data, erbjuder medlemskap och gör kontakt och donation enkel på alla enheter.',
      whyTitle: 'Varför är Vi Mår Bra annorlunda?', whyLead: 'Det här är inte bara en donationssida. Det är en upplevelse som tydliggör vart stödet går och hur det blir till en bestående välgörenhet för Allahs hus och samhället.',
      feat1t: 'Direkt transparens', feat1d: 'Tydlig visning av belopp, mål och procent som stärker besökarens förtroende.',
      feat2t: 'Karta över insatserna', feat2d: 'Varje moské visas på Sverigekartan med en snabb informationsruta.',
      feat3t: 'Tillit och trovärdighet', feat3d: 'Responsiv, snabb och stilren design med stöd för både arabiska och svenska.',
      feat4t: 'Tydlig upplevelse', feat4d: 'En ren och tydlig presentation som gör det enkelt att följa kampanjer och resultat.',
      journeyTitle: 'Hur blir ditt stöd till verklig påverkan?', step1: 'Vi tar emot behov från moskéer och projekt', step2: 'Vi lanserar kampanjen och sätter målet', step3: 'Vi uppdaterar belopp och framsteg öppet', step4: 'Vi visar slutresultat och genomförda insatser',
      previewTitle: 'Urval av tidigare kampanjer', previewLead: 'Varje kort representerar ett verkligt projekt som kampanjen har bidragit till i Sverige.',
      donateTitle: 'Bli en del av en pågående sadaqa jariya', donateText: 'Välj det sätt som passar dig bäst och stöd renovering och utveckling av moskéer i hela Sverige.',
      donateSwish: 'Donera via Swish', donateStripe: 'Donera via Stripe', donatePaypal: 'Donera via PayPal',
      campaignsTitle: 'Tidigare kampanjer och resultat', campaignsLead: 'Karta och lista som visar för varje moské: insamlat belopp, fullt belopp, procent och projektstatus.',
      totalCollected: 'Totalt insamlat av oss', totalMosques: 'Antal moskéer', completedProjects: 'Insamling klar', totalFull: 'Totala projektbelopp',
      currentTitle: 'Aktuell kampanj', currentLead: 'Siffrorna för den aktuella kampanjen visas tydligt och uppdateras löpande utan koppling till tidigare kampanjer.',
      goal: 'Fullt mål', raised: 'Insamlat', remaining: 'Kvar', lastUpdated: 'Senast uppdaterad', donateNow: 'Stöd kampanjen nu',
      currentHint: 'Här uppdateras varje belopp och varje donation löpande så att besökaren ser kampanjens utveckling tydligt och transparent.', currentLocation: 'Plats för aktuell kampanj', liveSync: 'Direkt uppdatering', donationModalTitle: 'Välj donationssätt för den aktuella kampanjen', donationModalLead: 'Välj det sätt som passar dig bäst för att stödja Katrineholms moské direkt.', donateViaSwish: 'Snabb donation via Swish', donateViaStripe: 'Kortbetalning via Stripe', donateViaPaypal: 'Donation via PayPal',
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
      fundingComplete: 'Insamlingen är klar', fundingOpen: 'Insamlingen pågår',
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
    const numberTarget = el.querySelector('[data-animate-number]') || el;
    const startTime = performance.now();
    const duration = 1200;
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      if (type === 'currency') numberTarget.textContent = formatNumber(current, 'currency');
      else if (type === 'percent') numberTarget.textContent = `${current.toFixed(1)}%`;
      else numberTarget.textContent = formatNumber(current, 'number');
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

  function toNumber(value, fallback = 0) {
    if (value === null || value === undefined || value === '') return fallback;
    if (typeof value === 'number' && Number.isFinite(value)) return value;

    const cleaned = String(value)
      .replace(/\s+/g, '')
      .replace(/[^\d,.-]/g, '')
      .replace(/,(?=\d{3}(\D|$))/g, '')
      .replace(',', '.');

    const num = Number(cleaned);
    return Number.isFinite(num) ? num : fallback;
  }

  function readFlexibleCampaign(rows) {
    if (!Array.isArray(rows) || !rows.length) return null;

    const current = { ...data.currentCampaign };
    const kv = {};

    rows.forEach((row) => {
      const key = (row[0] || '').toString().trim();
      const value = (row[1] || '').toString().trim();
      if (key) kv[key] = value;
    });

    if (Object.keys(kv).length) {
      const goal = toNumber(kv.goal ?? kv.target, current.goal);
      const raised = toNumber(kv.raised ?? kv.collected, current.raised);
      const remaining = kv.remaining !== undefined && kv.remaining !== ''
        ? toNumber(kv.remaining, current.remaining)
        : Math.max(goal - raised, 0);
      const progress = kv.progress !== undefined && kv.progress !== ''
        ? toNumber(kv.progress, current.progress)
        : (goal > 0 ? (raised / goal) * 100 : 0);

      return {
        ...current,
        title: kv.title || kv.name || current.title,
        location: kv.location || kv.city || current.location,
        goal,
        raised,
        remaining,
        progress,
        updatedAt: kv.updatedAt || 'Google Sheet',
        notes: kv.notes || current.notes,
        imageUrl: kv.imageUrl || current.imageUrl
      };
    }

    const headers = rows[0].map((h) => (h || '').toString().trim().toLowerCase());
    const dataRow = rows[1] || [];
    const obj = {};
    headers.forEach((h, i) => { obj[h] = dataRow[i]; });

    const goal = toNumber(obj.goal ?? obj.target, current.goal);
    const raised = toNumber(obj.raised ?? obj.collected, current.raised);
    const remaining = obj.remaining !== undefined && obj.remaining !== ''
      ? toNumber(obj.remaining, current.remaining)
      : Math.max(goal - raised, 0);
    const progress = obj.progress !== undefined && obj.progress !== ''
      ? toNumber(obj.progress, current.progress)
      : (goal > 0 ? (raised / goal) * 100 : 0);

    return {
      ...current,
      title: obj.title || obj.name || current.title,
      location: obj.location || obj.city || current.location,
      goal,
      raised,
      remaining,
      progress,
      updatedAt: obj.updatedat || 'Google Sheet',
      notes: obj.notes || current.notes,
      imageUrl: obj.imageurl || current.imageUrl
    };
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

  
  function projectToLocalMap(lat, lng) {
    const minLat = 55.0, maxLat = 69.5, minLng = 10.5, maxLng = 24.5;
    const x = ((Number(lng) - minLng) / (maxLng - minLng)) * 100;
    const y = (1 - ((Number(lat) - minLat) / (maxLat - minLat))) * 100;
    return {
      x: Math.min(89, Math.max(10, x)),
      y: Math.min(92, Math.max(8, y))
    };
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
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(window.vmbMap);
      setTimeout(() => window.vmbMap.invalidateSize(), 250);
    } else {
      setTimeout(() => window.vmbMap.invalidateSize(), 250);
    }

    if (window.vmbMarkers) window.vmbMarkers.forEach(marker => window.vmbMap.removeLayer(marker));

    window.vmbMarkers = (data.mosques || []).map((m) => {
      const marker = L.circleMarker([m.lat, m.lng], {
        radius: 9,
        fillColor: Number(m.progress) >= 100 ? '#0f6d62' : '#c89f4a',
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

    if (window.vmbMarkers.length) {
      window.vmbMap.fitBounds(L.featureGroup(window.vmbMarkers).getBounds().pad(0.2));
    }
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
      const res = await fetch(
        url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(),
        { cache: 'no-store' }
      );
      const text = await res.text();
      const rows = parseCsv(text);
      return readFlexibleCampaign(rows);
    }

    function normalizeCampaignPayload(payload) {
      const src = payload && payload.data ? payload.data : payload;
      if (!src || typeof src !== 'object') return null;

      const goal = toNumber((src.goal ?? src.target), current.goal);
      const raised = toNumber((src.raised ?? src.collected), current.raised);
      const remaining = src.remaining !== undefined && src.remaining !== null && src.remaining !== ''
        ? toNumber(src.remaining, current.remaining)
        : Math.max(goal - raised, 0);
      const progress = src.progress !== undefined && src.progress !== null && src.progress !== ''
        ? toNumber(src.progress, current.progress)
        : (goal > 0 ? (raised / goal) * 100 : 0);

      return {
        ...current,
        title: src.title || src.name || src.campaign || current.title,
        location: src.location || src.city || current.location,
        goal,
        raised,
        remaining,
        progress,
        updatedAt: src.updatedAt || src.updated_at || cfg.sourceLabel || current.updatedAt,
        notes: src.notes || src.note || current.notes,
        imageUrl: src.imageUrl || src.image || current.imageUrl
      };
    }

    async function applyJsonFromAppsScript(url) {
      const res = await fetch(
        url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(),
        { cache: 'no-store' }
      );
      if (!res.ok) throw new Error('Apps Script fetch failed');
      const text = await res.text();
      let payload = null;
      try {
        payload = JSON.parse(text);
      } catch (e) {
        const match = text.match(/^[^(]+\((.*)\)\s*;?$/s);
        if (match) payload = JSON.parse(match[1]);
      }
      if (!payload) throw new Error('Apps Script response parse failed');
      return normalizeCampaignPayload(payload);
    }

    function applyJsonpFromAppsScript(url) {
      return new Promise((resolve, reject) => {
        const callbackName =
          'vmbJsonp_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
        const script = document.createElement('script');
        let finished = false;

        function cleanup() {
          if (finished) return;
          finished = true;
          try { delete window[callbackName]; } catch (e) {}
          try { script.remove(); } catch (e) {}
          clearTimeout(timer);
        }

        window[callbackName] = function (payload) {
          const normalized = normalizeCampaignPayload(payload);
          cleanup();
          resolve(normalized);
        };

        script.onerror = function () {
          cleanup();
          reject(new Error('Apps Script JSONP failed'));
        };

        const timer = setTimeout(() => {
          cleanup();
          reject(new Error('Apps Script JSONP timeout'));
        }, 12000);

        script.src =
          url +
          (url.includes('?') ? '&' : '?') +
          'callback=' + callbackName +
          '&t=' + Date.now();

        document.body.appendChild(script);
      });
    }

    let dynamic = null;

    if (cfg.appsScriptUrl && !cfg.appsScriptUrl.includes('PASTE_YOUR')) {
      try {
        dynamic = await applyJsonFromAppsScript(cfg.appsScriptUrl);
      } catch (err) {
        try {
          dynamic = await applyJsonpFromAppsScript(cfg.appsScriptUrl);
        } catch (err2) {}
      }
    }

    if (!dynamic && cfg.jsonUrl) {
      try {
        dynamic = await applyJsonFromAppsScript(cfg.jsonUrl);
      } catch (err) {
        try {
          dynamic = await applyJsonpFromAppsScript(cfg.jsonUrl);
        } catch (err2) {}
      }
    }

    if (!dynamic && cfg.csvUrl) {
      try {
        dynamic = await applyRowsFromCsv(cfg.csvUrl);
      } catch (err) {}
    }

    if (dynamic) {
      if ((dynamic.remaining === undefined || dynamic.remaining === null) &&
          dynamic.goal >= 0 && dynamic.raised >= 0) {
        dynamic.remaining = Math.max(dynamic.goal - dynamic.raised, 0);
      }

      if ((dynamic.progress === undefined || dynamic.progress === null) &&
          dynamic.goal > 0 && dynamic.raised >= 0) {
        dynamic.progress = (dynamic.raised / dynamic.goal) * 100;
      }

      dynamic.updatedAt = dynamic.updatedAt || cfg.sourceLabel || 'Live';
      return { ...current, ...dynamic };
    }

    return current;
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
    if (noteEl) noteEl.textContent = t('currentHint');
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
        window.currentMap = L.map('currentCampaignMap', { scrollWheelZoom: false, zoomControl: true, preferCanvas: true }).setView([lat, lng], 7);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(window.currentMap);
        setTimeout(() => window.currentMap.invalidateSize(), 200);
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
    if (data.currentCampaignLinks) {
      const currentSwish = document.getElementById('currentSwishLink');
      const currentStripe = document.getElementById('currentStripeLink');
      const currentPaypal = document.getElementById('currentPaypalLink');
      if (currentSwish) currentSwish.href = data.currentCampaignLinks.swish;
      if (currentStripe) currentStripe.href = data.currentCampaignLinks.stripe;
      if (currentPaypal) currentPaypal.href = data.currentCampaignLinks.paypal;
    }
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

  let currentCampaignTimer = null;

  function startCurrentCampaignTimer() {
    if (!document.getElementById('currentCampaignBox')) return;
    if (currentCampaignTimer) clearInterval(currentCampaignTimer);
    currentCampaignTimer = window.setInterval(renderCurrentCampaign, 30000);
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
    startCurrentCampaignTimer();
    hydrateLinks();
    initReveal();
  });

  document.addEventListener('DOMContentLoaded', function () {
    translatePage();
    hydrateCounters();
    renderPreview();
    initCampaignsMap();
    renderCurrentCampaign();
    startCurrentCampaignTimer();
    hydrateLinks();
    initReveal();
  });
})();
