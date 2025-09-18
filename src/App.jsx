
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'


const fetchCountries = async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  return res.json()
}

function App() {
  
  const promiseFetch = fetchCountries()
  
  return (
    <>
      <Suspense fallback={<h3>All Countries are Loading....</h3>}>
        <Countries promiseFetch={promiseFetch}></Countries>
      </Suspense>
    </>
  )
}

export default App
