import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {

    const [active, setActive] = useState("Home");

    const links = [{ route: "/", name: "Home" },
    { route: "/about", name: "About" },
    { route: "/product", name: "Product's" },
    { route: "/contactus", name: "Contact us" },
    ];

    return (
        <>
            {/* <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="#">
                            <span>
                                VARMA Polypack
                            </span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link mr-2" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link mr-2" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/product" className="nav-link mr-2" >Product's</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactus" className="nav-link mr-2" >Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header> */}
            <header className="header_section">
                <nav className="navbar p-0 navbar-expand-lg" >
                    <nav className="navbar bg-body-tertiary"></nav>
                    <div className="container-fluid bg-light-navbar">
                        <a className="navbar-brand" href="#">
                            <span>
                                VARMA Polypack
                            </span>
                        </a>
                        <button
                            className="navbar-toggler text-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end  text-white  " id="navbarNav">
                            <ul className="navbar-nav py-1 align-center">
                                {
                                    links?.map((item, index) => (
                                        <>
                                            <li className={`nav-item ${active === item?.name ? "active" : ""}`}
                                                key={index}>
                                                <Link to={item?.route} className="nav-link mr-2"
                                                    onClick={() => setActive(item?.name)}>
                                                    {item?.name}
                                                </Link>
                                            </li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
