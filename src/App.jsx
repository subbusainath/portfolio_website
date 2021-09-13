import "./App.scss";
import { useState } from "react";
import Menu from "./Components/menu/menu";
import Intro from "./Components/intro/intro";
import Topbar from "./Components/topbar/topbar";
import Portfolio from "./Components/portfolio/portfolio";
import Works from "./Components/works/works";
import Testimonials from "./Components/testimonials/testimonials";
import Contact from "./Components/contact/contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
