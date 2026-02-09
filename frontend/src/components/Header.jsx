import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ProfilePic from "../assets/img/icon/profile-logo.jpg";
import { AuthContext } from '../context/authContext';

const Header = () => {

    //account-toggle-&-mode-change-----functions
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const settingsMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const [theme, setTheme] = useState("light");

    // Check localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setTheme("dark");
            document.body.classList.add("dark-theme");
        } else {
            setTheme("light");
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    };

    const [isMoreMenuVisible, setIsMoreMenuVisible] = useState(false);

    const toggleMoreMenu = () => {
        setIsMoreMenuVisible((prev) => !prev);
    };

    //(User/login) details
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <nav>
            <header className="head">
                <div className="head-img"><Link to="/"><img src="/img/logo.svg" alt="" /></Link></div>
                <div className="head-title">
                    <div className={`head-title-phone ${isMoreMenuVisible ? "show-menu" : ""}`}>
                        <div className="user-profile-phone">
                            <div className="user-profile">
                                <img src="/img/icon/profile-logo.jpg" />
                                <div>
                                    <p>{currentUser?.username}</p>
                                    <a href="#">See your profile</a>
                                </div>
                            </div>
                            <li><Link to="/upload"><img className="upload-icon" src="/img/upload.svg" alt="" /></Link></li>
                            <li><Link to="/"><img className="head-title-img" src="/img/icon/home.jpeg" alt="" /> Home</Link></li>
                            <li><Link to="/about"><img className="head-title-img" src="" alt="" /> About Us</Link></li>
                            <li><Link to="/contact"><img className="head-title-img" src="" alt="" />Contact Us</Link></li>
                            <li><Link to="/setting"><img className="head-title-img" src="/img/icon/setting.png" alt="" />
                                Settings</Link>
                            </li>
                            <li>
                                {currentUser ? (
                                    <Link onClick={logout}><img className="head-title-img" src="/img/icon/logout.png" alt="" /> Logout</Link>
                                ) : (
                                    <Link className='' to="/login">Login</Link>
                                )}
                            </li>
                        </div>
                    </div>

                    <div className="head-title-desktop">
                        <li><Link to="/upload"><img className="upload-icon" src="/img/upload.svg" alt="" /></Link></li>
                        <li><Link to="/"><img className="head-title-img" src="/img/icon/home.jpeg" alt="" /> Home</Link></li>
                        <li><Link to="/about"><img className="head-title-img" src="" alt="" /> About Us</Link></li>
                        <li><Link to="/contact"><img className="head-title-img" src="" alt="" />Contact Us</Link></li>

                        <li className="user-profile-desktop"><img src={ProfilePic} onClick={settingsMenuToggle}
                            alt="" />
                        </li>
                    </div>
                </div>

                <div className={`settings-menu ${isMenuOpen ? "settings-menu-height" : ""}`}>

                    <div id="dark-btn" className={theme === "dark" ? "dark-btn-on" : ""}
                        onClick={toggleTheme}>
                        <span></span>
                    </div>
                    <div className="settings-menu-inner">
                        <div className="user-profile">
                            <img src="/img/icon/profile-logo.jpg" />
                            <div>
                                <p>{currentUser?.username}</p>
                                <a href="#">See your profile</a>
                            </div>
                        </div>
                        <hr />
                        <div className="user-profile">
                            <img src="/img/feedback.png" />
                            <div>
                                <p>Give Feedback</p>
                                <a href="#">Help us to improve the new design</a>
                            </div>
                        </div>
                        <hr />
                        <div className="settings-links">
                            <img src="/img/setting.png" className="settings-icon" />
                            <a href="#">Settings & Privacy <img src="/img/arrow.png" width="10px" /></a>
                        </div>
                        <div className="settings-links">
                            <img src="/img/help.png" className="settings-icon" />
                            <a href="#">Help & Support <img src="/img/arrow.png" width="10px" /></a>
                        </div>
                        <div className="settings-links">
                            <img src="/img/display.png" className="settings-icon" />
                            <a href="#">Display & Accessibility <img src="/img/arrow.png" width="10px" /></a>
                        </div>
                        <div className="settings-links">
                            {currentUser ? (
                                <Link onClick={logout}>
                                    <img src="/img/logout.png" className="settings-icon" />
                                    Logout <img src="/img/arrow.png" width="10px" />
                                </ Link>
                            ) : (
                                <Link className='' to="/login">Login</Link>
                            )}
                        </div>
                    </div>
                </div>
                <span className="search">
                    <input className="search-bar" type="text" placeholder="Search" />
                    <img src="/img/search.svg" alt="" />
                </span>

                <div className="more-menu">
                    <img src="/img/icon/Hamburger_icon.png" onClick={toggleMoreMenu} alt="" />
                </div>
            </header>
        </nav>
    );
};

export default Header;