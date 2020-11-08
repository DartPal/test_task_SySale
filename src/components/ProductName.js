import React from 'react'

export const ProductName = (props) => {

    return (
        <h2 className='card-description__name'>
            {props.name}
        </h2>
    )
}