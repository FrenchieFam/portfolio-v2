// --- Types ---
export interface Profile {
  Name: string;
  Online: string;
  Uptime: string;
  Location: string;
  Role: string;
  Status: string;
  OS: string;
  Host: string;
  Kernel: string;
  Shell: string;
  WM: string;
  about: string;
}

export interface Experience {
  perms: string;
  date: string;
  company: string;
  folder: string;
  content: string;
}

export interface Project {
  perms: string;
  file: string;
  link: string;
  content: string;
}

export interface Education {
  perms: string;
  date: string;
  institution: string;
  folder: string;
  content: string;
}

export interface Skill {
  category: string;
  items: string;
}

export interface Remote {
  name: string;
  url: string;
  webLink: string;
}

export interface UIStrings {
  repoLink: string;
  langEn: string;
  langPt: string;
}

export interface LanguageData {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skill[];
  remotes: Remote[];
  ui: UIStrings;
}

export interface PortfolioData {
  en: LanguageData;
  pt: LanguageData;
}

// --- Data ---
const base = import.meta.env.BASE_URL;
const localUrl = (url: string) => url.startsWith("/legacy/") ? `${base}${url.slice(1)}` : url;
export const contactLinks = [
  {
    "protocol": "github",
    "handle": "frenchiefam",
    "url": "https://github.com/frenchiefam"
  },
  {
    "protocol": "handyman",
    "handle": "Book Gutierrez Handyman Co.",
    "url": "https://frenchiefam.dev/gutierrez-handyman-booking/"
  },
  {
    "protocol": "gitea",
    "handle": "gitea (private tailnet)",
    "url": ""
  },
  {
    "protocol": "link",
    "handle": "First Three Clients on Gumroad",
    "url": "https://bryfryugc.gumroad.com/l/first-three-clients"
  },
  {
    "protocol": "link",
    "handle": "Transcription services on Fiverr",
    "url": "https://www.fiverr.com/"
  },
  {
    "protocol": "link",
    "handle": "Podcast clipping on Fiverr",
    "url": "https://www.fiverr.com/s/K334ZWW"
  },
  {
    "protocol": "email",
    "handle": "Email FrenchieFam Digital",
    "url": "mailto:frenchiefamdigital@gmail.com?subject=Free%20GBP%20Audit%20Request"
  }
];
export const services: Project[] = [
  {
    "perms": "drwxr-xr-x",
    "file": "Podcast Clipping",
    "link": "https://www.fiverr.com/s/K334ZWW",
    "content": "Local-first pipeline (Whisper + Ollama) for short-form content."
  },
  {
    "perms": "drwxr-xr-x",
    "file": "Custom AI Workflows",
    "link": "mailto:frenchiefamdigital@gmail.com?subject=Custom%20AI%20Workflow%20Inquiry",
    "content": "Custom automation and self-hosted AI solutions for your business."
  },
  {
    "perms": "drwxr-xr-x",
    "file": "Digital Products",
    "link": "https://bryfryugc.gumroad.com/l/first-three-clients",
    "content": "Templates, guides, and tools for creators and homelabbers."
  }
];
export const paymentMethods: { name: string; address: string; qr: string }[] = [];
const english: LanguageData = {
  "profile": {
    "Name": "Bryfry / Frenchie Familia",
    "Online": "bryfry",
    "Uptime": "Since 2024",
    "Location": "United States",
    "Role": "Homelab engineer, automation builder, and AI tinkerer.",
    "Status": "Building useful systems",
    "OS": "Windows / Linux",
    "Host": "Frenchie Familia Homelab",
    "Kernel": "Containers + local AI",
    "Shell": "PowerShell / Bash",
    "WM": "Terminal-first",
    "about": "Homelab engineer, automation builder, and AI tinkerer. I build self-hosted infrastructure, local AI systems, and automated media pipelines. I also edit podcasts into short-form clips using a local-first pipeline (Whisper + Ollama) so nothing leaves my machine. Based in the US, working with clients worldwide."
  },
  "experiences": [],
  "projects": [
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Clipping Pipeline",
      "link": "https://www.fiverr.com/s/K334ZWW",
      "content": "An end-to-end, local-first podcast clipping pipeline using Whisper and Ollama. I handle the technical extraction and hand-check every hook so the first 3 seconds earn the scroll. Includes case studies for local hardware efficiency and audio processing."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Media Automation Pipeline",
      "link": "",
      "content": "Fully automated media server with Seerr, Radarr/Sonarr, Prowlarr, qBittorrent (VPN-secured), and Jellyfin. Private homelab; the Gitea link requires tailnet access."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Local AI RAG System",
      "link": "",
      "content": "Private, uncensored AI research assistant using Ollama, Mythos-9B, and Open WebUI with a local knowledge base. Private homelab; the Gitea link requires tailnet access."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Baddies Downloader",
      "link": "https://github.com/frenchiefam/portfolio-v2",
      "content": "A Streamlit GUI that scrapes and downloads reality TV episodes. Paused (Stable), archived after polishing its UI. Automatic Sonarr import and push notifications are separate integrations, not features implemented by the GUI."
    }
  ],
  "education": [],
  "skills": [
    {
      "category": "Infrastructure",
      "items": "Docker, Linux, Tailscale"
    },
    {
      "category": "Automation",
      "items": "Python, n8n"
    },
    {
      "category": "AI & Web",
      "items": "Ollama, Astro"
    }
  ],
  "remotes": [
    {
      "name": "github",
      "url": "https://github.com/frenchiefam",
      "webLink": "https://github.com/frenchiefam"
    },
    {
      "name": "gitea",
      "url": "gitea (private tailnet)",
      "webLink": ""
    }
  ],
  "ui": {
    "repoLink": "Open project or resource",
    "langEn": "[ English ]",
    "langPt": "[ Portuguese ]"
  }
};
english.projects = english.projects.map(project => ({ ...project, link: localUrl(project.link) }));
export const data: PortfolioData = { en: english, pt: english };
