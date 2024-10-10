import { CiGrid42 } from "react-icons/ci";
import { TbSmartHome, TbUserSquareRounded, TbLayersIntersect, TbMessage } from "react-icons/tb";
import { PiArrowElbowRightBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const url = useLocation()
  const [flag, setFlag] = useState(false)
  const headerMenu = [
    { name:'Home', path: '/', icon: <TbSmartHome />},
    { name:'About', path: '/about', icon: <TbUserSquareRounded />},
    { name:'Services', path: '/services', icon: <TbLayersIntersect />},
    { name:'Contact', path: '/contact', icon: <TbMessage />},
  ]
  return (
    <header className='wrapper px-3  xs:mx-auto font-["Bricolage_Grotesque",_sans-serif]'>
      <nav className=" flex  items-center justify-between p-3 rounded-2xl bg-black">
        <div className="py-1">
          <Link className="text-2xl font-semibold flex gap-3">
            <CiGrid42 className="text-3xl text-white" />
            <div>
              <span className="text-white">Ibrahim</span>
              <span className="text-[#4770FF]"> Hasanzada</span>
            </div>
          </Link>
        </div>
        <section className={`bg-black p-6 xl:p-0 flex flex-col justify-between xl:flex-row fixed xl:static top-0 ${flag ? 'left-0' : '-left-[260px]'} z-50 h-full w-[260px] xl:w-auto duration-200 ease-linear transition-all`}>
          <div className="flex flex-col xl:flex-row">
            <div className="py-1 block xl:hidden">
              <Link className="text-2xl font-semibold flex gap-3">
                <CiGrid42 className="text-3xl text-white" />
                <div>
                  <span className="text-white">Ibrahim</span>
                  <span className="text-[#4770FF]">Hasanzada</span>
                </div>
              </Link>
            </div>
            <ul className="flex items-center w-full xl:w-auto flex-col xl:flex-row gap-1 my-8 xl:my-0 cs:mx-[104px]">
              {headerMenu.map((item, i) => (
                <li onClick={() => setFlag(false)} key={i} className={`h-10 py-[10px] px-3 w-full flex items-center ${item.path === url.pathname ? 'text-white bg-[#0E1018]' : 'text-[#576076]'}  rounded-lg`}>
                  <Link to={item.path} className="font-semibold flex items-center">
                    <div className="text-2xl mr-3">
                        {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-[400px] xl:mt-0">
            <Link to={'/contact'} className="bg-[#0E1018] rounded-lg flex items-center justify-center py-4 px-6  xl:ml-6 text-white">
              <span>Let's Talk</span>
              <PiArrowElbowRightBold className="ml-2" />
            </Link>
          </div>
        </section>
        <section className="xl:hidden block">
          <button onClick={() => setFlag(!flag)} className="flex items-center">
            <GiHamburgerMenu className="text-[#A8AAAC] text-2xl" />
          </button>
        </section>
      </nav>
    </header>
  )
}

export default Header
