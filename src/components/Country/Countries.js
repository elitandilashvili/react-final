import React, { useState } from 'react';

import { Filter } from '../../components/Country/Filter';

export const Countries = (props) => {
  const [regions, setRegions] = useState('');
  console.log(regions);
  return (
    <div className="countries-container">
      {<Filter setRegions={setRegions} />}

      <div className="columns is-mobile is-multiline">
        {props.countries
          .filter((value) => {
            if (props.searchTest === '') {
              return value;
            } else if (
              value.name['common']
                .toLowerCase()
                .includes(props.searchTest.toLowerCase())
            ) {
              return value;
            }
          })
          .filter((value) => {
            if (regions === 'All') {
              return value;
            } else if (
              value.region.toLowerCase().includes(regions.toLowerCase())
            ) {
              return value;
            }
          })
          .map((country) => {
            const { name, region, population, capital, flags } = country;
            return (
              <article className="column is-one-third">
                <div className="country-container">
                  <img
                    className="country-image"
                    src={flags['png']}
                    alt={name}
                  />
                  <h3 className="nav-title">{name['common']}</h3>
                  <h4 className="nav-text">
                    Continent:<span> {region}</span>
                  </h4>
                  <h4 className="nav-text">
                    Capital: <span> {capital}</span>
                  </h4>
                  <h4 className="nav-text">
                    Population:
                    <span> {population}</span>
                  </h4>
                  <div></div>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
};
