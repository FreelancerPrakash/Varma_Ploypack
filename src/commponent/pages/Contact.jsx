import React from 'react'
// import "../css/Contact.css";

const Contact = () => {
    return (
        <>
            <div class="container">
                <div class="row overflow-hidden">
                    <div class="col-12 col-md-10 offset-md-1 mt-5">
                        <div class="row text-center">
                            <div class="col-12 col-sm-6 col-md-4 mb-5 wow fadeInDown" data-wow-delay=".5s">
                                <span class="fa fa-map-marker fa-3x text-primary"></span>
                                <h2 class="h5 my-3 text-dark">Address Information</h2>
                                <p class="text-muted">Level 13, 2 Elizabeth St, Melbourne, Victor 2000</p>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 mb-5 wow fadeInDown" data-wow-delay=".8s">
                                <span class="fa fa-phone fa-3x text-primary"></span>
                                <h2 class="h5 my-3 text-dark">Mail & Phone Number</h2>
                                <p class="text-muted">adminsupport@website.com</p>
                                <p class="text-muted">+333 111 111 000</p>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 mb-5 wow fadeInDown" data-wow-delay="1.1s">
                                <span class="fa fa-share fa-3x text-primary"></span>
                                <h2 class="h5 my-3 text-dark">Stay In Touch</h2>
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-facebook-f text-muted"></i></a></li>
                                    <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-instagram text-muted"></i></a></li>
                                    <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-twitter text-muted"></i></a></li>
                                    <li class="list-inline-item"><a href="#" target="_blank"><i class="fab fa-linkedin text-muted"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-center my-5">
                            <h1 class=" fw-bold text-dark">Contact Us</h1>
                            <p class="mt-3 text-muted">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                    </div>
                </div>

                <div class="row mb-5 overflow-hidden">
                    <div class="col-12 col-sm-6 ">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control p-3 mb-2" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control p-3 mb-2" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control p-3 mb-2" placeholder="Subject" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control p-3 mb-2" rows="3" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block p-3 form-control">Send</button>
                        </form>
                    </div>
                    <div class="col-12 col-sm-6 wow fadeInRight">
                        <div id="map" style={{ width: "100%", height: "420px" }}>
                            <iframe
                                class="embed-responsive-item"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3294347054067!2d73.84701651534186!3d18.52043038740098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1c40fbbceb%3A0x4a2152c9d3e7f3a!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1696861129458!5m2!1sen!2sus"
                                width="100%"
                                height="450"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
