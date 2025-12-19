(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.RememberKeys = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  function settingsKey() { return 'memory_match_settings'; }
  function bestKey(k) { return `memory_match_best_${k}`; }
  function lbKey(k) { return `memory_match_lb_${k}`; }
  function achKey() { return 'memory_match_achievements'; }
  function statsKey() { return 'memory_match_stats'; }
  function adaptiveKey() { return 'memory_match_adaptive'; }
  function spacedKey(theme) { return `memory_match_spaced_${theme}`; }
  function dailyKey(dateStr, diff) { return `memory_match_daily_${dateStr}_${diff}`; }
  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  return {
    settingsKey,
    bestKey,
    lbKey,
    achKey,
    statsKey,
    adaptiveKey,
    spacedKey,
    dailyKey,
    todayStr,
  };
});
