import GeoImg from "../../assets/img/subject/Geography.png"
import "../../styles/subject.css"
import axios from "axios";
import { React, useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import img2 from "../../assets/img/icon/images2.png"

const Subject = () => {

    //Fetch pdfs
    const [pdfs, setPdfs] = useState([])

    const cat = useLocation().search

    const catName = cat.slice(5)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/pdfs${cat}`)
                setPdfs(res.data)
            }
            catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);

    const [isExpanded, setIsExpanded] = useState(false); // State for toggling additional subjects

    const toggleSubCards = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className="subject-sec">

                <div className="subject-head">
                    <p>Classes</p>
                    <span className="sub-title">
                        <img src={GeoImg} alt="" className="sub-img" />
                        <h3>{catName}</h3>
                    </span>
                    <span className="filters">
                        <p>Filters<img src={img2} alt="" /></p>

                    </span>
                </div>

                <div className="classes">
                    <span className="class-line"></span>
                    <div className="class">
                        <div className="class-details">
                            <h3 onClick={toggleSubCards}>class 1 <img src="../../assets/img/icon/arrow.png" alt="" /></h3>
                            <p>50 pdfs</p>
                        </div>

                        {isExpanded && (
                            <div className="pdfs">
                                {pdfs.length > 0 ? (
                                    pdfs.map((pdf) => {
                                        return (
                                            <span className="pdf shadow" key={pdf.id}>
                                                <Link to={`/pdf/${pdf.id}`}><img src={`/data/img/${pdf.img}`} alt={pdf.title} /></Link>
                                                <h3>{pdf.title}</h3>
                                                <h4>{pdf.desc}</h4>
                                            </span>
                                        )
                                    })
                                ) : (
                                    <p>No PDFs available at the moment.</p>
                                )
                                }
                            </div>
                        )}
                    </div>

                    <span className="class-line"></span>
                    <div className="class">
                        <div className="class-details">
                            <h3 onClick={toggleSubCards}>class 1 <img src="../../assets" alt="" /></h3>
                            <p>50 pdfs</p>
                        </div>

                        {isExpanded && (
                            <div className="pdfs">
                                <div className="pdf">
                                    <div className="pdf_detail">
                                        <h3>Climate of India</h3>
                                        <span><p>Divyank Shaw</p> <img src="../../assets/img/icon/verify_icon.png" alt="" /></span>
                                        <h4>25pages</h4>
                                    </div>
                                </div>
                                <span className="pdf"></span>
                                <span className="pdf"></span>
                                <span className="pdf"></span>
                                <span className="pdf"></span>
                                <span className="pdf"></span>
                                <span className="pdf"></span>
                                <span className="pdf"></span>
                                <span className="pdf"></span>
                            </div>
                        )}

                    </div>




                </div>
            </div>
        </>
    );
};

export default Subject;