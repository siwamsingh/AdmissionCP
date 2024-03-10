import React from 'react'
import ExploreCard from './ExploreCard'

function ExploreBlock() {
    const UgPrograms = [
        {
            tag: "Engineering",
            image: "https://cdn-icons-png.flaticon.com/128/609/609034.png",
        },
        {
            tag: "CSE Engineering",
            image: "https://cdn-icons-png.flaticon.com/128/7069/7069896.png"

        },
        {
            tag: "BBA",
            image: "	https://cdn-icons-png.flaticon.com/128/2636/2636258.png",
        },
        {
            tag: "BCA",
            image: "	https://cdn-icons-png.flaticon.com/128/2920/2920281.png",
        },
        {
            tag: "LAW",
            image: "	https://cdn-icons-png.flaticon.com/128/4252/4252296.png",
        },
        {
            tag: "B.Com",
            image: "	https://cdn-icons-png.flaticon.com/128/3534/3534696.png",
        },
        {
            tag: "B.Sc",
            image: "	https://cdn-icons-png.flaticon.com/128/8980/8980149.png",
        },
        {
            tag: "BA Liberal Arts ",
            image: "	https://cdn-icons-png.flaticon.com/128/746/746964.png",
        },
        {
            tag: "BA",
            image: "	https://cdn-icons-png.flaticon.com/128/906/906175.png",
        },
        {
            tag: "Bio Technology",
            image: "	https://cdn-icons-png.flaticon.com/128/10001/10001268.png",
        },
        {
            tag: "BAJMC",
            image: "	https://cdn-icons-png.flaticon.com/128/10290/10290269.png",
        },
        {
            tag: "B.Des",
            image: "	https://cdn-icons-png.flaticon.com/128/10493/10493392.png",
        },
        {
            tag: "B.Pharma",
            image: "	https://cdn-icons-png.flaticon.com/128/2968/2968933.png",
        },
        {
            tag: "BDS",
            image: "	https://cdn-icons-png.flaticon.com/128/11523/11523557.png",
        },
    ]

    const PgPrograms = [
        {
            tag: "M TECH",
            image: "	https://cdn-icons-png.flaticon.com/128/2421/2421283.png",
        },
        {
            tag: "MBBS",
            image: "	https://cdn-icons-png.flaticon.com/128/11220/11220830.png",
        },
        {
            tag: "MCA",
            image: "	https://cdn-icons-png.flaticon.com/128/1316/1316740.png",
        }, {
            tag: "MBA",
            image: "	https://cdn-icons-png.flaticon.com/128/7890/7890493.png",
        },
        {
            tag: "LLM",
            image: "	https://cdn-icons-png.flaticon.com/128/3122/3122333.png",
        }
    ]
    return (
        <div className='py-[6rem]'>
            <h2 className='text-blue-700 text-2xl pb-[4rem] sm:text-3xl py-6 font-bold text-center'>
                Explore Our Top Courses
            </h2>
            <div className='flex px-20 justify-between'>
                <div>
                    <div className='text-[0.9rem] font-semibold text-[#1E90FF]'>
                        UG Programs
                    </div>
                    <div className='w-[3rem] h-[0.3rem] rounded-lg bg-[#1E90FF]' />
                </div>
                <div className='flex border shadow-md w-fit'>
                    <form className="flex items-center justify-center p-2">
                        <input type="text" placeholder="Search UG courses" className="w-full rounded-md bg-gray-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mx-2 text-blue-600 text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm80 294.63l-54.15-54.15a88.08 88.08 0 1122.63-22.63L358.63 336z"></path><circle cx="232" cy="232" r="56"></circle>
                        </svg>
                    </form>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center flex-wrap pb-6 pt-4 gap-2 sm:gap-[2rem]'>
                    {
                        UgPrograms.map((prg, index) =>
                        (<div
                            key={index} className=''>
                            <ExploreCard image={prg.image} tag={prg.tag} />
                        </div>)
                        )
                    }
                </div>
            </div>
            <div className='flex px-20 justify-between pt-12'>
                <div>
                    <div className='text-[0.9rem] font-semibold text-[#1E90FF]'>
                        PG Programs
                    </div>
                    <div className='w-[3rem] h-[0.3rem] rounded-lg bg-[#1E90FF]' />
                </div>
                <div className='flex border shadow-md w-fit '>
                    <form className="flex items-center justify-center p-2">
                        <input type="text" placeholder="Search UG courses" className="w-full rounded-md bg-gray-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mx-2 text-blue-600 text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm80 294.63l-54.15-54.15a88.08 88.08 0 1122.63-22.63L358.63 336z"></path><circle cx="232" cy="232" r="56"></circle>
                        </svg>
                    </form>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center flex-wrap pb-6 pt-4 gap-2 sm:gap-[2rem]'>
                    {
                        PgPrograms.map((prg, index) =>
                        (<div
                            key={index} className=''>
                            <ExploreCard image={prg.image} tag={prg.tag} />
                        </div>)
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default ExploreBlock
