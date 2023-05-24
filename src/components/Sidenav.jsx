import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineCode , AiOutlineMail, } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden scale-150' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav}
                        href='#main' 
                        className='w-3/4 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handleNav}
                        href='#work' 
                        className='w-3/4 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <MdWorkOutline size={20} />
                            <span className='pl-4'>Work</span>
                        </a>
                        <a onClick={handleNav}
                        href='#school' 
                        className='w-3/4 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaUserGraduate size={20} />
                            <span className='pl-4'>School</span>
                        </a>
                        <a onClick={handleNav}
                        href='#projects' 
                        className='w-3/4 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineCode size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a onClick={handleNav}
                        href='#contact' 
                        className='w-3/4 flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                 ''
                )}
                    <div className='md:block hidden fixed top-1/4 z-10'>
                        <div className='flex flex-col'>
                            <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineHome size={20} />
                            </a>
                            <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <MdWorkOutline size={20} />
                            </a>
                            <a href='#school' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaUserGraduate size={20} />
                            </a>
                            <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineCode size={20} />
                            </a>
                            <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail size={20} />
                            </a>
                        </div>
                    </div>
        </div>
    )
}

export default Sidenav