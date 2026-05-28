# JetLinks AI 详情页 · 设计规范

## 全局基础规范

| 项目 | 规范 |
|---|---|
| 主色 | `#0066FF`（品牌蓝）|
| 文本色 | `#1D1D1F` 标题 / `#424245` 正文 / `#86868B` 辅助 |
| 背景 | `#FFFFFF` 主体 / `#F5F7FA` 浅灰分区 |
| 容器 | max-width 1200px，左右 padding 24px |
| 板块间距 | padding-y 120px |
| 圆角 | 卡片 16px(rounded-2xl) / 按钮 8px / 标签 999px(pill) |
| 字体层级 | H1 56px·1.1 / H2 36px / H3 20–28px / Body 15–17px·1.6 |
| 动效曲线 | cubic-bezier(0.22, 1, 0.36, 1)，时长 0.3s–0.9s |
| 滚动入场 | opacity 0→1 + y 24→0，stagger 0.08s |

---

## 1. Hero（首屏）
- 布局：左右两列 grid-cols-2，gap-16，padding-top 128px
- 左列：胶囊标签（蓝底 5%）→ H1 56px 加粗（关键词「看 / 学 / 业务」高亮蓝）→ 副标题 17px → 双 CTA
  - 主按钮：#0066FF 实底 + shadow 0 8px 24px -8px rgba(0,102,255,0.5)，hover 上移 2px
  - 次按钮：透明 + #0066FF 描边
- 右列：浮动玻璃拟态 Dashboard
  - 主卡：白→浅蓝渐变，shadow 0 30px 80px -20px rgba(0,102,255,0.25)
  - 浮动动画：y 0→-14→0，周期 6s
  - 内含 3 个 KPI 小卡 + 24 根渐变柱实时图
  - 两个悬浮徽章卡（视觉识别 / 大模型）反向浮动
- 背景：右上径向渐变光晕 rgba(0,102,255,0.10)

## 2. ProductIntro（产品介绍）
- 布局：左右两列；移动端文案先行
- 左：MacBook 拟物外框（深色 #1D1D1F 顶 + 渐变底座），16:9 视频容器
- 播放按钮：80px 圆形蓝底 + animate-ping 涟漪 + 自定义 Play 光标 SVG
- 右：胶囊标签 → H2 34px → 16px 段落 → 三条 ✓ 列表

## 3. PainPoints（业务痛点）
- 完全参照图片："C:\Users\wsl18\Desktop\工作\redesign\src\assets\AI\tongdian\痛点.png"进行页面的设计

## 4. CoreFeatures（核心能力 · 6 Tab）
- Tab：药丸型；激活态实蓝底 + 蓝色阴影；未激活白底 + 1px 描边，hover 文字变蓝
- 内容区：两列
  - 左：H3 28px + 描述 + ✓ 列表
  - 右：4:3 渐变插画卡
- 切换：AnimatePresence mode="wait"，opacity + y/scale 同步淡入淡出 0.3s

## 5. Skills（场景包）
- 6 张基础卡片网格 +「更多场景」按钮
- 点击通过 AnimatePresence 高度展开下方 6 张扩展卡（非生硬出现）

## 6. FinalCTA（结尾转化）
同首页的“开启您的物联网之旅”板块。