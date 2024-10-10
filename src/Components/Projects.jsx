import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const Projects = () => {

    const projects = [
        { name: 'Sierra', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', img: 'sierra.png' },
        { name: 'Hospital Dashboard', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', img: 'hospitaldashboard.png' },
        { name: 'Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', img: 'hospitaldashboard.png' },
        { name: 'Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: 'hospitaldashboard.png' },
    ]
    return (
        <div className='flex flex-col'>
            {projects.slice(0, 2).map((item, i) => (
                <div key={i} className='relative mt-6 w-full xl:h-[250px] space-y-[1.5rem]'>
                    <div className='pt-6 px-6 h-full bg-[#0e1018] rounded-2xl'>
                        <img className='w-full h-full object-cover rounded-t-lg' src={`/img/${item.img}`} alt={`img-${i}`} />
                    </div>
                    <div className='p-6 hidden '>
                        {/* flex justify-between */}
                        <div>
                            <p className='text-2xl mb-1 text-[#F0F2F5B3]'>{item.name}</p>
                            <p className='text-base text-[#576076]'>{item.description}</p>
                        </div>
                        <Link className="text-sm text-[#F0F2F5B3]">Visit site <FiArrowUpRight /></Link>
                    </div>
                    <div className="md:m-4 absolute bottom-3 left-0">
                        <span className="py-1 px-2 bg-white text-xs font-medium rounded-md text-[#4770FF]">Product Design</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
