import "./App.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import OurTeam from "./OurTeam/OurTeam";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import OurServices from "./OurServices/OurServices";

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <About />
      <OurServices />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
