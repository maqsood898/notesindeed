import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer-sec sec">
                <div className="pbs">
                    <h4>Pdf by Subjects</h4>
                    <p><Link to="/subject/?cat=English">English</Link>
                    </p>
                    <Link to="/subject/?cat=Mathematics">
                        <p>Mathematics</p>
                    </Link>
                    <Link to="/subject/?cat=Physics">
                        <p>Physics</p>
                    </Link>
                    <Link to="/subject/?cat=Chemistry">
                        <p>Chemistry</p>
                    </Link>
                    <Link to="">
                        <p>Biology</p>
                    </Link>
                    <Link to="">
                        <p>Computer</p>
                    </Link>
                    <Link to="">
                        <p>Accountancy</p>
                    </Link>
                    <Link to="">
                        <p>Commerce</p>
                    </Link>
                    <Link to="">
                        <p>Business Studies</p>
                    </Link>
                    <Link to="">
                        <p>Economics</p>
                    </Link>
                    <Link to="">
                        <p>Hindi</p>
                    </Link>
                    <Link to="/subject/?cat=History">
                        <p>History&Civics</p>
                    </Link>
                    <Link to="/subject/?cat=Geography">
                        <p>Geography</p>
                    </Link>
                    <Link to="">
                        <p>Mathematics</p>
                    </Link>
                </div>
                <span className="line"></span>
                <div className="about">
                    <span className="about-founder">
                        <h4>About the Founders</h4>
                        <Link to="">
                            <p>Divyank Kr Shaw</p>
                        </Link>
                        <Link to="MaqsoodAhmed">
                            <p>Maqsood Ahmed</p>
                        </Link>
                    </span>
                    <span className="about-team">
                        <h4>About the Team</h4>
                        <p>Muskan Yadav</p>
                        <p>Shalini Shaw</p>
                    </span>

                </div>
                <span className="line"></span>
                <span>
                    <h4>Mail Us</h4>
                    <p>contactus@notesindeed.com</p>
                    <p>maqsoodahmed@notesindeed.com</p>
                    <p>divyankshaw@notesindeed.com</p>
                </span>
                <span className="line"></span>
                <span>
                    <h4>Terms&Conditions</h4>
                    <h4>PrivacyPolicy</h4>
                </span>
                <span className="line"></span>
                <div className="find-us">
                    <div className="contact-opts-sec-phone">
                        <h4 className="">Contact Us</h4>
                        <div className="contact-opts-phone">
                            <div className="contact-opt-phone">
                                <Link to=""><img src="/img/call.svg" alt="" /></Link>

                            </div>
                            <div className="contact-opt-phone">
                                <Link to=""><img src="/img/mail.svg" alt="" /></Link>

                            </div>
                            <div className="contact-opt-phone">
                                <Link to=""><img src="/img/location.svg" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="follow-us-on">
                    <h4 className="">Follow us on</h4>
                    <div className="follow-us-opts">
                        <div className="follow-us-opt">
                            <Link to=""><img src="/img/icon/facebook_icon.png" alt="" /></Link>

                        </div>
                        <div className="follow-us-opt">
                            <Link to=""><img src="/img/icon/instagram_icon.png" alt="" /></Link>

                        </div>
                        <div className="follow-us-opt">
                            <Link to=""><img src="/img/icon/youtube_icon.png" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>notesindeed | Copyright &copy; 2024 notesindeed.com</p>
            </div>
        </>
    )
}

export default Footer;