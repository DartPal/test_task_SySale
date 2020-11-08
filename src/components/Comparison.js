import React, { useState } from 'react'

export const Comparison = () => {

    const [state, setState] = useState(true)

    const addComparison = () => {
        setState(!state)
    }
    
    return (
        <button onClick={addComparison} className='card-top__comparison'>
            <img src={state? 'http://kapustinpavel.com/test_sysale/comparison.svg' : 'http://kapustinpavel.com/test_sysale/checked.svg'} alt="comparison"/>
        </button>
    )
}