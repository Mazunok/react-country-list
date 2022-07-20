export type BadgeLabel = "area" | "population";

export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flags: string;
  area: number;
  region: string;
}

export interface ICountryApi {
  name: { common: string };
  capital: string[];
  population: number;
  flags: { svg: string };
  area: number;
  region: string;
}

export interface IBadge {
  label: BadgeLabel;
  value: number;
  color: Color;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}
