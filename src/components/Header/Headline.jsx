import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup } from './ButtonGroup';
import Colleges from './Colleges';

function CollegeImages() {

    const topics = ["JEE Mains Result" , "JEE Advance Syllabus" , "NEET Syllabus" , "NEET Result" ,"JEE Mains Result" , "JEE Advance Syllabus" , "NEET Syllabus" , "NEET Result" ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <div className='h-fit '>
                <Colleges/>
            </div>
            <div className='flex items-center h-16 text-white bg-blue-800'>
                

                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2500}
                        keyBoardControl={true}
                        transitionDuration={1500}
                        customTransition='transform 1500ms ease-in-out'
                        containerClass="carousel-container"
                        className='w-full transition-all ease-in-out'
                        customButtonGroup={<ButtonGroup />}
                        arrows={false}
                    >
                        {
                            topics.map((topic , index)=>(
                                <div key={index}>
                                    <div className='inline-block overflow-hidden p-2 mr-[1rem] cursor-pointer ease-in-out duration-900'>{topic}</div>
                                </div>
                            ))
                        }
                    </Carousel>
                
            </div>
        </div>
    )
}

export default CollegeImages
