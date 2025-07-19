import { FaGithub } from "react-icons/fa";
import {
  GSAP,
  JavaScriptSVG,
  ReactSVG,
  Tailwind,
  CSS,
  HTML,
  Supabase,
  ReactQuery,
  FramerMotion,
} from "./SVGs";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Hoobank Static Landing Page",
    description:
      "A modern, responsive static website inspired by the Hoobank landing page. Built with React andTailwind CSS it emphasizes clean UI.",
    techStack: [{ icon: ReactSVG }, { icon: Tailwind }],
    projectImg: "hoobank-pic.png",
    projectLink: "https://fox-hoobank.vercel.app/",
    gitHubLink: "https://github.com/DevWarDude/hoobank",
    className: "hoobank",
    linkClassName: ["hoobank-preview", "hoobank-view"],
  },
  {
    title: "Designo Agency Website Clone – Modern, Responsive UI",
    description:
      "A fully responsive clone of the Designo creative agency website, built with modern front-end technologies. Designed with attention to detail, smooth animations, and pixel-perfect layouts that adapt seamlessly across devices.",
    techStack: [{ icon: ReactSVG }, { icon: Tailwind }, { icon: GSAP }],
    projectImg: "designo.png",
    projectLink: "https://fox-designo.vercel.app/",
    gitHubLink: "https://github.com/DevWarDude/Designo",
    className: "designo",
    linkClassName: ["designo-preview", "designo-view"],
  },
  {
    title: "Etsy Clone – Frontend E-Commerce Demo (HTML, CSS, JavaScript)",
    description:
      "A responsive Etsy-inspired e-commerce website built with pure HTML, CSS, and JavaScript. This frontend demo replicates key features of Etsy’s UI",
    techStack: [{ icon: HTML }, { icon: CSS }, { icon: JavaScriptSVG }],
    projectImg: "fox-shop.png",
    projectLink: "https://fox-e-commerce.vercel.app",
    gitHubLink: "https://github.com/DevWarDude/Designo",
    className: "fox-shop",
    linkClassName: ["fox-preview", "fox-view"],
  },
  {
    title: "Horizon – Personal Finance Dashboard",
    description:
      "Horizon is a modern, responsive personal finance web application designed to help users manage their accounts, monitor transactions, and apply for loans effortlessly.",
    techStack: [
      { icon: ReactSVG },
      { icon: Supabase },
      { icon: Tailwind },
      { icon: ReactQuery },
      { icon: FramerMotion },
    ],
    projectImg: "new-project-pic.png",
    projectLink: "https://fox-horizon.vercel.app/",
    gitHubLink: "https://github.com/DevWarDude/horizon",
    className: "hoobank",
    linkClassName: ["hoobank-preview", "hoobank-view"],
  },
];

function Projects() {
  useEffect(() => {
    gsap.fromTo(
      ".hoobank",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".hoobank",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".hoobank-preview",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hoobank-preview",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".hoobank-view",
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hoobank-view",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );

    // gsap.fromTo(
    //   ".designo-preview",
    //   {
    //     clipPath: "ellipse(0% 0% at 50% 50%)",
    //   },
    //   {
    //     clipPath: "ellipse(100% 100% at 50% 50%)",
    //     duration: 1.2,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".designo-preview",
    //       start: "top 80%",
    //       toggleActions: "play none none none",
    //     },
    //   },
    // );

    gsap.fromTo(
      ".designo",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".designo",
          start: "top 50%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".designo-preview",
      {
        opacity: 0,
        rotate: 90,
      },
      {
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".designo-preview",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".designo-view",
      {
        opacity: 0,
        rotate: -90,
      },
      {
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".designo-view",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".fox-shop",
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".fox-shop",
          start: "top 50%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".fox-preview",
      {
        opacity: 0,
        rotate: -90,
      },
      {
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fox-preview",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".fox-view",
      {
        opacity: 0,
        rotate: 90,
      },
      {
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fox-view",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".techStack",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".techStack",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none ",
        },
      },
    );
  }, []);

  return (
    <div
      className="item-center -mt-14 flex grid-cols-2 flex-col justify-center gap-7 bg-[#0a0a0a] pt-10 md:pt-16 lg:grid lg:pt-32"
      id="projects"
    >
      <div className="lg:text-left">
        <h1 className="text-center text-3xl sm:font-bold sm:tracking-wide md:mb-4 lg:text-left lg:text-5xl">
          Selected Projects
        </h1>
        <span className="hidden text-stone-300 text-opacity-70 lg:block lg:text-left">
          Crafted with attention to detail.
        </span>
      </div>
      {projects.map((project, index) => {
        return (
          <div
            className={`rounded-2xl bg-[#0E0E0E] p-4 md:mt-8 lg:mt-0 lg:flex lg:flex-col lg:gap-5 lg:rounded-3xl lg:p-8 ${project.className}`}
            key={index}
          >
            <img
              src={project.projectImg}
              alt={project.projectImg}
              className="rounded-2xl object-cover lg:h-[250px] lg:rounded-3xl"
            />
            <div className="mt-2 flex flex-col gap-[2px] sm:mt-3">
              <p className="text-lg font-bold lg:text-3xl">{project.title}</p>
              <p className="text-sm text-stone-300 sm:text-base sm:text-opacity-75 lg:text-xl">
                {project.description}
              </p>
              <div className="mt-3 flex items-center gap-5">
                {project.techStack.map((tech, index) => {
                  return (
                    <div key={index}>
                      <tech.icon className="techStack w-[25px] lg:mt-3 lg:w-[35px]" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-5 flex items-center gap-5 lg:text-xl">
              <a
                className={`rounded-xl border-[1px] border-white bg-stone-100 px-3 py-2 text-sm font-extrabold text-black ${project.linkClassName[0]} `}
                href={project.projectLink}
                target="_blank"
              >
                Live Preview
              </a>
              <a
                href={project.gitHubLink}
                className={`view flex items-center gap-2 rounded-xl border-[1px] border-white bg-stone-950 px-3 py-2 text-sm font-extrabold text-stone-100 ${project.linkClassName[1]}`}
                target="_blank"
              >
                View Code <FaGithub />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
