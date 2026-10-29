export const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    items: ["Python", "Django", "REST API design & integration"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Developer tools",
    items: ["Git", "GitHub", "VS Code", "PyCharm"],
  },
];

export const projects = [
  {
    title: "Photo-Sharing Platform",
    status: "Completed",
    statusType: "progress",
    description:
      "A full-stack event-photo platform for Admins and Team Members to upload photos to private S3 storage, then publish selected photos in PIN-protected customer galleries.",
    sourceUrl: "https://github.com/Praveen21828/photo_sharing_platfrom",
    sourceUrlIsPlaceholder: false,
    // Replace this placeholder with a verified demo URL before publishing.
    demoUrl: "https://your-photo-sharing-demo-url.com",
    demoUrlIsPlaceholder: true,
    features: [
      { label: "Event and team-member management", status: "Implemented" },
      {
        label: "JWT authentication and role-based permissions",
        status: "Implemented",
      },
      {
        label: "Direct S3 photo uploads using presigned URLs",
        status: "Implemented",
      },
      {
        label: "PIN-protected published galleries",
        status: "Implemented",
      },
    ],
    technicalDetails:
      "The repository includes a React frontend, Django REST Framework API, PostgreSQL-backed models, private S3 storage workflows, and backend tests. The repository documents deployment architecture, but no live deployment URL has been verified.",
    technologies: [
      "React.js",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "AWS S3",
      "REST APIs",
    ],
  },
  {
    title: "Stock Market Screening & Prediction System",
    status: "Completed",
    statusType: "complete",
    description:
      "A rule-based NSE/BSE stock screening application that combines technical indicators and fundamental metrics to generate buy/sell signals.",
    // Replace this placeholder with the verified repository URL before publishing.
    sourceUrl: "https://github.com/Praveen21828/stock_Prediction.git",
    sourceUrlIsPlaceholder: false,
    // Replace this placeholder with a verified demo URL before publishing.
    demoUrl: "https://your-stock-market-demo-url.com",
    demoUrlIsPlaceholder: true,
    features: [
      { label: "NSE/BSE stock screening", status: "Implemented" },
      {
        label: "EMA, RSI, MACD, and VWAP indicators",
        status: "Implemented",
      },
      { label: "PE and ROE fundamental metrics", status: "Implemented" },
      { label: "Rule-based buy/sell signals", status: "Implemented" },
    ],
    technicalDetails:
      "The Django/Python backend data pipeline and PostgreSQL schema support historical price and fundamental data. Signals are rule-based outputs, not a guarantee of market performance.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "EMA",
      "RSI",
      "MACD",
      "VWAP",
      "NSE/BSE data",
    ],
  },
  {
    title: "Weather Forecast Web Application",
    status: "Completed",
    statusType: "complete",
    description:
      "A responsive weather application that searches for a city and displays current conditions using the OpenWeather public API.",
    // Replace this placeholder with the verified repository URL before publishing.
    sourceUrl: "https://github.com/Praveen21828/Weather-Site.git",
    sourceUrlIsPlaceholder: false,
    // Replace this placeholder with a verified demo URL before publishing.
    demoUrl: "https://your-weather-demo-url.com",
    demoUrlIsPlaceholder: true,
    features: [
      { label: "City search", status: "Implemented" },
      {
        label: "Temperature, humidity, and wind speed",
        status: "Implemented",
      },
      {
        label: "Weather conditions from OpenWeather API",
        status: "Implemented",
      },
      { label: "Asynchronous UI updates", status: "Implemented" },
    ],
    technicalDetails:
      "Uses JavaScript fetch with async/await to request weather data and update the interface dynamically without reloading.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
];

export const experience = {
  role: "Software Development Intern",
  organization: "ANCIT Consulting",
  period: "Jan 2025 – Mar 2025",
  project: "Trainer Tracking Platform — Naan Mudhalvan Program",
  technologies: ["Java", "Node.js", "Python", "JavaScript", "REST APIs"],
  highlights: [
    "Built and deployed a trainer tracking system for zone-wise and hub-wise session tracking across multiple locations.",
    "Implemented geo-tagged photo verification, 12-week curriculum progress, student attendance, and expense reporting.",
    "Delivered role-based access for trainers and admins, with REST API submission and session management across Agile sprints.",
  ],
};
