import React, { useState, useEffect } from 'react'

const Ch = (props) => { 
    const [ch, setCh] = useState([]);
    const API = `https://rickandmortyapi.com/api/character`;

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setCh(data.results))
    }, [])


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