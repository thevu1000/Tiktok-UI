import React, { useState, forwardRef } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img src={fallback || src} alt={alt} ref={ref} {...props} onError={handleError} />;
});

export default Image;
