import React, {useState, useEffect} from 'react';
import './index.scss'

const Search = ({query,setQuery,pokemonData,setPokemonData}) => {

    
    useEffect(() => {
        if(query === '') {
            document.getElementById('search-container').style.height = '100vh'   
        }
    }, [query])

    const searchQuery = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then((response) => response.json())
        .then((data) => {
            setPokemonData(data)
            document.getElementById('search-container').style.height = '200px' 
        })
    }

 

    return(            
        <div id="search-container">
            <h1> FIND YOUR POKEMON</h1>
            <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => {
                    setQuery(e.target.value)
                }} 
                placeholder='search for pokemon'
            />
            <button onClick={searchQuery}>Search</button>
            </div>
        </div>
    )
}

export default Search;