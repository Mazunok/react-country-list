import { ICountry, ICountryApi } from "../types";

export const transformCountries = (countries: ICountryApi[]): ICountry[] => {
  return countries.map(
    (country): ICountry => ({
      population: country.population,
      area: country.area,
      name: country.name.common,
      flags: country.flags.svg,
      capital: country.capital[0],
      region: country.region,
    })
  );
};
