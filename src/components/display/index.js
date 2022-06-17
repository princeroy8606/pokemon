import React, { useEffect } from 'react'
import './index.scss'

const Display = ({query,pokemonData}) => {



    return(
        <div id="display-container">
            <div className="card">
                <img src={pokemonData.sprites.front_default} className="img" />
                <div className="name"><span className='title'>Name:</span> <span>{pokemonData.name}</span></div>
                <div className="height"><span className='title'>height:</span> <span>{pokemonData.height}</span></div>
                <div className="weight"><span className='title'>weight:</span> <span>{pokemonData.weight}</span></div>
                <div className="moves"><span className='title'>moves:</span></div>
                

                {
                    pokemonData.moves.map((i,index) => {
                        if(index < 5) {
                            return <span className="move-name">{i.move.name}</span>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Display;