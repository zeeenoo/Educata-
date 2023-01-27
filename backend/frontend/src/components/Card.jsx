import React from 'react'
import {BsBookmark} from "react-icons/bs"
import {BsBookmarkFill} from "react-icons/bs"

function Card(props) {
  const [isSaved, setIsSaved] = React.useState(false)
  return (
    <div className='xs:flex rounded-[20px] shadow-lg p-4 max-w-[1000px] mb-4'>
        <img src={props.data.mainimg} alt="" className='rounded-[10px] md:w-[250px] sm:w-[180px] mr-[30px] hidden sm:block'/>
        <div className='xs:mr-auto '>
          <div className='xs:hidden flex items-center'>
            <img src={props.data.profilImg} alt="" className='rounded-[20px] w-[40px] mb-2 mr-4'/>
            <h3 className='font-bold text-[18px] mr-auto'>{props.data.profilName}</h3>
            <div className='xs:hidden'>
              <BsBookmark size={30} className={`${isSaved? "hidden": 'block'} cursor-pointer`} onClick={()=>setIsSaved(!isSaved)}/>
              <BsBookmarkFill size={30} className={`${isSaved? "block animate-bounce": 'hidden'} cursor-pointer`} onClick={()=>setIsSaved(!isSaved)}/>
            </div>
          </div>
          <h1 className='font-bold md:text-[30px] xs:text-[25px] text-[20px]'>{props.data.title}</h1>
          <p className='text-[13px] mb-4'>{props.data.description}</p>
          <div className='xxs:flex mb-4'>
            <p className='bg-[#E7F6E7] rounded-[20px] xs:mr-4 mr-2 mb-2 px-2 py-1 text-[12px]'>{props.data.online}</p>
            <p className='bg-[#E7F6E7] rounded-[20px] xs:mr-4 mr-2 mb-2 px-2 py-1 text-[12px]'>{props.data.lvl}</p>
            <p className='bg-[#E7F6E7] rounded-[20px] xs:mr-4 mr-2 mb-2 px-2 py-1 text-[12px]'>{props.data.date}</p>
            <p className='bg-[#56cc8d] rounded-[20px] xs:mr-4 mr-2 mb-2 px-2 py-1 text-[12px]'>{props.data.price} da</p>
          </div>
          <div className='flex text-white'>
            <button className='rounded-[20px] bg-[#242145] xs:px-6 px-2 py-1 text-[15px] xs:font-bold mr-2'>view on map</button>
            <button className='rounded-[20px] bg-[#242145] xs:px-6 px-2 py-1 text-[15px] xs:font-bold'>book a list</button>
          </div>
        </div>
        <div className='px-2 xs:block hidden'>
          <img src={props.data.profilImg} alt=""  className='rounded-[20px] w-[100px] mb-4'/>
          <h1 className=' text-[20px] font-bold'>{props.data.profilName}</h1>
        </div>
        <div className='hidden xs:block'>
          <BsBookmark size={30} className={`${isSaved? "hidden": 'block'} cursor-pointer`} onClick={()=>setIsSaved(!isSaved)}/>
          <BsBookmarkFill size={30} className={`${isSaved? "block animate-bounce": 'hidden'} cursor-pointer`} onClick={()=>setIsSaved(!isSaved)}/>
        </div>
    </div>
  )
}

export default Card