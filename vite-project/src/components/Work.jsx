import React from 'react'
import PetbookImg from '../assets/homepage.jpg'

const Work = () => {
    return (
        <div name='work' className='w-full bg-[#ececec] text-[#181717]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 text-[maroon]'>Work</p>
                    <p className='py-6'>// View my recent projects here!</p>
                </div>

                <div style={{backgroundImage: `url(${PetbookImg})`}} className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hoverin */}
                        
                        <div>
                            <span>

                            </span>
                            <div>
                                <a href="/">
                                    <button></button>
                                </a>
                                <a href="/">
                                    <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work