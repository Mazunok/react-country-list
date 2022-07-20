import { Color, ICountry } from "../types";
import { Badge } from "../componets/Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="d-flex flex-row justify-content-between align-items-center border p-2 fw-normal font-family-sans-serif: sans-serif">
      <img src={country.flags} alt="flag" className="col-1"></img>
      <p className="col-2">{country.name}</p>
      <p className="col-1">{country.capital}</p>
      <p className="col-1">{country.region}</p>
      <Badge color={Color.Primary} />
      <Badge color={Color.Secondary} />
    </li>
  );
};
