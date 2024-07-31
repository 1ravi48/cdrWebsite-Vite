import "./App.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import OurTeam from "./OurTeam/OurTeam";
import About from "./About/About";
import Story from "./OurStory/OurStory";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <About />
      <Story />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
