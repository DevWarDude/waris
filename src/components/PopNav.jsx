import PropTypes from "prop-types";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function PopNav({ isOpen, scrollToSection, setIsOpen }) {
  const menuRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
      );

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
    }
  }, [isOpen]);

  const links = ["Projects", "Resume", "About", "Contact"];

  function handlePopMenu(text) {
    scrollToSection(`${text?.toLocaleLowerCase()}`);
    setIsOpen((is) => !is);
  }

  return (
    isOpen && (
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-[2] flex translate-y-[0%] items-center bg-[#0a0a0a] px-7 transition-all duration-200 ${isOpen ? "translate-y-0" : ""} `}
      >
        <ul
          className="-mt-3 flex flex-col gap-10 text-lg text-stone-50"
          ref={menuRef}
        >
          {links.map((text, i) => {
            if (text === "Resume")
              return (
                <a
                  target="_blank"
                  key={i}
                  href="Ganiu-Waris-FlowCV-Resume.pdf"
                  className="text-lg font-extrabold"
                  ref={(el) => (linkRefs.current[i] = el)}
                >
                  {text}
                </a>
              );

            return (
              <li
                key={text}
                ref={(el) => (linkRefs.current[i] = el)}
                className="text-lg font-extrabold"
                onClick={() => handlePopMenu(text)}
              >
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}

PopNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default PopNav;
