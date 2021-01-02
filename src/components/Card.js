import React from 'react'

function Card(props){
    return <div style={{color: 'red'}}>
        <h3>{props.title}</h3>
        {props.content}
    </div>
}

export default Card;