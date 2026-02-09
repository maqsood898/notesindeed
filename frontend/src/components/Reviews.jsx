import React from "react";

const Reviews = () => {

    return (
        <>
        <div className="review-sec sec">
                <h4>What our users say</h4>
                <div className="review-cards">
                    <div className="review-card shadow">
                        <p>The LIVE Interactive classes with visual explanations helped me learn and retain all the topics
                            better.
                        </p>
                        <span className="review-details">
                            <img src="img/review/review1.jpeg" alt="" />
                            <h3>Maya Yadav</h3>
                        </span>
                    </div>
                    <div className="review-card shadow">
                        <p>I took classes whenever I was ready and made use of the notes and recorded videos for revision. The
                            teachers helped me make every concept crystal clear.</p>
                        <span className="review-details">
                            <img src="img/review/review2.jpeg" alt="" />
                            <h3>Shreya Gupta</h3>
                        </span>
                    </div>
                    <div className="review-card shadow">
                        <p>I took classes whenever I was ready and made use of the notes and recorded videos for revision. The
                            teachers helped me make every concept crystal clear.</p>
                        <span className="review-details">
                            <img src="img/review/review3.jpeg" alt="" />
                            <h3>Harsh Modi</h3>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;