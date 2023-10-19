import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#131313] text-gray-light'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[maroon]'>About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Hello! I'm Carson! Please stay and check out my Projects!</p>
                        </div>

                    <div>
                        <p>In my approach to web design, I prioritize functionality and ease of use first. I care very deeply about crafting simple but elegant solutions to different problems. My work ethic is also second to none!</p>
                    </div>
                    </div>
                </div>

            </div>
    )
}

export default About