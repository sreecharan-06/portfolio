import { 
  Project, 
  SkillCategory, 
  EducationItem, 
  ExperienceItem, 
  CertificationItem, 
  AchievementItem,
  PersonalInfo 
} from '../types';

/**
 * =======================================================================
 * CENTRAL PORTFOLIO CONFIGURATION
 * =======================================================================
 * Easy-to-edit file for all personal details, projects, skills, education,
 * and external links. Look for "TODO: REPLACE WITH YOUR INFORMATION" tags.
 */

export const personalInfo: PersonalInfo = {
  // TODO: REPLACE WITH YOUR NAME
  name: "Sree Charan", 
  
  // TODO: REPLACE WITH YOUR TITLE / DESIGNATION
  roleTitle: "BTech Computer Science Student & Full Stack Developer",
  
  headline: "Building Digital Experiences with Code, Creativity & Problem Solving.",
  
  subtitle: "BTech Computer Science student passionate about software development, AI, full-stack engineering and data structures.",
  
  bio: "I am a Computer Science Engineering student focused on building robust, high-performance web applications and algorithmic solutions. Passionate about architecting scalable full-stack platforms, integrating AI/ML workflows, and engineering efficient data structures and database systems.",
  
  // TODO: REPLACE WITH YOUR PRIMARY EMAIL
  email: "sreecharan.dev@example.com", 
  
  // TODO: REPLACE WITH YOUR GITHUB PROFILE URL
  github: "https://github.com/sreecharan-06", 
  
  // TODO: REPLACE WITH YOUR LINKEDIN PROFILE URL
  linkedin: "https://linkedin.com/in/sreecharan06", 
  
  // TODO: REPLACE WITH YOUR LEETCODE OR CODING PROFILE URL (OPTIONAL)
  leetcode: "https://leetcode.com/sreecharan06", 
  
  // TODO: REPLACE WITH YOUR LOCATION
  location: "India", 
  
  // TODO: REPLACE WITH YOUR RESUME FILE PATH (put your resume.pdf into /public/resume.pdf)
  resumeUrl: "/resume.pdf", 
  
  badges: [
    "BTech CSE",
    "Full Stack Developer",
    "Problem Solver"
  ],

  focusAreas: [
    "Software Development",
    "Full Stack Development",
    "Artificial Intelligence",
    "Data Structures & Algorithms",
    "Backend Development",
    "Database Systems"
  ]
};

export const projectsData: Project[] = [
  {
    id: "student-insight-hub",
    title: "StudentInsightHub / TaskHub",
    category: "fullstack",
    additionalCategories: ["web"],
    featured: true,
    shortDescription: "Enterprise-grade academic management ecosystem featuring distributed microservices, role-based access, and an API Gateway.",
    longDescription: "A comprehensive academic and task administration platform built with a modern decoupled architecture. Features an intelligent FastAPI Gateway proxying requests between Spring Boot core business logic and high-throughput Node.js microservices, backed by relational PostgreSQL and NoSQL MongoDB for complex data modeling.",
    tags: [
      "React",
      "Vite",
      "FastAPI Gateway",
      "Spring Boot",
      "PostgreSQL",
      "Node.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "Tailwind CSS"
    ],
    keyFeatures: [
      "Unified Authentication with JWT token verification & secure refresh flows",
      "Strict Role-Based Access Control (RBAC) for Students, Faculty, and Administrators",
      "Interactive Real-Time Student & Course Management Dashboard",
      "Attendance tracking module with automated absence alerts and analytics",
      "Comprehensive reporting engine exporting PDF/CSV performance summaries",
      "FastAPI Reverse Proxy / Gateway routing requests across polyglot microservices"
    ],
    technologies: {
      frontend: "React + Vite, Tailwind CSS, Lucide Icons",
      backend: "FastAPI (API Gateway), Spring Boot, Node.js",
      database: "PostgreSQL (Relational data), MongoDB (Dynamic documents)",
      auth: "JWT with secure HTTP-only cookies & Role-Based Access Control (RBAC)"
    },
    architectureNotes: "Decoupled microservice architecture utilizing an asynchronous FastAPI Gateway handling request validation, routing, and rate-limiting to downstream Spring Boot and Node.js instances.",
    metrics: "Sub-50ms API routing response time across simulated concurrent user queries",
    // TODO: REPLACE WITH YOUR GITHUB REPO URL
    githubUrl: "https://github.com/sreecharan-06/StudentInsightHub",
    // TODO: REPLACE WITH YOUR LIVE DEMO URL (OR LEAVE EMPTY)
    liveDemoUrl: ""
  },
  {
    id: "parksmart-system",
    title: "ParkSmart – Intelligent Smart Parking Management System",
    category: "dsa",
    additionalCategories: ["fullstack", "web"],
    featured: true,
    shortDescription: "Algorithmic smart parking routing platform implementing BST slot allocation, AVL tree logs, and Dijkstra's pathfinding.",
    longDescription: "A smart city parking allocation engine combining advanced hierarchical tree structures and graph optimization. Implemented Binary Search Trees for dynamic available slot partitioning, AVL self-balancing trees for high-frequency vehicle transaction records, and Dijkstra's shortest path algorithm over weighted topological graph layouts to direct motorists to the nearest vacant bay.",
    tags: [
      "Data Structures",
      "Binary Search Trees (BST)",
      "AVL Trees",
      "Graph Theory",
      "Dijkstra's Algorithm",
      "BFS Traversal",
      "Java / C++",
      "Full Stack"
    ],
    keyFeatures: [
      "BST Dynamic Slot Allocation guaranteeing O(log n) vacant space retrieval",
      "AVL Tree Vehicle Ledger ensuring strictly balanced O(log n) lookups and history audit",
      "Weighted Graph Modeling representing physical multi-level parking lanes and ramps",
      "Dijkstra's Shortest Path Algorithm calculating optimal driving path to assigned space",
      "Breadth-First Search (BFS) for emergency vehicle zone routing & evacuation simulation",
      "Interactive parking grid visualization with real-time occupancy status indicators"
    ],
    technologies: {
      algorithms: "Binary Search Trees, AVL Self-Balancing Trees, Graph BFS, Dijkstra's Shortest Path",
      backend: "Java / C++ Algorithmic Core with REST endpoints",
      frontend: "Interactive web dashboard visualizing slot topology"
    },
    architectureNotes: "Hybrid tree-graph algorithmic architecture cleanly separating spatial graph routing from sorted memory-indexed vehicle records.",
    metrics: "O(log n) allocation time and instant topological route recalculation",
    // TODO: REPLACE WITH YOUR GITHUB REPO URL
    githubUrl: "https://github.com/sreecharan-06/ParkSmart-System",
    // TODO: REPLACE WITH YOUR LIVE DEMO URL
    liveDemoUrl: ""
  },
  {
    id: "careerpath",
    title: "CareerPath — Career Guidance Platform",
    category: "web",
    additionalCategories: ["fullstack"],
    featured: true,
    shortDescription: "Interactive career discovery and roadmap planner with client-side state authentication and skills progression tracking.",
    longDescription: "An intuitive web application designed to guide aspiring developers and engineers through personalized industry roadmaps. Implements secure client-side persistence and credential handling via LocalStorage, dynamic domain milestones, and responsive career trajectory tracking.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "LocalStorage Auth",
      "Responsive UI",
      "Career Roadmaps"
    ],
    keyFeatures: [
      "Lightweight client-side authentication and session management using LocalStorage",
      "Curated role roadmaps spanning Frontend, Backend, AI/ML, and Systems Engineering",
      "Interactive skills checklist tracking individual career progression milestones",
      "Curated learning resource directory with filterable difficulty ratings",
      "Mobile-first responsive interface with zero external framework dependencies"
    ],
    technologies: {
      frontend: "HTML5, CSS3, Modern JavaScript (ES6+)",
      auth: "LocalStorage Client-side State & Session Handling",
      other: "DOM Manipulation, CSS Flexbox/Grid"
    },
    architectureNotes: "Pure vanilla web stack demonstrating deep mastery of foundational DOM manipulation, event bubbling, and CSS layout architecture.",
    // TODO: REPLACE WITH YOUR GITHUB REPO URL
    githubUrl: "https://github.com/sreecharan-06/CareerPath",
    // TODO: REPLACE WITH YOUR LIVE DEMO URL
    liveDemoUrl: ""
  },
  {
    id: "placement-prediction-system",
    title: "Placement Prediction System",
    category: "ai-ml",
    additionalCategories: ["fullstack"],
    featured: false,
    shortDescription: "Predictive Machine Learning model analyzing student academic metrics, internships, and skill profiles.",
    longDescription: "A data-driven machine learning system providing students with objective insights into campus placement readiness. Features comprehensive Exploratory Data Analysis (EDA) pipelines, feature scaling on academic indicators, and classification modeling to predict placement probabilities with actionable skill-gap recommendations.",
    tags: [
      "Python",
      "Machine Learning",
      "EDA",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Flask",
      "Data Visualization"
    ],
    keyFeatures: [
      "Exploratory Data Analysis (EDA) analyzing correlation across academic parameters",
      "Automated missing value imputation and categorical encoding pipeline",
      "Multi-model evaluation comparing Logistic Regression, Random Forest, and Gradient Boosting",
      "Feature importance breakdown highlighting key factors influencing recruiter decisions",
      "User-friendly web inference form accepting real-time student attributes"
    ],
    technologies: {
      backend: "Python, Flask REST API",
      database: "Serialized ML pipelines (Joblib / Pickle)",
      other: "Scikit-Learn, Pandas, NumPy, Matplotlib"
    },
    architectureNotes: "Modular ML architecture separating data preprocessing, model training notebooks, and Flask inference endpoints.",
    metrics: "/* TODO: INSERT MODEL METRICS e.g. 88% Test Accuracy, 0.86 F1-Score */",
    // TODO: REPLACE WITH YOUR GITHUB REPO URL
    githubUrl: "https://github.com/sreecharan-06/Placement-Prediction-System",
    // TODO: REPLACE WITH YOUR LIVE DEMO URL
    liveDemoUrl: ""
  },
  {
    id: "toys-and-games-echo-world",
    title: "Toys and Games Echo World",
    category: "hackathon",
    additionalCategories: ["web"],
    featured: false,
    shortDescription: "Sustainability-focused prototype turning recyclable waste into engaging, educational play experiences.",
    longDescription: "A creative hackathon project engineered around the 'Waste-to-Play' concept. Designed an engaging interactive digital catalog and gamified DIY platform guiding children and schools to upcycle household materials into playable toys, complete with eco-impact point trackers.",
    tags: [
      "Sustainability",
      "Hackathon Prototype",
      "JavaScript",
      "CSS3",
      "Gamification",
      "UI/UX Design",
      "Waste-to-Play"
    ],
    keyFeatures: [
      "Interactive DIY upcycling guides categorized by recyclable material (paper, plastic, cartons)",
      "Gamified Eco-Score tracker calculating reduced carbon footprint per completed toy",
      "Step-by-step visual assembly walkthroughs with interactive difficulty tags",
      "Community showcase board for kids and parents to share their waste-to-play creations",
      "Built and pitched within a rapid 36-hour hackathon sprint"
    ],
    technologies: {
      frontend: "HTML5, Modern CSS animations, JavaScript ES6+",
      other: "Gamified reward logic, LocalStorage progress persistence"
    },
    architectureNotes: "Rapidly prototyped progressive web design focused on high visual appeal, child accessibility, and sustainability awareness.",
    metrics: "Hackathon project prototype recognized for social impact and eco-innovation",
    // TODO: REPLACE WITH YOUR GITHUB REPO URL
    githubUrl: "https://github.com/sreecharan-06/Toys-Games-Echo-World",
    // TODO: REPLACE WITH YOUR LIVE DEMO URL
    liveDemoUrl: ""
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    iconName: "Code2",
    description: "Core languages utilized for algorithmic problem solving, enterprise backends, and systems programming.",
    skills: [
      { name: "Java", category: "Backend & OOP", highlight: true },
      { name: "Python", category: "AI/ML & Scripting", highlight: true },
      { name: "JavaScript (ES6+)", category: "Web & Full Stack", highlight: true },
      { name: "C / C++", category: "Systems & DSA", highlight: true }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    iconName: "Layout",
    description: "Modern web tools and frameworks for creating responsive, accessible, and reactive user interfaces.",
    skills: [
      { name: "React", category: "Component Architecture", highlight: true },
      { name: "Vite", category: "Modern Bundling", highlight: true },
      { name: "JavaScript", category: "DOM & Async ES6+", highlight: true },
      { name: "HTML5", category: "Semantic Web & Accessibility" },
      { name: "CSS3", category: "Flexbox, Grid & Responsive Design" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    iconName: "Server",
    description: "High-throughput server architectures, microservices, and asynchronous API gateways.",
    skills: [
      { name: "Spring Boot", category: "Enterprise Java Services", highlight: true },
      { name: "FastAPI", category: "High-Performance Python Async", highlight: true },
      { name: "Node.js", category: "Event-driven JavaScript Backend", highlight: true }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    iconName: "Database",
    description: "Relational and document storage systems engineered for consistency, schema design, and fast queries.",
    skills: [
      { name: "PostgreSQL", category: "Relational RDBMS & ACID", highlight: true },
      { name: "MongoDB", category: "NoSQL Document Store", highlight: true },
      { name: "SQL", category: "Query Optimization & Aggregations", highlight: true }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Environment",
    iconName: "Terminal",
    description: "Version control workflows, development environments, and operating system tooling.",
    skills: [
      { name: "Git", category: "Distributed Version Control", highlight: true },
      { name: "GitHub", category: "Collaboration & CI/CD Actions", highlight: true },
      { name: "VS Code", category: "Primary Development IDE" },
      { name: "Linux / WSL", category: "POSIX Shell & Command Line", highlight: true }
    ]
  },
  {
    id: "core",
    title: "Core Computer Science",
    iconName: "BrainCircuit",
    description: "Fundamental computer science theory, design patterns, security standards, and system principles.",
    skills: [
      { name: "Data Structures", category: "Trees, Graphs, Hash Maps, Heaps", highlight: true },
      { name: "Algorithms", category: "Sorting, Searching, Greedy, DP, Graph Traversal", highlight: true },
      { name: "DBMS", category: "Normalization, Transactions, Indexing", highlight: true },
      { name: "OOP", category: "Inheritance, Polymorphism, Design Patterns", highlight: true },
      { name: "REST APIs", category: "Contract-First Architecture & Status Codes", highlight: true },
      { name: "JWT", category: "Stateless Token Authentication", highlight: true },
      { name: "RBAC", category: "Role-Based Access Control Models", highlight: true }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    institution: "K L Deemed to be University (KLU)",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    // TODO: REPLACE WITH YOUR ENROLLMENT DATES (e.g. "2022 — 2026")
    period: "2022 — 2026 (In Progress)",
    // TODO: REPLACE WITH YOUR ACTUAL CGPA (e.g. "CGPA: 8.7 / 10.0") OR LEAVE BLANK IF NOT APPLICABLE
    grade: "CGPA: [TODO: Add your CGPA here]",
    // TODO: REPLACE WITH YOUR CAMPUS LOCATION
    location: "Vijayawada, Andhra Pradesh, India",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (Java/C++)",
      "Operating Systems & Linux Concepts",
      "Computer Networks & Protocols",
      "Software Engineering & Architecture",
      "Web Technologies & Frameworks",
      "Artificial Intelligence & Machine Learning Foundations"
    ],
    highlights: [
      "Rigorous hands-on engineering curriculum emphasizing software development, DSA, and scalable system design.",
      "Consistently developed practical projects integrating multi-tier architectures, databases, and algorithms.",
      "Active participant in technical hackathons, university coding contests, and peer developer groups."
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Technical Project Lead & Architecture",
    organization: "StudentInsightHub & ParkSmart Systems",
    period: "2024 — Present",
    type: "Technical Project",
    location: "Academic / Self-Driven",
    description: [
      "Engineered decoupled microservices using Spring Boot, FastAPI, and React, serving role-based access endpoints.",
      "Designed algorithmic graph pathfinding and BST slot allocation algorithms for intelligent parking logistics.",
      "Maintained modular codebases with strict separation of concerns, automated schema migrations, and RESTful specifications."
    ],
    technologies: ["React", "FastAPI", "Spring Boot", "PostgreSQL", "Data Structures", "Git"]
  },
  {
    role: "Hackathon Participant & Prototype Developer",
    organization: "Toys and Games Echo World — Hackathon Initiative",
    period: "2024",
    type: "Hackathon",
    location: "Hackathon Event",
    description: [
      "Conceptualized and developed a sustainability-focused waste-to-play web prototype within a 36-hour sprint.",
      "Implemented responsive UI components and interactive gamified eco-score calculations using modern JavaScript.",
      "Collaborated in a multidisciplinary team to deliver a functional demo and pitch presentation."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Gamification", "UI/UX"]
  },
  {
    role: "Algorithmic Problem Solver & Coding Practice",
    organization: "LeetCode & Competitive Programming",
    period: "2023 — Present",
    type: "Coding Practice",
    location: "Online Platforms",
    description: [
      "Regularly practicing data structures and algorithms, focusing on Trees, Graphs, Dynamic Programming, and Sorting.",
      "Deepened practical understanding of time and space complexity analysis (Big-O notation).",
      "Implemented classic algorithms from scratch in Java, Python, and C++."
    ],
    technologies: ["Java", "C++", "Python", "Data Structures", "Algorithms"]
  },
  {
    role: "Continuous Learning & MOOCs",
    organization: "Technical Specializations & Online Courses",
    period: "2023 — Present",
    type: "Academic Project",
    location: "Self-Paced",
    description: [
      "Completed structured coursework covering full-stack web development, backend APIs, and machine learning fundamentals.",
      "Built hands-on projects alongside theoretical learning to reinforce core software engineering concepts."
    ],
    technologies: ["Full Stack", "Spring Boot", "FastAPI", "Databases"]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "Algorithmic Problem Solving Milestones",
    issuer: "LeetCode & Coding Platforms",
    year: "2024 — 2025",
    description: "Consistent practice solving algorithmic challenges covering Binary Search Trees, Graph Traversals, Dynamic Programming, and Arrays.",
    category: "DSA / Coding",
    badge: "Problem Solving"
  },
  {
    title: "Hackathon Prototype Recognition",
    issuer: "Tech Fest / Innovation Hackathon",
    year: "2024",
    description: "Selected as finalist for building 'Toys and Games Echo World'—an innovative waste-to-play sustainability platform prototype.",
    category: "Hackathon",
    badge: "Finalist"
  },
  {
    title: "Academic & Systems Excellence",
    issuer: "Department of Computer Science & Engineering",
    year: "2023 — 2024",
    description: "Recognized for high academic dedication and successfully delivering complex multi-tier project architectures.",
    category: "Academic",
    badge: "Academic Merit"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    // TODO: REPLACE WITH YOUR CERTIFICATE TITLE
    title: "Full-Stack Web Development & Modern Frameworks",
    // TODO: REPLACE WITH ISSUER (Coursera, Udemy, NPTEL, freeCodeCamp, etc.)
    issuer: "[TODO: e.g. Coursera / Udemy / NPTEL]",
    date: "2024",
    // TODO: REPLACE WITH CREDENTIAL ID OR LEAVE PLACEHOLDER
    credentialId: "[TODO: e.g. UC-XXXX-XXXX]",
    skillsGained: ["React", "REST APIs", "Node.js", "State Management"],
    // TODO: REPLACE WITH YOUR VERIFICATION URL OR LEAVE EMPTY
    credentialUrl: ""
  },
  {
    // TODO: REPLACE WITH YOUR CERTIFICATE TITLE
    title: "Data Structures & Algorithms Specialization",
    issuer: "[TODO: e.g. NPTEL / LeetCode / GeeksforGeeks]",
    date: "2024",
    credentialId: "[TODO: Optional Credential ID]",
    skillsGained: ["Graph Algorithms", "Trees", "Sorting", "Complexity Analysis"],
    credentialUrl: ""
  },
  {
    // TODO: REPLACE WITH YOUR CERTIFICATE TITLE
    title: "Database Management Systems (DBMS) & SQL",
    issuer: "[TODO: e.g. Oracle / Coursera / NPTEL]",
    date: "2023",
    credentialId: "[TODO: Optional Credential ID]",
    skillsGained: ["Relational Schema Design", "SQL Queries", "Transactions", "ACID"],
    credentialUrl: ""
  },
  {
    // TODO: REPLACE WITH YOUR CERTIFICATE TITLE
    title: "Machine Learning & Python for Data Science",
    issuer: "[TODO: e.g. Coursera / Kaggle / DeepLearning.AI]",
    date: "2024",
    credentialId: "[TODO: Optional Credential ID]",
    skillsGained: ["Supervised Learning", "Scikit-Learn", "EDA", "Model Evaluation"],
    credentialUrl: ""
  }
];
