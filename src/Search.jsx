import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Search({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })
        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
           

        }
    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }
    return (
        <>
            <div className="searchitem">
                <input type="search" name="sitem" id="s-item" autoComplete='off' placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                <button className="search"> <span>{filteredData.length === 0 ? <i class="fa-solid fa-magnifying-glass"></i> : <i class="fa-solid fa-xmark" value={wordEntered} onClick={clearInput}></i>}</span></button>

            </div>
            {
                filteredData.length != 0 && (
                    <div className="dataResult">
                        <h6 className='p-2'>PRODUCT</h6>

                        {
                            filteredData.map((value, key) => {
                                return (<Link to={`Productdetail/${value.id}`}><p className='dataItem m-0'>{value.title}</p></Link>);
                            })
                        }
                    </div>
                )

            }
        </>
    )
}
