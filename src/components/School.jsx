import React from 'react'
import SchoolItem from './SchoolItem'

const data = [
    {
        year: 2023,
        school: 'Nantes University',
        duration: '1 Year',
        title: 'Completion of Master\'s Degree in Bioinformatics (in progress)',
        details: 'Introduction to programming languages : PHP, Python, C++, Javascript, JAVA. Learning statistics. Communication, management. OMICS Technologies and Structural Bioinformatics.',
    },
    {
        year: 2022,
        school: 'Nantes University',
        duration: '3 Years',
        title: 'Bachelor\'s Degree in Cellular Biology and Animal Physiology',
        details: 'General learning of biology: Cellular biology, Molecular biology, Immunology, Biochemistry, Physiology, Animal care, Homeostasis, Genetics, Virology, Mycology, Parasitology, Plant Sciences.',
    },
    {
        year: 2019,
        school: 'Aristide Briand High School',
        duration: '3 Years',
        title: 'Scientific Baccalaureate',
        details: 'General learning of the academic basics',
    },
]
const School = () => {

    return (
        <div id='school' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center pb-7 text-[#001b5e]'>Education</h1>
            {data.map((item, idx)=>(
                <SchoolItem key={idx} year={item.year} school={item.school} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}

export default School