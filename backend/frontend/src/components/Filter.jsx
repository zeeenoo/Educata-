import React from 'react'
import { filterData } from '../const/const'

function Filter(props) {
    const [filterdata, setFilterData] = React.useState({
        niveau: "",
        type: "",
        subjects: []
    })

    function handleChange(event){
        const {name, value, type} = event.target
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
    <div className={`${props.isOpen? "": "hidden"} w-[200px] mb-8 md:block md:relative md:top-0 md:left-0 absolute top-14 left-5 md:border-0 border-2 border-[#242145] bg-white md:p-0 p-4 md:rounded-none rounded-lg`}>
        <div className='mb-4'>
            <h2 className='font-bold text-[18px] mb-2'>{filterData[0].name}</h2>
            <hr className='mb-2 border-[1px] border-gray-400'/>
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
            <hr className='mb-2 border-[1px] border-gray-400'/>
            {
                filterData[1].items.map(item=>(
                    <div>
                        <input type="radio" name='type' id={item} onChange={handleChange} value={item}/>
                        <label htmlFor={item} className='ml-2'>{item}</label>
                    </div>
                ))
            }
        </div>

        <div>
            <h2 className='font-bold text-[18px] mb-2'>{filterData[2].name}</h2>
            <hr className='mb-2 border-[1px] border-gray-400'/>
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