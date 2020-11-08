import React from 'react'

export const Tags = (props) => {
    return (
        <div className='card-top-tags'>
            {
                props.tags.map(data => {
                    return (
                        <div key={data.id} className={`card-top-tags__tag ${data.className}`}>
                            {data.name}
                        </div>
                    )
                })
            }
        </div>
    )
}