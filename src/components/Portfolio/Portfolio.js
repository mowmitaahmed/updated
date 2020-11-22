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
                                   <h4 className="h4-responsive font-weight-bold">Creative Agency</h4>
                                   <h5 className="h5-responsive font-weight-bold">A full stack & responsive website for software agency.</h5>
                                   <p className="text-secondary mr-3">Admin can change order’s status to notify the clients about the progress.Authenticated user can order and check services. Admin can add new services and new admins.</p>
                                   <div className="portfolio_skill_button mb-3" aria-label="Basic example">
                                        <button type="button" className="btn mr-1 mb-2"><i className="devicon-react-original mr-1"></i>React Js</button>
                                        <button type="button" className="btn mr-1 mb-1"><i class="devicon-nodejs-plain colored mr-1"></i>Node Js</button>
                                        <button type="button" className="btn mr-1 mb-1"><i class="devicon-express-original colored mr-1"></i>Express Js</button>
                                        <button type="button" className="btn mr-1 mb-1"><i class="devicon-express-original colored mr-1"></i>JavaScript</button>
                                        <button type="button" className="btn mr-1 mb-1"><i class="devicon-express-original colored mr-1"></i>MongoDB</button>
                                        <button type="button" className="btn mr-1 mb-1"><i class="devicon-express-original colored mr-1"></i>Mongoose</button>
                                        <button type="button" className="btn mr-1 mb-1"><i class="devicon-express-original colored mr-1"></i>Firebase</button>
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
                                   <h4 className="h4-responsive font-weight-bold">Travel Guru </h4>
                                   <h5 className="h5-responsive font-weight-bold">A front end website for a travelers.</h5>
                                   <p className="text-secondary">Google Map is included.User can choose a place.Authenticated user can get hotels by provided date & place.</p>
                                   <div className="portfolio_skill_button mb-3" aria-label="Basic example">
                                        <button type="button" className="btn mr-1 mb-2"><i className="devicon-react-original mr-1"></i>React Js</button>
                                        <button type="button" className="btn mr-1 mb-1"><i class="devicon-express-original colored mr-1"></i>JavaScript</button>
                                        <button type="button" className="btn mr-1 mb-1"><i class="devicon-express-original colored mr-1"></i>Firebase</button>
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