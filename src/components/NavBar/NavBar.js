import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const NavBar = () => {
    return (
          <Navbar className="float-right bg-green shadow-lg" expand="sm">
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
              <Nav className="m-auto snip1217">
                <NavLink to="/about" className="text-white text-center p-2" data-hover="Home"><i class="fa fa-user" aria-hidden="true"></i><br />ABOUT ME</NavLink>
                <NavLink to="/resume" className="text-white text-center p-2"><i class="fa fa-graduation-cap" aria-hidden="true"></i><br />RESUME</NavLink>
                <NavLink to="/portfolio" className="text-white text-center p-2"><i class="fa fa-briefcase" aria-hidden="true"></i><br />PORTFOLIO</NavLink>
                <NavLink to="/blogs" className="text-white text-center p-2"><i class="fa fa-pencil" aria-hidden="true"></i><br />BLOGS</NavLink>
                <NavLink to="/contact" className="text-white text-center p-2"><i class="fa fa-phone" aria-hidden="true"></i><br />CONTACT</NavLink>
              </Nav>
          </Navbar>
    );
};

export default NavBar;