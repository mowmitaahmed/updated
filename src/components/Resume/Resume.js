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
import ProgrammingHero from '../../images/logos/programmingHeroLogo.png';
import FreeCodeCamp from '../../images/logos/freeCodeCamp.jpg';
import CodemanBD from '../../images/logos/codemanBD.png';
import Elementor from '../../images/logos/elementor.jpg';
import Firebase from '../../images/logos/firebase.png';
import Heroku from '../../images/logos/heroku.jpg'; 
import Nelify from '../../images/logos/netlify.png';
import reactRouter from '../../images/logos/router.png';
import JSES6 from '../../images/logos/es6.png';
import Mongoose from '../../images/logos/mongoose.png';
import Material from '../../images/logos/material.png';
import Redux from '../../images/logos/redux.png';
import GoogleMap from '../../images/logos/googleMap.jpg';
import Sidebar from '../Sidebar/Sidebar';
import NavBar from '../NavBar/NavBar';
import './Resume.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
global.AOS = AOS;

const Resume = () => {
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
                    <div className="row mb-2">
                      <div className="resume_area col-md-10 skills bg-white shadow-lg rounded w-100 mt-5 mx-3 pt-4 px-4 pb-5">
                          <h2 className="h2-responsive text-center mb-4">SKILLS</h2>
                          <div className="row">
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center w-100 p-3 hvr-grow">
                                  <i class="devicon-javascript-plain colored"></i>
                                  <p className="mb-0">javascript</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-2 pt-3">
                                  <img className="w-50 mb-1" src={JSES6} alt={JSES6} />
                                  <p className="mb-0">ES6</p>
                              </div>
                            </div>
                            <div className="col-md col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-react-original colored"></i>
                                  <p className="mb-0">ReactJS</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-nodejs-plain colored"></i>
                                  <p className="mb-0">NodeJS</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-express-original colored"></i>
                                  <p className="mb-0">ExpressJS</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-2 pt-3">
                                  <img className="w-75 mb-2" src={Redux} alt={Redux} />
                                  <p className="mb-0">Redux</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-mongodb-plain colored"></i>
                                  <p className="mb-0">MongoDB</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 px-2 pb-3 pt-4">
                                  <img className="w-75 mb-1" src={Mongoose} alt={Mongoose} />
                                  <p className="mb-0">Mongoose</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-sass-original colored"></i>
                                  <p className="mb-0">Sass</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-html5-plain colored"></i>
                                  <p className="mb-0">HTML</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-css3-plain colored"></i>
                                  <p className="mb-0">CSS</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-bootstrap-plain colored"></i>
                                  <p className="mb-0">Bootstrap</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 px-1 pb-2 pt-3">
                                  <img className="w-50 mb-0" src={Material} alt={Material} />
                                  <p className="mb-0">Material Ui</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-wordpress-plain colored"></i>
                                  <p className="mb-0">WP</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-php-plain colored"></i>
                                  <p className="mb-0">PHP</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-mysql-plain colored"></i>
                                  <p className="mb-0">MySQL</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-c-plain colored"></i>
                                  <p className="mb-0">C</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-cplusplus-plain colored"></i>
                                  <p className="mb-0">C++</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-csharp-plain colored"></i>
                                  <p className="mb-0">C#</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-2 pt-3">
                                  <img className="w-50 mb-1" src={Elementor} alt={Elementor} />
                                  <p className="mb-0">Elementor</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-2 pt-3">
                                  <img className="w-50 mb-1" src={Firebase} alt={Firebase} />
                                  <p className="mb-0">Firebase</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-heroku-original colored"></i>
                                  <p className="mb-0">Heroku</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-2 pt-3">
                                  <img className="w-50 mb-1" src={Nelify} alt={Nelify} />
                                  <p className="mb-0">Nelify</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 px-1 pt-0">
                                  <img className="w-50 mb-0" src={reactRouter} alt={reactRouter} />
                                  <p className="mb-0">React Router</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-npm-original-wordmark colored"></i>
                                  <p className="mb-0">npm</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-git-plain colored"></i>
                                  <p className="mb-0">Git</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-github-plain colored"></i>
                                  <p className="mb-0">GitHub</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 p-3">
                                  <i class="devicon-trello-plain colored"></i>
                                  <p className="mb-0">Trello</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-4 mb-3">
                              <div className="single-skill border border-color rounded text-center hvr-grow w-100 px-2 pt-1">
                                  <img className="w-75 mb-2" src={GoogleMap} alt={GoogleMap} />
                                  <p className="mb-0">Google Map API</p>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>

                    {/* Work Experience Area */}
                    <div className="row mb-4">
                      <div className="work_experience_area col-md-10 bg-white shadow-lg rounded w-100 mt-5 mx-3 pt-4 px-4 pb-5">
                          <h2 className="h2-responsive text-center mb-4">Work Experience</h2>
                          <div className="work_experience">
                            <div className="work_experience_header text-white rounded py-3 pl-3">
                              <h6 className="h6-responsive ml-4 mb-0"><i className="fa fa-calendar mr-3" aria-hidden="true"></i>September, 2017 - December, 2017</h6>
                            </div>
                            <div className="work_experience_details bg-white text-secondary shadow-lg rounded ml-2 py-3 px-4">
                                <h4 className="h4-responsive">Intern Software Engineer</h4>
                                <h6 className="h6-responsive"><i className="fa fa-building-o mr-2" aria-hidden="true"></i>Access Tech Bd</h6>
                                <p className="text-secondary my-1">Involved in some american project. Here FeatherJS , ReactJS, Mobx are our stacks</p>
                                <p className="text-dark"><i className="fa fa-map-marker mr-2" aria-hidden="true"></i> Uttara, Dhaka, Bangladesh</p>
                            </div>
                          </div>
                      </div>
                    </div>

                    {/* Courses Area */}
                    <div className="row mb-4">
                      <div className="courses_area col-md-10 bg-white shadow-lg rounded w-100 mt-5 mx-3 pt-4 px-4 pb-5">
                          <div class="container">
                            <h2 class="h2-responsive pb-3 pt-2 mb-4 text-center">Course Completed</h2>
                            {/* <!--first section--> */}
                            <div class="row align-items-center how-it-works d-flex">
                              <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                                <div class="circle font-weight-bold"><i class="fa fa-book" aria-hidden="true"></i></div>
                              </div>
                              <div class="col-9 mb-3 animate__animated animate__fadeInUp">
                                <div className="courses_header text-white rounded py-3 pl-3">
                                  <h6 className="h6-responsive m-0 ml-2"> Complete Web Development Course</h6>
                                </div>
                                <div className="courses_details bg-white text-secondary shadow-lg rounded ml-1 py-3 px-4">
                                    <h4 className="h4-responsive m-0"><img src={ProgrammingHero} className="mr-1" /> Programming Hero</h4>
                                    <p className="text-secondary my-3">JavaScript, ReactJS, NodeJs, ExpressJs, MongoDB, Mongoose, HTML, CSS, Bootstrap, Material UI, React Router, React Hooks, React Hook Form, Google Map API, SASS</p>
                                    <p className="text-dark"><i className="fa fa-calendar mr-2" aria-hidden="true"></i> July, 2020 - December, 2020</p>
                                </div>
                              </div>
                            </div>
                            {/* <!--path between 1-2--> */}
                            <div class="row timeline">
                              <div class="col-2">
                                <div class="corner top-right"></div>
                              </div>
                              <div class="col-8">
                                <hr/>
                              </div>
                              <div class="col-2">
                                <div class="corner left-bottom"></div>
                              </div>
                            </div>
                            {/* <!--second section--> */}
                            <div class="row align-items-center justify-content-end how-it-works d-flex">
                              <div class="col-9 mb-3 text-right animate__animated animate__fadeInUp">
                                <div className="courses_header text-white rounded py-3 pr-2">
                                  <h6 className="h6-responsive m-0 mr-4"> Responsive Web Design</h6>
                                </div>
                                <div className="courses_details bg-white shadow-lg rounded mr-1 py-3 px-4">
                                    <h4 className="h4-responsive m-0"><img src={FreeCodeCamp} className="mr-2" />freeCodeCamp</h4>
                                    <p className="text-secondary my-2">Basic HTML & HTML5, Basic CSS, Applied Visual Design, Applied Accessibility, Responsive Web Design Principles, CSS Flexbox, CSS Grid, Responsive Web Design Projects</p>
                                    <p className="text-dark"><i className="fa fa-calendar mr-2" aria-hidden="true"></i> July, 2020 - August, 2020</p>
                                </div>
                              </div>
                              <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                <div class="circle font-weight-bold"><i class="fa fa-book" aria-hidden="true"></i></div>
                              </div>
                            </div>
                            {/* <!--path between 2-3--> */}
                            <div class="row timeline">
                              <div class="col-2">
                                <div class="corner right-bottom"></div>
                              </div>
                              <div class="col-8">
                                <hr/>
                              </div>
                              <div class="col-2">
                                <div class="corner top-left"></div>
                              </div>
                            </div>
                            {/* <!--third section--> */}
                            <div class="row align-items-center how-it-works d-flex">
                              <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                                <div class="circle font-weight-bold"><i class="fa fa-book" aria-hidden="true"></i></div>
                              </div>
                              <div class="col-9 mb-3 animate__animated animate__fadeInUp">
                                <div className="courses_header text-white rounded py-3 pr-2 pl-2">
                                  <h6 className="h6-responsive m-0 ml-3"> Elementor, WooCommerce & Wordpress</h6>
                                </div>
                                <div className="courses_details bg-white shadow-lg rounded mr-1 py-3 px-4">
                                    <h4 className="h4-responsive m-0 h4-responsive"><img src={CodemanBD} className="mr-2" />CodemanBD</h4>
                                    <p className="text-secondary my-2">Elementor, Wordpress Theme Customization, Gravity Form, WooCommerce, MailChimp etc.</p>
                                    <p className="text-dark"><i className="fa fa-calendar mr-2" aria-hidden="true"></i> October, 2019 - January, 2020</p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>

                    {/* Educational Qualification */}
                    <div className="row mb-4">
                      <div className="education_area col-md-10 bg-white shadow-lg rounded w-100 mt-5 mx-3 pt-4 px-4 pb-5">
                          <h2 className="text-center mb-4">Educational Qualification</h2>
                          <div className="education aos-animate" data-aos="fade-up">
                            <div className="education_header text-white rounded py-3 pl-3">
                              <h6 className="h6-responsive m-0"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>January, 2013 - December, 2017</h6>
                            </div>
                            <div className="education_details bg-white text-secondary shadow-lg rounded ml-2 py-3 px-4">
                                <h4 className="h4-responsive">Bachelor of Computer Science & Engineering</h4>
                                <h6 className="h6-responsive"><i className="fa fa-graduation-cap mr-2" aria-hidden="true"></i>International University of Business Agriculture & Technology</h6>
                                <p className="text-dark"><i className="fa fa-map-marker mr-2" aria-hidden="true"></i> Uttara, Dhaka, Bangladesh</p>
                            </div>
                          </div>
                   <br/><br/>
                      </div>
                    </div>
                  </div>
                  <NavBar></NavBar>
              </div>
          </div>
        </div>
    );
};

export default Resume;