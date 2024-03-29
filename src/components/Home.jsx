import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#000808]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                {/* <p className='text-3xl text-[maroon]'>Hello, my name is</p> */}
                <h1 className='text-4xl sm:text-7xl font-bold text-[rgb(255,255,255)]'>Carson DiPangrazio</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[gray]'>Full Stack Developer</h2>
                {/* <p className='text-[gray] py-4 max-w-[700px]'>I am a recently certified graduate of the UNCC Coding Bootcamp for Web Development, and I am looking for work!</p> */}
                <div>
                    <button className='bg-maroon text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[white] hover:border-[maroon] hover:text-maroon'>
                        <Link to="skills" smooth={true} duration ={600}>
                            Skills
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                    <button className='bg-maroon text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[white] hover:border-[maroon] hover:text-maroon'>
                        <Link to="work" smooth={true} duration={500}>
                            Projects
                        </Link>
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