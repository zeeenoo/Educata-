import React from 'react'
import { useLocation } from 'react-router-dom'
import {NavBar, Footer} from "../components"
import { navbarData, footerData } from '../const/const'

function Details(props) {
    const location = useLocation()
  return (
    <div>
        <NavBar data={navbarData}/>
        <div className='max-w-[1200px] mx-auto sm:px-10'>
            <section className='xs:flex mb-12'>
                <div className='p-2'>
                    <h1 className='text-[40px] font-bold'>{location.state.title}</h1>
                    <p className='mb-4'>{location.state.description}</p>
                    <button className='rounded-[20px] bg-[#242145] xs:px-6 px-2 py-1 text-white text-[15px] mr-2'>contact teacher</button>
                </div>
                <div>

                </div>
            </section>

            <section className='sm:flex justify-around items-center'>
                <div>
                    <img src={location.state.mainimg} alt="" className='max-w-[400px] rounded-xl' />
                </div>
                <div className='rounded-lg bg-[#E8E8F6] w-[250px] p-2 h-fit'>
                    <h2>Course info</h2>
                    <div className='py-2'><span className='font-bold'>Level</span> <span>{location.state.lvl}</span></div>
                    <hr className='border-[1px] border-black'/>
                    <div className='py-2'><span className='font-bold'>Updated</span> <span>{location.state.date}</span></div>
                    <hr className='border-[1px] border-black'/>
                    <div className='py-2'><span className='font-bold'>price</span> <span>{location.state.price} da</span></div>
                </div>
            </section>

            <section>
                <p>About teacher</p>
                <div className='flex items-center'><img src={location.state.profilImg} alt="" className='w-[30px] mr-4' /> <span>{location.state.profilName}</span></div>
            </section>
        </div>
        <Footer data={footerData}/>
    </div>
  )
}

export default Details