import React from 'react'
import './searchBar.css'
import { useState } from 'react';



export function SearchBar(props) {

    const handleInput = (e) => {
        props.setFilter(e.target.value);
    }

    return ( 
        <div className='searchContainer'>
            <label for='searchField' >Search: </label>
            <input  value={props.filter}
                    id='searchField'
                    onChange={handleInput}
            />
        </div>
     );
}
