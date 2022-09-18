import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollBottom = () => {
    return (
        <>
             <div id="scroll" onClick={() => scroll.scrollToTop()}><span></span></div>
        </>
    );
};

export default ScrollBottom;