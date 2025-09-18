import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({promiseFetch}) => {
    const countriesData = use(promiseFetch)
    // console.log(countriesData)
    const countries = countriesData.countries
    // console.log(countries)
    
    return (
        <div>
            <h1>Rest Countries:{countries.length} </h1>
            {
                countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;