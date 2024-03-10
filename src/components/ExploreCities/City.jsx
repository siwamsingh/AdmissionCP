import React from 'react'
import CityCard from './CityCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function City() {

    const cities = [
        {
            image:"https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=",
            city:"Banglore",
        },
        {
            image:"https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=",
            city:"Hyderabad",
        },
        {
            image:"https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=",
            city:"Banglore",
        },
        {
            image:"https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=",
            city:"Hyderabad",
        },
        {
            image:"https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=",
            city:"Banglore",
        },
        {
            image:"https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=",
            city:"Hyderabad",
        }
    ]
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
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
            <div>
                <h2 className='text-blue-700 text-2xl pb-[1rem] sm:text-3xl pt-6 font-bold text-center'>
                    Explore Cities
                </h2>
                <p className="text-sm text-center sm:text-[1rem] text-gray-900 mb-[2rem]"> Explore the cities and pursue your career based on your educational choices.</p>
            </div>

            <div >
                
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
                        containerClass="carousel-container "
                        className='w-full transition-all ease-in-out '

                        // customButtonGroup={<ButtonGroup />}
                        // arrows={false}
                    >
                        {
                            cities.map(( ele, index)=>(
                                <div key={index} className='flex justify-center items-center'>
                                    <CityCard cityImage={ele.image}  cityName={ele.city}/>
                                </div>
                            ))
                        }
                    </Carousel>
            </div>
        </div>
    )
}

export default City
