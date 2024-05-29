import React, { useEffect, useState } from 'react';

export default function ArrowUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

            const scrollTrigger = 1;

            if (scrollValue > scrollTrigger) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={`arrow ${isVisible ? 'active-arrow' : ''}`} onClick={scrollTop}>
            <i className="fa-solid fa-circle-chevron-up"></i>
        </div>
    );
}
