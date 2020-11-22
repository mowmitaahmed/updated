import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Particles from 'react-particles-js';
import Mowmita from '../../images/mowmitaAhmed.jpg';
import Typical from 'react-typical'

const Sidebar = () => {
    return (
        <div className="col-md-3 col-sm-12 col-12 bg-green sidebar d-flex justify-content-center align-items-center">
          <div className="sidebar-profile text-center text-white">
            <Link to="/">
              <img className="img-fluid img-profile rounded-circle mx-auto my-2" src={Mowmita} alt={Mowmita} />
            </Link>
            <h1 className="h1-responsive text-center">MOWMITA AHMED CHOWDHURY</h1>
            <Typical
        steps={['Front End Developer', 2200, 'JavaScript Developer', 2200]}
        loop={Infinity}
        wrapper="h4"
      />
             <a href="https://drive.google.com/uc?export=download&id=1pOGQaoy88C1VBoAeu9dz2VH2X1lyfEA_" className="btn text-white hvr-grow hvr-icon-down mt-5 mb-2"><span className="h6 mr-2">Download CV</span><i className="fa fa-arrow-circle-o-down hvr-icon"></i></a>                      
            <section className="text-center">
                <div className="social-icon-wrap social-icon-effect-3 social-icon-effect-3b">
                    <a href="https://www.linkedin.com/in/mowmitaahmed/" target="_blank" className="social-icon mr-3 mb-3"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/mowmita.ahmed2/" target="_blank" className="social-icon mr-3 mb-3"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://github.com/mowmitaahmed" target="_blank" className="social-icon mr-3 mb-3"><i className="fa fa-github-alt" aria-hidden="true"></i></a>
                    <a href="mailto:ahmedmowmita@gmail.com?Subject=Hello Mowmita" target="_blank" className="social-icon mr-3 mb-3"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                    <a href="skype:ahmedmowmita@gmail.com?call" target="_blank" className="social-icon mb-3"><i className="fa fa-skype" aria-hidden="true"></i></a>
                </div>
            </section>
          </div>
          <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 160,
                      "density": {
                          "enable": true
                      }
                  },
                  "size": {
                      "value": 10,
                      "random": true
                  },
                  "move": {
                      "direction": "bottom",
                      "out_mode": "out"
                  },
                  "line_linked": {
                      "enable": false
                  }
              },
              "interactivity": {
                  "events": {
                      "onclick": {
                          "enable": true,
                          "mode": "remove"
                      }
                  },
                  "modes": {
                      "remove": {
                          "particles_nb": 10
                      }
                  }
              }
          }} />
        </div>
    );
};

export default Sidebar;