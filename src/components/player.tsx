import { useEffect, useState } from "react";
import { IStarship } from "../types/starship";
import { useGameStore } from "../store";

export default function Player() {
	const items = useGameStore(state => state.items);
	const score = useGameStore(state => state.score);
	const setStoreProp = useGameStore(state => state.setStore)

	useEffect(() => {
		const index = getRandomIndex();

		setStoreProp("playerItemIndex", index);

		setCurrentCard(items[index])
	}, [score])

	const getRandomIndex = () => {
		return Math.floor(Math.random() * items.length);
	}

	const [currentCard, setCurrentCard] = useState(items[getRandomIndex()]);

	return (
		<div>
			<h2 className="title-small mb-2 text-center text-xl">Player</h2>
			<article className="grid gap-2 rounded border-2 border-primary bg-background p-4">
				<h3 className="body-large mb-4 text-center">{currentCard.name}</h3>

				{Object.keys(currentCard).filter(x => x != 'name').map(x =>
					<Button key={x}
						name={x.replace(/_/g, ` `)}
						value={currentCard[x as keyof IStarship] as number}>
					</Button>
				)}
			</article>
		</div>
	)
}


type ButtonProps = {
	name: string,
	value: number
}
const Button = ({ name, value }: ButtonProps) => {
	const setStoreProp = useGameStore(state => state.setStore)
	const playerStat = useGameStore(state => state.playerStat);

	const hancleClick = (direction: "HIGHER" | "LOWER") => {
		setStoreProp("playerStat", { name, value, direction });
	};

	return (
		<div className="relative flex items-center justify-between p-4">
			<button className="absolute inset-x-0 bottom-1/2 top-0 before:text-on-primary hover:bg-primary hover:before:content-['HIGHER'] disabled:opacity-20"
				onClick={() => hancleClick("HIGHER")} disabled={playerStat != null}></button>
			<button className="absolute inset-x-0 bottom-0 top-1/2 before:text-on-secondary-container hover:bg-secondary-container hover:before:content-['LOWER'] disabled:opacity-20"
				onClick={() => hancleClick("LOWER")} disabled={playerStat != null}></button>

			<span className="pointer-events-none z-10">{name}:</span>
			<span className="pointer-events-none z-10">{value}</span>
		</div>
	)
}