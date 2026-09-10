/**
 * VMB Top Announcement Ticker
 * -------------------------------------------------
 * ملف واحد لإنشاء شريط الإعلانات العلوي في كل الصفحات.
 * لتعديل النصوص أو السرعة أو الألوان: عدّل هذا الملف فقط.
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════
  // 1. الإعدادات — عدّل هنا فقط
  // ═══════════════════════════════════════════════════════

  const TICKER_CONFIG = {
    enabled: true,                          // true = إظهار الشريط، false = إخفاؤه
    speed: 30,                              // سرعة حركة النص (20 = سريع، 60 = بطيء)
    backgroundColor: 'linear-gradient(90deg, #0d3b38 0%, #14524e 25%, #b8924a 50%, #14524e 75%, #0d3b38 100%)',
    backgroundColorSize: '400% 100%',       // حجم التدرج (كلما زاد → حركة أبطأ وأوسع)
    animateBackground: true,                // true = تحريك الألوان، false = ثابتة
    backgroundSpeed: 15,                    // سرعة حركة الألوان بالثواني (10 = سريع، 30 = بطيء)
    textColor: '#ffffff'                    // لون النص
  };

  // ═══════════════════════════════════════════════════════
  // 2. النصوص — أضف/احذف كما تريد
  // ═══════════════════════════════════════════════════════

  const TICKER_ITEMS = [
    { text: '🔔 تبرع الآن لحملة Karlstad — ساهم في بناء مسجد' },
    { text: '🤝 Donera nu till Karlstad-kampanjen — var med och bygg' },
    { text: '📍 شفافية كاملة — تابع تقدم كل حملة مباشرة' },
    { text: '📍 Full transparens — följ varje kampanj live' },
    { text: 'شاهد جميع الحملات', url: '/campaigns/' },
    { text: 'Se alla kampanjer', url: '/campaigns/' },
    { text: 'انضم كعضو داعم', url: '/membership/' },
    { text: 'Bli stödmedlem', url: '/membership/' }
  ];

  // ═══════════════════════════════════════════════════════
  // 3. لا حاجة لتعديل ما بعد هذا السطر
  // ═══════════════════════════════════════════════════════

  function getBasePath() {
    // تحديد المسار الأساسي حسب موقع الصفحة
    const path = window.location.pathname;
    if (path.includes('/campaigns/') ||
        path.includes('/current/') ||
        path.includes('/membership/') ||
        path.includes('/about/') ||
        path.includes('/contact/')) {
      return '../';
    }
    return './';
  }

  function buildTicker() {
    const basePath = getBasePath();
    const trackItems = [];

    // بناء العنصر لكل نص
    function buildItem(item, hidden) {
      const span = document.createElement('span');
      span.className = 'vmb-ticker__item';
      if (hidden) span.setAttribute('aria-hidden', 'true');

      let inner;
      if (item.url) {
        const link = document.createElement('a');
        link.href = (item.url.startsWith('http') ? item.url : basePath + item.url.replace(/^\//, ''));
        link.className = 'vmb-ticker__link';
        link.textContent = item.text;
        inner = link;
      } else {
        const textSpan = document.createElement('span');
        textSpan.textContent = item.text;
        inner = textSpan;
      }

      span.appendChild(inner);
      return span;
    }

    // المجموعة الأولى
    TICKER_ITEMS.forEach((item) => {
      trackItems.push(buildItem(item, false));
    });

    // المجموعة الثانية (نسخة مخفية للتمرير السلس)
    TICKER_ITEMS.forEach((item) => {
      trackItems.push(buildItem(item, true));
    });

    // بناء الشريط
    const ticker = document.createElement('div');
    ticker.className = 'vmb-ticker';
    ticker.setAttribute('role', 'region');
    ticker.setAttribute('aria-label', 'Announcement');

    const track = document.createElement('div');
    track.className = 'vmb-ticker__track';
    track.setAttribute('aria-live', 'off');
    track.style.animationDuration = TICKER_CONFIG.speed + 's';

    trackItems.forEach(item => track.appendChild(item));
    ticker.appendChild(track);

    return ticker;
  }

  function initTicker() {
    // إذا كان معطلاً، لا تفعل شيئاً
    if (!TICKER_CONFIG.enabled) return;

    // إذا كان الشريط موجوداً مسبقاً، لا تُضف آخر
    if (document.querySelector('.vmb-ticker')) return;

    // إنشاء الشريط
    const ticker = buildTicker();

    // ═══════════════════════════════════════════════════
    // تخصيص الخلفية
    // ═══════════════════════════════════════════════════
    if (TICKER_CONFIG.backgroundColor) {
      ticker.style.backgroundImage = TICKER_CONFIG.backgroundColor;
      ticker.style.background = TICKER_CONFIG.backgroundColor;
    }

    // ═══════════════════════════════════════════════════
    // تخصيص لون النص
    // ═══════════════════════════════════════════════════
    if (TICKER_CONFIG.textColor) {
      ticker.style.color = TICKER_CONFIG.textColor;
    }

    // ═══════════════════════════════════════════════════
    // تحريك الألوان (Gradient Animation)
    // ═══════════════════════════════════════════════════
    if (TICKER_CONFIG.animateBackground && TICKER_CONFIG.backgroundColor) {
      ticker.style.backgroundSize = TICKER_CONFIG.backgroundColorSize || '400% 100%';
      ticker.style.animation = 'vmbTickerGradient ' + (TICKER_CONFIG.backgroundSpeed || 15) + 's ease infinite';
    }

    // إدخال الشريط قبل `body` مباشرة (فوق كل شيء)
    const body = document.body;
    if (body.firstChild) {
      body.insertBefore(ticker, body.firstChild);
    } else {
      body.appendChild(ticker);
    }
  }

  // تشغيل عند تحميل الصفحة
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTicker);
  } else {
    initTicker();
  }

})();