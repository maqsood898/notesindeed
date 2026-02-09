import React from "react";
import { useState, useEffect, useRef } from "react";

const Materials = () => {

    // //material-slider-function
    const mslideListRef = useRef(null);
    const msliderScrollBarRef = useRef(null);
    const mScrollBarThumbRef = useRef(null);

    const [maxmScrollLeft, setMaxmScrollLeft] = useState(0);

    useEffect(() => {
        const mslideList = mslideListRef.current;
        const msliderScrollBar = msliderScrollBarRef.current;
        const mScrollBarThumb = mScrollBarThumbRef.current;

        if (!mslideList || !msliderScrollBar || !mScrollBarThumb) return;

        // Calculate max scrollable width
        setMaxmScrollLeft(mslideList.scrollWidth - mslideList.clientWidth);

        const handleThumbMouseDown = (e) => {
            const mstartX = e.clientX;
            const mthumbPos = mScrollBarThumb.offsetLeft;

            const handleMouseMove = (e) => {
                const mdeltaX = e.clientX - mstartX;
                const maxThumbPos = msliderScrollBar.clientWidth - mScrollBarThumb.offsetWidth;

                const mboundedPos = Math.max(0, Math.min(maxThumbPos, mthumbPos + mdeltaX));
                const mscrollPos = (mboundedPos / maxThumbPos) * maxmScrollLeft;

                mScrollBarThumb.style.left = `${mboundedPos}px`;
                mslideList.scrollLeft = mscrollPos;
            };

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        mScrollBarThumb.addEventListener("mousedown", handleThumbMouseDown);

        return () => {
            mScrollBarThumb.removeEventListener("mousedown", handleThumbMouseDown);
        };
    }, [maxmScrollLeft]);

    const handleSlide = (direction) => {
        const mslideList = mslideListRef.current;
        if (!mslideList) return;

        const mscrollAmount = mslideList.clientWidth * direction;
        mslideList.scrollBy({ left: mscrollAmount, behavior: "smooth" });
    };

    const updateScrollThumbPos = () => {
        const mslideList = mslideListRef.current;
        const msliderScrollBar = msliderScrollBarRef.current;
        const mScrollBarThumb = mScrollBarThumbRef.current;

        if (!mslideList || !msliderScrollBar || !mScrollBarThumb) return;

        const mscrollPos = mslideList.scrollLeft;
        const mthumbPos =
            (mscrollPos / maxmScrollLeft) *
            (msliderScrollBar.clientWidth - mScrollBarThumb.offsetWidth);

        mScrollBarThumb.style.left = `${mthumbPos}px`;
    };

    const handleSlideButtons = () => {
        const mslideList = mslideListRef.current;

        if (mslideList) {
            return {
                prev: mslideList.scrollLeft > 0,
                next: mslideList.scrollLeft < maxmScrollLeft,
            };
        }

        return { prev: false, next: false };
    };

    const handleScroll = () => {
        updateScrollThumbPos();
    };

    return (
        <>
        <div className="study-materials-sec sec">
		<a className="sec-head">
                	<h2 className="sub-title">Study Materials</h2>
		</a>
                <div className="materials-slider">
                    <div className="materials"  ref={mslideListRef} onScroll={handleScroll}>
                        <span className="material">
			    <img src="img/study-material-icon/previousyearpaper.svg" alt="" />
			<div class="material-detail">
			    <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                            
                        </span>
                        <span className="material">
                            <img src="img/study-material-icon/previousyearpaper.svg" alt="" />
			<div class="material-detail">
                            <h3>Sample</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="material">
                            <img src="img/study-material-icon/previousyearpaper.svg" alt="" />
			<div class="material-detail">
                            <h3>Revision</h3>
                            <h4>Notes</h4>
			</div>
                        </span>
                        <span className="material">
                            <img src="img/study-material-icon/previousyearpaper.svg" alt="" />
			<div class="material-detail">
                            <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="material">
                            <img src="img/study-material-icon/previousyearpaper.svg" alt="" />
			<div class="material-detail">
                            <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                        <span className="material">
                            <img src="img/study-material-icon/previousyearpaper.svg" alt="" />
			<div class="material-detail">
                            <h3>Books</h3>
                            <h4>e-books</h4>
			</div>
                        </span>
                        <span className="material">
                            <img src="img/study-material-icon/previousyearpaper.svg" alt="" />
			<div class="material-detail">
                            <h3>Previous Year</h3>
                            <h4>question papers</h4>
			</div>
                        </span>
                    </div>
                    <button id="m-prev" className="prev material-slide-btn d-n" onClick={() => handleSlide(-1)}
                        style={{ display: handleSlideButtons().prev ? "flex" : "none" }}>&#10094;</button>
                    <button id="m-next" className="next material-slide-btn" onClick={() => handleSlide(1)}
                        style={{ display: handleSlideButtons().next ? "flex" : "none" }}>&#10095;</button>
                    <div className="material-scrollbar"  ref={msliderScrollBarRef}>
                        <div className="material-scrollbar-track">
                            <div className="material-scrollbar-thumb" ref={mScrollBarThumbRef}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Materials;