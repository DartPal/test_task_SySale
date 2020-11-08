import React from 'react'

export const Volume = (props) => {

    return (
        <>
            {
                props.volume.map( data => {
                    return (
                        <label className='card-volume__volume' key={data.id}>
                            <input onClick={() => {props.changePrice(data.coefficient)}} defaultChecked={data.checked}  type="radio" name={data.nameValue}/>
                            <span>
                                {data.name} мл
                            </span>
                        </label>
                    )
                })
            }
        </>
    )
}