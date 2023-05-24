import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaLinkedin, FaGithub, } from 'react-icons/fa';

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover scale-x-[-1]" src="https://images.pexels.com/photos/3527786/pexels-photo-3527786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
            <div className="m-auto h-full w-full flex flex-col justify-center items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-grey-800">I'm Damien Rat</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                I'm a
                <TypeAnimation
                sequence={[
                    'Developper', // Types 'One'
                    2000, 
                    'Coder', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Bioinformatician', // Types 'Three' without deleting 'Two'
                    2000, 
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '7px' }}
                />
                </h2>
                
                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <a href="https://twitter.com/Damien_Rat" target="blank"><FaTwitter className="cursor-pointer" size={20} /></a>
                    <a href="https://www.linkedin.com/in/damien-rat/" target="blank"><FaLinkedin className="cursor-pointer" size={20} /></a>
                    <a href="https://github.com/DamienCode404" target="blank"><FaGithub className="cursor-pointer" size={20} /></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main