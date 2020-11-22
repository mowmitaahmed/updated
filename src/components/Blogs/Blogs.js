import React from 'react';
import './Blogs.css';
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

const Blogs = () => {
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
                    {/* Work Experience Area */}
                    <div className="row mb-4">
                      <div className="blogs_area col-md-10 bg-white shadow-lg rounded w-100 mt-5 mx-3 pt-4 px-4 pb-5">
                        <h2 className="text-center h2-responsive">Blog Posts</h2>
                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="https://miro.medium.com/max/700/0*8Ls4dMk5EKEnpuOB" alt="" />
                                    <div className="hovereffect_overlay">
                                      <h2>Problem Solving in JavaScript</h2>
                                      <a className="info" href="https://medium.com/swlh/problem-solving-in-javascript-1a455e3bf4eb" target="_blank">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="https://miro.medium.com/max/700/0*DXZy1S8LiaUg7ZAm" alt="" />
                                    <div className="hovereffect_overlay">
                                      <h2>JavaScript Data Types</h2>
                                      <a className="info" href="https://ahmedmowmita.medium.com/javascript-data-types-733f42eb7df3" target="_blank">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="https://miro.medium.com/max/700/0*_hoivyLwzd5RUjVY" alt="" />
                                    <div className="hovereffect_overlay">
                                      <h2>JavaScript Array reduce() Method</h2>
                                      <a className="info" href="https://ahmedmowmita.medium.com/javascript-array-reduce-method-3befcbdd1a4d" target="_blank">READ MORE</a>
                                    </div>
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

export default Blogs;