import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function About() {
  useEffect(() => {
    gsap.fromTo(
      ".about-container",
      {
        y: 40,

        opacity: 0,
      },
      {
        y: 0,

        opacity: 1,
        ease: "power1",
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".about",
      { clipPath: "circle(0% at 50% 50%)" },
      {
        clipPath: "circle(75% at 50% 50%)",
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".about-title",
      {
        y: 40,
        x: 40,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back",
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".bio-text-1",
      {
        text: "",
      },
      {
        text: "I write code, break things, fix them, and somehow make it all work. I build web apps with Next.js and React, making sure they don`t just run but run well. Sometimes, I add animations, because why not?",
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".bio-text-2",
      {
        text: "",
      },
      {
        text: " I`ve built dashboards, always finding new ways to make things faster, smoother, and less boring. If I`m not coding, I`m probably playing with the Virtual DJ software.",
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <div className="about-container mt-24 flex flex-col gap-3" id="about">
      <h1 className="about-title text-center font-jost text-3xl font-medium sm:font-bold sm:tracking-wide lg:text-5xl">
        Building and Fixing
      </h1>
      <div className="items-center gap-10 lg:flex">
        <div className="about mt-7 flex flex-col gap-7 rounded-3xl bg-[#0E0E0E] px-5 py-8 text-base leading-6 text-stone-300 sm:text-lg sm:text-opacity-75 md:text-xl lg:px-8 lg:text-2xl">
          <p className="bio-text-1"></p>
          <p className="bio-text-2"></p>
        </div>
        <img src="person.webp" alt="Emoji" className="mt-3 hidden lg:block" />
      </div>
    </div>
  );
}

export default About;
