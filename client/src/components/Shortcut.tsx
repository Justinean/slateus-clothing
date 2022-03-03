import React from 'react'

interface Props {
    image: string,
    name: string
}

export const Shortcut = ({ name, image }: Props) => {
    return (
        <div className='Shortcut'>
            <h1>{name}</h1>
            <img src={image} alt="Shortcut Preview" />
        </div>
    )
}