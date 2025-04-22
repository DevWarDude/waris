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
        if (link === "Resume")
          return (
            <a
              key={index}
              href="Ganiu-Waris-FlowCV-Resume.pdf"
              className="desktop-nav"
              target="_blank"
              ref={(el) => (linkRefs.current[index] = el)}
            >
              {link}
            </a>
          );

        return (
          <div
            key={index}
            onClick={() => handleDesktopNav(link)}
            className="desktop-nav"
            ref={(el) => (linkRefs.current[index] = el)}
          >
            {link}
          </div>
        );
      })}
    </>
  );
}

DesktopNav.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default DesktopNav;
