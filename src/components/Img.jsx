import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Img = ({ src, className, alt }) => {
    return (
        <LazyLoadImage
            src={src}
            alt={alt || 'Image'}
            className={className || 'rounded-xl'}
            effect='blur'
            fluid // To ensure responsive design
        />
    );
}

export default Img;
