import React, { useState } from "react";
import Display from "./components/display";
import Search from "./components/search";
import "./index.css";

const App = () => {
  const [query, setQuery] = useState('');
  const [pokemonData, setPokemonData] = useState();

  return (
    <div className="App">
      <Search
        query={query}
        setQuery={setQuery}
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
      />

      {
        pokemonData != null && 
        <Display 
        query={query} 
        pokemonData={pokemonData} />
      }
    </div>
  );
};

export default App;
