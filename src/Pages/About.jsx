import AboutCard from '../Components/AboutCard'
import Skills from '../Components/Skills'
import WorkComponent from '../Components/WorkComponent'
const About = () => {
    return (
        <div className='wrapper px-3 xs:px-0 md:px-0 mx-auto mt-6'>
            <div className='w-full flex flex-col justify-between xl:flex-row gap-6'>
                <section className='w-full xl:w-[34%] h-[100%]  xl:px-3'>
                    <AboutCard />
                </section>
                <section className='flex flex-col xl:w-[67%] bg-black rounded-2xl p-6  xl:p-10 '>
                    <div className='max-w-[540px] font-medium'>
                        <h1 className='text-white text-3xl md:text-4xl  mb-6'>Hi, This is <span className='text-[#4770FF]'>Ibrahim Hasanzada 👋</span></h1>
                        <div className='text-[#f0f2f5b3] mt-2  text-lg md:text-2xl '>
                            A passionate
                            <span className='text-white'> Full Stack Developer </span>
                            🖥️ & having 1.5 years of
                            <span>Experience  over 6+ Country Worldwide.</span>
                        </div>
                    </div>
                    <div className='w-full mt-12'>
                        <h2 className='text-[#F0F2F5B3] font-medium text-3xl mb-8'>Working Experience</h2>
                        <WorkComponent />
                    </div>
                    <div className='bg-black rounded-2xl mt-6'>
                        <h3 className='mb-2 text-2xl text-[#F2F0F5] font-semibold'>My Expert Area</h3>
                        <Skills about={true} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
