import {
  AppWindow,
  ArrowDownToLine,
  BookOpen,
  Briefcase,
  Camera,
  CheckCircle2,
  Download,
  FileBadge,
  FileText,
  Globe,
  HeartHandshake,
  HelpCircle,
  Instagram,
  Layers3,
  Linkedin,
  Lock,
  Mail,
  MonitorPlay,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Youtube,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  to: string;
}

export interface AppItem {
  name: string;
  slug: string;
  description: string;
  badge: string;
  accent: string;
  icon: LucideIcon;
  features: string[];
  downloads: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LegalSection {
  title: string;
  body: string;
  icon: LucideIcon;
}

export const site = {
  name: "StackEarn Shorts Downloader",
  shortName: "StackEarn",
  domain: "shorts.stackearn.com",
  tagline: "Download, Save & Manage Videos Faster Than Ever",
  email: "support@stackearn.com",
  phone: "Available via email support",
  hours: "Mon - Sat · 9:00 AM - 6:00 PM",
  description:
    "StackEarn builds Android apps and web tools to download, save, and manage short-form videos faster, more securely, and more easily.",
};

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Online Downloader", to: "/#downloader" },
  { label: "Apps", to: "/apps" },
  { label: "Blog", to: "/blog" },
  { label: "How to Use", to: "/faq" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Apps", to: "/apps" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Disclaimer", to: "/disclaimer" },
];

export const socialLinks = [
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "Facebook", href: "https://facebook.com", icon: Globe },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export const apps: AppItem[] = [
  {
    name: "VYDO – All Video Downloader",
    slug: "vydo",
    description: "Fast and powerful video downloader app for Android.",
    badge: "All-purpose",
    accent: "var(--brand-coral)",
    icon: PlayCircle,
    features: ["Fast Downloads", "HD Support", "Download History", "File Management"],
    downloads: "1M+ downloads",
    rating: 4.5,
  },
  {
    name: "Shorts Downloader",
    slug: "shorts-downloader",
    description: "Quickly save and manage short videos.",
    badge: "Flagship",
    accent: "var(--primary)",
    icon: Download,
    features: ["Easy Downloads", "Quick Sharing", "Offline Access", "History Tracking"],
    downloads: "500K+ downloads",
    rating: 4.6,
  },
  {
    name: "Status Saver",
    slug: "status-saver",
    description: "Save status updates and media instantly.",
    badge: "Utility",
    accent: "var(--brand-mint)",
    icon: Smartphone,
    features: ["Save Status", "Share Media", "Fast Access", "Simple Gallery"],
    downloads: "300K+ downloads",
    rating: 4.4,
  },
  {
    name: "Reels Downloader",
    slug: "reels-downloader",
    description: "Download and organize your favorite reels.",
    badge: "Creator tool",
    accent: "var(--accent)",
    icon: Camera,
    features: ["Simple Interface", "High Performance", "Quick Downloads", "Offline Library"],
    downloads: "250K+ downloads",
    rating: 4.5,
  },
];

export const homeHighlights = [
  {
    title: "Fast Downloads",
    description: "Optimized flows for quick video saving and smooth media management.",
    icon: ArrowDownToLine,
  },
  {
    title: "Secure Platform",
    description: "Clear privacy-first messaging and safe browsing experience across the site.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Interface",
    description: "Simple layouts help visitors discover tools, guides, and apps without friction.",
    icon: Sparkles,
  },
  {
    title: "Free To Use",
    description: "No signup wall for discovering information about the platform and tools.",
    icon: HeartHandshake,
  },
  {
    title: "Regular Updates",
    description: "Blog-ready structure for updates, launches, feature improvements, and tips.",
    icon: BookOpen,
  },
  {
    title: "Android Optimized",
    description: "Purpose-built positioning for Android app promotion and product discoverability.",
    icon: AppWindow,
  },
];

export const stats = [
  { value: "500K+", label: "Happy Users" },
  { value: "2M+", label: "Downloads" },
  { value: "100+", label: "Countries" },
  { value: "100%", label: "Safe & Secure" },
];

export const homeFaqs: FAQItem[] = [
  {
    question: "Is StackEarn Shorts Downloader free?",
    answer: "Yes, the platform is completely free to use for discovering StackEarn tools and workflows.",
  },
  {
    question: "Is it safe?",
    answer: "Yes, user privacy and security are presented as top priorities across the platform.",
  },
  {
    question: "Do I need an account?",
    answer: "No registration is required to browse the site and learn about the available tools.",
  },
];

export const faqPageItems: FAQItem[] = [
  ...homeFaqs,
  {
    question: "How do I download videos?",
    answer: "Use the online downloader section as a guided entry point, then follow the app and workflow instructions on the site.",
  },
  {
    question: "Which devices are supported?",
    answer: "The website is built for all modern browsers, while the core apps are positioned for Android users.",
  },
  {
    question: "How do I install Android apps?",
    answer: "Browse the Apps page, pick the tool you need, and use the download call-to-action from the site.",
  },
  {
    question: "Can I use StackEarn offline?",
    answer: "The apps are described around offline access and saved media management after download.",
  },
  {
    question: "Does StackEarn support reels and status downloads?",
    answer: "Yes, StackEarn includes dedicated tools for shorts, reels, statuses, and broader video downloads.",
  },
  {
    question: "Can I manage previously saved files?",
    answer: "Yes, app positioning across the site highlights download history, file organization, and media management.",
  },
  {
    question: "Is the interface beginner friendly?",
    answer: "Yes, StackEarn is presented as a simple, user-friendly ecosystem for everyday users.",
  },
  {
    question: "Are there updates or new features coming?",
    answer: "Yes, the blog and product sections are structured to support future announcements and release notes.",
  },
  {
    question: "Does StackEarn use analytics?",
    answer: "The Privacy Policy outlines analytics usage, cookies, and third-party services in plain language.",
  },
  {
    question: "Where can I get support?",
    answer: "Use the Contact Us page to reach StackEarn through email or the contact form.",
  },
];

export const blogCategories = [
  {
    title: "Video Download Guides",
    description: "Tutorials for downloading shorts, saving videos offline, and managing media better.",
  },
  {
    title: "Android Tips",
    description: "Practical Android productivity, storage, and device performance content.",
  },
  {
    title: "StackEarn Updates",
    description: "New app releases, feature announcements, and platform updates.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-download-shorts-videos",
    category: "Video Download Guides",
    title: "How To Download Shorts Videos",
    excerpt: "A simple guide to saving short-form videos faster while keeping your library organized.",
    date: "June 2026",
    readTime: "5 min read",
  },
  {
    slug: "save-videos-for-offline-viewing",
    category: "Video Download Guides",
    title: "Save Videos For Offline Viewing",
    excerpt: "Best practices for building an offline-ready collection of useful clips and saved media.",
    date: "June 2026",
    readTime: "4 min read",
  },
  {
    slug: "video-management-tips",
    category: "Video Download Guides",
    title: "Video Management Tips",
    excerpt: "Organize downloads, reduce clutter, and keep your favorite clips easier to find.",
    date: "June 2026",
    readTime: "6 min read",
  },
  {
    slug: "best-android-productivity-apps",
    category: "Android Tips",
    title: "Best Android Productivity Apps",
    excerpt: "Explore utility-focused Android apps that simplify everyday digital workflows.",
    date: "June 2026",
    readTime: "5 min read",
  },
  {
    slug: "improve-android-performance",
    category: "Android Tips",
    title: "Improve Android Performance",
    excerpt: "Simple ways to keep your device running efficiently while handling more downloads and files.",
    date: "June 2026",
    readTime: "5 min read",
  },
  {
    slug: "mobile-storage-management",
    category: "Android Tips",
    title: "Mobile Storage Management",
    excerpt: "Learn how to manage saved videos and reduce storage issues on Android devices.",
    date: "June 2026",
    readTime: "4 min read",
  },
  {
    slug: "new-app-releases",
    category: "StackEarn Updates",
    title: "New App Releases",
    excerpt: "What’s new in the StackEarn app lineup and how each tool supports a different workflow.",
    date: "June 2026",
    readTime: "3 min read",
  },
  {
    slug: "feature-announcements",
    category: "StackEarn Updates",
    title: "Feature Announcements",
    excerpt: "A running overview of improvements across the StackEarn ecosystem.",
    date: "June 2026",
    readTime: "3 min read",
  },
  {
    slug: "platform-updates",
    category: "StackEarn Updates",
    title: "Platform Updates",
    excerpt: "Recent website, app, and content improvements supporting the broader StackEarn brand.",
    date: "June 2026",
    readTime: "4 min read",
  },
];

export const privacySections: LegalSection[] = [
  { title: "Information Collection", body: "We may collect limited information needed to maintain and improve the website experience.", icon: FileText },
  { title: "Device Information", body: "Basic device and browser details may be collected for compatibility, security, and performance insights.", icon: Smartphone },
  { title: "Analytics Usage", body: "Analytics may be used to understand traffic patterns, improve content, and optimize the user journey.", icon: Layers3 },
  { title: "Advertising Services", body: "Advertising-related services may be used to support future monetization and platform growth.", icon: Briefcase },
  { title: "Cookies", body: "Cookies can help remember preferences, improve usability, and support measurement across the site.", icon: Star },
  { title: "Third Party Services", body: "Some services, embeds, or measurement tools may rely on trusted third parties with their own policies.", icon: Globe },
  { title: "User Rights", body: "Visitors may request information about the handling of their data where applicable.", icon: FileBadge },
  { title: "Data Security", body: "Reasonable safeguards are presented to protect platform integrity and user trust.", icon: Lock },
  { title: "Contact Information", body: "Privacy-related questions can be directed to StackEarn via the contact details provided on the site.", icon: Mail },
];

export const termsSections: LegalSection[] = [
  { title: "Acceptance of Terms", body: "By accessing the website, users agree to the terms governing the use of StackEarn content and tools.", icon: CheckCircle2 },
  { title: "User Responsibilities", body: "Users are responsible for ensuring their usage complies with platform rules, local laws, and permitted content handling.", icon: ShieldCheck },
  { title: "Service Availability", body: "Services may evolve, change, pause, or improve over time without a guaranteed uninterrupted experience.", icon: MonitorPlay },
  { title: "Intellectual Property", body: "Brand assets, copy, and original site content remain the intellectual property of StackEarn and its owners.", icon: FileBadge },
  { title: "Limitation of Liability", body: "StackEarn provides informational and promotional content without broad warranties for every use case.", icon: Lock },
  { title: "Changes to Terms", body: "Terms may be updated periodically to reflect product, policy, and legal changes.", icon: FileText },
];

export const disclaimerSections: LegalSection[] = [
  { title: "Personal Use", body: "StackEarn provides tools and information for personal use and general awareness around its products.", icon: HeartHandshake },
  { title: "User Responsibility", body: "Users are responsible for ensuring compliance with applicable laws and platform terms.", icon: ShieldCheck },
  { title: "Trademarks", body: "All trademarks, names, and platform identities belong to their respective owners.", icon: Star },
];
