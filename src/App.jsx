import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import OurStory from "./OurStory/OurStory";
import OurTeam from "./OurTeam/OurTeam";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <OurStory />
      <OurTeam />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
