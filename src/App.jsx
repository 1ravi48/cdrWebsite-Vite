import "./App.css";

import Nav from "./Nav/Nav";
import SectionTitle from "./Reusables/SectionTitle/SectionTitle";
import MemberProfile from "./Reusables/MemberProfile/MemberProfile";
import Ravi from "./assets/images/ravi-small.jpg";
import Hero from "./Hero/Hero";

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <SectionTitle title="About Us" />
      <MemberProfile
        image={Ravi}
        name="Ravi Kataria"
        title="Software Developer"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate sit dolorem sed esse sequi facilis repudiandae officia recusandae quae? Consequuntur architecto nobis enim ipsam quis qui, aliquid quo quidem?"
      />
    </div>
  );
}

export default App;
