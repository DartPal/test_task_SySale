import React, { useState } from 'react'

export const Quantity = () => {

    const[quantity, setQuantity] = useState(1)

    let increment = () => {
        setQuantity(
            quantity + 1
        );
    };

    let decrement = () => {
        setQuantity(Math.max(quantity - 1, 1));
    };

    return (
        <>
            <button onClick={decrement} className='card-footer-quantity__minus'>
                -
            </button>
            <div className='card-footer-quantity__number'>
                {quantity}
            </div>
            <button onClick={increment} className='card-footer-quantity__plus'>
                +
            </button>
        </>
    )
}