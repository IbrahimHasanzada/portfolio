import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { TbLayersSubtract } from "react-icons/tb";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const AboutCard = () => {
    return (
        <div className='w-full  p-6 bg-black sticky top-24 xl:h-[628px] rounded-2xl '>
            <div className='bg-[#0e1018] aspect-[6/4] rounded-lg flex justify-center items-center'>
                <img className='mt-3 align-middle h-full' src="/img/portfolioProfil.png" alt="profile" />
            </div>
            <div className='mt-6'>
                <div className='text-[#f0f2f5] text-2xl mb-2 font-semibold'>
                    <h2>Ibrahim Hasanzada👋</h2>
                </div>
                <div className='text-[#f0f2f5b3] mt-2 font-medium  leading-6'>
                    A passionate
                    <span className='text-white'> Full Stack Developer </span>
                    🖥️ & having 1.5 years of
                    <span>Experience  over 6+ Country Worldwide.</span>
                </div>
                <div className='mt-6 flex flex-col items-start md:flex-row md:items-center'>
                    <Link className='px-6 xl:px-2 cs:px-6 py-4 text-white bg-[#4770FF] md:ml-2 rounded-lg font-medium leading-6 flex items-center'><FiPhoneCall className="mr-2 text-2xl" /> Book A call</Link>
                    <button className='px-6 xl:px-2  cs:px-6 py-4 text-[#576076] mt-2 md:mt-0  md:ml-2 rounded-lg font-medium flex items-center border border-[#1a1f2c]'><TbLayersSubtract className="mr-2 text-2xl" /> Copy Email</button>
                </div>
            </div>
            <ul className="flex gap-1 mt-8">
                <li className="w-10 h-10 rounded-lg bg-[#0e1018] flex justify-center items-center text-[#576076] text-xl">
                    <Link target="blank" to={''}>
                        <FaFacebook />
                    </Link>
                </li>
                <li className="w-10 h-10 rounded-lg bg-[#0e1018] flex justify-center items-center text-[#576076] text-xl">
                    <Link target="blank" to={'https://github.com/IbrahimHasanzada'}>
                        <FaGithub />
                    </Link>
                </li>
                <li className="w-10 h-10 rounded-lg bg-[#0e1018] flex justify-center items-center text-[#576076] text-xl">
                    <Link target="blank" to={'https://www.linkedin.com/in/ibrahim-hasanzada-6b677225a'}>
                        <FaLinkedin />
                    </Link>
                </li>
                <li className="w-10 h-10 rounded-lg bg-[#0e1018] flex justify-center items-center text-[#576076] text-xl">
                    <Link target="blank" to={'https://www.instagram.com/ibraheemhasanz'}><FaInstagram /></Link>
                </li>
            </ul>
        </div>
    )
}

export default AboutCard
