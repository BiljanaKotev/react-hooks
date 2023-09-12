import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://restcountries.com/v3.1/all';

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    console.log('axios call');
    axios.get(apiUrl).then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h1>List of countries</h1>
      {countries.map((country) => {
        return (
          <div key={country.name.common}>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt="" />
            {country.unMember && <p>UN Member</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
