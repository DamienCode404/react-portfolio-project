import React from 'react'
import ProjectItem from './ProjectItem'
import gacteriaImg from '../assets/gacteria.png'
import imutateImg from '../assets/iMutate.png'
import mobpdbImg from '../assets/mobpdb.png'
import StramingImg from '../assets/Streaming_paradise.png'
import ecomImg from '../assets/ecom.png'

const Projects = () => {

    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8 text-base font-normal text-stone-500'>
                Throughout my journey, I had the opportunity to develop several websites. As part of my internship, I contributed to the development of the iMutate and mOBP database websites, which were created to fulfill specific needs. Additionally, I completed the Gacteria and Streaming Paradise projects for my school assignments, applying my web development skills to meet project requirements. Outside of my academic commitments, I dedicated my personal time to the Black Market project, leveraging my passion and knowledge to create a unique experience. These diverse experiences allowed me to enhance my programming skills and solidify my understanding of key web development concepts.
            </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={imutateImg} techno1='Perl' techno2='Wordpress' link='https://protsci-us2b.univ-nantes.fr/imutate/' />
            <ProjectItem img={mobpdbImg} techno1='MySql' techno2='Perl' techno3='Wordpress' techno4='JavaScript' link='https://protsci-us2b.univ-nantes.fr/mobpdb/' />
            <ProjectItem img={gacteriaImg} techno1='Flask' techno2='Python' techno3='CSS' link='https://github.com/DamienCode404/web_application_flask' />
            <ProjectItem img={StramingImg} techno1='PHP' techno2='CSS' link='https://github.com/DamienCode404/Projet_BD' />
            <ProjectItem img={ecomImg} techno1='Django' techno2='tailwindcss' techno3='Python' techno4='JavaScript' link='https://github.com/DamienCode404/Starwars_ecommerce_website' />
        </div>
        </div>
    )
}

export default Projects