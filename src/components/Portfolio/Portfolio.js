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
import Creative from '../../images/creative-agency.png';
import Travel from '../../images/travel.png';
import Apartment from '../../images/appartment.png';
import Athena from '../../images/athens.png';
import './Portfolio.css';

const Portfolio = () => {
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
                    <div className="row mt-5">
                       <div className="portfolio_area gallery col-md-10 w-100">
                          <h2 className="h1-responsive font-weight-bold text-center mb-5 gallery-title">Portfolio</h2>
                          <div className="portfolio row">
                            {/* <div className="col-md-12 text-center">
                                <button className="btn btn-default mr-3 filter-button active" data-filter="all">All</button>
                                <button className="btn btn-default mr-3 filter-button" data-filter="react">React Js</button>
                                <button className="btn btn-default mr-3 filter-button" data-filter="javaScript">JavaScript</button>
                                <button className="btn btn-default mr-3 filter-button" data-filter="spray">REST API</button>
                                <button className="btn btn-default mr-3 filter-button" data-filter="irrigation">Node Js</button>
                                <button className="btn btn-default filter-button" data-filter="irrigation">WORDPRESS</button>
                            </div> */}
                            <div className="gallery_product col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white shadow-lg rounded mt-3 mx-2 pt-4 px-4 pb-5 filter react" data-category="react">
                                <div className="portfolio_details mr-3">
                                   <h4 className="h4-responsive font-weight-bold">Creative Agency <span className="font-weight-normal text-dark">[Client - Server]</span></h4>
                                   <h5 className="h5-responsive font-weight-bold">A full stack & responsive website for software agency.</h5>
                                   <ul className="mb-3">
                                       <li className="text-secondary mb-1">Admin can change order’s status to notify the clients about the progress.</li>
                                       <li className="text-secondary mb-1">Authenticated user can order and check services.</li>
                                       <li className="text-secondary mb-1">Admin can add new services and new admins.</li>
                                   </ul>
                                   <div className="portfolio_skill_button mb-3" aria-label="Basic example">
                                        <button type="button" className="btn mr-1 mb-2">React Js</button>
                                        <button type="button" className="btn mr-1 mb-2">Node Js</button>
                                        <button type="button" className="btn mr-1 mb-2">Express Js</button>
                                        <button type="button" className="btn mr-1 mb-2">JavaScript</button>
                                        <button type="button" className="btn mr-1 mb-2">MongoDB</button>
                                        <button type="button" className="btn mr-1 mb-2">Mongoose</button>
                                        <button type="button" className="btn mr-1 mb-2">Firebase</button>
                                    </div>
                                    <section id="set-3">
                                        <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3a">
                                            <a href="https://creative-agency-35c16.firebaseapp.com/" className="hi-icon mr-2" target="_blank"><i className="fa fa-pencil-square-o fa-x" aria-hidden="true"></i></a>
                                            <a href="https://github.com/mowmitaahmed/creative-agency-client" className="hi-icon mr-2" target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a>
                                            <a href="https://github.com/mowmitaahmed/creative-agency-server" className="hi-icon" target="_blank"><i className="fa fa-location-arrow" aria-hidden="true"></i></a>
                                        </div>
                                    </section>
                                </div>
                                <div className="portfolio_image mt-5">
                                    <a className="portfolio-link" href="https://creative-agency-35c16.firebaseapp.com/" target="_blank">
                                        <img className="img-fluid image rounded" src={Creative} alt={Creative} />
                                        <div className="overlay">
                                            <div className="text"><i class="fa fa-plus fa-2x"></i></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="gallery_product col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white shadow-lg rounded mt-3 mx-2 pt-4 px-4 pb-5 filter javaScript" data-category="javaScript">
                                <div className="portfolio_details mr-3">
                                   <h4 className="h4-responsive font-weight-bold">Travel Guru <span className="font-weight-normal text-dark">[Client]</span></h4>
                                   <h5 className="h5-responsive font-weight-bold">A front end website for a travelers.</h5>
                                   <ul className="mb-3">
                                       <li className="text-secondary mb-1">Google Map is included & React Router is used highly.</li>
                                       <li className="text-secondary mb-1">Authenticated User can choose a place.</li>
                                       <li className="text-secondary mb-1">Authenticated user can get hotels by provided date & place.</li>
                                   </ul>
                                   <div className="portfolio_skill_button mb-3" aria-label="Basic example">
                                        <button type="button" className="btn mr-1 mb-2">React Js</button>
                                        <button type="button" className="btn mr-1 mb-1">Bootstrap</button>
                                        <button type="button" className="btn mr-1 mb-1">Firebase-auth</button>
                                        <button type="button" className="btn mr-1 mb-1">Google Map API</button>
                                    </div>
                                   
                                   <section id="set-3">
                                       <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3a">
                                           <a href="https://travel-guru-289908.firebaseapp.com/" className="hi-icon mr-3" target="_blank"><i className="fa fa-pencil-square-o fa-x" aria-hidden="true"></i></a>
                                           <a href="https://github.com/mowmitaahmed/travel-guru-react" className="hi-icon mr-3" target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a>
                                       </div>
                                   </section>
                                </div>
                                <div className="portfolio_image mt-5">
                                    <a class="portfolio-link" href="https://travel-guru-289908.firebaseapp.com/" target="_blank">
                                        <img class="img-fluid image rounded" src={Travel} alt={Travel} />
                                        <div class="overlay">
                                            <div class="text"><i class="fa fa-plus fa-2x"></i></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="gallery_product col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white shadow-lg rounded mt-3 mx-2 pt-4 px-4 pb-5 filter javaScript" data-category="javaScript">
                                <div className="portfolio_details mr-3">
                                <h4 className="h4-responsive font-weight-bold">Apartment Haunt <span className="font-weight-normal text-dark">[Client]</span></h4>
                                <h5 className="h5-responsive font-weight-bold">A front end responsive website for apartment haunters.</h5>
                                <ul className="mb-3">
                                    <li className="text-secondary mb-1">Authentication system with Firebase auth is included.</li>
                                    <li className="text-secondary mb-1">Users can view apartment list from homepage and can see details.</li>
                                    <li className="text-secondary mb-1">Admin can add or delete events, modify the volunteer list.</li>
                                </ul>
                                <div className="portfolio_skill_button mb-3" aria-label="Basic example">
                                        <button type="button" className="btn mr-1 mb-2">React Js</button>
                                        <button type="button" className="btn mr-1 mb-1">Bootstrap</button>
                                        <button type="button" className="btn mr-1 mb-1">Firebase-auth</button>
                                        <button type="button" className="btn mr-1 mb-1">React Router</button>
                                        <button type="button" className="btn mr-1 mb-1">SASS</button>
                                    </div>
                                
                                <section id="set-3">
                                    <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3a">
                                        <a href="https://gifted-johnson-da6eea.netlify.app/" className="hi-icon mr-3" target="_blank"><i className="fa fa-pencil-square-o fa-x" aria-hidden="true"></i></a>
                                        <a href="https://github.com/mowmitaahmed/apartment-haunting-client" className="hi-icon mr-3" target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                </section>
                                </div>
                                <div className="portfolio_image mt-5">
                                    <a class="portfolio-link" href="https://gifted-johnson-da6eea.netlify.app/" target="_blank">
                                        <img class="img-fluid image rounded" src={Apartment} alt={Apartment} />
                                        <div class="overlay">
                                            <div class="text"><i class="fa fa-plus fa-2x"></i></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="gallery_product col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white shadow-lg rounded mt-3 mx-2 pt-4 px-4 pb-5 filter javaScript" data-category="javaScript">
                                <div className="portfolio_details mr-3">
                                <h4 className="h4-responsive font-weight-bold">Athena<span className="font-weight-normal text-dark">[Client]</span></h4>
                                <h5 className="h5-responsive font-weight-bold">Athena is a fully responsive professional looking front end website with modern features.</h5>
                                <ul className="mb-3">
                                    <li className="text-secondary mb-1">Contact us section, Price list section of different services, Section where user can see services that agency provides.</li>
                                    <li className="text-secondary mb-1">Ensured consistent page appearance across multiple browsers.</li>
                                    <li className="text-secondary mb-1">Improved code quality, performance used latest technologies for better user experience.</li>
                                </ul>
                                <div className="portfolio_skill_button mb-3" aria-label="Basic example">
                                        <button type="button" className="btn mr-1 mb-2">React Js</button>
                                        <button type="button" className="btn mr-1 mb-1">Bootstrap</button>
                                        <button type="button" className="btn mr-1 mb-1">Jquery</button>
                                        <button type="button" className="btn mr-1 mb-1">HTML5</button>
                                        <button type="button" className="btn mr-1 mb-1">CSS3</button>
                                </div>
                                <p><span className="font-weight-bold">Work History: </span>This is a team project. My Team members are Md. Hridoy Mia and Asad Sourav. For project management we used Jira.</p>
                                <section id="set-3">
                                    <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3a">
                                        <a href="https://team-athena.netlify.app/" className="hi-icon mr-3" target="_blank"><i className="fa fa-pencil-square-o fa-x" aria-hidden="true"></i></a>
                                        <a href="https://github.com/mowmitaahmed/Athena" className="hi-icon mr-3" target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                </section>
                                </div>
                                <div className="portfolio_image mt-5">
                                    <a class="portfolio-link" href="https://team-athena.netlify.app/" target="_blank">
                                        <img class="img-fluid image rounded" src={Athena} alt={Athena} />
                                        <div class="overlay">
                                            <div class="text"><i class="fa fa-plus fa-2x"></i></div>
                                        </div>
                                    </a>
                                </div>
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

export default Portfolio;