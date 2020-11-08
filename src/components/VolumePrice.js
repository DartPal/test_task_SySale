import React, { useState } from 'react'
import {Colors} from "./Colors";
import {Price} from "./Price";
import {Volume} from "./Volume";

export const VolumePrice = (props) => {

    const [price, setPrice] = useState(props.price)

    let changePrice = coefficient =>  {
        return setPrice(props.price * coefficient)
    }

    return (
        <>
            <div className="card-color-price-row">
                <div className="card-color-price-row-colors">
                    <Colors colors={props.colors}/>
                </div>
                <div className="card-color-price-row-price">
                    <Price price={price}/>
                </div>
            </div>
            <div className="card-volume">
                <Volume changePrice={changePrice} volume={props.volume} />
            </div>
        </>
    )
}