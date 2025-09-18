import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country)
    // const [] = country

    const handleVisited = ()=>{
        console.log('Button clicked')
    }
    return (
        <div className='country'>
           <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           <h2>Name : {country.name.common}  </h2> 
           <h3>Population : {country.population.population}</h3>
           <h3>Area : {country.area.area} KM^2 {country.area.area > 300000 ? ' (Big Country)': ' (Small Country)'} </h3>
           <h3>Continent : {country.continents.continents[0]} </h3>
           
            <button className='btn' onClick={handleVisited}>Not Visited</button>
            
           
        </div>
    );
};

export default Country;