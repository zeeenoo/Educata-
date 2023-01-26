import React from 'react'
import { NavBar, Footer, Card, Filter } from '../components'
import { footerData, navbarData, cardData } from '../const/const'
import {IoFilter} from "react-icons/io5"

function Search() {
    const [searchTxt, setSearchTxt] = React.useState("")

    function handleSearchChange(event){
        setSearchTxt(event.target.value)
    }
  
    return (
    <div>
        <NavBar data={navbarData}/>
        <div className='max-w-[1200px] mx-auto sm:px-8 px-4'>
            <h1 className='text-center sm:text-[40px] xs:text-[25px] text-[20px] font-bold sm:mb-[100px] mb-[50px]'>Thousands of courses authored by <br /> our network of industry experts</h1>
            <div className='flex justify-center mb-12'>
                <input type="text" placeholder='Search' maxLength={150} onChange={handleSearchChange} value={searchTxt} className='border-2 border-[#242145] rounded-[25px] sm:h-[50px] px-4 sm:text-[20px] text-[15px] xs:mr-4 mr-2 w-[60%]'/>
                <input type="submit" value="Search" className='bg-[#242145] cursor-pointer active:bg-[#3f3b5e] text-white sm:px-8 px-4 py-2 rounded-[25px]'/>
            </div>

            <div className='flex mb-[100px]'>
                <Filter/>
                <div className='sm:mx-8 w-full'>
                    <div className='flex items-center cursor-pointer border-[#242145] border-2 w-fit p-2 rounded-2xl md:hidden mb-2'>
                        <IoFilter size={25} className='mr-4'/>
                        <p className='text-[20px]'>Filter</p>
                    </div>
                    <Card data={cardData}/>
                    <Card data={cardData}/>
                    <Card data={cardData}/>
                    <Card data={cardData}/>
                </div>
            </div>
        </div>
        <Footer data={footerData}/>
    </div>
  )
}

export default Search