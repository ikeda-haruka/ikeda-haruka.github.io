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
  issuesUrl?: string;
  referenceSite?: ReferenceSite;
  siteStructure?: SiteStructure;
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
