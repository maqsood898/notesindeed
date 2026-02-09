import React from "react";
import { useEffect, useState } from "react";


const Stats = () => {

    // //stats-counter-section
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const counterSec = document.querySelector(".stats-details");
            const sectionPosition = counterSec.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (sectionPosition < screenPosition && !hasAnimated) {
                const counts = document.querySelectorAll(".count");

                counts.forEach((element) => {
                    const target = parseInt(element.dataset.target, 10);
                    const duration = 900; // Base duration
                    animateCount(element, target, duration);
                });

                setHasAnimated(true);
            }
        };

        const animateCount = (element, target, duration) => {
            let start = 0;
            const increment = Math.ceil(target / duration);
            const interval = 20; // Interval in milliseconds for updates

            const counter = setInterval(() => {
                start += increment * 5; // Adjust multiplier for faster count
                if (start > target) start = target; // Prevent overshoot

                element.textContent = start;

                if (start === target) {
                    clearInterval(counter); // Stop the interval when the target is reached
                }
            }, interval);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasAnimated]);

    return (
        <>
            <div className="stats sec">
                <span className="stats-head">
                    <h4>Our Stats</h4>
                    <h5>Making e-education accessible across the globe</h5>
                </span>
                <div className="stats-details">
                    <div className="stats-detail">
                        <div className="stat">
                            <span className="counter">
                                <h4 className="count" data-target="1000">0 </h4>
                                <h4>+</h4>
                            </span>
                            <p>notes</p>
                        </div>
                        <div className="stat">
                            <span className="counter">
                                <h4 className="count" data-target="7000">0 </h4>
                                <h4>+</h4>
                            </span>
                            <p>downloads</p>
                        </div>
                        <div className="stat">
                            <span className="counter">
                                <h4 className="count" data-target="50">0 </h4>
                                <h4>+</h4>
                            </span>
                            <p>Teachers</p>
                        </div>
                        <div className="stat">
                            <span className="counter">
                                <h4 className="count" data-target="800">0 </h4>
                                <h4>+</h4>
                            </span>
                            <p>DPPs</p>
                        </div>
                    </div>
                    <img src="img/study-material-icon/india.svg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Stats;