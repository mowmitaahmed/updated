import { Nav, Navbar} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Particles from 'react-particles-js';
import Mowmita from './images/mowmitaAhmed.jpg';
import './App.css';
import About from './components/About/About';
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import AOS from 'aos';
import 'aos/dist/aos.css';
global.AOS = AOS;


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <About></About>
        </Route>
        <Route path="/about">
           <About></About>
        </Route>
        <Route path="/portfolio">
           <Portfolio></Portfolio>
        </Route>
        <Route path="/blogs">
           <Blogs></Blogs>
        </Route>
        <Route path="/resume">
           <Resume></Resume>
        </Route>
        <Route path="/contact">
           <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
