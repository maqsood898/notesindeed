import React from "react";
import "../styles/about.css";

const About = () => {

    return (
        <>
            <div className="about-sec sec">
                <div className="about">
                    <div className="about-opts">

                        <h1>About notesindeed</h1>
                        <div className="about-opt">
                            <span className="about-detail">
                                <p>Notesindeed is a one-of-a-kind platform offering access to over 1,000 high-quality PDFs and study materials, designed to empower students in their learning journey.</p>
                            </span>
                            <img src="/img/call.svg" alt="" />
                        </div>

                        <h1>Our Mission</h1>
                        <div className="about-opt">
                            <img src="/img/mail.svg" alt="" />
                            <span className="about-detail">
                                <p>Our mission is to revolutionize e-learning by bridging the gay between educators and learners while providing comprehensive resources for academic success.</p>
                            </span>
                        </div>
                        <h1>Our Vision</h1>
                        <div className="about-opt">
                            <span className="about-detail">
                                <p>Provide Free study Materials: Ensuring every student has access to quality educational resources at no cost.</p>
                            </span>
                            <img src="/img/mail.svg" alt="" />
                        </div>

                        <div className="about-opt">
                            <img src="/img/mail.svg" alt="" />
                            <span className="about-detail">
                                <p>Deliver Quality PDFs: Curating and offering well-structured reliable, and easy-to-understand study materials.</p>
                            </span>
                        </div>
                        <div className="about-opt">
                            <span className="about-detail">
                                <p>Connect Teachers with Students: Creating a platform where educator can share their expertise and reach students worldwide.</p>
                            </span>
                            <img src="/img/mail.svg" alt="" />
                        </div>
                        <div className="about-opt">
                            <img src="/img/mail.svg" alt="" />
                            <span className="about-detail">
                                <p>Simplify E-Learning: Making digital education more accessible, efficient, and user-friendly for all learners.</p>
                            </span>
                        </div>
                    </div>


                    <div className="about-motive">
                        <p>At notesindeed, we are committed ro shaping the future of education by fostering a culture of knowledge sharing and making learning a seamless experience for everyone.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;