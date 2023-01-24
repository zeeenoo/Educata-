import React from 'react'

function NavBar(props) {
  return (
    <div className='flex p-2'>
        <h1 className='p-2 mr-auto font-bold'>Educata</h1>
        <ul className='flex'>
            {props.data.map((item)=>(
                <li className='p-2 mr-8'><a href='#' className=''>{item}</a></li>
            ))}  
        </ul>
    </div>
  )
}

export default NavBar