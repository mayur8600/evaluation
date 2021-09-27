import React from 'react'

function Card({data}) {

    return (
        <div style={{border: '1px solid',
        display: 'flex',
        flexDirection:"row"}}>
            <img src={data.img} alt="img" />
            <p>Book Name<h3>{data.title}</h3></p>
            <p>Anuther Name: {data.auther.name}</p>

        </div>
    )
}

export default Card
