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
import './Contact.css';

const Contact = () => {
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
                  <div className="row">
                  <div class="contact_form_area col-md-10 bg-white shadow-lg rounded w-100 my-5 mx-3 pt-5 px-4 pb-5">
                     <h2 className="h1-responsive text-center mb-4">Get in Touch</h2>
                     <div className="row">
                       <div className="col-md-8 mt-5">
                          <form id="contact-form" name="contact-form" action="mailto:ahmedmowmita@gmail.com" method="POST" enctype="text/plain">
                              <div className="row mb-3">
                                  <div className="col-md-6">
                                      <div class="md-form">
                                          <label for="name" className="label_input">Your name</label>
                                          <input type="text" id="name" name="name" className="form-control input100" />
                                          <span class="focus-input100"></span>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="md-form">
                                          <label for="email" className="label_input">Your email</label>
                                          <input type="text" id="email" name="email" className="form-control input100" />
                                      </div>
                                  </div>
                              </div>
                              <div className="row mb-3">
                                  <div className="col-md-12">
                                      <div className="md-form">
                                          <label for="subject" className="label_input">Subject</label>
                                          <input type="text" id="subject" name="subject" className="form-control input100" />
                                      </div>
                                  </div>
                              </div>
                              <div className="row mb-3">
                                  <div className="col-md-12">
                                      <div className="md-form">
                                          <label for="message" className="label_input">Your message</label>
                                          <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea input100"></textarea>
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="md-form">
                                    <button type="submit" className="btn-change7">Send</button>
                                  </div>
                                </div>
                              </div>
                          </form>
                       </div>
                       <div className="col-md-4 text-center mt-5">
                          <ul className="list-unstyled mb-0">
                              <li><i className="fa fa-map-marker mt-3 fa-2x" aria-hidden="true"></i>
                                  <p className="text-secondary">Uttara, Dhaka, Bangladesh</p>
                              </li>

                              <li className="mt-2"><i className="fa fa-phone mt-3 fa-2x" aria-hidden="true"></i>
                                  <p className="text-secondary">+ 8801731894931</p>
                              </li>

                              <li className="mt-2"><i className="fa fa-envelope mt-3 fa-2x" aria-hidden="true"></i>
                                  <p className="text-secondary">ahmedmowmita@gmail.com</p>
                              </li>
                          </ul>
                                   
                        <section className="text-center mt-4">
                            <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3a">
                                <a href="https://www.linkedin.com/in/mowmitaahmed/" target="_blank" className="hi-icon mr-3"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="https://www.facebook.com/mowmita.ahmed2/" target="_blank" className="hi-icon mr-3"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="https://github.com/mowmitaahmed" target="_blank" className="hi-icon mr-3"><i className="fa fa-github-alt" aria-hidden="true"></i></a>
                                <a href="mailto:ahmedmowmita@gmail.com?Subject=Hello Mowmita" target="_blank" className="hi-icon mr-3"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                                <a href="skype:ahmedmowmita@gmail.com?call" target="_blank" className="hi-icon"><i className="fa fa-skype" aria-hidden="true"></i></a>
                            </div>
                        </section>
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

export default Contact;