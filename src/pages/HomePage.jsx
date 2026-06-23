import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import SideNav from "../components/SideNav";
import { PageTransition } from "../animations/PageTransition";

function HomePage() {
  return (
    <PageTransition>
      <Header />
      <SideNav />
      <div className="relative z-10 w-full">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </PageTransition>
  );
}

export default HomePage;
