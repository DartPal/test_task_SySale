import React from 'react'
import {ProductImage} from "./ProductImage";
import {Tags} from "./Tags";
import {Comparison} from "./Comparison";
import {ProductName} from "./ProductName";
import {Description} from "./Description";
import {Quantity} from "./Quantity";
import {VolumePrice} from "./VolumePrice";
import {BuyBtn} from "./BuyBtn";

export const Card = (props) => {
    return (
        <div className='cards'>
                {
                    props.productsData.map( data => {
                        return (
                            <div key={data.id} className='card'>
                                <div className="card-top">
                                    <Tags tags={data.tags}/>
                                    <Comparison />
                                    <ProductImage key={data.id} src={data.productImage} srclarge={data.productImageLarge} alt={data.name}/>
                                </div>
                                <div className="card-description">
                                    <ProductName name={data.name}/>
                                    <Description description={data.description}/>
                                </div>
                                <VolumePrice price={data.price} colors={data.colors} volume={data.volume}/>
                                <div className="card-footer">
                                    <div className="card-footer-quantity">
                                        <Quantity />
                                    </div>
                                    <div className="card-footer-buy">
                                        <BuyBtn />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}