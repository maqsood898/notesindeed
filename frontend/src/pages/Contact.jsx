import React from "react";

const Contact = () => {

    return (
        <>
        <div className="contact-sec sec">
                <div className="contact">
                    <div className="contact-opts">
                        <h4 className="">Contact Us</h4>
                        <div className="contact-opt shadow">
                            <img src="img/call.svg" alt="" />
                            <span className="cont-detail">
                                <h3>Call Us</h3>
                                <p>7003299475</p>
                            </span>
                        </div>
                        <div className="contact-opt shadow">
                            <img src="img/mail.svg" alt="" />
                            <span className="cont-detail">
                                <h3>Emaill Us</h3>
                                <p>contactus@notesindeed.com</p>
                            </span>
                        </div>
                        <div className="contact-opt shadow">
                            <img src="img/location.svg" alt="" />
                            <span className="cont-detail">
                                <h3>Location</h3>
                                <p>Kolkata, West Bengal, India</p>
                            </span>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h4>Help/FAQ</h4>
                        <div className="form-detail shadow">
                            <span className="user-detail">
                                <input type="text" className="contact-info" placeholder="First Name" />
                                <input type="text" className="contact-info" placeholder="Last Name" />
                            </span>
                            <input type="email" className="contact-info" placeholder="Email" />
                            <input type="text" className="contact-info" placeholder="Subject" />
                            <input type="text" className="contact-info msg" placeholder="Message" />
                            <button type="button" className="btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;