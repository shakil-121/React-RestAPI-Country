import './Country.css';
import React, { useEffect, useState } from 'react';

function Loadcountry(){  
    const [countrys,setCountrys]=useState([]); 
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all') 
      .then(res=>res.json())
      .then(data=>setCountrys(data))
    },[])
    
      return(
        <div>
          <h1>لا إله إلا الله محمد رسول الله</h1>  
          <h2>Total Country : {countrys.length}</h2>  
          <div className='country'>
          {
            countrys.map(country=><Country name={country.name.common} capital={country.capital}></Country>)
            
          }
          </div>
          
        </div>
      )
    } 
    
    function Country(props)
    {
      return(
        <div className='capital'>
          <h1>Name :{props.name}</h1>
          <h2>Capital :{props.capital}</h2> 
        </div>
      )
    }

export default Loadcountry;