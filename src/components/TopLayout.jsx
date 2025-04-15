import gsap from "gsap";
import { useEffect, useRef } from "react";
import SocialLink from "./SocialLink";

function TopLayout() {
  const textRef = useRef(null);

  useEffect(() => {
    const phrases = ["Ganiu Waris", "Front-End Dev"];
    let index = 0;

    const animateText = () => {
      gsap.to(textRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: "power2.in",
        delay: 0,
        onComplete: () => {
          index = (index + 1) % phrases.length;
          textRef.current.textContent = phrases[index];
          gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.5 });
        },
      });
    };

    gsap.fromTo(
      ".avatar",
      { rotate: -140, scale: 0.5 },
      { duration: 0.5, rotate: 0, ease: "circ.out", scale: 1 },
    );

    gsap.fromTo(".text", { y: 50 }, { duration: 0.8, y: 0, ease: "power1" });

    gsap.fromTo(
      ".socials",
      { x: "-25%", opacity: 0 },
      { duration: 1, x: 0, ease: "power2.out", opacity: 1 },
    );

    gsap.to(".left", {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      duration: 2.5,
    });

    gsap.to(".right", {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      duration: 5,
    });

    const interval = setInterval(animateText, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mt-[170px] flex flex-col items-center justify-center gap-2 text-center lg:relative lg:mt-[220px]">
        <img
          src="left.webp"
          className="left absolute left-[-64px] hidden w-28 lg:block"
          alt=""
        />
        <img src="person.webp" alt="" className="avatar mb-6 w-12 lg:w-20" />
        <h1 className="text font-audiowide text-3xl font-extrabold text-neutral-500 lg:text-6xl">
          Hello there,
        </h1>
        <h1 className="text font-audiowide text-3xl font-extrabold lg:text-6xl">
          I`m{" "}
          <span ref={textRef} className="name">
            Ganiu Waris
          </span>
        </h1>
        <p className="text text-base text-stone-300 sm:mx-3 sm:mt-5 sm:text-lg sm:text-opacity-90 md:mx-20 md:text-lg lg:w-[65%] lg:text-xl">
          I`m a Frontend Developer who Create sleek, responsive web interfaces
          with React, GSAP and Tailwind CSS. Passionate about design,
          performance, and seamless user experiences.
        </p>
        <img
          src="right.webp"
          className="right absolute bottom-[-100px] right-[-64px] hidden w-36 lg:block"
          alt=""
        />
      </div>

      <div className="socials my-24 sm:mt-14">
        <SocialLink
          className="md:gap-7 lg:gap-10"
          iconClassName="lg:text-5xl md:text-4xl"
        />
      </div>
      <div className="test flex h-24 w-[100%] justify-center sm:-mt-32 md:h-28 lg:-mt-56"></div>
    </>
  );
}

export default TopLayout;
