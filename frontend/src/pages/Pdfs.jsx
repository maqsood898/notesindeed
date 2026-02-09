import axios from "axios";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Pdfs = () => {

    //Fetch pdfs
    const [pdfs, setPdfs] = useState([])

    const cat = useLocation().search

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

    // // PDFs sliderscroll-bar
    const slideListRef = useRef(null);
    const sliderScrollBarRef = useRef(null);
    const scrollBarThumbRef = useRef(null);

    const [maxScrollLeft, setMaxScrollLeft] = useState(0);
    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    useEffect(() => {
        const slideList = slideListRef.current;
        const sliderScrollBar = sliderScrollBarRef.current;
        const scrollBarThumb = scrollBarThumbRef.current;

        if (!slideList || !sliderScrollBar || !scrollBarThumb) return;

        const maxScroll = slideList.scrollWidth - slideList.clientWidth;
        setMaxScrollLeft(maxScroll);

        const handleThumbMouseDown = (e) => {
            const startX = e.clientX;
            const thumbPos = scrollBarThumb.offsetLeft;

            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const maxThumbPos = sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth;

                const boundedPos = Math.max(0, Math.min(maxThumbPos, thumbPos + deltaX));
                const scrollPos = (boundedPos / maxThumbPos) * maxScroll;

                scrollBarThumb.style.left = `${boundedPos}px`;
                slideList.scrollLeft = scrollPos;
            };

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        scrollBarThumb.addEventListener("mousedown", handleThumbMouseDown);

        return () => {
            scrollBarThumb.removeEventListener("mousedown", handleThumbMouseDown);
        };
    }, []);

    const handleScroll = () => {
        const slideList = slideListRef.current;

        if (!slideList) return;

        const scrollPos = slideList.scrollLeft;
        const maxThumbPos = sliderScrollBarRef.current.clientWidth - scrollBarThumbRef.current.offsetWidth;
        const thumbPos = (scrollPos / maxScrollLeft) * maxThumbPos;

        scrollBarThumbRef.current.style.left = `${thumbPos}px`;

        // Update button visibility
        setShowPrevButton(scrollPos > 0);
        setShowNextButton(scrollPos < maxScrollLeft);
    };

    const handleSlide = (direction) => {
        const slideList = slideListRef.current;
        if (!slideList) return;

        const scrollAmount = slideList.clientWidth * direction;
        slideList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    return (
        <>
            <div className="popular-pdf-sec sec">
                <h2>Popular Pdf</h2>
                <div className="pdfs-slider">
                    <button id="prev-slide" className={`pdf-slide-btn prev ${showPrevButton ? "" : "d-n"}`}
                        onClick={() => handleSlide(-1)}>&#10094;</button>
                    <div className="pdfs" ref={slideListRef} onScroll={handleScroll}>
                        {pdfs.length > 0 ? (
                            pdfs.map((pdf) => {
                                return (<span className="pdf shadow" key={pdf.id}>
                                    <Link to={`/pdf/${pdf.id}`}><img src={`/data/img/${pdf.img}`} alt={pdf.title} /></Link>
                                    <h3>{pdf.title}</h3>
                                    <h4>{pdf.desc}</h4>
                                </span>)
                            })
                        ) : (
                            <p>No PDFs available at the moment.</p>
                        )
                        }
                    </div>

                    <button id="next-slide" className={`pdf-slide-btn next ${showNextButton ? "" : "d-n"}`}
                        onClick={() => handleSlide(1)}>&#10095;</button>
                    <div className="slider-scrollbar" ref={sliderScrollBarRef}>
                        <div className="scrollbar-track">
                            <div className="scrollbar-thumb" ref={scrollBarThumbRef}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pdfs;