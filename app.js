/**
 * Card Designer App Logic
 * Real-Time Direct Click & Edit + Two-Way Binding + Theme Switching without losing manual text.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // Input fields
  const inputs = {
    badgePrefix: document.getElementById('badgePrefix'),
    badgeName: document.getElementById('badgeName'),
    titleTop: document.getElementById('titleTop'),
    titleMain: document.getElementById('titleMain'),
    subtitleBadge: document.getElementById('subtitleBadge'),
    promoNote: document.getElementById('promoNote'),
    addressLine1: document.getElementById('addressLine1'),
    addressLine2: document.getElementById('addressLine2'),
    phoneNum: document.getElementById('phoneNum'),
    tier1Title: document.getElementById('tier1Title'),
    tier1Price: document.getElementById('tier1Price'),
    tier2Title: document.getElementById('tier2Title'),
    tier2Price: document.getElementById('tier2Price'),
    tier3Title: document.getElementById('tier3Title'),
    tier3Price: document.getElementById('tier3Price'),
    btnText: document.getElementById('btnText'),
    iconSelect: document.getElementById('iconSelect'),
    mainColor: document.getElementById('mainColor'),
    darkColor: document.getElementById('darkColor'),
    bgColor: document.getElementById('bgColor')
  };

  // Output elements on Card
  const outputs = {
    outBadgePrefix: document.getElementById('outBadgePrefix'),
    outBadgeName: document.getElementById('outBadgeName'),
    outTitleTop: document.getElementById('outTitleTop'),
    outTitleMain: document.getElementById('outTitleMain'),
    outSubtitleBadge: document.getElementById('outSubtitleBadge'),
    outPromoNote: document.getElementById('outPromoNote'),
    outAddressLine1: document.getElementById('outAddressLine1'),
    outAddressLine2: document.getElementById('outAddressLine2'),
    outPhoneNum: document.getElementById('outPhoneNum'),
    outTier1Title: document.getElementById('outTier1Title'),
    outTier1Price: document.getElementById('outTier1Price'),
    outTier2Title: document.getElementById('outTier2Title'),
    outTier2Price: document.getElementById('outTier2Price'),
    outTier3Title: document.getElementById('outTier3Title'),
    outTier3Price: document.getElementById('outTier3Price'),
    outBtnText: document.getElementById('outBtnText')
  };

  const posterCard = document.getElementById('posterCard');
  const currentThemeLabel = document.getElementById('currentThemeLabel');
  const themeTopIcon = document.getElementById('themeTopIcon');
  const themeBtnIcon = document.getElementById('themeBtnIcon');

  // Complete Themes Configuration per Subject & Shape
  const themesConfig = {
    'classic': {
      label: 'النموذج الملكي الذهبي والكحلي',
      class: 'theme-classic',
      topIcon: 'fa-book-open',
      btnIcon: 'fa-graduation-cap',
      mainColor: '#c79222',
      darkColor: '#0a192f',
      bgColor: '#f9f5eb'
    },
    'english-special': {
      label: 'شكل تخصص اللغة الإنجليزية (English)',
      class: 'theme-english-special',
      topIcon: 'fa-language',
      btnIcon: 'fa-globe',
      mainColor: '#b91c1c',
      darkColor: '#1e3a8a',
      bgColor: '#f0f4f8'
    },
    'math-special': {
      label: 'شكل تخصص الرياضيات والفيزياء',
      class: 'theme-math-special',
      topIcon: 'fa-calculator',
      btnIcon: 'fa-atom',
      mainColor: '#d97706',
      darkColor: '#581c87',
      bgColor: '#faf5ff'
    },
    'science-special': {
      label: 'شكل تخصص العلوم والكيمياء والأحياء',
      class: 'theme-science-special',
      topIcon: 'fa-flask',
      btnIcon: 'fa-dna',
      mainColor: '#0d9488',
      darkColor: '#064e3b',
      bgColor: '#f0fdf4'
    },
    'arabic-special': {
      label: 'شكل تخصص اللغة العربية والأدب',
      class: 'theme-arabic-special',
      topIcon: 'fa-pen-nib',
      btnIcon: 'fa-scroll',
      mainColor: '#b45309',
      darkColor: '#7f1d1d',
      bgColor: '#fffbeb'
    },
    'modern-dark': {
      label: 'الشكل العصري الفاخر (Dark Neon)',
      class: 'theme-modern-dark',
      topIcon: 'fa-laptop-code',
      btnIcon: 'fa-rocket',
      mainColor: '#06b6d4',
      darkColor: '#1e293b',
      bgColor: '#0f172a'
    },
    'playful': {
      label: 'الشكل البهيج (روضة وأطفال)',
      class: 'theme-playful',
      topIcon: 'fa-child-reaching',
      btnIcon: 'fa-shapes',
      mainColor: '#f97316',
      darkColor: '#15803d',
      bgColor: '#fffbeb'
    },
    'minimal': {
      label: 'الشكل البسيط الأنيق (Minimalist)',
      class: 'theme-minimal',
      topIcon: 'fa-feather-pointed',
      btnIcon: 'fa-arrow-left',
      mainColor: '#b91c1c',
      darkColor: '#18181b',
      bgColor: '#faf7f2'
    }
  };

  const textKeys = [
    'badgePrefix', 'badgeName', 'titleTop', 'titleMain',
    'subtitleBadge', 'promoNote', 'addressLine1', 'addressLine2',
    'phoneNum', 'tier1Title', 'tier1Price', 'tier2Title',
    'tier2Price', 'tier3Title', 'tier3Price', 'btnText'
  ];

  // 1. Sidebar Inputs -> Update Card Text
  textKeys.forEach(key => {
    const inputEl = inputs[key];
    const outKey = 'out' + key.charAt(0).toUpperCase() + key.slice(1);
    const outputEl = outputs[outKey];

    if (inputEl && outputEl) {
      inputEl.addEventListener('input', (e) => {
        outputEl.textContent = e.target.value;
      });

      // 2. Direct On-Card Editing -> Update Sidebar Inputs in Real Time!
      outputEl.addEventListener('input', () => {
        inputEl.value = outputEl.textContent;
      });
    }
  });

  // Custom Icon Selector Listener
  inputs.iconSelect.addEventListener('change', (e) => {
    themeTopIcon.className = `fa-solid ${e.target.value} book-icon`;
  });

  // Color Pickers Logic
  function updateColors() {
    const main = inputs.mainColor.value;
    const dark = inputs.darkColor.value;
    const bg = inputs.bgColor.value;

    document.documentElement.style.setProperty('--primary-gold', main);
    document.documentElement.style.setProperty('--dark-navy', dark);
    document.documentElement.style.setProperty('--bg-cream', bg);
  }

  inputs.mainColor.addEventListener('input', updateColors);
  inputs.darkColor.addEventListener('input', updateColors);
  inputs.bgColor.addEventListener('input', updateColors);

  // Switch Theme Shape WITHOUT wiping out the user's manual text
  function switchThemeShape(themeKey) {
    const theme = themesConfig[themeKey];
    if (!theme) return;

    // Change Card CSS Class Shape
    posterCard.className = 'card-container ' + theme.class;
    
    // Update toolbar title label
    currentThemeLabel.textContent = theme.label;

    // Update icons for shape
    themeTopIcon.className = `fa-solid ${theme.topIcon} book-icon`;
    themeBtnIcon.className = `fa-solid ${theme.btnIcon}`;
    inputs.iconSelect.value = theme.topIcon;

    // Apply Shape Default Colors
    inputs.mainColor.value = theme.mainColor;
    inputs.darkColor.value = theme.darkColor;
    inputs.bgColor.value = theme.bgColor;

    updateColors();
  }

  // Theme Select Buttons Listeners
  const themeBtns = document.querySelectorAll('.theme-select-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const themeKey = btn.getAttribute('data-theme');
      switchThemeShape(themeKey);
    });
  });

  // Clear All Button (تفريغ كلي للكتابة اليدوية من الصفر لأي شكل)
  const clearAllBtn = document.getElementById('clearAllBtn');
  clearAllBtn.addEventListener('click', () => {
    textKeys.forEach(key => {
      if (inputs[key]) inputs[key].value = '';
      const outKey = 'out' + key.charAt(0).toUpperCase() + key.slice(1);
      if (outputs[outKey]) outputs[outKey].textContent = '';
    });
  });

  // Reset Sample Button
  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', () => {
    const defaultData = {
      badgePrefix: 'ست',
      badgeName: 'ميسم',
      titleTop: 'يوجد',
      titleMain: 'دروس تقوية',
      subtitleBadge: 'لكافة المراحل الدراسية',
      promoNote: 'أسعار مناسبة للتسجيل أكثر من مادة',
      addressLine1: 'حي الجهاد المخابرات',
      addressLine2: 'خلف جامع محمد رسول الله',
      phoneNum: '07723270980',
      tier1Title: 'مادة واحدة',
      tier1Price: 'سعر مناسب',
      tier2Title: 'مادتان',
      tier2Price: 'سعر مناسب',
      tier3Title: 'ثلاث مواد',
      tier3Price: 'خصم خاص',
      btnText: 'سجل الآن'
    };

    textKeys.forEach(key => {
      if (defaultData[key]) {
        inputs[key].value = defaultData[key];
        const outKey = 'out' + key.charAt(0).toUpperCase() + key.slice(1);
        if (outputs[outKey]) outputs[outKey].textContent = defaultData[key];
      }
    });

    switchThemeShape('classic');
    themeBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.theme-select-btn[data-theme="classic"]').classList.add('active');
  });

  // Download Card as HD Image (html2canvas)
  const downloadBtn = document.getElementById('downloadBtn');

  downloadBtn.addEventListener('click', async () => {
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري الإنشاء...';
    downloadBtn.disabled = true;

    try {
      const canvas = await html2canvas(posterCard, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
      });

      const imageURI = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const cardTitle = inputs.badgeName.value ? inputs.badgeName.value : 'بطاقة';
      link.download = `بطاقة_${cardTitle}.png`;
      link.href = imageURI;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Error generating canvas:', err);
      alert('حدث خطأ أثناء تحميل الصورة. حاول مرة أخرى.');
    } finally {
      downloadBtn.innerHTML = originalText;
      downloadBtn.disabled = false;
    }
  });

});
