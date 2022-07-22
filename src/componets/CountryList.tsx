import { ICountry } from "../types";
import { CountryItem } from "../componets/CountryItem";

interface ICountryList {
  countries: ICountry[];
}

export const CountryList = ({ countries }: ICountryList) => {
  return (
    <ul className=" list-group container m-0 p-0 ">
      {countries.map((country) => {
        return <CountryItem key={country.name} country={country} />;
      })}
    </ul>
  );
};
