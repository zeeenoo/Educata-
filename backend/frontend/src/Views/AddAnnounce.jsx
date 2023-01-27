import React from 'react'
import { Footer, NavBar } from '../components'
import { navbarData, footerData } from '../const/const'

function AddAnnounce() {
    const [announceData, setAnnounceData] = React.useState({
        title: "",
        location: "",
        price: "",
        categorie: "",
        modality: "",
        theme: "",
        date: "",
        description: "",
        picture: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        console.log(announceData)
        setAnnounceData(prevFilterData => {
            return {
                ...prevFilterData,
                [name]: value
            }

        })
    }

  return (
    <div>
        <NavBar data={navbarData}/>
        <div className='max-w-[1000px] mx-auto sm:px-10 px-4 mb-12'>
            <h1 className='text-[40px] font-bold text-center mb-12'>Add New Announce</h1>
            <div className='flex justify-center mb-8'>
                <div className='mr-12 w-full'>
                    <input type="text" name='title' placeholder='Title'maxLength={100} className='border-2 rounded-lg p-2 mb-4 w-full bg-[#f0f0fb]' value={announceData.title} onChange={handleChange}/>
                    <br />
                    <select name="categorie" id="" className='border-2 rounded-lg p-2 w-full mb-4 bg-[#f0f0fb]' value={announceData.categorie} onChange={handleChange}>
                        <option value="primaire">Primaire</option>
                        <option value="CEM">CEM</option>
                        <option value="Lycee">Lycee</option>
                    </select>
                    <br />
                    <select name="theme" id="" className='border-2 rounded-lg p-2 w-full mb-4 bg-[#f0f0fb]' value={announceData.theme} onChange={handleChange}>
                        <option value="math">Math</option>
                        <option value="physique">Physique</option>
                        <option value="science">Science</option>
                        <option value="hisgeo">hisgeo</option>
                        <option value="islamique">islamique</option>
                    </select>
                </div>
                <div className='w-full'>
                    <input type="text" placeholder='location' name='location' value={announceData.location} className='border-2 rounded-lg p-2 mb-4 w-full bg-[#f0f0fb]' onChange={handleChange}/><br />
                    <input type="text" placeholder='price' name='price' value={announceData.price} className='border-2 rounded-lg p-2 mb-4 w-full bg-[#f0f0fb]' onChange={handleChange}/><br />
                    <input type="date" placeholder='Date' name='date' value={announceData.date} className='border-2 rounded-lg p-1 w-full mb-4 bg-[#f0f0fb]' onChange={handleChange}/><br />
                </div>
            </div>
            <div className='flex justify-center mb-8'>
                <div className='flex-1 ml-[80px]'>
                    <input type="radio" id='online' className='mr-2' name="modality" value='online' onChange={handleChange}/>
                    <label htmlFor="online" className='mr-12 text-[20px]'>online</label>
                    <input type="radio" id='offline' className='mr-2' name="modality" value='offline' onChange={handleChange}/>
                    <label htmlFor="offline" className='text-[20px]'>offline</label>
                </div>
                <div className='flex-1'>
                    <label htmlFor="pic" className='text-[20px]'>Add a picture: </label>
                    <input type="file" id='pic' name="picture" onChange={handleChange} accept=".jpg, .jpeg, .png" value={announceData.picture}/>
                </div>
            </div>
            <textarea name="description" id="description" cols="30" rows="10" value={announceData.description} className='border-2 p-4 rounded-lg w-full bg-[#f0f0fb] mb-12' placeholder='description' onChange={handleChange}/>
            <div className='text-center'>
                <button className='border-2 p-4 font-bold text-[25px] rounded-2xl border-[#242145] hover:bg-[#242145] hover:text-white transition-colors duration-400'>Submit</button>
            </div>
        </div>

        <Footer data={footerData}/>
    </div>
  )
}

export default AddAnnounce