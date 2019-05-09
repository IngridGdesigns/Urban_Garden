import React from "react"

function Image(props) {
    return (
        
            <img className='card-img-top img-fluid'
            alt='Card image top'
            src={props.item.url}/>
       
    )
}

export default Image