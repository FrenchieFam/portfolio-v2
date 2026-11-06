// src/config/site.config.ts

export const siteConfig = {
  // Global Branding & SEO
  author: "Bryfry",         // Used in meta tags
  title: "Frenchie Familia | Homelab & Automation", // Browser tab title
  description: "Homelab engineering, automation, local AI, and creative workflows by Bryfry / Frenchie Familia.",
  siteUrl: "https://frenchiefam.dev", // Used for OpenGraph
  metaImage: "/og-preview.png", // Placed in public/ directory

  themeColor: "#4af626",

  // Custom Prompt
  prompt: {
    user: "bryfry",
    host: "frenchiefam",
  },

  // Feature Toggles (Enable/Disable sections)
  features: {
    fastfetch: true,
    about: true,
    experiences: false,
    projects: true,
    services: true,
    education: false,
    skills: true,
    remotes: true,
    contact: true,
    wallets: false,   	// Set to false by default for generic users
    translations: false, // Set to false to disable the locale switcher and PT routing
    torMirror: false, 	// Set to false by default for generic users
  },

  // Sensitive/Specific Data
  onionAddress: "your-onion-address-here.onion",

  // Fastfetch ASCII Art (Use raw string template)
  asciiArt: `
  +-----------------------------+
  |       F R E N C H I E       |
  |        F A M I L I A        |
  |                             |
  |  homelab / automation / ai  |
  +-----------------------------+`
};
