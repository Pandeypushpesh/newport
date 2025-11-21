export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  sourceCode?: string;
};

export type EducationItem = {
  title: string;
  institution: string;
  detail: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon?: string;
};

export type ResumeData = {
  name: string;
  role: string;
  summary: string;
  heroImage?: string;
  hero: {
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
  skills: SkillCategory[];
  projects: Project[];
  education: EducationItem[];
  certifications: string[];
  socialLinks: SocialLink[];
};

export const resumeData: ResumeData = {
  name: "Pushpesh Kumar",
  role: "Computer Science & Engineering Student (2027) | Full Stack Developer",
  summary:
    "I’m Pushpesh Kumar — a CSE student and backend-focused developer who values clarity, responsibility, and honest work. I like building practical, reliable systems and solving problems with clean logic rather than noise. I stay grounded, keep learning, and give my best without overpromising — straightforward, consistent, and professional.",
  heroImage: "/image.png",
  hero: {
    primaryCta: {
      label: "Download Résumé",
      href: "/Pushpesh_Kumar_Resume.pdf"
    },
    secondaryCta: {
      label: "Contact",
      href: "#contact"
    }
  },

  skills: [
    {
      title: "Languages",
      items: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      title: "MERN",
      items: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "MVC", "CORS"]
    },
    {
      title: "Frontend",
      items: ["HTML5", "CSS3", "Tailwind", "Bootstrap", "React Hooks", "Axios"]
    },
    {
      title: "Database",
      items: ["MongoDB", "SQLite3", "MySQL"]
    },
    {
      title: "Core CS",
      items: ["DSA", "OS", "DBMS", "CN", "OOP"]
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Linux", "VS Code", "IBM Cloud"]
    },
    {
      title: "Soft Skills",
      items: ["Problem Solving", "Communication", "Leadership"]
    }
  ],

  projects: [
    {
      title: "nkp-Astro",
      description:
        "Built a fully responsive multi-language website (Hindi/English) for Pandit Ji's spiritual services with modern UI, smooth animations, and devotional theme.",
      tech: ["React.js", "Context API", "Animations"],
      image: "/projects/nkpastro.jpg",
      link: "https://nkpastro.vercel.app/",
      sourceCode: "https://github.com/Pandeypushpesh/panditji"
    },
    {
      title: "Samyakriti",
      description:
        "Developed a full-stack smart farming platform using Next.js 14 and MongoDB with real-time highlights, user authentication, admin console, and modular API architecture.",
      tech: ["MERN Stack", "Payments", "JWT Auth"],
      image: "/projects/samyak.jpg",
      link: "https://samyakriti.vercel.app/",
      sourceCode: "https://github.com/Pandeypushpesh/SamyakritiAgriTech"
    }
  ],

  education: [
    {
      title: "B.Tech",
      institution: "Computer Science & Engineering",
      detail: "CGPA: 8.60"
    },
    {
      title: "Class 12",
      institution: "CBSE",
      detail: "89%"
    },
    {
      title: "Class 10",
      institution: "CBSE",
      detail: "93.2%"
    }
  ],

  certifications: [
    "IBM SkillsBuild: Advanced DSA & Algorithms",
    "IBM Cloud: Application Development Foundations",
    "Google Cloud Career Practitioner Program",
    "Infosys Springboard: MERN Stack Development"
  ],

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Pandeypushpesh"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/pushpeshpk/"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/pushpesh.pk/"
    }
  ]
};
