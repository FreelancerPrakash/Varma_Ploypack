import React from 'react'
import { Link } from 'react-router-dom'
import PageNotFoundImg from "../images/SVG/error-404.svg";

const PageNotFound = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <img src={PageNotFoundImg} alt="error" className="img-fluid mb-4" />
                    <div className="mx-auto" style={{ maxWidth: "500px" }}>
                        <h3 className="fw-bold">Oops! Why you’re here?</h3>
                        <p>
                            We are very sorry for the inconvenience. It looks like you’re trying to access a page that either has been
                            deleted or never existed.
                        </p>
                        <Link to="/" className="btn btn-primary btn-lg mt-3">Back To Home</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PageNotFound
