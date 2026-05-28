import deviceMapImg from '@/assets/wulian/device-map.png';
import deviceOverviewImg from '@/assets/wulian/device-overview.png';
import deviceAlertsImg from '@/assets/wulian/device-alerts.png';
import deviceSpaceImg from '@/assets/wulian/device-space.png';
import deviceHealthImg from '@/assets/wulian/device-health.png';

export const navItems = [
  { label: '首页', href: '#hero' },
  { label: '产品', href: '#products' },
  { label: '解决方案', href: '#solutions' },
  { label: '文档中心', href: '#docs' },
  { label: '定价', href: '#pricing' },
  { label: '联系我们', href: '#contact' },
  { label: '关于我们', href: '#about' },
];

/** 顶栏「产品」下拉项：文案可在本文件中直接改；图标 key 须与 Navbar 内 `productNavIconMap` 一致 */
export type ProductNavIconKey =
  | 'Cpu'
  | 'Video'
  | 'Smartphone'
  | 'Cloud'
  | 'Monitor'
  | 'Layers'
  | 'Box'
  | 'BarChart3'
  | 'Brain';

export const productNavDropdownItems: {
  title: string;
  desc: string;
  icon: ProductNavIconKey;
  href?: string;
}[] = [
  {
    title: '物联网平台',
    desc: '多协议接入、设备建模与全链路运维管控',
    icon: 'Cpu',
  },
  {
    title: '视频中心',
    desc: '实时预览、录像回放与智能检索一体',
    icon: 'Video',
  },
  {
    title: '物联网卡',
    desc: '卡生命周期、流量与在线状态可视管理',
    icon: 'Smartphone',
  },
  {
    title: '云边协同',
    desc: '模型与策略云端编排、边缘就近执行',
    icon: 'Cloud',
  },
  {
    title: '大屏可视化',
    desc: '拖拽式搭建运营驾驶舱与指挥大屏',
    icon: 'Monitor',
  },
  {
    title: '2D组态',
    desc: '工业组态画面编排、发布与远程运维',
    icon: 'Layers',
  },
  {
    title: '3D可视化',
    desc: '三维场景还原与数字孪生交互展示',
    icon: 'Box',
  },
  {
    title: '图表',
    desc: '多维统计、趋势对比与自助分析报表',
    icon: 'BarChart3',
  },
  {
    title: '人工智能',
    desc: '知识库、模型训练与推理服务一体化',
    icon: 'Brain',
    href: '/products/ai',
  },
];

/** 顶栏「解决方案」下拉项；图标 key 须与 Navbar 内 `solutionNavIconMap` 一致 */
export type SolutionNavIconKey =
  | 'Building2'
  | 'Flame'
  | 'Package'
  | 'Zap'
  | 'Building'
  | 'Store';

export const solutionNavDropdownItems: {
  title: string;
  desc: string;
  icon: SolutionNavIconKey;
  href?: string;
}[] = [
  {
    title: '智慧园区',
    desc: '量化园区运行指标，快速掌握园区运行状况',
    icon: 'Building2',
  },
  {
    title: '智慧消防',
    desc: '能耗采集、实时统计与分析',
    icon: 'Flame',
  },
  {
    title: '设备全生命周期',
    desc: '整合设备硬件、数据和业务流程，提升协同和运营效率',
    icon: 'Package',
  },
  {
    title: '智慧能源',
    desc: '清晰用能路径，优化用能策略',
    icon: 'Zap',
  },
  {
    title: '楼宇IBMS',
    desc: '建筑整体集中监控，分散控制的智能化管理方案',
    icon: 'Building',
  },
  {
    title: '智慧商业',
    desc: '智能识别风险行为并告警，数据回溯归档留存',
    icon: 'Store',
    href: '/solutions/smart-business',
  },
];

export const advantages = [
  {
    id: 'agile',
    icon: 'Zap',
    title: '更敏捷的业务交付',
    color: 'cyan',
    features: [
      { icon: '🚀', title: '极速上线', desc: '开箱即用，项目周期从数月缩短至数天' },
      { icon: '💰', title: '降本增效', desc: '按需订阅，告别高昂的硬件与运维投入' },
      { icon: '🎯', title: '零码开发', desc: '拖拽式构建应用，业务人员也能快速上手' },
    ],
  },
  {
    id: 'intelligent',
    icon: 'Brain',
    title: '更强大的智能内核',
    color: 'purple',
    features: [
      { icon: '🤖', title: '智能AI', desc: '内置算法引擎，轻松实现预测性维护与智能分析' },
      { icon: '☁️', title: '云边协同', desc: '边缘计算灵活部署，关键业务毫秒级响应' },
      { icon: '🔄', title: '持续迭代', desc: '功能与模型自动升级，系统始终保持领先' },
    ],
  },
  {
    id: 'reliable',
    icon: 'Shield',
    title: '更可靠的连接底座',
    color: 'green',
    features: [
      { icon: '🔌', title: '极简接入', desc: '兼容海量协议，新旧设备分钟级快速上云' },
      { icon: '📡', title: '全景可视', desc: '3D可视化大屏，设备状态与数据一目了然' },
      { icon: '📈', title: '弹性扩容', desc: '从十台到千万台设备，平台随业务平滑增长' },
    ],
  },
];

export const scenarios = [
  {
    id: 1,
    title: '车辆违停检测',
    desc: '在划定道路或禁停区域内识别静止车辆，支持超时违停判定与车牌区域辅助',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: '车辆拥堵检测',
    desc: '基于车道或区域内车辆密度与速度估计，判断缓行与拥堵等级，服务交通诱导与管控',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: '人员跌倒/倒地检测',
    desc: '对监控画面中人员姿态进行实时分析，识别跌倒、躺地等异常姿态并触发告警',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: '抽烟行为检测',
    desc: '识别手持香烟、吞云吐雾等典型吸烟动作与物品特征，适用于禁烟区与安全生产场景',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: '人员作业分析',
    desc: '识别未佩戴安全帽、越界作业、危险区域滞留等工厂常见违规与风险行为',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: '打架检测',
    desc: '识别肢体冲突、推搡打斗等激烈互动，适用于公共场所与校园周界等重点区域',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&h=400&fit=crop',
  },
];

export const aiFeatures = [
  {
    icon: '📚',
    title: '知识库管理',
    desc: '企业非结构化数据的中枢',
    detailText:
      '支持多格式文档（图片、音视频、文档）批量导入、第三方语雀 / 飞书文档同步、AI 自动分片标注，可按分类管理知识库。',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=500&fit=crop',
  },
  {
    icon: '🔍',
    title: '多模态检索',
    desc: '超越关键词的语义搜索体验',
    detailText:
      '支持文搜文、图搜图。结合物联网场景，用户可以通过上传一张设备故障图，搜索到对应的维修手册，或者通过自然语言查询设备状态。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
  {
    icon: '👁️',
    title: '全场景视觉分析',
    desc: '从监控到决策的视频分析',
    detailText:
      '支持单屏/四分屏/九分屏布局，实时叠加 AI 检测框。兼容边缘网关、多品牌摄像头，实现视频 AI 实时分析、告警、全记录溯源。',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
  },
  {
    icon: '🤖',
    title: '云边端协同推理',
    desc: '跨越物理边界的算力调度',
    detailText:
      '支持将大模型、微调模型（LoRA）及 CV 模型批量下发至边缘网关。解决云端推理延迟高、带宽成本高的问题，让 AI 在本地实时响应。',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
  },
  {
    icon: '🌐',
    title: '零代码数据处理',
    desc: '从原始数据到 AI 资产的极简路径',
    detailText:
      '支持通过大模型对原始图片/视频进行自动标注，将原本需要人工数天的标注工作缩短至分钟级，大幅降低了模型训练的数据准备成本。',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=500&fit=crop',
  },
  {
    icon: '🏭',
    title: '模型训练',
    desc: '低代码的垂直领域模型工厂',
    detailText: '提供数据集管理、训练任务、运行环境全配套能力。',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
  },
];

export const iotFeatures = [
  {
    title: '设备地图',
    desc: '一张地图看清所有项目运行情况，从宏观总览到微观细节，决策快人一步',
    image: deviceMapImg,
  },
  {
    title: '设备总览',
    desc: '无需在多个系统间来回切换，设备好坏一目了然，让管理不再有盲区',
    image: deviceOverviewImg,
  },
  {
    title: '异常消息',
    desc: '告别无效的消息轰炸，系统直接将异常转化为可执行任务，责任到人，闭环处理',
    image: deviceAlertsImg,
  },
  {
    title: '设备空间',
    desc: '完全贴合企业实际组织架构，无论设备在哪，都能按区域轻松归类与查找',
    image: deviceSpaceImg,
  },
  {
    title: '设备健康',
    desc: '不只是坏了才报警，更能提前发现设备"亚健康"状态，从源头减少故障停机',
    image: deviceHealthImg,
  },
];

export const videoFeatures = [
  {
    icon: '🎤',
    title: '用说话的方式查监控',
    desc: '无需人工盯着屏幕，直接告诉系统"查找刚才的异常片段"，AI自动为您打包证据',
  },
  {
    icon: '⏪',
    title: '告警时刻秒级回溯',
    desc: '告警时间自动对齐视频录像，无需人工反复拖拽进度条，一键查看事发前后证据',
  },
  {
    icon: '🔍',
    title: '视频健康一键体检',
    desc: '提前发现摄像头故障与盲区，确保关键时刻"有画面、能看清"，杜绝监控形同虚设',
  },
  {
    icon: '📁',
    title: '合规归档省心省力',
    desc: '重要证据自动分类存储，轻松应对合规审计与事后追责，查找历史记录清晰便捷',
  },
  {
    icon: '🚫',
    title: '拒绝无效告警打扰',
    desc: '视频只负责看清现场，智能分析负责判断异常，职责清晰，避免重复报警造成疲劳',
  },
  {
    icon: '🔒',
    title: '省带宽更保隐私安全',
    desc: '视频数据本地加密存储，既节省昂贵的云端流量费，又充分保障企业数据隐私',
  },
];

export const visualizationFeatures = [
  {
    icon: '📊',
    title: '海量模版智绘全景',
    desc: '业务人员 5 分钟自主搭建专属数据大屏。内置海量行业模版开箱即用，更有AI智绘，通过自然对话大屏报表秒级呈现',
  },
  {
    icon: '🚨',
    title: '告警态势实时弹窗',
    desc: '关键异常在大屏上自动弹窗预警，让指挥中心第一时间掌握突发状况，快速响应',
  },
  {
    icon: '📑',
    title: '自动生成管理汇报',
    desc: '自动汇总运行数据生成合规报表，用数据说话，让周月报与审计工作轻松高效',
  },
  {
    icon: '🎯',
    title: '指挥中心统一叙事',
    desc: '将空间、设备、视频、告警融合在一张图上，为高层决策提供全面、统一的指挥视角',
  },
  {
    icon: '📈',
    title: '随业务增长平滑扩展',
    desc: '系统架构预留充足扩展空间，未来增加新功能无需推倒重来，保护企业的长期投资',
  },
];
