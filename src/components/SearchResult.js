import React from 'react'
import SearchButton from './Button'


export default function SearchResult({ datas }) {

    return (
        <div className='search-results'>
            {datas.results.length===0 ? "Results not found": (
                    datas.results.map((data) => {
                        return (
                            <div className='search-result'>
                                <img src={data.urls.small} />
                                <a
                                    href="{data.links.html}"
                                    target="_blank"
                                    style={{ textAlign: "center", fontSize: 18 }}
                                >
                                    {data.alt_description}
                                </a>
    
                            </div>
    
                        )
                    })
            )}
        </div>
    )
}