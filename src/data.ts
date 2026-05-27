export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'GROOVY',
    category: 'Brand & Space',
    image: '/groovy.png',
  },
  {
    id: '2',
    title: 'THE BITE',
    category: 'F&B Branding',
    image: '/the_bite.png',
  },
  {
    id: '3',
    title: 'TACT EASE',
    category: 'Product Packaging',
    image: '/tact_ease.jpg',
  },
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'CC',
    role: '工作室主理人',
    roleEn: 'Studio Manager',
    bio: '艺术硕士毕业，曾担任知名设计公司团队负责人，拥有7年设计实战经验，专注插画领域多年，擅长插画艺术与商业设计结合，做有温度的设计。',
  },
  {
    id: '2',
    name: '阿俊 / Leo',
    role: '设计合伙人',
    roleEn: 'Design Partner',
    bio: '曾担任上市公司团队负责人，在消费科技领域深耕，擅长塑造品牌的温度感，将理性产品逻辑转化为感性品牌语言的能力。',
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: '品牌设计',
    titleEn: 'Brand Design',
    description: 'Visual Identity, Logo Design, and Brand Guidelines.',
  },
  {
    id: '2',
    title: '包装设计',
    titleEn: 'Packaging Design',
    description: 'Product Packaging and Unboxing Experience.',
  },
  {
    id: '3',
    title: 'IP设计',
    titleEn: 'IP Design',
    description: 'Character Design and IP Ecosystems.',
  },
  {
    id: '4',
    title: '活动视觉',
    titleEn: 'Event Visuals',
    description: 'Exhibitions, Posters, and Spatial Visuals.',
  },
];

export const processSteps = [
  {
    num: '01',
    title: '咨询阶段',
    titleEn: 'Consultation',
    description: '初步沟通需求 · 明确设计目标 · 确定报价及排期 · 合同签订 · 支付预付款',
  },
  {
    num: '02',
    title: '项目启动',
    titleEn: 'Project Kickoff',
    description: '深入了解需求 · 市场调研 · 风格定位梳理 · 视觉方向探讨 · 确认设计方向',
  },
  {
    num: '03',
    title: '设计执行',
    titleEn: 'Execution',
    description: '方案创作 · 提案展示 · 反馈及深化 · 设计文件交付 · 落地跟进',
  },
];
