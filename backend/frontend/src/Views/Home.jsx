import React from 'react'
import {NavBar, Footer, Card} from "../components";
import { navbarData, footerData } from "../const/const";
import { mainImage, pic2, pic3, pic4 } from '../assets';
import {FaSearch} from "react-icons/fa"
import { cardData } from '../const/const';

function Home() {
    const backgroundstyle = {
        backgroundImage: `url(${mainImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat"
    }
  return (
    <div>
        <NavBar data={navbarData}/>
        <div className='max-w-[1200px] mx-auto sm:px-10 px-4'>
            <section className='sm:py-[100px] sm:px-10 xs:px-6 xs:py-12 px-6 py-6 xs:mb-16 mb-6' style={backgroundstyle}>
                <h1 className='xl:text-[70px] sm:text-[4vw] xs:text-[30px] text-[20px] font-bold text-[#110229]'>Easy way to find a <br /> perfect teacher</h1>
                <h3 className='xl:text-[35px] sm:text-[2vw] xs:text-[20px] text-[12px] text-white sm:mb-12 mb-8'>We provide a complete service for the find,<br /> Lorem Ipsumq jqbcuqekjlzanxja</h3>
                <button className='sm:text-[30px] xs:text-[20px] text-[10px] font-bold flex sm:w-[200px] xs:w-[150px] w-[70px] items-center backdrop-blur-md border-2 border-gray-500 rounded-[15px] sm:px-4 px-1 sm:py-2 py-1 text-[#110229]'><FaSearch className='xs:mr-4 mr-2'/>Search</button>
            </section>

            <section className='sm:flex mb-16 px-4'>
                <div className='max-w-[600px] mr-auto'>
                    <h2 className='font-bold sm:text-[40px] text-[25px]'>Why Educata?</h2>
                    <p className='mb-4 sm:text-[20px] text-[15px]'>Whether you’re an individual looking to learn Python to advance your career or an enterprise team looking to cut cycle times, speed up onboarding, or give your teams the skills to realize your strategies, we remove the challenges and roadblocks slowing you down. We’re advancing the world’s tech workforce, and that starts with making your work more efficient and effective—and giving you more to celebrate.</p>
                    <button className='bg-[#242145] p-2 rounded-[20px] text-white mb-6'>See our solutions</button>
                </div>
                <img src={pic2} alt="pic" className='sm:h-[300px] m-auto sm:w-[400px] xs:w-[400px] w-[250px] rounded-[50px] sm:ml-2'/>
            </section>

            <section className='mb-16'>
                <div className='flex items-center'>
                    <h2 className='xs:text-[40px] text-[20px] text-[#110229] mr-auto'>Recently Added</h2>
                    <div className='inline xs:text-[20px] text-[15px] text-blue-700 hover:underline'><a href="#">See all</a></div>
                </div>
                <div className='mx-auto'>
                    <Card data={cardData}/>
                    <Card data={cardData}/>
                    <Card data={cardData}/>
                    <Card data={cardData}/>
                </div>
            </section>

            <section>
                <img src={pic3} alt="" className='rounded-[50px] max-h-[500px] w-full xs:mb-16 mb-6'/>
                <div className='sm:flex mb-16 px-4'>
                    <div className='max-w-[600px] mr-auto'>
                        <h2 className='font-bold sm:text-[40px] text-[25px]'>Find your best Class to attend</h2>
                        <p className='mb-4 sm:text-[20px] text-[15px]'>We provide a complete service for finding the best clqss to attend</p>
                        <button className='bg-[#242145] py-2 px-4 rounded-[20px] text-white mb-6'>Contact us</button>
                    </div>
                    <img src={pic4} alt="pic" className='sm:h-[300px] m-auto sm:w-[400px] xs:w-[400px] w-[250px] rounded-[50px] sm:ml-2'/>
                </div>
            </section>

        </div>
        <Footer data={footerData}/>
    </div>
  )
}

export default Home