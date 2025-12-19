(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.RememberI18n = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  function currentLang(pref, navLang) {
    const p = pref || 'auto';
    if (p === 'zh') return 'zh';
    if (p === 'en') return 'en';
    const nav = (navLang || 'en').toLowerCase();
    return nav.startsWith('zh') ? 'zh' : 'en';
  }

  const dict = {
    zh: {
      pageTitle: '记忆力训练 · 翻牌配对', pageSubtitle: '选择难度，开始翻牌配对训练记忆。完成后将记录你的最佳成绩。',
      difficultyLabel: '难度', difficultyEasy: '简单 4×4', difficultyMedium: '中等 4×5', difficultyHard: '困难 6×6',
      leaderboardTitle: '排行榜（当前难度）',
      timeLabel: '用时', movesLabel: '步数', bestLabel: '最佳',
      newGame: '开始/重开', pause: '暂停', resume: '继续', hint: '提示', settings: '设置', achievements: '成就', stats: '统计', daily: '每日',
      winTitle: '太棒了！全部配对完成', share: '分享战绩', back: '返回', playAgain: '再来一局',
      loseTitle: '时间到，挑战失败', loseDesc: '可在设置中调整“限时时长”，或重试本局。', retry: '重试',
      statsTitle: '统计', achievementsTitle: '成就', dailyTitle: '每日挑战', close: '关闭', dailyStart: '开始挑战', today: '今日', difficulty: '难度', status: '状态', completed: '已完成', notCompleted: '未完成',
      settingsTitle: '设置',
      settingSound: '声音', settingVibrate: '震动', settingPreview: '开局预览秒数',
      settingAccent: '主题色', accentIndigo: '靛蓝', accentEmerald: '翡翠绿', accentRose: '玫瑰红',
      settingTheme: '暗色模式', themeAuto: '自动', themeLight: '浅色', themeDark: '深色',
      settingMotion: '减少动画', motionAuto: '自动', motionOn: '开启', motionOff: '关闭',
      settingVolume: '音量', settingSoundPack: '音效风格', soundPackClear: '清亮', soundPackElectro: '电子', soundPackSoft: '柔和',
      settingAdaptive: '自适应训练', settingSpaced: '间隔复现（易错卡）',
      settingLanguage: '语言', languageAuto: '自动', languageZh: '中文', languageEn: 'English',
      settingGameMode: '玩法', gameModeClassic: '经典', gameModeCountdown: '限时',
      countdownEasy: '简单(s)', countdownMedium: '中等(s)', countdownHard: '困难(s)',
      settingCardFace: '卡面主题', cardFaceEmoji: 'Emoji', cardFaceNumbers: '数字', cardFaceLetters: '字母', cardFaceShapes: '形状', cardFaceColors: '颜色',
      backupLabel: '数据备份', export: '导出', import: '导入', resetData: '重置数据', settingsCancel: '取消', settingsSave: '保存',
      recallTitle: '回忆测验', recallDesc: '请从下列选项中勾选本局中出现过的卡面。', recallSkip: '跳过', recallSubmit: '提交',
      nback: 'N-back', nbackTitle: 'N-back 训练', nbackNLabel: 'N 值', nbackSpeedLabel: '节奏(ms)', nbackLenLabel: '长度', nbackHint: '按 J 判定“与 N 步前相同”', nbackStart: '开始', nbackClose: '关闭', nbackStop: '停止',
      guide: '指南', guideTitle: '快速上手指南', guideIntro: '第一次游玩？按照下面的步骤开始训练。',
      guideBasicsTitle: '基础操作', guideBasics: [
        '选择上方的难度后，点击“开始/重开”或按 N 开局。',
        '翻开两张相同的卡片即可配对成功，配对后会自动锁定。',
        '提示按钮（或按 H）可暂时展示一对卡片，每局数量有限。'
      ],
      guideAdvancedTitle: '进阶技巧', guideAdvanced: [
        '在设置中启用“限时模式”，感受倒计时压力训练反应。',
        '每日挑战为所有玩家提供相同牌组，比较谁更快完成。',
        '通关后可查看星级表现、回忆测验与统计面板，帮助复盘。'
      ],
      guideShortcutsTitle: '常用快捷键', guideShortcuts: [
        { key: 'N', desc: '新开一局（保持当前难度）' },
        { key: 'P', desc: '暂停 / 继续当前局' },
        { key: 'H', desc: '使用提示（若仍有次数）' },
        { key: '方向键 + 回车/空格', desc: '使用键盘导航并翻牌' },
        { key: 'J', desc: '在 N-back 模式中判定匹配' }
      ],
      guideNoShow: '下次不再显示', guideOpenHint: '随时可点击上方“指南”查看', guideClose: '开始训练',
    },
    en: {
      pageTitle: 'Memory Training · Card Match', pageSubtitle: 'Pick a difficulty and start matching cards. Your best runs are recorded.',
      difficultyLabel: 'Difficulty', difficultyEasy: 'Easy 4×4', difficultyMedium: 'Medium 4×5', difficultyHard: 'Hard 6×6',
      leaderboardTitle: 'Leaderboard (current difficulty)',
      timeLabel: 'Time', movesLabel: 'Moves', bestLabel: 'Best',
      newGame: 'New/Restart', pause: 'Pause', resume: 'Resume', hint: 'Hint', settings: 'Settings', achievements: 'Achievements', stats: 'Stats', daily: 'Daily',
      winTitle: 'Great! All matched', share: 'Share', back: 'Back', playAgain: 'Play Again',
      loseTitle: 'Time Up', loseDesc: 'You can adjust countdown in Settings or retry this round.', retry: 'Retry',
      statsTitle: 'Statistics', achievementsTitle: 'Achievements', dailyTitle: 'Daily Challenge', close: 'Close', dailyStart: 'Start', today: 'Today', difficulty: 'Difficulty', status: 'Status', completed: 'Completed', notCompleted: 'Not Completed',
      settingsTitle: 'Settings',
      settingSound: 'Sound', settingVibrate: 'Vibration', settingPreview: 'Preview seconds',
      settingAccent: 'Accent color', accentIndigo: 'Indigo', accentEmerald: 'Emerald', accentRose: 'Rose',
      settingTheme: 'Theme mode', themeAuto: 'Auto', themeLight: 'Light', themeDark: 'Dark',
      settingMotion: 'Motion', motionAuto: 'Auto', motionOn: 'On', motionOff: 'Off',
      settingVolume: 'Volume', settingSoundPack: 'Sound pack', soundPackClear: 'Clear', soundPackElectro: 'Electro', soundPackSoft: 'Soft',
      settingAdaptive: 'Adaptive assist', settingSpaced: 'Spaced reinforcement',
      settingLanguage: 'Language', languageAuto: 'Auto', languageZh: 'Chinese', languageEn: 'English',
      settingGameMode: 'Mode', gameModeClassic: 'Classic', gameModeCountdown: 'Countdown',
      countdownEasy: 'Easy (s)', countdownMedium: 'Medium (s)', countdownHard: 'Hard (s)',
      settingCardFace: 'Card face', cardFaceEmoji: 'Emoji', cardFaceNumbers: 'Numbers', cardFaceLetters: 'Letters', cardFaceShapes: 'Shapes', cardFaceColors: 'Colors',
      backupLabel: 'Backup', export: 'Export', import: 'Import', resetData: 'Reset data', settingsCancel: 'Cancel', settingsSave: 'Save',
      recallTitle: 'Recall Test', recallDesc: 'Please select all items that appeared this round.', recallSkip: 'Skip', recallSubmit: 'Submit',
      nback: 'N-back', nbackTitle: 'N-back Training', nbackNLabel: 'N', nbackSpeedLabel: 'Pace(ms)', nbackLenLabel: 'Length', nbackHint: 'Press J when it matches N-back', nbackStart: 'Start', nbackClose: 'Close', nbackStop: 'Stop',
      guide: 'Guide', guideTitle: 'Quick Start Guide', guideIntro: 'New here? Follow these steps to begin your training.',
      guideBasicsTitle: 'Basics', guideBasics: [
        'Pick a difficulty on the toolbar, then click “New/Restart” or press N.',
        'Flip two matching cards to lock them in. Clear all pairs to win.',
        'Use the hint button (or press H) to briefly reveal a pair. Hints are limited each round.'
      ],
      guideAdvancedTitle: 'Pro Tips', guideAdvanced: [
        'Enable Countdown mode in Settings to practice under time pressure.',
        'Daily Challenge shares the same deck for everyone—compare progress with friends.',
        'After finishing a round, review your stars, recall test, and stats to reflect on performance.'
      ],
      guideShortcutsTitle: 'Shortcuts', guideShortcuts: [
        { key: 'N', desc: 'Start a new round (keep current difficulty)' },
        { key: 'P', desc: 'Pause / resume the round' },
        { key: 'H', desc: 'Use a hint (when available)' },
        { key: 'Arrows + Enter/Space', desc: 'Navigate cards with keyboard and flip' },
        { key: 'J', desc: 'Mark a match during N-back mode' }
      ],
      guideNoShow: 'Don’t show again', guideOpenHint: 'You can reopen the guide anytime from the toolbar', guideClose: 'Start training',
    }
  };

  function i18n(lang) {
    const l = lang === 'zh' || lang === 'en' ? lang : 'en';
    return dict[l] || dict.en;
  }

  return {
    currentLang,
    i18n,
  };
});
