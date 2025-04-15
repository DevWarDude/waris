import { useState } from "react";
import Header from "./components/Header";
import TopLayout from "./components/TopLayout";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:bg- bg-[#0a0a0a] px-6 py-8 font-jost text-slate-100 sm:px-10 md:px-16">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <TopLayout />
      <Projects />
      <About />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
