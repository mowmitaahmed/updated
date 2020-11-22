import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Particles from 'react-particles-js';
import Mowmita from '../../images/mowmitaAhmed.jpg';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../NavBar/NavBar';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
global.AOS = AOS;

const About = () => {
    return (
      <div className="container-fluid">
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-9 col-sm-12 col-12 bg-green-opacity main-area">
                <div class="header">
                  <div class="progress-container">
                    <div class="progress-bar" id="myBar"></div>
                  </div>
                </div> 
                <div className="container">
                  {/* About Area */}
                  <div className="row mb-4 about_me_area">
                    <div className="btn-2 col-md-10 bg-white shadow-lg rounded w-100 mt-5 mx-3 pt-5 px-4 pb-5" data-aos="fade-up">
                      <div className="row about_me">
                          <div className="col-md-12">
                             <h2 className="text-center h2-responsive text-white p-3" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1500">Hi, I'am Mowmita.</h2>
                             <h4 className="text-center h4-responsive">A Front End Engineer & JavaScript Developer</h4>
                             <p className="p-responsive text-center text-secondary mt-4">I am Mowmita Ahmed Chowdhury a MERN Stack Web Developer. Skilled in JavaScript, ES6, Data Structure, OOP, React Js, Node Js, Express Js, MogoDb, Mongoose, React Router, React Bootstrap, React Hook Form, React Google Map, REST API, Sass, Material-UI, HTML5, CSS3, Bootstrap, Stripe Payment Gateway, Firebase Hosting & Authentication, Netlify, Heroku, Git, GitHub, VS Code, Chrome Dev Tools, Trello etc.
My Hobby is traveling.</p>
                             <p className="p-responsive text-center text-secondary">Having a Computer Science background, I look forward to learning and research more and more about new technology and ready to face all kinds of challenges with a view to establishing myself as someone with excellent creativity, professional skills and leadership abilities which I would love to implement in real life for making this world a much better place.</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NavBar></NavBar>
            </div>
        </div>
      </div>
    );
};

export default About;