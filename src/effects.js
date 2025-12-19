(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.RememberEffects = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  let audioCtx = null;

  function ensureAudio() {
    if (audioCtx) return audioCtx;
    try {
      const g = typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : {});
      const Ctx = g.AudioContext || g.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    } catch {
      return null;
    }
    return audioCtx;
  }

  function beep(f, dur, type = 'sine', vol = 0.05) {
    const ctx = ensureAudio();
    if (!ctx) return;
    try {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.value = f;
      g.gain.value = vol;
      o.connect(g);
      g.connect(ctx.destination);
      const now = ctx.currentTime;
      o.start(now);
      o.stop(now + dur);
    } catch {}
  }

  function sfx(type, settings) {
    if (!settings || !settings.sound) return;
    const pack = settings.soundPack || 'clear';
    const typeMap = pack === 'electro' ? 'square' : (pack === 'soft' ? 'triangle' : 'sine');
    const volFactor = Math.max(0, Math.min(1, Number(settings.volume ?? 0.5)));
    if (type === 'flip') beep(660, 0.06, typeMap, 0.05 * (pack === 'soft' ? 0.7 : 1) * volFactor);
    else if (type === 'match') beep(880, 0.12, typeMap, 0.07 * (pack === 'soft' ? 0.7 : 1) * volFactor);
    else if (type === 'mismatch') beep(220, 0.12, typeMap, 0.06 * (pack === 'soft' ? 0.7 : 1) * volFactor);
    else if (type === 'win') beep(1200, 0.2, typeMap, 0.1 * (pack === 'soft' ? 0.7 : 1) * volFactor);
  }

  function vibrateMs(ms, settings) {
    try {
      if (!settings || !settings.vibrate) return;
      if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(ms);
    } catch {}
  }

  return {
    ensureAudio,
    beep,
    sfx,
    vibrateMs,
  };
});
