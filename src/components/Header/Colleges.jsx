import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Colleges() {
    const images = ["https://media.istockphoto.com/id/1401022155/photo/student-union-at-campus-at-university-of-buffalo-new-york.jpg?s=612x612&w=0&k=20&c=hIHKV8WMoDCA70bOzJTzSsPN11_E1P9m6g_tYEde2LU=",
        "https://st.depositphotos.com/1658611/1331/i/450/depositphotos_13317667-stock-photo-science-building-on-university-campus.jpg",
        "https://media.istockphoto.com/id/172410993/photo/campus-living.jpg?s=612x612&w=0&k=20&c=tNEzf5Np1GPJUIlIsus3tUZOQ9d3dOs_G7VNIRDXZaA="]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (

        <div className='h-fit overflow-hidden border border-black flex justify-center'>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                transitionDuration={2000}
                customTransition='2000ms '
                containerClass="carousel-container"
                className='w-full  '
                // customButtonGroup={<ButtonGroup />}
                // arrows={false}
            >
                {
                    images.map((image, index) => (
                        <div key={index} className='w-full h-[70vh]  sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] ' style={{backgroundImage: `url(${image})`, backgroundSize: "cover" , backgroundRepeat:"no-repeat" , backgroundPositionPosition: "center"} }>
                           
                        </div>
                    ))
                }
            </Carousel>

        </div>
    )
}

export default Colleges
