(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.RememberUIEvents = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  function bind(ui, events, doc) {
    const d = doc || (typeof document !== 'undefined' ? document : null);
    const {
      difficultyEl, newGameBtn, playAgainBtn, closeModalBtn,
      pauseBtn, resumeBtn, failRetryBtn, failCloseBtn,
      hintBtn, settingsBtn, guideBtn, guideCloseBtn, guideModal,
      settingsCancel, settingsSave,
      settingGameMode, settingVolume,
      shareBtn, achievementsBtn, achievementsClose,
      dailyBtn, dailyCloseBtn, dailyStartBtn,
      statsBtn, statsClose,
      nbackBtn, nbackCloseBtn, nbackStartBtn,
      resetDataBtn, exportBtn, importBtn, importFile,
      recallSkipBtn, recallSubmitBtn,
    } = ui || {};

    // 游戏控制
    if (difficultyEl && events.onDifficultyChange) difficultyEl.addEventListener('change', events.onDifficultyChange);
    if (newGameBtn && events.onNewGame) newGameBtn.addEventListener('click', events.onNewGame);
    if (playAgainBtn && events.onPlayAgain) playAgainBtn.addEventListener('click', events.onPlayAgain);
    if (closeModalBtn && events.onCloseModal) closeModalBtn.addEventListener('click', events.onCloseModal);
    if (pauseBtn && events.onPause) pauseBtn.addEventListener('click', events.onPause);
    if (resumeBtn && events.onResume) resumeBtn.addEventListener('click', events.onResume);
    if (failRetryBtn && events.onFailRetry) failRetryBtn.addEventListener('click', events.onFailRetry);
    if (failCloseBtn && events.onFailClose) failCloseBtn.addEventListener('click', events.onFailClose);
    if (hintBtn && events.onHint) hintBtn.addEventListener('click', events.onHint);

    // 设置 / 主题 / 语言
    if (settingsBtn && events.onOpenSettings) settingsBtn.addEventListener('click', events.onOpenSettings);
    if (guideBtn && events.onGuideOpen) guideBtn.addEventListener('click', events.onGuideOpen);
    if (guideCloseBtn && events.onGuideClose) guideCloseBtn.addEventListener('click', events.onGuideClose);
    if (guideModal && events.onGuideModalBackdrop) guideModal.addEventListener('click', events.onGuideModalBackdrop);
    if (settingsCancel && events.onSettingsCancel) settingsCancel.addEventListener('click', events.onSettingsCancel);
    if (settingsSave && events.onSettingsSave) settingsSave.addEventListener('click', events.onSettingsSave);
    if (settingGameMode && events.onGameModeChange) settingGameMode.addEventListener('change', events.onGameModeChange);
    if (settingVolume && events.onVolumeInput) settingVolume.addEventListener('input', events.onVolumeInput);

    // 分享 / 成就
    if (shareBtn && events.onShare) shareBtn.addEventListener('click', events.onShare);
    if (achievementsBtn && events.onAchievementsOpen) achievementsBtn.addEventListener('click', events.onAchievementsOpen);
    if (achievementsClose && events.onAchievementsClose) achievementsClose.addEventListener('click', events.onAchievementsClose);

    // 每日挑战
    if (dailyBtn && events.onDailyOpen) dailyBtn.addEventListener('click', events.onDailyOpen);
    if (dailyCloseBtn && events.onDailyClose) dailyCloseBtn.addEventListener('click', events.onDailyClose);
    if (dailyStartBtn && events.onDailyStart) dailyStartBtn.addEventListener('click', events.onDailyStart);

    // 统计 / N-back / 重置
    if (statsBtn && events.onStatsOpen) statsBtn.addEventListener('click', events.onStatsOpen);
    if (statsClose && events.onStatsClose) statsClose.addEventListener('click', events.onStatsClose);
    if (nbackBtn && events.onNbackOpen) nbackBtn.addEventListener('click', events.onNbackOpen);
    if (nbackCloseBtn && events.onNbackClose) nbackCloseBtn.addEventListener('click', events.onNbackClose);
    if (nbackStartBtn && events.onNbackToggle) nbackStartBtn.addEventListener('click', events.onNbackToggle);
    if (resetDataBtn && events.onResetData) resetDataBtn.addEventListener('click', events.onResetData);

    // 导入导出
    if (exportBtn && events.onExport) exportBtn.addEventListener('click', events.onExport);
    if (importBtn && events.onImportClick) importBtn.addEventListener('click', events.onImportClick);
    if (importFile && events.onImportFileChange) importFile.addEventListener('change', events.onImportFileChange);

    // 回忆测验
    if (recallSkipBtn && events.onRecallSkip) recallSkipBtn.addEventListener('click', events.onRecallSkip);
    if (recallSubmitBtn && events.onRecallSubmit) recallSubmitBtn.addEventListener('click', events.onRecallSubmit);

    // 全局键盘
    if (d && events.onKeyDown) d.addEventListener('keydown', events.onKeyDown);
  }

  return { bind };
});
