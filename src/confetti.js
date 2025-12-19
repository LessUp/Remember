(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.RememberConfetti = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  function resizeConfettiCanvas(confettiCanvas) {
    if (!confettiCanvas) return;
    if (typeof window === 'undefined') return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }

  function runConfetti(confettiCanvas, isReducedMotion, duration) {
    const d = duration == null ? 1400 : duration;
    if (!confettiCanvas) return;
    if (typeof isReducedMotion === 'function' && isReducedMotion()) return;

    const ctx = confettiCanvas.getContext && confettiCanvas.getContext('2d');
    if (!ctx) return;

    resizeConfettiCanvas(confettiCanvas);
    confettiCanvas.classList && confettiCanvas.classList.remove('hidden');

    const colors = ['#6366F1','#A78BFA','#22C55E','#F43F5E','#F59E0B','#10B981','#EF4444'];
    const N = 120;
    const parts = Array.from({ length: N }, () => ({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * confettiCanvas.height,
      r: 4 + Math.random() * 6,
      vx: -1 + Math.random() * 2,
      vy: 2 + Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI,
      vr: (-0.2 + Math.random() * 0.4),
    }));

    if (typeof requestAnimationFrame === 'undefined' || typeof performance === 'undefined') return;

    const start = performance.now();
    function frame(t) {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        if (p.y > confettiCanvas.height + 10) { p.y = -10; p.x = Math.random() * confettiCanvas.width; }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
        ctx.restore();
      }
      if (t - start < d) requestAnimationFrame(frame);
      else if (confettiCanvas.classList) confettiCanvas.classList.add('hidden');
    }
    requestAnimationFrame(frame);
  }

  return {
    resizeConfettiCanvas,
    runConfetti,
  };
});
