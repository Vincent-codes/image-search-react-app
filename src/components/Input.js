import React from 'react'
import SearchButton from './Button'

export default function TextInput({buttonClick, setValue, value}){
    return (
        <form>
            <input id='search-input' value={value} onChange={(e)=> setValue(e.target.value)} placeholder='Enter your search' />
            <SearchButton text="Search" color="green" onClick={buttonClick} />

        </form>
    )
}