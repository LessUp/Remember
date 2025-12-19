(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.RememberUtils = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function seedFromDate(dateStr, diff, theme) {
    let h = 2166136261;
    const s = `${dateStr}|${diff}|${theme}`;
    for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i)) >>> 0, h = Math.imul(h, 16777619) >>> 0;
    return h >>> 0;
  }

  function mulberry32(a) {
    return function () {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(arr, rng) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  return {
    shuffle,
    seedFromDate,
    mulberry32,
    seededShuffle,
  };
});
