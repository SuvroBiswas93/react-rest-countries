import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({promiseFetch}) => {
    const countriesData = use(promiseFetch)
    // console.log(countriesData)
    const countries = countriesData.countries
    // console.log(countries)
    
    return (
        <div>
            <h1>Rest Countries:{countries.length} </h1>
           <div className='countries'>
                 {
                     countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                 }
           </div>
        </div>
    );
};

export default Countries;