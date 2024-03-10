import React from "react";

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group absolute flex justify-center">
            <div className="w-screen flex pr-[15px] justify-between">
            <button className='border shadow-sm shadow-black rounded-full flex items-center rotate-180 bg-white' onClick={() => previous()} >
                <span className="inline-block h-7 w-7 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-full w-6 text-blue-800 -rotate-90 ">
                        <path fillRule="evenodd" d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <button className='border shadow-sm shadow-black rounded-full flex items-center bg-white' onClick={() => next()}>
                <span className="inline-block h-7 w-7 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-full w-6 text-blue-800 -rotate-90 ">
                        <path fillRule="evenodd" d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            </div>
        </div>
    );
};