export type ProjectCategory =
  | "portfolio"
  | "client_web"
  | "client_enterprise"
  | "graphic";

export interface Screenshot {
  src: string;
  title: string;
  caption: string;
}

export interface ProjectDocument {
  title: string;
  filename: string;
  format: "PPTX" | "XLSX" | "CSV" | "PDF";
  size: string;
  statusBadge?: string;
  creationMethod?: string;
  description: string;
  keyPoints: string[];
  downloadUrl: string;
  githubUrl: string;
  githubButtonText?: string;
  extraAction?: {
    label: string;
    url: string;
  };
}

export interface FlowStep {
  title: string;
  detail: string;
  tone: "blue" | "green" | "purple" | "red";
}

export interface ArchitectureCard {
  title: string;
  detail: string;
}

export interface ArchitectureGroup {
  title: string;
  description?: string;
  cards: ArchitectureCard[];
  tone?: "blue" | "slate" | "indigo" | "emerald";
}

export interface ArchitectureVariant {
  label: string; // 例: "レガシー版" / "モダナイゼーション後版"
  description: string;
  steps: FlowStep[];
  groups?: ArchitectureGroup[];
  note?: string;
}

export interface ArchitectureHighlight {
  title: string;
  items: string[];
}

export interface SystemArchitecture {
  title: string;
  subtitle?: string;
  description: string;
  steps?: FlowStep[];
  flowLabel?: string;
  variants?: ArchitectureVariant[]; // chemical などの移行前後比較
  groups?: ArchitectureGroup[];
  highlights?: ArchitectureHighlight[]; // 主な機能・連携、主な成果
  note?: string;
}

export interface CreationStep {
  number: string;
  title: string;
  description: string;
}

export interface TaskAutomationBanner {
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface ReferenceSite {
  url: string;
  badge?: string;
  title: string;
  description: string;
}

export interface SitePageItem {
  name: string;
  path: string;
  desc: string;
  url?: string;
  isHighlight?: boolean;
}

export interface SiteMapCategory {
  category: string;
  badge?: string;
  badgeColor?: string;
  pages: SitePageItem[];
}

export interface SiteStructure {
  title: string;
  subtitle: string;
  description: string;
  categories: SiteMapCategory[];
}

export interface ColorToken {
  name: string;
  hex: string;
  usage: string;
  textColor?: string;
}

export interface DesignComponentRule {
  name: string;
  description: string;
  rules: string[];
}

export interface DesignSystem {
  title: string;
  subtitle: string;
  concept: string;
  colors: ColorToken[];
  typography: {
    fontFamily: string;
    heading: string;
    body: string;
    accent?: string;
  };
  components: DesignComponentRule[];
  rules: string[];
}

export interface FullPageImages {
  pc: string;
  mobile: string;
  pcCaption?: string;
  mobileCaption?: string;
  note?: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  categoryLabel: string;
  badgeType: "portfolio" | "client_web" | "client_enterprise" | "graphic";
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  purpose?: string; // 制作目的・背景・課題
  role?: string[]; // 担当範囲・役割
  technologies: string[];
  features: string[];
  image?: string;
  imageCaption?: string;
  imagePc?: string;
  imageMobile?: string;
  imagePcCaption?: string;
  imageMobileCaption?: string;
  github?: string;
  demo?: string;
  figmaUrl?: string; // Figmaデザインリンク
  issuesUrl?: string;
  referenceSite?: ReferenceSite;
  siteStructure?: SiteStructure;
  architecture?: SystemArchitecture; // システム構成・アーキテクチャ
  designSystem?: DesignSystem; // デザインシステム（配色・タイポグラフィ・コンポーネント規約）
  fullPageImages?: FullPageImages; // ページ全体デザイン（縦長ロングLP展示）
  screenshotsBadge?: string;
  screenshotsTitle?: string;
  screenshotsNote?: string;
  screenshots?: Screenshot[];
  documents?: ProjectDocument[];
  documentProcessNote?: string;
  flowSteps?: FlowStep[];
  creationSteps?: CreationStep[];
  flowNote?: string;
  taskAutomationBanner?: TaskAutomationBanner;
}
