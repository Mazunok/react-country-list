import { ICountry } from "../types";
import { CountryItem } from "../componets/CountryItem";

interface IProps {
  countries: ICountry[];
}

export const CountryList = ({ countries }: IProps) => {
  return (
    <ul className=" list-group container m-0 p-0 ">
      {countries.map((country) => {
        return <CountryItem key={country.name} country={country} />;
      })}
    </ul>
  );
};
