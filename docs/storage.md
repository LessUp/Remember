# 本地存储与数据模型

本项目使用 `localStorage` 持久化设置、成绩、统计与训练数据。

## Key 命名约定

- 前缀：`memory_match_`
- 主要键（当前版本）：
  - `memory_match_settings`
  - `memory_match_best_<difficulty>`
  - `memory_match_lb_<difficulty>`
  - `memory_match_achievements`
  - `memory_match_stats`
  - `memory_match_adaptive`
  - `memory_match_spaced_<theme>`
  - `memory_match_daily_<YYYY-MM-DD>_<difficulty>`

其中：

- `difficulty` ∈ `easy | medium | hard`
- `theme` ∈ `emoji | numbers | letters | shapes | colors`

## 数据结构

以下为“逻辑结构描述”，以实际 `app.js` 为准。

### settings（`memory_match_settings`）

包含：声音/震动/预览秒数/主题色/暗色模式/减少动画/音量/音效包/卡面主题/玩法模式/各难度倒计时/语言/自适应/间隔复现等。

### best（`memory_match_best_<difficulty>`）

- `time`: number（秒）
- `moves`: number

### leaderboard（`memory_match_lb_<difficulty>`）

数组，最多 3 条（按 time/moves 排序）：

- `time`: number（秒）
- `moves`: number
- `at`: number（时间戳）

### achievements（`memory_match_achievements`）

以成就 `id` 为键：

- `unlocked`: boolean
- `at`: number（时间戳）

### stats（`memory_match_stats`）

统计累计值（局数、胜局、时间/步数/提示/连击累积，回忆测验与 N-back 的次数与累积指标等）。

### adaptive（`memory_match_adaptive`）

- `rating`: number（600~1600）
- `lastDiff`: `easy|medium|hard`

### spaced（`memory_match_spaced_<theme>`）

当前实现为“权重表”：

- key：卡面值 `v`
- value：权重 number

权重越高，后续越可能被选入牌组。

## 导入/导出

设置中支持导出 JSON 备份与导入恢复：

- 导出包含：`settings`、`bests`、`leaderboards`、`achievements`、`stats`、`adaptive`、`spaced`
- 当前导出格式带 `version: 1`

注意：导入逻辑会用 `DEFAULT_SETTINGS` 对 `settings` 做合并兜底。
