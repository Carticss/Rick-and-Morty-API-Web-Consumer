import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Ch = (props) => { 
    const [ch, setCh] = useState([]);
    const API = `https://rickandmortyapi.com/api/character?page=3`;

    useEffect(() => {  
        console.log("1")
        console.log("2")
        console.log("3")
        fetchData()
    }, [])

    const fetchData = async () => {
        let response = await axios.get(API)
        console.log(response.data.results)
        console.log("4")
        setCh(response.data.results)
    }

    return (
        <div className="container">
            <div className="chs">
                {
                    ch.map(item => (
                        <div className="box">
                            <img src={item.image} alt={item.name} className="photo" />
                            <div className="ch-data">
                                <h3 className="name">{item.name}</h3>
                                <p className="specie">{item.species}</p>
                                <p className="status">{item.status}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Ch