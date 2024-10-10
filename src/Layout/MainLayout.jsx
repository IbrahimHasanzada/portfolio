import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div className="py-6 bg-[#0e1018] bg-[url('')] bg-cover bg-center"
    style={{ backgroundImage: `url(/img/banner-shape-1.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
        <Header />
        <Outlet />
        <Footer /> 
    </div>
  )
}

export default MainLayout
