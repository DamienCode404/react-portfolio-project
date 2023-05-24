import React from 'react'

const ProjectItem = ({img, techno1, techno2, techno3, techno4, link}) => {

    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-[#001b5e]'>
            <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {techno1}
                </h3>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {techno2}
                </h3>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {techno3}
                </h3>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center pb-4'>
                    {techno4}
                </h3>
                <a href={link} target="blank"> 
                    <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
                        More Info
                    </p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem