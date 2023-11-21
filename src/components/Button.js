import React from 'react'

export default function SearchButton({button, text="Button", color, onClick, props}){
    return (
        <button id='search-button' style={{backgroundColor: color}} onClick={onClick} type='button'>{text}</button>
    )
}