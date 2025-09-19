import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {
    const[visited, setVisited]=useState(false)
    // console.log(country)
    // const [] = country
    // console.log(handleVisitedCountries)

    const handleVisited = ()=>{
        // One way
    //    if(visited){
    //         setVisited(false) // By defalu not visited
    //    }
    //    else{
    //      setVisited(true)
    //    }

    // ternary
        // return visited ? setVisited(false) : setVisited(true)

        // another

        // setVisited(visited ? true : false)

        // Simple way 
        setVisited(!visited);
        handleVisitedCountries(country)
       
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
           <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           <h2>Name : {country.name.common}  </h2> 
           <h3>Population : {country.population.population}</h3>
           <h3>Area : {country.area.area} KM^2 {country.area.area > 300000 ? ' (Big Country)': ' (Small Country)'} </h3>
           <h3>Continent : {country.continents.continents[0]} </h3>
           
            <button className='btn' onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            
           
        </div>
    );
};

export default Country;