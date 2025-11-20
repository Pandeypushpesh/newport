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
};

export type EducationItem = {
  title: string;
  institution: string;
  detail: string;
};

export type ResumeData = {
  name: string;
  role: string;
  summary: string;
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
};

export const resumeData: ResumeData = {
  name: "Pushpesh Kumar",
  role: "Computer Science & Engineering Student (2027) | Full Stack Developer",
  summary:
    "Enthusiastic and detail-oriented B.Tech CSE (3rd Year) student with strong foundations in DSA, OS, DBMS, CN, and OOPs. Passionate about backend development, scalable systems, and crafting reliable full-stack experiences with React.js, Node.js, and MongoDB.",
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
      items: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "MVC",
        "CORS"
      ]
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
      items: ["DSA", "OS", "DBMS", "CN", "OOPs"]
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
      title: "Gamez Adda",
      description:
        "Interactive React.js gaming experience that blends engaging UI with performant state management for immersive play sessions.",
      tech: ["React.js", "Context API", "Animations"],
      image: "/projects/gamez-adda.svg",
      link: "#"
    },
    {
      title: "Samyakriti",
      description:
        "Secure digital contract farming platform that streamlines payments, onboarding modules, and compliance workflows for farmers.",
      tech: ["MERN Stack", "Payments", "JWT Auth"],
      image: "/projects/samyakriti.svg",
      link: "#"
    }
  ],
  education: [
    {
      title: "B.Tech CSE",
      institution: "",
      detail: "CGPA 8.60"
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
  ]
};

