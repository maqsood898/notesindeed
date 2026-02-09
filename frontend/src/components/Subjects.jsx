import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Subjects = () => {

    // // more-subject-show
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSubCards = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className="subjects sec">
                <div className="sub-head">
                    <h2 className="sub-title">Popular Subjects</h2>
                    <span className="search">
                        <input className="search-bar sub-bar" type="text" placeholder="Search" />
                        <img src="/img/search.svg" alt="" />
                    </span>
                </div>
                <div className="sub-cards">
                    <div className="sub-card eng">
                        <img className="sub-img" src="/img/subject/English.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - ENGLISH</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=English">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card mts">
                        <img className="sub-img" src="/img/subject/Mathematics.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - MATHS</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Mathematics">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card hisc">
                        <img className="sub-img" src="/img/subject/history.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - History&Civics</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=History">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card geo">
                        <img className="sub-img" src="/img/subject/Geography.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Geography</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Geography">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card phy">
                        <img className="sub-img" src="/img/subject/Physics.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Physics</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Physics">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card chem">
                        <img className="sub-img" src="/img/subject/chemistry.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Chemistry</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Chemistry">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card bio">
                        <img className="sub-img" src="/img/subject/biology.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Biology</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Biology">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card comp">
                        <img className="sub-img" src="/img/subject/computer.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Computer</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Computer">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card acc">
                        <img className="sub-img" src="/img/subject/accountancy.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Accountancy</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Accountancy">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card eco">
                        <img className="sub-img" src="/img/subject/economics.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Economics</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Economics">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card bst">
                        <img className="sub-img" src="/img/subject/business studies.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Business Studies</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=BST">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card comm">
                        <img className="sub-img" src="/img/subject/commerce.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Commerce</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Commerce">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                </div>

                {isExpanded && (
                <div className="more-sub-cards sub-cards">
                    <div className="sub-card hin">
                        <img className="sub-img" src="/img/subject/hindi.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Hindi</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Hindi">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card enge">
                        <img className="sub-img" src="/img/subject/commerce.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Engineering</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Engineering">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card prog">
                        <img className="sub-img" src="/img/subject/computer programing.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Programming</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Programming">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card pol">
                        <img className="sub-img" src="/img/subject/political science.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - Political Science</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=Political Science">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                    <div className="sub-card fren">
                        <img className="sub-img" src="/img/subject/french.png" alt="" />
                        <span className="sub-para">
                            <h4>Subject - French</h4>
                            <h5>No of Pdf(s) - 5</h5>
                        </span>
                        <Link className="layer" to="/subject/?cat=French">
                            <span className="l-cont">
                                <img className="layer-img" src="/img/open.png" alt="" />
                                <h3 className="layer-title">Open</h3>
                            </span>
                        </Link>
                    </div>
                </div>
                )}

                <div className="sub-card-more btn" onClick={toggleSubCards}>
                    {isExpanded ? (
                        <>
                            <p>Less</p>
                            <img src="/img/more.png" alt="Collapse Icon" />
                        </>
                    ) : (
                        <>
                            <p>More</p>
                            <img src="/img/more.png" alt="Expand Icon" />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Subjects;