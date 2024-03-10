import React from 'react'
import AbroadCard from './AbroadCard'
AbroadCard

function StudyAbroad() {
    const abroad = [
        {
            image: "https://cdn-icons-png.flaticon.com/512/6407/6407936.png",
            city: "USA",
            description: ["The United States is a global leader in technology and innovation.", "Home to renowned universities like MIT, Stanford, and Harvard", "Offers a diverse range of programs and research opportunities."]
        },
        {
            image: "https://png.pngtree.com/png-vector/20190727/ourlarge/pngtree-building-canada-city-famous-city-toronto-flat-color-icon-png-image_1616868.jpg",
            city: "Canada",
            description: ["Canada is known for its high-quality education system.", "Strong emphasis on research and innovation.", "Top universities include University of Toronto and University of British Columbia."]

        },
        {
            image: "	https://png.pngitem.com/pimgs/s/238-2381180_transparent-city-vector-png-england-vector-png-png.png",
            city: "United Kingdom",
            description: ["The UK boasts a rich academic history and cultural diversity.","Oxford and Cambridge are among the world's oldest and prestigious universities.",
        "Leading in technology and research advancements."]
        },
        {
            image:"https://media.istockphoto.com/id/542974214/vector/concept-of-travel-or-studying-german.jpg?s=612x612&w=0&k=20&c=CGEYQfyKxRjGeiS9scmp7pF9KFiDJUIMhHGHUiDUKnE=",
            city: " germany",
            description: ["Germany is recognized for its engineering and technical education.","Home to TU Munich and RWTH Aachen University.",
        "Known for a strong focus on research and development."]
        }
    ]
    return (
        <div>
            <div>
                <h2 className='text-blue-700 text-2xl pb-[1rem] sm:text-3xl pt-[6rem] font-bold text-center'>
                    Study Abroad
                </h2>
                <p className="text-sm text-center sm:text-[1rem] text-gray-900 mb-[2rem]"> Discover top universities, courses, and get expert guidance on application strategy.</p>
            </div>
            <div className='flex flex-wrap px-10 justify-center'>
                {abroad.map((ele)=>(
                    <div>
                        <AbroadCard image={ele.image} city={ele.city} description={ele.description}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudyAbroad
