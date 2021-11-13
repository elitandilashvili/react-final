import { Header } from './components/layout/Header';
import { HomepageRoute, LoginPageRoute } from './Routes/';

import { useEffect, useState } from 'react';
import { PrivatePageRoute } from './Routes/PrivatePageRoute';

function App() {
  const apiUrl = 'https://restcountries.com/v3.1/all';
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(apiUrl);
      const countries = await response.json();
      setCountries(countries);
    };
    getCountries();
  }, []);

  const [searchTest, setSearchTest] = useState('');

  return (
    <>
      <Header setSearchTest={setSearchTest} />
      <HomepageRoute data={countries} searchTest={searchTest} />
      <LoginPageRoute />
      <PrivatePageRoute />
    </>
  );
}

export default App;
