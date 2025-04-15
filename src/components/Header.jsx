import { Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import PopNav from "./PopNav";
import DesktopNav from "./DesktopNav";

function Header({ isOpen, setIsOpen }) {
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex flex-col items-center bg-transparent px-6 py-8 sm:px-10 md:px-16">
      <nav className="md: relative z-[3] flex w-[100%] items-center justify-between rounded-full border-[.001rem] border-stone-200 border-opacity-10 px-4 py-5 backdrop-blur-sm sm:w-[610px] sm:px-7 sm:py-4 md:px-6 lg:mt-14">
        <div className="sm:hidden">
          <button onClick={() => setIsOpen((is) => !is)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <DesktopNav scrollToSection={scrollToSection} />

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=warisganiu830@gmail.com&su=Let's%20Talk&body=Hi%20there!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-xl border-b-4 border-[rgb(103_65_237_/_var(--tw-bg-opacity))] bg-[rgb(103_65_237_/_var(--tw-bg-opacity))] px-3 py-2 font-semibold transition-all duration-150 hover:border-white focus:border-white active:border-white sm:px-5 sm:py-3 sm:text-lg md:px-5 md:py-3 md:text-xl">
            Let`s work 💻
          </button>
        </a>
      </nav>
      <PopNav
        isOpen={isOpen}
        scrollToSection={scrollToSection}
        setIsOpen={setIsOpen}
      />
    </header>
  );
}

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Header;
