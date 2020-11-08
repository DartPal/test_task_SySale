import React from 'react'

export const Price = (props) => {

    return (
        <h3 className='card-color-price-row-price__price'>
            {props.price} грн
        </h3>
    )
}