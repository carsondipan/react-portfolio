import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#000808]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[maroon]'>Hello, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[rgb(255,255,255)]'>Carson DiPangrazio</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[gray]'>I am a Full Stack Developer</h2>
                <p className='text-[gray] py-4 max-w-[700px]'>I am a recently certified graduate of the UNCC Coding Bootcamp for Web Development, and I am looking for work!</p>
                <div>
                    <button className=' bg-gray-light text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[maroon] hover:border-[maroon]'>View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home