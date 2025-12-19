(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('./keys.js'));
  } else {
    root.RememberStorage = factory(root.RememberKeys);
  }
})(typeof self !== 'undefined' ? self : this, function (RememberKeys) {
  function loadAdaptive() {
    try {
      const v = localStorage.getItem(RememberKeys.adaptiveKey());
      return v ? JSON.parse(v) : { rating: 1000, lastDiff: 'easy' };
    } catch {
      return { rating: 1000, lastDiff: 'easy' };
    }
  }

  function saveAdaptive(a) { localStorage.setItem(RememberKeys.adaptiveKey(), JSON.stringify(a)); }

  function loadSpaced(theme) { try { const v = localStorage.getItem(RememberKeys.spacedKey(theme)); return v ? JSON.parse(v) : {}; } catch { return {}; } }
  function saveSpaced(theme, data) { localStorage.setItem(RememberKeys.spacedKey(theme), JSON.stringify(data)); }

  function loadStats() {
    const base = { games: 0, wins: 0, timeSum: 0, movesSum: 0, hintsSum: 0, comboSum: 0, bestCombo: 0, recallAttempts: 0, precisionSum: 0, recallSum: 0, nbackAttempts: 0, nbackAccSum: 0, nbackRtSum: 0, nbackRtCount: 0 };
    try {
      const v = localStorage.getItem(RememberKeys.statsKey());
      if (v) {
        const s = JSON.parse(v);
        return { ...base, ...s };
      }
      return { ...base };
    } catch {
      return { ...base };
    }
  }

  function saveStats(s) { localStorage.setItem(RememberKeys.statsKey(), JSON.stringify(s)); }

  function loadSettings(DEFAULT_SETTINGS) {
    try {
      const raw = localStorage.getItem(RememberKeys.settingsKey());
      if (!raw) return { ...DEFAULT_SETTINGS };
      const s = JSON.parse(raw);
      return {
        sound: !!s.sound,
        vibrate: !!s.vibrate,
        previewSeconds: Math.max(0, Math.min(5, parseInt(s.previewSeconds ?? 1))) || 0,
        accent: (s.accent || 'indigo'),
        theme: (s.theme || 'auto'),
        motion: (s.motion || 'auto'),
        volume: Math.max(0, Math.min(1, Number(s.volume ?? 0.5))),
        soundPack: (s.soundPack || 'clear'),
        cardFace: (s.cardFace || 'emoji'),
        gameMode: (s.gameMode || 'classic'),
        countdown: {
          easy: Math.max(10, Math.min(999, parseInt((s.countdown && s.countdown.easy) ?? DEFAULT_SETTINGS.countdown.easy))),
          medium: Math.max(10, Math.min(999, parseInt((s.countdown && s.countdown.medium) ?? DEFAULT_SETTINGS.countdown.medium))),
          hard: Math.max(10, Math.min(999, parseInt((s.countdown && s.countdown.hard) ?? DEFAULT_SETTINGS.countdown.hard))),
        },
        language: (s.language || 'auto'),
        adaptive: !!s.adaptive,
        spaced: !!s.spaced,
      };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }

  function saveSettings(s) {
    localStorage.setItem(RememberKeys.settingsKey(), JSON.stringify(s));
  }

  function loadLeaderboard(k) {
    try {
      const v = localStorage.getItem(RememberKeys.lbKey(k));
      if (!v) return [];
      const arr = JSON.parse(v);
      if (Array.isArray(arr)) return arr;
      return [];
    } catch {
      return [];
    }
  }

  function saveLeaderboard(k, arr) {
    localStorage.setItem(RememberKeys.lbKey(k), JSON.stringify(arr));
  }

  function loadBest(k) {
    try {
      const v = localStorage.getItem(RememberKeys.bestKey(k));
      if (!v) return null;
      return JSON.parse(v);
    } catch {
      return null;
    }
  }

  function saveBest(k, data) {
    localStorage.setItem(RememberKeys.bestKey(k), JSON.stringify(data));
  }

  function loadAchievements() {
    try { const v = localStorage.getItem(RememberKeys.achKey()); return v ? JSON.parse(v) : {}; } catch { return {}; }
  }

  function saveAchievements(obj) { localStorage.setItem(RememberKeys.achKey(), JSON.stringify(obj)); }

  function isDailyDone(dateStr, diff) {
    try {
      const v = localStorage.getItem(RememberKeys.dailyKey(dateStr, diff));
      return !!v;
    } catch {
      return false;
    }
  }

  function markDailyDone(dateStr, diff) {
    const key = RememberKeys.dailyKey(dateStr, diff);
    try { if (!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify({ done: true, at: Date.now() })); } catch {}
  }

  function shouldAutoShowGuide(GUIDE_KEY) {
    try {
      const val = localStorage.getItem(GUIDE_KEY);
      return !val;
    } catch {
      return true;
    }
  }

  function markGuideSeen(GUIDE_KEY) {
    try { localStorage.setItem(GUIDE_KEY, 'seen'); } catch {}
  }

  function hideGuide(GUIDE_KEY) {
    try { localStorage.setItem(GUIDE_KEY, 'hidden'); } catch {}
  }

  function listAllKeys() {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
      return keys;
    } catch {
      return [];
    }
  }

  function removeKeysByPrefix(keys, prefix) {
    try {
      for (const k of keys) {
        if (k && k.startsWith(prefix)) localStorage.removeItem(k);
      }
    } catch {}
  }

  return {
    loadAdaptive,
    saveAdaptive,
    loadSpaced,
    saveSpaced,
    loadStats,
    saveStats,
    loadSettings,
    saveSettings,
    loadLeaderboard,
    saveLeaderboard,
    loadBest,
    saveBest,
    loadAchievements,
    saveAchievements,
    isDailyDone,
    markDailyDone,
    shouldAutoShowGuide,
    markGuideSeen,
    hideGuide,
    listAllKeys,
    removeKeysByPrefix,
  };
});
