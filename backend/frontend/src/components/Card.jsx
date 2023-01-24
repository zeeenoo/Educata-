import React from 'react'

function Card(props) {
  return (
    <div className='flex rounded-[20px] shadow-md p-4 max-w-[900px]'>
        <img src={props.data.mainimg} alt="" className='rounded-[10px] max-w-[250px] mr-[50px]'/>
        <div className='mr-auto '>
          <h1 className='font-bold text-[30px]'>{props.data.title}</h1>
          <p className='text-[13px] mb-4'>{props.data.description}</p>
          <div className='flex mb-4'>
            <p className='bg-[#E7F6E7] rounded-[20px] mr-5 px-2 py-1 text-[12px]'>{props.data.online}</p>
            <p className='bg-[#E7F6E7] rounded-[20px] mr-5 px-2 py-1 text-[12px]'>{props.data.lvl}</p>
            <p className='bg-[#E7F6E7] rounded-[20px] mr-5 px-2 py-1 text-[12px]'>{props.data.date}</p>
            <p className='bg-[#56cc8d] rounded-[20px] mr-5 px-2 py-1 text-[12px]'>{props.data.price} da</p>
          </div>
          <div className='flex text-white'>
            <button className='rounded-[20px] bg-[#242145] px-6 py-1 text-[15px] font-bold mr-2'>view on map</button>
            <button className='rounded-[20px] bg-[#242145] px-6 py-1 text-[15px] font-bold'>book a list</button>
          </div>
        </div>
        <div className='px-2'>
          <img src={props.data.profilImg} alt=""  className='rounded-[20px] w-[100px] mb-4'/>
          <h1 className=' text-[20px] font-bold'>{props.data.profilName}</h1>
        </div>
    </div>
  )
}

export default Card