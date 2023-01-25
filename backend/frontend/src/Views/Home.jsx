import React from 'react'
import {NavBar, Footer} from "../components";
import { navbarData, footerData } from "../const/const";
import { mainImage } from '../assets';
import {FaSearch} from "react-icons/fa"

function Home() {
    const backgroundstyle = {
        backgroundImage: `url(${mainImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat"
    }
  return (
    <div>
        <NavBar data={navbarData}/>
        <div className='max-w-[1200px] mx-auto sm:px-10 px-2'>
            <div className='sm:py-[100px] sm:px-10 xs:px-6 xs:py-12 px-6 py-6' style={backgroundstyle}>
                <h1 className='xl:text-[70px] sm:text-[4vw] xs:text-[30px] text-[15px] font-bold text-[#110229]'>Easy way to find a <br /> perfect teacher</h1>
                <h3 className='xl:text-[35px] sm:text-[2vw] xs:text-[20px] text-[8px] text-white sm:mb-12 mb-8'>We provide a complete service for the find,<br /> Lorem Ipsumq jqbcuqekjlzanxja</h3>
                <button className='sm:text-[30px] xs:text-[20px] text-[10px] font-bold flex sm:w-[200px] xs:w-[150px] w-[70px] items-center backdrop-blur-md border-2 border-gray-500 rounded-[15px] sm:px-4 px-1 sm:py-2 py-1 text-[#110229]'><FaSearch className='xs:mr-4 mr-2'/>Search</button>
            </div>
        </div>
        <Footer data={footerData}/>
    </div>
  )
}

export default Home