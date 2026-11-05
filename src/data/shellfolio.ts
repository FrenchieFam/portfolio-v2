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
    "handle": "Private Gitea (tailnet access)",
    "url": "http://100.81.148.117:3020"
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
export const paymentMethods: { name: string; address: string; qr: string }[] = [];
const english: LanguageData = {
  "profile": {
    "Name": "Bryfry / Frenchie Familia",
    "Online": "bryfry",
    "Uptime": "Always learning",
    "Location": "United States",
    "Role": "Homelab engineer, automation builder, and AI tinkerer",
    "Status": "Building useful systems",
    "OS": "Windows / Linux",
    "Host": "Frenchie Familia Homelab",
    "Kernel": "Containers + local AI",
    "Shell": "PowerShell / Bash",
    "WM": "Terminal-first",
    "about": "Homelab engineer, automation builder, and AI tinkerer.\n\nI edit podcasts into short-form clips that keep people watching. I run a local-first pipeline (Whisper + Ollama) so nothing leaves my machine, and I hand-check every hook so the first 3 seconds actually earn the scroll. Based in the US, working with podcasters worldwide."
  },
  "experiences": [],
  "projects": [
    {
      "perms": "drwxr-xr-x",
      "file": "Media Automation Pipeline",
      "link": "http://100.81.148.117:3020",
      "content": "Fully automated media server with Seerr, Radarr/Sonarr, Prowlarr, qBittorrent (VPN-secured), and Jellyfin. Private homelab; the Gitea link requires tailnet access."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Local AI RAG System",
      "link": "http://100.81.148.117:3020",
      "content": "Private, uncensored AI research assistant using Ollama, Mythos-9B, and Open WebUI with a local knowledge base. Private homelab; the Gitea link requires tailnet access."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Baddies Downloader",
      "link": "https://github.com/frenchiefam/portfolio-v2",
      "content": "A Streamlit GUI that scrapes and downloads reality TV episodes. Paused (Stable), archived after polishing its UI. Automatic Sonarr import and push notifications are separate integrations, not features implemented by the GUI."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Clipping",
      "link": "https://www.fiverr.com/s/K334ZWW",
      "content": "01 Podcast Clipping Vertical 9:16 clips, burned captions, and human-checked hooks. $45 basic package"
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Custom AI Workflows",
      "link": "/legacy/automation/",
      "content": "02 Custom AI Workflows Local Ollama + Codex pipelines for repetitive work. Discuss a workflow \u2192"
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Digital Products",
      "link": "https://bryfryugc.gumroad.com/l/first-three-clients",
      "content": "03 Digital Products Prompt packs and templates you can put to work. Browse on Gumroad \u2192"
    },
    {
      "perms": "drwxr-xr-x",
      "file": "FrenchieFam Digital",
      "link": "mailto:frenchiefamdigital@gmail.com?subject=Free%20GBP%20Audit%20Request",
      "content": "Digital Services FrenchieFam Digital Bilingual Google Business Profile setup and Spanish/English transcription for local businesses. Bilingual GBP Setup Get found when customers search in Spanish. Free audit included. Get a Free Audit Spanish/English Transcription Accurate, fast transcription for audio and video. View Transcription Services"
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Local-first Clipping Case Study",
      "link": "/legacy/case-study.html",
      "content": "Local-first podcast clipping pipeline. Original engineering case study, source details, and results preserved in full."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "8 GB VRAM Case Study",
      "link": "/legacy/case-study-vram/",
      "content": "Running local AI on 8 GB of VRAM: what actually fits. Three failures, three fixes, and why the smallest model usually wins."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Clipping Process",
      "link": "/legacy/process/",
      "content": "02 / Process How It Works 01 Send me your video Drop a link to a podcast episode or upload a file. 02 I cut it, you approve I return 3\u20135 vertical clips in 48 hours. You pick which ones to keep. 03 You post, we iterate Your clips go live. Next round, I know your taste."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Complete Original Portfolio",
      "link": "/legacy/",
      "content": "All original portfolio text, service details, samples, case studies, and contact links preserved. Spec edits are uncommissioned portfolio samples. Source footage remains the property of the respective creators."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Spec \u2014 SmartLess",
      "link": "/legacy/samples/sample-1.mp4",
      "content": "Vertical podcast spec edit. Uncommissioned sample; source footage remains the property of its respective creators."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Spec \u2014 Tim Butterly's Show",
      "link": "/legacy/samples/sample-butterly.mp4",
      "content": "Vertical podcast spec edit. Uncommissioned sample; source footage remains the property of its respective creators."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Spec \u2014 The Anxious Truth",
      "link": "/legacy/samples/sample-anxious.mp4",
      "content": "Vertical podcast spec edit. Uncommissioned sample; source footage remains the property of its respective creators."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Spec \u2014 The $100 MBA Show",
      "link": "/legacy/samples/sample-100mba.mp4",
      "content": "Vertical podcast spec edit. Uncommissioned sample; source footage remains the property of its respective creators."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Spec \u2014 Stuff Island",
      "link": "/legacy/samples/sample-stuffisland.mp4",
      "content": "Vertical podcast spec edit. Uncommissioned sample; source footage remains the property of its respective creators."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Spec \u2014 Red Web",
      "link": "/legacy/samples/sample-redweb.mp4",
      "content": "Vertical podcast spec edit. Uncommissioned sample; source footage remains the property of its respective creators."
    },
    {
      "perms": "drwxr-xr-x",
      "file": "Podcast Spec \u2014 I Have ADHD",
      "link": "/legacy/samples/sample-adhd.mp4",
      "content": "Vertical podcast spec edit. Uncommissioned sample; source footage remains the property of its respective creators."
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
      "name": "gitea (private tailnet)",
      "url": "http://100.81.148.117:3020",
      "webLink": "http://100.81.148.117:3020"
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
