import React from 'react'
import PetbookImg from '../assets/homepage.jpg'
import BlockbusterImg from '../assets/blockbuster.png'
const Work = () => {
    return (
        <div name='work' className=' pt-24 w-full md:h-screen bg-[#ececec] text-[#181717]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                
                {/* project container */}

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow text-[maroon]'>Projects</p>
                    <p className='py-6'>// View my recent projects here!</p>
                </div>




                <div className='items-center grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div
                        style={{ backgroundImage: `url(${PetbookImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >
                        {/* Hover effects */}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-center p-4 font bold text-[white] tracking-wider'>
                                PetBook (Tailwind, React.JS, MongoDB)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://stormy-tundra-00611.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'
                                    >
                                        Deployed App
                                    </button>
                                </a>
                                <a href="https://github.com/carsondipan/pet-social-app">
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'>Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${BlockbusterImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >

                        {/* Hover effects */}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font bold text-[white] tracking-wider text-center'>
                                BlockBuster 2.0 (JavaScript, HTML, CSS)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://carsondipan.github.io/movie-search-project/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'
                                    >
                                        Deployed App
                                    </button>
                                </a>
                                <a href="https://github.com/carsondipan/movie-search-project">
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'>Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        // style={{ backgroundImage: `url(${PetbookImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font bold text-[white] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'
                                    >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/carsondipan/pet-social-app">
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'>Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        // style={{ backgroundImage: `url(${BlockbusterImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font bold text-[white] tracking-wider justify-center'>
                                JavaScript, HTML, CSS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'
                                    >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/carsondipan/pet-social-app">
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'>Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        // style={{ backgroundImage: `url(${PetbookImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font bold text-[white] tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'
                                    >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/carsondipan/pet-social-app">
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'>Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        // style={{ backgroundImage: `url(${BlockbusterImg})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                    >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            {/* <span className='text-2xl font bold text-[white] tracking-wider justify-center'>
                                JavaScript, HTML, CSS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'
                                    >
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/carsondipan/pet-social-app">
                                    <button
                                        className='text-center rounded-lg px-4 py-3 m-2 text-gray-dark font-bold text-lg'>Code
                                    </button>
                                </a>

                            </div> */}
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Work