import React from 'react'
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

export const ProductImage = (props) => {

    return (
        <div className='card-top__image'>
            <InnerImageZoom src={props.src} zoomSrc={props.srclarge}/>
        </div>
    )
}