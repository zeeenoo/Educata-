import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";


function Footer(props) {
  return (
    <footer className='bg-[#E8E8F6] fixed bottom-0 w-screen p-4 flex justify-around'>
        <div className='max-w-[300px]'>
          <h1 className='py-2 mr-auto font-bold text-[20px]'>Educata</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore quod modi </p>
          <div className='flex justify-around mt-8'>
            <a href="#">{<FaFacebookF size={25}/>}</a>
            <a href="#">{<BsTwitter size={25}/>}</a>
            <a href="#">{<GrLinkedin size={25}/>}</a>
          </div>
        </div>
        <div className='flex p-2 justify-around'>
          {props.data.map((item)=>(
            <div className='mx-20'>
              <h3 className='font-bold mb-2'>{item.name}</h3>
              <ul>
                {item.links.map((link)=>(
                  <li className='py-2'><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </footer>
  )
}

export default Footer