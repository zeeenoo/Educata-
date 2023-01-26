import React from 'react'
import { filterData } from '../const/const'

function Filter() {
    const [filterdata, setFilterData] = React.useState({
        niveau: "",
        type: "",
        subjects: []
    })

    function handleChange(event){
        const {name, value, type} = event.target
        console.log(filterdata)
        setFilterData(prevFilterData => {
            if(type === "checkbox"){
                return{...prevFilterData,
                    subjects: [...prevFilterData.subjects, name]
                }
            }else{
                return {
                    ...prevFilterData,
                    [name]: value
                }
            }
        })
    }

  return (
    <div>
        <div className='mb-4'>
            <h2 className='font-bold text-[18px] mb-2'>{filterData[0].name}</h2>
            {
                filterData[0].items.map(item=>(
                    <div>
                        <input type="radio" name='niveau' id={item} onChange={handleChange} value={item}/>
                        <label htmlFor={item} className='ml-2'>{item}</label>
                    </div>
                ))
            }
        </div>

        <div className='mb-4'>
            <h2 className='font-bold text-[18px] mb-2'>{filterData[1].name}</h2>
            {
                filterData[1].items.map(item=>(
                    <div>
                        <input type="radio" name='niveau' id={item} onChange={handleChange} value={item}/>
                        <label htmlFor={item} className='ml-2'>{item}</label>
                    </div>
                ))
            }
        </div>

        <div>
            <h2 className='font-bold text-[18px] mb-2'>{filterData[2].name}</h2>
            {filterData[2].items.map(item=>(
                <div>
                    <input type="checkbox" id={item} name={item} onChange={handleChange}/>
                    <label htmlFor={item} className='ml-2'>{item}</label>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filter