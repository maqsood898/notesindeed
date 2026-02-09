import React from "react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {

    const [slides] = useState([
        'img/mind-map.png',
        'img/get-free-ebook.png',
        'img/download-any-pdf.png',
    ]);
    const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide
    const slidesWrapperRef = useRef(null);

    const totalSlides = slides.length;
    const totalSlidesWithClones = totalSlides + 2; // Account for clones

    // Move Slide Function
    const moveSlide = (direction) => {
        const slidesWrapper = slidesWrapperRef.current;
        if (!slidesWrapper) return;

        let newIndex = currentIndex + direction;

        // Smooth transition
        slidesWrapper.style.transition = 'transform 0.6s ease';
        slidesWrapper.style.transform = `translateX(-${newIndex * 100}%)`;
        setCurrentIndex(newIndex);

        // Handle clones after the transition
        setTimeout(() => {
            if (newIndex === 0) {
                slidesWrapper.style.transition = 'none';
                setCurrentIndex(totalSlides);
                slidesWrapper.style.transform = `translateX(-${totalSlides * 100}%)`;
            } else if (newIndex === totalSlidesWithClones - 1) {
                slidesWrapper.style.transition = 'none';
                setCurrentIndex(1);
                slidesWrapper.style.transform = 'translateX(-100%)';
            }
        }, 600); // Match the duration of the transition
    };

    // Set Slide Function (on dot click)
    const setSlide = (index) => {
        const slidesWrapper = slidesWrapperRef.current;
        setCurrentIndex(index + 1);

        if (slidesWrapper) {
            slidesWrapper.style.transition = 'transform 0.6s ease';
            slidesWrapper.style.transform = `translateX(-${(index + 1) * 100}%)`;
        }
    };

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => moveSlide(1), 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <>
        <div className="first sec ">
                <div className="ftf">
                    <div className="ftf-cards" ref={slidesWrapperRef}>
                        {/* Cloned last slide */}
                        <div className="ftfcard">
                            <img src={slides[slides.length - 1]} alt="Cloned Last Slide" />
                        </div>

                        {/* Original slides */}
                        {slides.map((src, index) => (
                            <div key={index} className="ftfcard">
                                <img src={src} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}

                        {/* Cloned first slide */}
                        <div className="ftfcard">
                            <img src={slides[0]} alt="Cloned First Slide" />
                        </div>
                    </div>
                    <button className="prev" onClick={() => moveSlide(-1)}>
                        &#10094;
                    </button>
                    <button className="next" onClick={() => moveSlide(1)}>
                        &#10095;
                    </button>
                    <div className="dots-container">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index + 1 ? 'active-dot' : ''}`}
                                onClick={() => setSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;