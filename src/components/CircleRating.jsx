import React from "react";
import { ProgressBar } from "react-bootstrap";
// import './CircleRating.css'; // Import the CSS file

const CircleRating = ({ rating, className, fillColor }) => {
    const percentage = (rating / 10) * 100;
    const color = rating < 5 ? "danger" : rating < 7 ? "warning" : "success";

    return (
        <div className={`circle-rating position-relative d-flex justify-content-center align-items-center ${className}`}>
            <ProgressBar
                now={percentage}
                variant={color}
                className="circle-progress-bar"
            />
            <div className="rating-text" style={{ color: fillColor }}>
                {rating}
            </div>
        </div>
    );
};

export default CircleRating;
