import React from 'react'
import {ImMenu} from "react-icons/im"
import {GrClose} from "react-icons/gr"
import {Signin, Signup} from '../components'
import dynamicNav from './dynamicNav'


function NavBar(props) {
  const [show, setShow] = React.useState(false)
  return (
    <nav className='flex p-2 relative sm:mb-8 mb-4'>
        <h1 className='p-2 mr-auto font-bold'>Educata</h1>
        <ul className='sm:flex hidden'>
            {props.data.map((item)=>(
                <li className='p-2 mr-8'><a href='#' className=''>{item}</a></li>
            ))}  
        </ul>

        <Signin/>
        <Signup/>

        {/* <dynamicNav/> */}

        {/* <button className='border-2 rounded-2xl py-1 px-4 font-bold border-[#242145] hover:bg-[#2c705e] hover:text-white transition-colors duration-500 mr-4'>Login</button> */}
        {/* <button className='border-2 rounded-2xl py-1 px-4 font-bold border-[#242145] hover:bg-[#242145] hover:text-white transition-colors duration-500 mr-4'>sign-up</button> */}

        <ImMenu className={`${show? 'hidden': 'block'} sm:hidden mr-2 cursor-pointer`} size={30} onClick={()=> setShow(!show)}/>
        <GrClose className={`${show? 'block': 'hidden'} sm:hidden mr-2 cursor-pointer`} size={30} onClick={()=> setShow(!show)}/>
            
        <div className={`${show? 'block': 'hidden'} sm:hidden z-20 border-2 border-gray-400 absolute top-full right-1 w-fit bg-[#E8E8F6] p-1 rounded-[10px]`}>
          <div className='h-4 w-4 absolute -top-2 right-4 rotate-45 bg-[#E8E8F6] border-t-2 border-l-2 border-gray-400'></div>
          <ul className=''>
              {props.data.map((item)=>(
                  <li className='p-2 mr-8 text-[12px] xs:text-[15px]'><a href='#' className=''>{item}</a></li>
              ))}  
          </ul>
        </div>
    </nav>
  )
}

export default NavBar