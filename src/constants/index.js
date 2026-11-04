import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  firebase,
  flutter,
  mysql,
  python,
  php,
  flask,
  dart,
  threejs,
  github,
  coindetector,
  geomath,
  goclean,
  happycookies,
  dobites,
  analisis,
  simprofetika,
  sipakrt,
  sistemakademik,
  voiceclone,
  tts,
  presensi,
  sipades,
  websekolah,
  omni,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Tech Explorer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },             // Frontend basic
  { name: "CSS 3", icon: css },               // Frontend basic
  { name: "JavaScript", icon: javascript },   // Common for both FE/BE
  { name: "React JS", icon: reactjs },        // Frontend framework
  { name: "Tailwind CSS", icon: tailwind },   // Frontend styling
  { name: "Node JS", icon: nodejs },          // Backend
  { name: "MySQL", icon: mysql },             // Backend DB
  { name: "php", icon: php },   
  { name: "Threejs", icon: threejs },                 // Version control
  { name: "Figma", icon: figma },             // UI/UX tools
  { name: "Python", icon: python },           // Backend alt
  { name: "Flutter", icon: flutter },         // Mobile dev (opsional jika kamu masukkan)
  { name: "Dart", icon: dart },               // Flutter pairing
];
const experiences = [
  // WORK EXPERIENCE
  {
    title: "Affiliate & Content Team Coordinator (Intern)",
    company_name: "Nusantara Natural",
    icon: creator,
    iconBg: "#FDE68A",
    date: "September 2026 – December 2026",
    points: [
      "Led and coordinated the affiliate and content team for Nusantara Natural skincare products.",
      "Designed a per-product affiliate campaign system on TikTok and Shopee, covering content requirements, commission, and deadlines.",
      "Planned content needs and a footage bank to supply affiliate creators.",
    ],
  },
  {
    title: "Content Creator (PPL Intern)",
    company_name: "Kemenag – PPL Group 2",
    icon: creator,
    iconBg: "#FBCFE8",
    date: "2026",
    points: [
      "Created weekly Instagram recap content (Weekly Recap carousels) for the group's account @pplkemenagbms26.",
    ],
  },
  {
    title: "Social Media Content Creator (Intern)",
    company_name: "UIN Saizu Purwokerto",
    icon: creator,
    iconBg: "#FBCFE8",
    date: "May 2026 – August 2026",
    points: [
      "Created content for the Instagram accounts @saintekuinsaizu and @uinsaizu_official, from shooting and video editing to content calendar planning.",
    ],
  },
  {
    title: "WordPress Developer (Intern)",
    company_name: "Bikin Kreatif",
    icon: web,
    iconBg: "#BBF7D0",
    date: "January 2026 – February 2026",
    points: [
      "Developed WordPress-based websites as a WordPress Developer intern.",
    ],
  },
  {
    title: "Live Stream Host",
    company_name: "Dede Live Streaming",
    icon: creator,
    iconBg: "#FDE68A",
    date: "November 2025 – February 2026",
    points: [
      "Hosted live streaming sessions and interacted directly with the audience.",
      "Presented products communicatively to attract viewer interest.",
    ],
  },
  {
    title: "Cashier & Customer Service",
    company_name: "BAW Game",
    icon: backend,
    iconBg: "#C7D2FE",
    date: "August 2025 – November 2025",
    points: [
      "Served customers and processed payments for PlayStation rental transactions as a cashier.",
      "Handled customer questions and complaints as customer service.",
      "Operated PlayStation units and managed customers' play sessions to keep service running smoothly.",
    ],
  },
  {
    title: "Customer Service, Live Host, and Admin",
    company_name: "BAW Company",
    icon: creator,
    iconBg: "#FDE68A",
    date: "August 2024 – May 2025",
    points: [
      "Hosted interactive live broadcasts to promote products and maintain strong audience engagement.",
      "Improved improvisation and verbal communication skills through real-time interactions.",
      "Collaborated with sellers to prepare scripts and adjust content strategies based on audience targets.",
      "Handled customer complaints and ensured a positive user experience throughout the session.",
      "Managed order records and daily sales transactions as a cashier.",
      "Maintained product availability and organized administrative tasks related to inventory and reporting."
    ],
  },
  {
    title: "Data Entry Staff",
    company_name: "Badan Kesatuan Bangsa Dan Politik Banyumas",
    icon: backend,
    iconBg: "#C7D2FE",
    date: "February 2024 – November 2024",
    points: [
      "Entered and verified election result data accurately into the official system.",
      "Maintained the integrity and confidentiality of data following official election standards.",
      "Worked under strict deadlines in a team to ensure timely and error-free data submission."
    ],
  },

  // PROJECT EXPERIENCE
  {
    title: "Full-Stack, API & AI Projects",
    company_name: "UIN Saizu Purwokerto",
    icon: web,
    iconBg: "#BBF7D0",
    date: "2025 – Present",
    points: [
      "Built SIMPROFETIKA, a live training-management system (Laravel, Tailwind CSS) with online registration, SPPD and certificate printing, and QR code attendance.",
      "Developed SIPAKRT, a full-stack neighborhood administration dashboard with Next.js 15, Prisma ORM, and PostgreSQL (Neon), deployed on Vercel.",
      "Developed the central hub of a distributed academic system made of 7 services (Python, Flask, REST API) and coordinated API contracts across teams.",
      "Built the Omni-Marketplace & AI Trend Analyzer dashboard (Streamlit, Playwright, Gemini) for Shopee and Tokopedia trend analysis.",
      "Built voice cloning (FastAPI, OpenVoice v2, MMS-TTS) and text-to-speech (Coqui XTTS-v2, FastSpeech2) projects.",
    ],
  },
  {
    title: "KKN Village Digitalization Projects",
    company_name: "KKN Desa Mandirajakulon, Banjarnegara",
    icon: web,
    iconBg: "#C7F9CC",
    date: "2026",
    points: [
      "Built a digital document archiving system (SIPADES) for the village hall using Laravel and MySQL, with AI-assisted OCR extraction.",
      "Built a school website with an admin CMS for SD N 3 Mandiraja Kulon using Laravel Blade, Tailwind CSS, and Alpine.js.",
      "Built a QR code-based attendance system hosted on GitHub Pages with a Google Apps Script/Sheets backend.",
    ],
  },
  {
    title: "Web & Mobile Development Projects",
    company_name: "UIN Saizu Purwokerto",
    icon: web,
    iconBg: "#BBF7D0",
    date: "2023 – 2025",
    points: [
      "Developed an online laundry service website with PHP, HTML, CSS, JS, MySQL, and Figma.",
      "Created a simple arithmetic web app using Python and Flask.",
      "Built a cookies sales website using HTML, PHP, MySQL, and Figma.",
      "Developed a mobile application for cookie sales using Flutter and Firebase.",
      "Built a personal portfolio website using React.js and Tailwind CSS."
    ],
  },

  // ORGANIZATIONAL EXPERIENCE
  {
    title: "Group Secretary, KKN Angkatan 58",
    company_name: "UIN Saizu Purwokerto – Desa Mandirajakulon",
    icon: creator,
    iconBg: "#FBCFE8",
    date: "2026",
    points: [
      "Served as the group secretary, managing administrative documents such as letterhead templates, member biodata, and the daily logbook.",
      "Planned community programs, including a water management program (drainage and water infiltration) and informatics-based programs for the village.",
    ],
  },
  {
    title: "Sekretaris Himpunan Mahasiswa Informatika",
    company_name: "UIN Saizu Purwokerto",
    icon: creator,
    iconBg: "#FBCFE8",
    date: "February 2025 – December 2025",
    points: [
      "Drafted and archived meeting minutes and official organizational documents.",
      "Managed internal and external communication, including formal letters, proposals, and invitations.",
      "Supported coordination of student programs and maintained structured documentation of activities."
    ],
  },
  {
    title: "Event Division",
    company_name: "PKKMB Faculty Event & National Addiction Week",
    icon: web,
    iconBg: "#C7F9CC",
    date: "March 2024 – October 2024",
    points: [
      "Prepared event rundown and coordinated technical aspects from planning to execution.",
      "Collaborated with other teams to ensure smooth event logistics and timeline.",
      "Contributed to post-event evaluation and documentation for final reporting."
    ],
  },
  {
    title: "Sponsorship Division",
    company_name: "Gudang Sinau, Dakwah Anniversary, Collaboration Day",
    icon: backend,
    iconBg: "#E0E7FF",
    date: "March 2024 – November 2024",
    points: [
      "Created sponsorship proposals and approached potential external partners.",
      "Actively communicated with sponsors regarding branding needs and follow-ups.",
      "Successfully secured funding and facility support for event sustainability."
    ],
  }
];


const projects = [
  {
    name: "SIMPROFETIKA",
    description:
      "A live training (bimtek) management system with online registration, status tracking, SPPD and certificate printing, and QR code attendance for participants and admins.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: simprofetika,
    source_code_link: "https://simprofetika.com",
  },
  {
    name: "Omni-Marketplace & AI Trend Analyzer",
    description:
      "A Streamlit dashboard that collects product data from Shopee and Tokopedia, analyzes keyword and marketing-claim trends, and generates copywriting with Gemini.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "playwright", color: "pink-text-gradient" },
      { name: "gemini", color: "orange-text-gradient" },
    ],
    image: omni,
    source_code_link: "https://github.com/umifatih",
  },
  {
    name: "SIPAKRT",
    description:
      "A full-stack neighborhood (RT) administration dashboard built with Next.js 15, Prisma ORM, and PostgreSQL, deployed on Vercel.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "vercel", color: "orange-text-gradient" },
    ],
    image: sipakrt,
    source_code_link: "https://github.com/umifatih/sipakrt",
  },
  {
    name: "Distributed Academic System",
    description:
      "The central hub of a distributed campus academic system that coordinates 7 services through REST APIs and agreed API contracts.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "rest-api", color: "pink-text-gradient" },
    ],
    image: sistemakademik,
    source_code_link: "https://github.com/umifatih",
  },
  {
    name: "Voice Cloning Website",
    description:
      "A voice cloning website with a FastAPI backend integrated with the OpenVoice v2 and MMS-TTS models.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "openvoice", color: "green-text-gradient" },
      { name: "tts", color: "pink-text-gradient" },
    ],
    image: voiceclone,
    source_code_link: "https://github.com/umifatih",
  },
  {
    name: "Text To Speech",
    description:
      "A complete text-to-speech pipeline using Coqui XTTS-v2 locally and LJSpeech/FastSpeech2 on Google Colab.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "xtts-v2", color: "green-text-gradient" },
      { name: "fastspeech2", color: "pink-text-gradient" },
    ],
    image: tts,
    source_code_link: "https://github.com/umifatih",
  },
  {
    name: "Presensi QR",
    description:
      "A QR code-based digital attendance system with a Google Apps Script and Google Sheets backend, hosted on GitHub Pages.",
    tags: [
      { name: "apps-script", color: "blue-text-gradient" },
      { name: "google-sheets", color: "green-text-gradient" },
      { name: "github-pages", color: "pink-text-gradient" },
    ],
    image: presensi,
    source_code_link: "https://github.com/umifatih/absen-kkn",
  },
  {
    name: "SIPADES",
    description:
      "A digital document archiving system for the village hall of Mandiraja Kulon that makes searching and managing documents easier, with AI-assisted OCR extraction.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "gemini", color: "pink-text-gradient" },
    ],
    image: sipades,
    source_code_link: "https://github.com/umifatih",
  },
  {
    name: "SD N 3 Mandiraja Kulon Website",
    description:
      "A complete school website (home, gallery, news, facilities, extracurriculars, achievements, flagship programs) with an admin CMS for school profile, facilities, and news.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "alpinejs", color: "pink-text-gradient" },
    ],
    image: websekolah,
    source_code_link: "https://github.com/umifatih",
  },
  {
  name: "Dobites",
  description:
    "A mobile application for ordering cookies online, allowing users to browse products, place orders, and track delivery status seamlessly through an intuitive mobile interface.",
  tags: [
    { name: "flutter", color: "blue-text-gradient" },
    { name: "firebase", color: "green-text-gradient" },
    { name: "dart", color: "pink-text-gradient" },
  ],
  image: dobites,
  source_code_link: "https://github.com/umifatih/dobites",
},
  {
    name: "Goclean",
    description:
      "An online laundry service platform that allows users to schedule pickups, monitor progress, and manage payments for their laundry orders easily.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "html", color: "pink-text-gradient" },
      { name: "css", color: "orange-text-gradient" },
    ],
    image: goclean,
    source_code_link: "https://github.com/umifatih/GoClean",
  },
  {
    name: "CoinDetector",
    description:
      "An image-based recognition system that classifies coins using shape, color, and texture features combined with machine learning algorithms.",
    tags: [
      { name: "matlab", color: "blue-text-gradient" },
      { name: "gui", color: "green-text-gradient" },
      { name: "image-processing", color: "pink-text-gradient" },
    ],
    image: coindetector,
    source_code_link: "https://github.com/umifatih/coin-detector",
  },
  {
    name: "Analisis Machine Learning",
    description:
      "A machine learning project for demand forecasting using backpropagation neural networks, visualizing prediction results, and comparing error metrics.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "collab", color: "green-text-gradient" },
      { name: "numpy", color: "pink-text-gradient" },
    ],
    image: analisis,
    source_code_link: "https://github.com/umifatih/ProjectML",
  },
  {
    name: "Happy Cookies",
    description:
      "An online store for handmade cookies with a user-friendly interface, product catalog, and order processing system designed for micro-businesses.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "css", color: "orange-text-gradient" },
      { name: "html", color: "pink-text-gradient" },
    ],
    image: happycookies,
    source_code_link: "https://github.com/umifatih/HappyCookies",
  },
  {
    name: "Geomath",
    description:
      "An interactive web-based learning tool designed to help elementary school students understand geometry concepts through visual simulations and exercises.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: geomath,
    source_code_link: "https://github.com/umifatih/geomath",
  },
];


export { services, technologies, experiences, projects };
