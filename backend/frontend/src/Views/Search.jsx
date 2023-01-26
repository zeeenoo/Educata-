import React from 'react'
import { NavBar, Footer, Card, Filter } from '../components'
import { footerData, navbarData, cardData } from '../const/const'

function Search() {
    const [searchTxt, setSearchTxt] = React.useState("")

    function handleSearchChange(event){
        setSearchTxt(event.target.value)
    }
  
    return (
    <div>
        <NavBar data={navbarData}/>
        <div className='max-w-[1200px] mx-auto sm:px-10 px-4'>
            <h1 className='text-center text-[40px] font-bold mb-[100px]'>Thousands of courses authored by <br /> our network of industry experts</h1>
            <div className='flex justify-center mb-12'>
                <input type="text" placeholder='Search' maxLength={150} onChange={handleSearchChange} value={searchTxt} className='border-2 border-[#242145] rounded-[25px] h-[50px] px-4 text-[20px] mr-4 w-[60%]'/>
                <input type="submit" value="Search" className='bg-[#242145] cursor-pointer active:bg-[#3f3b5e] text-white px-8 py-2 rounded-[25px]'/>
            </div>

            <div className='flex mb-[100px]'>
                <Filter/>
                <div className='mx-auto'>
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