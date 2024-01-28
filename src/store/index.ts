import { create } from "zustand";
import { IStarship } from "../types/starship";

export type Stat = {
	name: string;
	value: string;
	direction: "HIGHER" | "LOWER" | null
}

export enum GameState {
	NotStarted = "NotStarted",
	Loading = "Loading",
	Running = "Running",
	Finished = "Finished"
}

type GameStore = {
	gameState: GameState,
	items: IStarship[],
	playerStat: Stat | null,
	opponentStat: Stat | null
	playerItemIndex: number,
	score: {
		player: number,
		opponent: number
	}
	setStore: (key: keyof GameStore, value: object | GameState | number | null) => void;
}

export const useGameStore = create<GameStore>((set) => ({
	gameState: GameState.NotStarted,
	items: [],
	playerStat: null,
	opponentStat: null,
	playerItemIndex: -1,
	score: {
		player: 0,
		opponent: 0
	},
	setStore: (key: keyof GameStore, value: object | GameState | number) => {
		set(state => {
			// console.log("prev state", state);

			return {
				...state,
				[key]: value
			}
		})
	},
}))