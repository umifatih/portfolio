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
    title: "Web & Mobile Development Projects",
    company_name: "UIN Saizu Purwokerto",
    icon: web,
    iconBg: "#BBF7D0",
    date: "2023 – Present",
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
    title: "Sekretaris Himpunan Mahasiswa Informatika",
    company_name: "UIN Saizu Purwokerto",
    icon: creator,
    iconBg: "#FBCFE8",
    date: "February 2025 – Present",
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
