import React from 'react'

const Skills = ({about}) => {
    const skills = [
        { name: 'HTML5', img: 'HTML5_logo.png' },
        { name: 'CSS3', img: 'CSS3_logo.png' },
        { name: 'JavaScript', img: 'javascript-logo.png' },
        { name: 'React', img: 'React.png' },
        { name: 'Figma', img: 'Figma.png' },
        { name: 'Git & Github', img: 'git.png' },
        { name: 'RTK Query', img: 'rtkquerry.png' },
        { name: 'Tailwind CSS', img: 'tlwnd.png' },
        { name: 'TypeScript', img: 'typescript.png' },
    ]
    
    return (
        <div className='flex flex-wrap justify-center gap-4'>
            {skills.slice(0, !about ? 6 : skills.length).map((skill, index) => (
                <div className=' mt-2 w-[45%] md:w-[30%] text-center' key={index}>
                    <div className='bg-[#0E1018] rounded-lg w-full  py-5 px-3  flex justify-center items-center'>
                        <img src={`/img/${skill.img}`} alt={skill.name} className={`object-contain ${about ? 'w-14 h-14' : 'w-10 h-10'}`} />
                    </div>
                    <h4 className='text-[#F2F0F5] mt-2'>{skill.name}</h4>
                </div>
            ))}
        </div>
    )
}

export default Skills
