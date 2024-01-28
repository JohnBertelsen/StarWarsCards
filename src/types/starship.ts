export interface IStarship {
	name: string;
	model: string;
	starship_class: string;
	manufacturer: string;
	cost_in_credits: string | number;
	length: string | number;
	crew: string | number;
	passengers: string | number;
	max_atmosphering_speed: string | number;
	hyperdrive_rating: string | number;
	MGLT: string | number;
	cargo_capacity: string | number;
	consumables: string | number;
	films: string[] | number;
	pilots: string[] | number;
	url: string;
	created: string;
	edited: string;
}