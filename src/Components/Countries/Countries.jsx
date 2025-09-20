import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({promiseFetch}) => {

    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags, setvisitedFlags] = useState([])

    const handleVisitedCountries = (country)=> {
        console.log('Handle Visited Countries clicked',country)
        const countVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(countVisitedCountries)
    }

    const handleVisitedFLags = (flag)=>{
        console.log('Visited flags added',flag)
        const showVisitedFlag = [...visitedFlags,flag]
        setvisitedFlags(showVisitedFlag)
    }

    const countriesData = use(promiseFetch)
    // console.log(countriesData)
    const countries = countriesData.countries
    // console.log(countries)
    
    return (
        <div>
            <h1>Rest Countries:{countries.length} </h1>
            <h2>Total Country Visited : {visitedCountries.length}</h2>
             <ol>
                {
                    visitedCountries.map(country=><li key={country.cca3.cca3} >{country.name.common}</li> )
                }
            </ol>
            <h3>Countries Flags that visited :{visitedFlags.length} </h3>
            <div className='visted-flags-container'>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
           <div className='countries'>
                 {
                     countries.map(country => <Country
                        key={country.cca3.cca3} 
                        country={country}
                        handleVisitedCountries= {handleVisitedCountries}
                        handleVisitedFLags = {handleVisitedFLags}>
                      
                        </Country>)
                 }
           </div>
        </div>
    );
};

export default Countries;