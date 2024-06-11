export interface Country {
  common_name: string;
  official_name: string;
  native_name: string;
  currencies: { name: string; symbol: string };
  capital: string[];
  region: string;
  subregion: string;
  languages: string[];
  borders?: string[];
  population: number;
  flags: string;
  top_level_domain: string[]
}
