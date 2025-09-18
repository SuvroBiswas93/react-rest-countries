import React from 'react';

const Country = ({country}) => {
    // console.log(country)
    // const [] = country
    return (
        <div>
           <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           <h2>Name : {country.name.common}  </h2> 
           <h3>Population : {country.population.population}</h3>
           <h3>Area : {country.area.area} Sqkm</h3>
           <h3>Continent : {country.continents.continents[0]} </h3>
           
            
            
           
        </div>
    );
};

export default Country;