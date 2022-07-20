import React from "react";
import { CountryList } from "./componets/CountryList";
import countries from "./data/country-data.json";
import { transformCountries } from "./mappers";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  console.log(transformedCountries);

  return (
    <div className="App">
      <CountryList countries={transformedCountries} />
    </div>
  );
};
