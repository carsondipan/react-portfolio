import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Mongo from '../assets/mongo.png'
import Tailwind from '../assets/tailwind.png'



const Skills = () => {
    return (
        <div name='skills' className='bg-gray w-full h-screen text-[#131313]'>
            {/* Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[maroon]'>Skills</p>
                    <p className='py-4'>// These are the technologies I've learned</p>
                </div>

                <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='pt-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='pt-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="html icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='pt-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="html icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='pt-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="html icon" />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='pt-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="html icon" />
                        <p className='my-4'>Mongo</p>
                    </div>
                    <div className='pt-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="html icon" />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='pt-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="html icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='pt-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="html icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills