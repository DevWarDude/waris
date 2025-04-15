import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialLink from "./SocialLink";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const emailRef = useRef();
  const actualEmail = "Warisganiu830@gmail.com";

  useEffect(() => {
    const element = emailRef.current;
    const chars = "!@#$%^&*()_+=-{}[]|:;<>?,";

    ScrollTrigger.create({
      trigger: element,
      start: "top 100%",
      once: true,
      onEnter: () => {
        let iterations = 0;
        const interval = setInterval(() => {
          element.innerText = actualEmail
            .split("")
            .map((char, i) => {
              if (i < iterations) {
                return actualEmail[i];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          if (iterations >= actualEmail.length) {
            clearInterval(interval);
          }
          iterations += 1 / 3;
        }, 50);
      },
    });

    gsap.fromTo(
      ".hello",
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".span",
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".social",
      {
        y: -40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <footer
      className="footer contact mt-12 flex flex-col items-start gap-8 pb-3"
      id="contact"
    >
      <div className="flex w-[100%] items-start justify-between gap-1">
        <div className="flex flex-col">
          <h1 className="hello text-3xl md:text-4xl lg:text-5xl">Say hello</h1>
          <span className="span text-sm text-stone-400 md:text-lg">
            Have a project in mind? Lets work together
          </span>
        </div>
        <img
          src="arrow-bottom-left.8b772827.svg"
          alt="Arrow"
          className="w-10 md:w-14 lg:w-16"
        />
      </div>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=warisganiu830@gmail.com&su=Let's%20Talk&body=Hi%20there!"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3"
      >
        <button
          className="font-mono text-2xl text-zinc-200 text-opacity-50 active:text-opacity-100 md:text-4xl lg:text-5xl"
          ref={emailRef}
        >
          Warisganiu830@gmail.com
        </button>
      </a>
      <SocialLink className="social" iconClassName="lg:text-4xl md:text-3xl" />
    </footer>
  );
}

export default Footer;
