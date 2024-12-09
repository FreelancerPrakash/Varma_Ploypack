import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className="info_section layout_padding2 ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_contact">
                                <h4>
                                    Address
                                </h4>
                                <div className="contact_link_box">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        PL industrial area, Gut no 21,Dongargaon Pul,  Tq-Kalamnuri, Dist-Hingoli 431701 maharashtra
                                    </span>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call: 7030212524,9370403821
                                    </span>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        mailto:varmapolypack@gmail.com
                                    </span>
                                </div>
                            </div>
                            {/* <div className="info_social">
                                <a href="">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div> */}
                        </div>
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_detail">
                                <h4>
                                    Info
                                </h4>
                                <p>
                                    necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 mx-auto info_col">
                            <div className="info_link_box">
                                <h4>
                                    Links
                                </h4>
                                <div className="info_links">
                                    <Link to="/" className="nav-link mr-2" >Home</Link>
                                    <Link to="/about" className="nav-link mr-2" >About</Link>
                                    <Link to="/product" className="nav-link mr-2" >Product's</Link>
                                    <Link to="/contactus" className="nav-link mr-2" >Contact us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col ">
                            <h4>
                                Subscribe
                            </h4>
                            <form action="#">
                                <input type="text" placeholder="Enter email" />
                                <button type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
