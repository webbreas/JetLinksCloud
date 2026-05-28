import feature1 from '@/assets/AI/youshi/feature-1.jpg';
import feature2 from '@/assets/AI/youshi/feature-2.jpg';
import feature3 from '@/assets/AI/youshi/feature-3.jpg';
import feature4 from '@/assets/AI/youshi/feature-4.jpg';
import feature5 from '@/assets/AI/youshi/feature-5.jpg';
import feature6 from '@/assets/AI/youshi/feature-6.jpg';
import pain01 from '@/assets/AI/tongdian/pain-01.png';
import pain02 from '@/assets/AI/tongdian/pain-02.png';
import pain03 from '@/assets/AI/tongdian/pain-03.png';
import pain04 from '@/assets/AI/tongdian/pain-04.png';
import pain05 from '@/assets/AI/tongdian/pain-05.png';

export const AI_DETAIL_PATH = '/products/ai';

export const aiHero = {
  capsule: 'jetLinks 人工智能',
  description:
    '融合机器视觉、知识库与大模型能力，让企业像搭积木一样落地 AI，从感知世界到理解业务一站式全搞定。',
};

export const aiProductIntro = {
  title: '人工智能',
  description:
    'JetLinks 人工智能，一个能看、会学、懂你业务的智慧中枢。机器视觉与智能对话合二为一，简单搭建开箱即用。只需接入摄像头即可智能识别违停、吸烟等几十种异常场景，让风险无处遁形，预警及时触达。也能通过学习您的行业知识，训练出最懂您业务的智能助手，助力企业快速落地智能运营与业务决策。',
};

export const aiPainSection = {
  headline: 'AI 时代，为什么落地如此艰难？',
  subheadline: '从数据到应用，每一步都充满挑战，耗时耗力，效果却不尽如人意',
  painTitle: '5 大核心痛点',
  pains: [
    {
      num: '01',
      title: '开发周期长',
      desc: '从需求到上线，流程复杂，动辄数月，错失业务良机',
      tag: '效率低下',
      image: pain01,
    },
    {
      num: '02',
      title: '技术难点高',
      desc: 'AI 算法、模型训练、系统集成等技术门槛高，人才难寻',
      tag: '门槛高',
      image: pain02,
    },
    {
      num: '03',
      title: '非结构化数据复杂',
      desc: '图片、音视频、文档及语雀、飞书等第三方平台数据分散，难以统一管理',
      tag: '数据难整合',
      image: pain03,
    },
    {
      num: '04',
      title: '告警泛滥 误报率高',
      desc: '规则配置复杂，误报率高，关键告警易被淹没',
      tag: '决策低效',
      image: pain04,
    },
    {
      num: '05',
      title: '视频监控形同虚设',
      desc: '视频画面需要 24 小时人工盯守，无人关注则价值无法发挥',
      tag: '资源浪费',
      image: pain05,
    },
  ],
  solutionHeadline: '一站式 AI 平台，帮您化繁为简，快速落地',
  solutionSubheadline:
    '从数据接入、模型应用到业务闭环，全流程提效，让 AI 真正为业务创造价值',
  solutions: [
    {
      title: '快速开发，敏捷落地',
      desc: '预置行业场景与 AI 能力，模块化配置，快速搭建，周期缩短 70%+',
    },
    {
      title: '降低门槛，人人可用',
      desc: '可视化配置 + 零代码开发，降低技术门槛，业务人员也能轻松上手',
    },
    {
      title: '多源数据，统一管理',
      desc: '多种非结构化数据接入对接语雀、飞书等平台，统一存储与处理',
    },
    {
      title: '智能告警，精准高效',
      desc: 'AI 算法分析，降低误报，重要告警秒级触达',
    },
    {
      title: '智能视频，主动洞察',
      desc: '7×24 小时智能分析，自动识别事件，主动推送异常告警',
    },
  ],
  values: [
    { title: '周期缩短', desc: '交付周期缩短', metric: '70%+' },
    { title: '降低门槛', desc: '技术门槛降低', metric: '80%+' },
    { title: '数据整合', desc: '多源数据统一管理', metric: '100%' },
    { title: '告警准确率', desc: '误报率降低', metric: '90%+' },
    { title: '人力节省', desc: '人力成本节省', metric: '60%+' },
  ],
};

export const aiCoreFeatures = [
  {
    id: 'agent',
    title: '智能体开发',
    subtitle: '构建业务专属的 AI 大脑',
    bullets: [
      '通过聊天控制设备、查询数据或生成报告',
      '内置 IoT 平台命令、设备数据访问等工具',
      '支持对视觉告警进行二次语义研判',
    ],
    image: feature1,
  },
  {
    id: 'knowledge',
    title: '知识库管理',
    subtitle: '企业非结构化数据的中枢',
    bullets: [
      '统一管理企业文档资产',
      '文档切片构建索引',
      '分类与标签精细化管理',
    ],
    image: feature2,
  },
  {
    id: 'search',
    title: '多模态检索',
    subtitle: '超越关键词的语义搜索体验',
    bullets: [
      '自然语言提问加上文搜文、图搜图',
      '关键词搜索与AI 模式切换，支持查看出处',
      '自动生成结构化报告进行导出与分享',
    ],
    image: feature3,
  },
  {
    id: 'vision',
    title: '机器视觉',
    subtitle: '从监控到决策的视频分析',
    bullets: [
      '支持单屏/四分屏/九分屏布局，实时叠加 AI 检测框',
      '向导式配置，快速构建分析任务',
      '边缘侧毫秒级实时分析',
      '集中管理所有告警记录',
      '支持配置 AI 工作计划',
    ],
    image: feature4,
  },
  {
    id: 'llm',
    title: '大模型接入',
    subtitle: '统一的大模型资源调度中心',
    bullets: [
      '支持接入云端 API以及本地私有化部署的开源大模型',
      '统一管理模型的部署、启停、限流与配额',
      '支持 LoRA 等微调模型的导入、注册与版本管理',
    ],
    image: feature5,
  },
  {
    id: 'training',
    title: '模型训练',
    subtitle: '低代码的垂直领域模型工厂',
    bullets: [
      '全流程 MLOps',
      'AI 辅助标注',
      '多样化训练模式适配不同业务场景',
      '云边协同下发',
    ],
    image: feature6,
  },
];
