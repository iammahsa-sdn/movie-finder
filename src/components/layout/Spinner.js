import React from 'react'
import spinnerseven from './spinnerseven.gif'

function Spinner() {
    return (
        <div>
            <img src={spinnerseven} 
            style={{width: '200px', margin: 'auto', display:'block'}}
            alt="loading" />
        </div>
    )
}

export default Spinner
