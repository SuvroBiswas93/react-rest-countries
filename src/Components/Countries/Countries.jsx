import React, { use } from 'react';

const Countries = ({promiseFetch}) => {
    const countriesData = use(promiseFetch)
    console.log(countriesData)
    const countries = countriesData.countries
    console.log(countries)
    
    return (
        <div>
            <h1>Rest Countries:{countries.length} </h1>
        </div>
    );
};

export default Countries;