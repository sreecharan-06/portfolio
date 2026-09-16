# ⚡ Premium Developer Portfolio Website

A modern, recruiter-attracting developer portfolio website built from scratch using **React 18**, **Vite 6**, **TypeScript**, and **Tailwind CSS**. 

Engineered with a high-end dark glassmorphic design, subtle glowing accents, an interactive code terminal visual, dynamic project filtering, ATS-friendly resume preview, and clean component-based architecture.

---

## 🚀 Live Demo & Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: TypeScript / Modern JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism & Micro-animations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & JetBrains Mono (via Google Fonts)

---

## 🌟 Key Features

1. **Sticky Glassmorphic Navbar**: Dynamic blur on scroll, mobile drawer with escape listeners, active section indicators, and quick-access Resume button.
2. **Impactful Hero Section**:
   - Compelling value proposition for recruiters.
   - Interactive developer code terminal visual featuring tabbed code snippets (`profile`, `tech stack`, `system design`).
   - Quick action CTAs (*View Projects*, *Download Resume*, *Contact Me*) and social links.
   - Professional badges: `BTech CSE`, `Full Stack Developer`, `Problem Solver`.
3. **Structured About Me Section**:
   - Focus domains: Software Engineering, Full Stack, AI, Data Structures & Algorithms, Backend Systems, DBMS.
   - Developer profile card with verified competencies and work ethic highlights.
4. **Interactive Categorized Skills Section**:
   - 6 structured categories: Programming Languages, Frontend, Backend, Databases & Storage, Developer Tools, and Core Computer Science.
   - Filter pills and live instant search across skills.
   - Clean, verified skill badges without arbitrary or fake proficiency percentages.
5. **Featured Projects Showcase with Working Filters**:
   - Filters: `All Projects`, `Full Stack`, `Web`, `AI / ML`, `DSA & Algorithms`, `Hackathon`.
   - Prominent cards for top flagship systems.
   - Interactive **Deep Dive & Architecture modal** detailing system design, microservices, and technical specs.
   - Includes:
     - **StudentInsightHub / TaskHub** (React + Vite, FastAPI Gateway, Spring Boot, PostgreSQL, Node.js, MongoDB, JWT, RBAC)
     - **ParkSmart** (BST slot allocation, AVL tree logs, Graph BFS & Dijkstra routing)
     - **CareerPath** (HTML5, CSS3, JavaScript, LocalStorage Auth)
     - **Placement Prediction System** (Python, Machine Learning, EDA, Flask)
     - **Toys and Games Echo World** (Waste-to-Play Hackathon Prototype)
6. **Academic Foundation & Education Timeline**:
   - Details Bachelor of Technology in Computer Science & Engineering at K L Deemed to be University (KLU).
   - Relevant coursework and academic honors.
7. **Activities & Initiatives**:
   - Dedicated timeline for Hackathons, Technical Projects, Coding/DSA Practice, and Continuous Learning.
8. **Documented Achievements & Certifications**:
   - LeetCode problem solving streak and competitive coding milestones.
   - Cards for MOOCs and specialized certifications.
9. **GitHub & Open Source Showcase**:
   - Pinned repositories and invitation for recruiters to inspect code quality.
10. **Client-Side Validated Contact Form**:
    - Validates required fields and email formatting.
    - Demonstrates smooth submission feedback with direct mailto fallback and one-click email copying.
11. **ATS Resume Modal**:
    - Accessible modal preview of the candidate's resume with a direct PDF download trigger.

---

## 📁 Project Directory Structure

```
portfolio/
├── index.html                  # Vite HTML entry point with modern SEO & Open Graph meta tags
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom theme color tokens and animations
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundler configuration
├── public/                     # Static assets
│   └── resume.pdf              # Your PDF resume for downloading
└── src/
    ├── main.tsx                # Application mounting entry point
    ├── App.tsx                 # Core page layout, active scrollspy & modal orchestration
    ├── index.css               # Tailwind directives, glassmorphism, scrollbars & glowing utilities
    ├── types/
    │   └── index.ts            # TypeScript interfaces for all entities
    ├── data/
    │   └── portfolioData.ts    # ⭐ CENTRAL CONFIGURATION FILE (Edit your details here)
    └── components/
        ├── Navbar.tsx          # Sticky glass navigation with mobile drawer
        ├── Hero.tsx            # Hero headline, CTAs, interactive terminal
        ├── About.tsx           # CSE candidate profile and core domains
        ├── Skills.tsx          # Categorized skill cards with instant search
        ├── Projects.tsx        # Project cards with dynamic filters & architecture modal
        ├── Education.tsx       # Timeline for KL University & coursework
        ├── Experience.tsx      # Technical projects, hackathons & coding practice
        ├── Achievements.tsx    # Honors, awards & problem-solving milestones
        ├── Certifications.tsx  # Coursework & MOOC credentials
        ├── GitHubProfile.tsx   # GitHub showcase & pinned repository cards
        ├── Contact.tsx         # Validated contact form with mailto fallback
        ├── Footer.tsx          # Footer with quick links & back-to-top button
        └── ResumeModal.tsx     # ATS-style resume preview & download dialog
```

---

## 🛠️ Quickstart & Local Development

### 1. Install Dependencies
Make sure you have Node.js (v18+) installed. In the portfolio directory, run:
```bash
npm install
```

### 2. Run Local Development Server
Start the Vite development server with hot-module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
Create an optimized production bundle:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Personal Information

All personal data, projects, links, and contact channels are centralized in one easy-to-edit file:
👉 **`src/data/portfolioData.ts`**

Simply search for `TODO: REPLACE WITH YOUR INFORMATION` in `src/data/portfolioData.ts`:

### 1. Update Personal Info & Socials
```typescript
export const personalInfo = {
  name: "Your Full Name",
  roleTitle: "BTech Computer Science Student & Developer",
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  leetcode: "https://leetcode.com/your-username",
  location: "City, Country",
  resumeUrl: "/resume.pdf",
};
```

### 2. Add or Customize Projects
Open `projectsData` in `src/data/portfolioData.ts`. Each project supports:
- `title`: Project title
- `category`: `'all' | 'fullstack' | 'web' | 'ai-ml' | 'dsa' | 'hackathon'`
- `shortDescription` & `longDescription`
- `keyFeatures`: Bullet points of major functionalities
- `technologies`: Detailed breakdown (frontend, backend, database, etc.)
- `architectureNotes`: System design overview for the deep-dive modal
- `githubUrl` & `liveDemoUrl`: Links to source code and deployed application

### 3. Add Your Resume PDF
Place your actual PDF resume file into the `public/` directory and name it `resume.pdf`:
```
public/
  └── resume.pdf
```
Both the "Download Resume" buttons and the "Resume Modal" will immediately link to it.

### 4. Update Education & CGPA
In `src/data/portfolioData.ts`, edit the `educationData` array with your actual graduation year, CGPA, and coursework.

---

## 🚢 How to Deploy

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Deploy to Netlify
1. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'`.
2. Run `npm run build` and push the `dist/` contents to a `gh-pages` branch.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
