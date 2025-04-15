import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function DesktopNav({ scrollToSection }) {
  const linkRefs = useRef([]);
  const links = ["Projects", "Resume", "About", "Contact"];

  function handleDesktopNav(text) {
    console.log(text);
    scrollToSection(`${text?.toLowerCase()}`);
  }

  useEffect(() => {
    gsap.fromTo(
      linkRefs.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        delay: 0.2,
        duration: 0.3,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <>
      {links.map((link, index) => {
        return (
          <li
            key={index}
            onClick={() => handleDesktopNav(link)}
            className="relative hidden cursor-pointer list-none items-center text-xl font-medium tracking-wide after:block after:h-0.5 after:origin-left after:scale-x-0 after:bg-stone-200 after:transition-all after:duration-300 hover:after:scale-x-100 sm:block"
            ref={(el) => (linkRefs.current[index] = el)}
          >
            {link}
          </li>
        );
      })}
    </>
  );
}

DesktopNav.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default DesktopNav;
