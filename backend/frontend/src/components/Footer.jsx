import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";


function Footer(props) {
  return (
    <footer className='bg-[#E8E8F6] fixed bottom-0 w-screen'>
      <div className='max-w-[1200px] mx-auto sm:flex w-screen xs:p-4'>
        <div className='max-w-[300px] sm:mr-auto mx-auto xs:mb-8 mb-4 p-2'>
          <h1 className='py-2 mr-auto font-bold text-[20px]'>Educata</h1>
          <p className='xs:text-[15px] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore quod modi </p>
          <div className='flex justify-around mt-8'>
            <a href="#">{<FaFacebookF size={25} className='w-4'/>}</a>
            <a href="#">{<BsTwitter size={25}  className='w-6'/>}</a>
            <a href="#">{<GrLinkedin size={25}  className='w-5'/>}</a>
          </div>
        </div>
        <hr className='border-[1px] border-gray-400 mb-2 mx-4'/>
        <div className='xs:flex p-2 sm:px-2 xs:px-10 px-4 justify-between flex-1 max-w-[700px]'>
          {props.data.map((item)=>(
            <div className='mr-4 mb-2'>
              <h3 className='font-bold mb-2 xs:text-[18px] text-[15px]'>{item.name}</h3>
              <ul>
                {item.links.map((link)=>(
                  <li className='xs:py-2 py-1 xs:text-[15px] text-[12px]'><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer