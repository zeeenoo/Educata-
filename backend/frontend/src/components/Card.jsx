import React from 'react'

function Card(props) {
  return (
    <div className='flex rounded-[20px] shadow-lg xs:p-4 p-2 max-w-[1000px] mb-4'>
        <img src={props.data.mainimg} alt="" className='rounded-[10px] md:w-[250px] sm:w-[180px]  mr-[50px] hidden sm:block'/>
        <div className='mr-auto '>
          <div className='xs:hidden flex items-center'>
            <img src={props.data.profilImg} alt="" className='rounded-[20px] w-[40px] mb-2 mr-4'/>
            <h3 className='font-bold text-[18px]'>{props.data.profilName}</h3>
          </div>
          <h1 className='font-bold xs:text-[30px] text-[20px]'>{props.data.title}</h1>
          <p className='text-[13px] mb-4'>{props.data.description}</p>
          <div className='xs:flex mb-4'>
            <p className='bg-[#E7F6E7] rounded-[20px] xs:mr-5 mr-2 mb-2 px-2 py-1 text-[12px]'>{props.data.online}</p>
            <p className='bg-[#E7F6E7] rounded-[20px] xs:mr-5 mr-2 mb-2 px-2 py-1 text-[12px]'>{props.data.lvl}</p>
            <p className='bg-[#E7F6E7] rounded-[20px] xs:mr-5 mr-2 mb-2 px-2 py-1 text-[12px]'>{props.data.date}</p>
            <p className='bg-[#56cc8d] rounded-[20px] xs:mr-5 mr-2 mb-2 px-2 py-1 text-[12px]'>{props.data.price} da</p>
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
    </div>
  )
}

export default Card