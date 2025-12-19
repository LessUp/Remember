(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.RememberTimer = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  function formatTime(s) {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const r = (s % 60).toString().padStart(2, '0');
    return `${m}:${r}`;
  }

  function stopTimer(timerId) {
    if (timerId) {
      clearInterval(timerId);
      return null;
    }
    return null;
  }

  function resetTimer(params) {
    const isCd = !!params.isCountdownMode();
    const elapsed = 0;
    const countdownLeft = isCd ? params.getCountdownFor(params.currentDifficulty) : 0;
    const display = isCd ? countdownLeft : elapsed;
    return { elapsed, countdownLeft, displayText: formatTime(display) };
  }

  function startTimer(params) {
    if (params.timerId) return { timerId: params.timerId, elapsed: params.elapsed, countdownLeft: params.countdownLeft };

    let elapsed = params.elapsed;
    let countdownLeft = params.countdownLeft;

    const id = setInterval(() => {
      elapsed += 1;

      if (params.isCountdownMode()) {
        countdownLeft = Math.max(0, countdownLeft - 1);
        params.onUpdate({ elapsed, countdownLeft, displayText: formatTime(countdownLeft) });
        if (countdownLeft <= 0) {
          clearInterval(id);
          params.onStop();
          params.onTimeUp();
          return;
        }
      } else {
        params.onUpdate({ elapsed, countdownLeft, displayText: formatTime(elapsed) });
      }
    }, 1000);

    return { timerId: id, elapsed, countdownLeft };
  }

  return {
    formatTime,
    stopTimer,
    resetTimer,
    startTimer,
  };
});
