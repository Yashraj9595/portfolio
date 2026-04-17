import { AIIcon } from "@/components/icons/ai";
import { WebIcon } from "@/components/icons/web";
import { DevopsIcon } from "@/components/icons/devops";
import { DatabaseIcon } from "@/components/icons/database";
import { CodeIcon } from "@/components/icons/code";
import { MobileIcon } from "@/components/icons/mobile";

import { DiJsBadge, DiMysql, DiReact } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { TbBrandNodejs, TbBrandCpp } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import cppBlogConfig from "@/config/cpp-blogs";
import { DSABlogConfigsType } from "@/types";
import jsBlogConfig from "@/config/javascript-blogs";
import { Project } from "@/app/page";

export const blogCategories = [
  {
    category: "Data Structure and Algorithm",
    icon: <CodeIcon className="h-10" />,
    href: "/blogs/dsa",
  },
  {
    category: "Web Development",
    icon: <WebIcon className="h-10" />,
    href: "/blogs/web-development",
  },
  {
    category: "App Development",
    icon: <MobileIcon className="h-10" />,
    href: "/blogs/app-development",
  },
  {
    category: "Artificial Intelligence",
    icon: <AIIcon className="h-10" />,
    href: "/blogs/ai",
  },
  {
    category: "Database",
    icon: <DatabaseIcon className="h-10" />,
    href: "/blogs/database",
  },
  {
    category: "DevOps",
    icon: <DevopsIcon className="h-10" />,
    href: "/blogs/devops",
  },
] as const;

export const mySkills = [
  {
    title: "Javascript",
    icon: (
      <DiJsBadge className="h-8 w-8 group-hover:scale-110 text-yellow-500" />
    ),
  },

  {
    title: "React Js",
    icon: <DiReact className="h-8 w-8 group-hover:scale-110 text-blue-500" />,
  },

  {
    title: "Next Js",
    icon: <SiNextdotjs className="h-8 w-8 group-hover:scale-110" />,
  },

  {
    title: "Node Js",
    icon: (
      <TbBrandNodejs className="h-8 w-8 group-hover:scale-110 text-green-500" />
    ),
  },

  {
    title: "Express Js",
    icon: (
      <CodeIcon className="h-8 w-8 group-hover:scale-110 text-blue-500" />
    ),
  },

  {
    title: "MongoDb",
    icon: (
      <DiMongodb className="h-8 w-8 group-hover:scale-110 text-green-500" />
    ),
  },

  {
    title: "Linux VPS",
    icon: <DevopsIcon className="h-8 w-8 group-hover:scale-110" />,
  },

  {
    title: "NGINX",
    icon: <WebIcon className="h-8 w-8 group-hover:scale-110" />,
  },

  {
    title: "Tailwindcss",
    icon: (
      <BiLogoTailwindCss className="h-8 w-8 group-hover:scale-110 text-blue-500" />
    ),
  },

  {
    title: "Git",
    icon: <FaGitAlt className="h-8 w-8 group-hover:scale-110 text-pink-500" />,
  },

  {
    title: "GitHub",
    icon: <FaGithub className="h-8 w-8 group-hover:scale-110" />,
  },

  {
    title: "VS Code",
    icon: <CodeIcon className="h-8 w-8 group-hover:scale-110 text-blue-400" />,
  },

  {
    title: "Postman",
    icon: <WebIcon className="h-8 w-8 group-hover:scale-110 text-orange-500" />,
  },
] as const;

export const languages = ["js", "html", "css", "typescript", "react", "next", "node", "mongodb", "docker", "linux", "nginx", "tailwindcss", "git", "github"] as const;

export const dsaBlogConfig: DSABlogConfigsType = {
  cpp: cppBlogConfig,
  js: jsBlogConfig,
} as const;

const projects: Project[] = [
  {
    tag: "AI Architecture",
    src: "/assets/sanrachna.png",
    title: "Sanrachna – AI Platform",
    description:
      "AI-powered platform that converts raw project ideas into production-ready architectural blueprints using a structured MCQ-driven workflow. Automatically generates roles, modules, API contracts, and scalable file structures.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Live",
      href: "https://sanrachna.proscheduler.in/",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Project",
    src: "/assets/SmartMess.png",
    title: "SmartMess Platform",
    description:
      "Web-based mess management system for meal tracking and billing automation. Designed responsive UI and implemented backend logic for efficient data management.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Live",
      href: "https://smartmess.in",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Project",
    src: "/assets/ProScheduler.png",
    title: "ProScheduler",
    description:
      "Online scheduling and appointment management platform with responsive interface and backend services. Deployed on production server with secure hosting and domain configuration.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Live",
      href: "https://proscheduler.in",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Mentorship",
    src: "/assets/ecommerce.png",
    title: "EduMentor – AI Platform",
    description:
      "Full-stack platform for managing academic projects and mentorship. Features AI mentor recommendations, project idea suggestions, and role-based dashboards for Students and Mentors.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Live",
      href: "https://edu-mentor-gilt.vercel.app/",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
  {
    tag: "Freelance",
    src: "/assets/zyntherraa.png",
    title: "Zyntherraa E-Commerce Platform",
    description:
      "Full-stack e-commerce system built using React, Node.js, and MongoDB with secure backend APIs. Deployed on Linux VPS with NGINX, SSL security, and domain configuration.",
    status: "done",
    borderGradient: true,
    leftButton: {
      title: "Live",
      href: "https://zyntherraa.com",
    },
    rightButton: {
      title: "GitHub",
      href: "#",
    },
  },
];

export default projects;
