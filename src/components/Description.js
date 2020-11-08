import React from 'react'

export const Description = (props) => {

    return (
        <p className='card-description__description'>
            {props.description}
        </p>
    )
}