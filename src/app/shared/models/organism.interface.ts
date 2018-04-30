export interface Organism {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: ReadonlyArray<string>;
	species: ReadonlyArray<string>;
	vehicles: ReadonlyArray<string>;
	starships: ReadonlyArray<string>;
	created: string;
	edited: string;
	url: string;
}
