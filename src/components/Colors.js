import React, { useState } from 'react'

export const Colors = (props) => {

    const [option, setOption] = useState('Color')
    const [hidden, setHidden] = useState(true)


    const showOption = () => {
        return setHidden(!hidden);
    }

    const changeOption = (color) => {
        return setOption(color);
    }
    const changeOptionDefault = () => {
        return setOption('Color');
    }

    return (
        <div onClick={showOption} className='card-color-price-row-colors__colors'>
            <div className='visible'>
                <div className="name">
                    {option}
                </div>
                <div className="arrow">
                    <img src="http://kapustinpavel.com/test_sysale/arrow.svg" alt="arrow"/>
                </div>
            </div>
            <div className={`${hidden ? 'hidden' : ''} option`}>
                <div onClick={changeOptionDefault} className='option__item'>
                    Color
                </div>
                {
                    props.colors.map( data => {
                        return (
                            <div onClick={() => changeOption(data.name)} className='option__item' key={data.id}>
                                {data.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}