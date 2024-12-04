import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Header />
      <Home className="section" />
      <Projects className="section" />
      <Experience className="section" />
      <Footer className="section" />
    </>
  );
}

export default App;
