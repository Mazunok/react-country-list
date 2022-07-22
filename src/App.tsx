import React from "react";
import { CountryList } from "./componets/CountryList";
import countries from "./data/country-data.json";
import { transformCountries } from "./mappers";
import { ICountry } from "./types";

export const App = () => {
  const transformedCountries: ICountry[] = transformCountries(countries);
  return (
    <div className="container">
      <h1 className="display-4 fw-bold"> Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
