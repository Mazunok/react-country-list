export type BadgeLabel = "area" | "population";

export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flags: string;
  area: number;
  region: string;
}

export interface INativeName {
  [key: string]: { common: string; official: string } | undefined;
}

export interface ICountryApi {
  name: { common: string; official: string; nativeName: INativeName };
  capital: string[];
  population: number;
  flags: { [format: string]: string };
  area: number;
  region: string;
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
