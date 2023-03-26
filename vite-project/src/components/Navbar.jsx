import React, { useState } from "react";
import Logo from '../assets/golo.png'
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[150px] flex justify-between items-center px-3 bg-[#242424] text-[#c23e27]">
            <div>
                <img src={Logo} alt="Logo" style={{ width: '200px' }} />
            </div>


            {/* main menu*/}

            <ul className="text-3xl hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
                </li>
                <li>
                <Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact Me!
                </Link>
                </li>
            </ul>

            {/*menu icon */}

            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu*/}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#ebd4a7] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About Me</li>
                <li className="py-6 text-4xl">Technical Skills</li>
                <li className="py-6 text-4xl">Contact Information</li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] justify-between items-center">
                        <a className="flex justify-between items-center w-full ml-[-100px] hover:ml-[-10px] duration-300 bg-[]" href="https://www.linkedin.com/in/carsondipan/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] justify-between items-center">
                        <a className="flex justify-between items-center w-full ml-[-100px] hover:ml-[-10px] duration-300 bg-[]" href="https://github.com/carsondipan">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] justify-between items-center">
                        <a className="flex justify-between items-center w-full ml-[-100px] hover:ml-[-10px] duration-300 bg-[]" href="">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] justify-between items-center">
                        <a className="flex justify-between items-center w-full ml-[-100px] hover:ml-[-10px] duration-300 bg-[]" href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div >

    )
}

export default Navbar;