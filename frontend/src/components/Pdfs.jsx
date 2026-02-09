import axios from "axios";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import thumbnail from "../assets/img/icon/thumbnail.png";

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
                <Link to="/pdfs" className="sec-head"><h2 className="sub-title">Popular Pdf</h2></Link>
                <div className="pdfs-slider">
                    <button id="prev-slide" className={`pdf-slide-btn prev ${showPrevButton ? "" : "d-n"}`}
                        onClick={() => handleSlide(-1)}>&#10094;</button>
                    <div className="pdfs" ref={slideListRef} onScroll={handleScroll}>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Mathematics</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Sample</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Revision</h3>
                            <h4>Notes</h4>
			</div>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Books</h3>
                            <h4>e-books</h4>
			</div>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Previous Year</h3>
			</div>
                            <h4>question papers</h4>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="pdf shadow">
			    <img src={thumbnail} alt="" />
			<div class="pdf-detail">
                            <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
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