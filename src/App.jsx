import "./App.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import OurTeam from "./OurTeam/OurTeam";
import About from "./About/About";

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <About />
      <OurTeam />
    </div>
  );
}

export default App;
