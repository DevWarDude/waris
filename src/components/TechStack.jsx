import { useEffect, useRef } from "react";
import {
  // NextSVG,
  ReactSVG,
  ReactQuery,
  JavaScriptSVG,
  ReduxSVG,
  GSAP,
  Supabase,
  StyledComponent,
  Tailwind,
  FramerMotion,
} from "./SVGs";
import gsap from "gsap";

const TECHSTACK = [
  // {
  //   icon: NextSVG,
  //   name: "Next.js",
  // },
  { icon: ReactSVG, name: "React" },
  { icon: JavaScriptSVG, name: "JavaScript" },
  { icon: Tailwind, name: "Tailwind " },
  { icon: ReduxSVG, name: "Redux" },
  { icon: ReactQuery, name: "React Query" },
  { icon: Supabase, name: "Supabase" },
  { icon: GSAP, name: "GSAP " },
  { icon: FramerMotion, name: "Framer Motion" },
  { icon: StyledComponent, name: "Styled Component" },
];

function TechStack() {
  const iconsRef = useRef([]);

  useEffect(() => {
    gsap.to(".code", {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      duration: 2.5,
    });

    gsap.fromTo(
      ".icon-container",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".icon-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      iconsRef.current,
      {
        y: 40,
        x: 20,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        ease: "bounce.out",
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".icon-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".codeImg",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        scaleX: 0.2,
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".codeImg",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".title",
      {
        y: -40,
        x: -40,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className="mt-24">
      <h1 className="title text-center text-3xl sm:font-bold sm:tracking-wide lg:text-start lg:text-5xl">
        My Tech Stack
      </h1>
      <div className="grid-cols-2 items-start gap-10 lg:mt-20 lg:grid">
        <div className="icon-container mt-7 grid grid-cols-3 flex-col gap-x-2 gap-y-6 rounded-3xl bg-[#0E0E0E] px-5 py-8 text-base leading-6 text-stone-200 sm:mt-10 sm:px-7 sm:py-10 md:gap-x-5 lg:mt-0 lg:gap-y-10">
          {TECHSTACK.map((stack, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 text-center sm:gap-3"
                ref={(el) => (iconsRef.current[index] = el)}
              >
                <stack.icon className="w-[25px] sm:w-[35px] sm:rounded-md md:w-[50px] lg:w-[38px]" />

                <span className="text-left text-sm font-bold sm:text-base md:text-lg">
                  {stack.name}
                </span>
              </div>
            );
          })}
        </div>
        <img
          src="code.pic.png"
          alt="Codes"
          className="code codeImg mt-12 rounded-3xl sm:mt-20 lg:mt-[20px]"
        />
      </div>
    </div>
  );
}

export default TechStack;
