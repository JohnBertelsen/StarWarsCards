import { IStarship } from "../types/starship";
import { useGameStore } from "../store";
import { useEffect, useState } from "react";

export default function Opponent() {
	const items = useGameStore(state => state.items);
	const playerStat = useGameStore(state => state.playerStat);
	const playerItemIndex = useGameStore(state => state.playerItemIndex);
	const setStoreProp = useGameStore(state => state.setStore);
	const [currentCard, setCurrentCard] = useState(items[Math.floor(Math.random() * items.length)])

	useEffect(() => setCurrentCard(getRandomItem), [playerItemIndex])

	useEffect(() => {
		if (!playerStat)
			return;

		setTimeout(() => {
			setStoreProp("opponentStat", {
				name: playerStat.name,
				value: currentCard[playerStat.name.replace(/ /g, '_') as keyof IStarship],
				direction: playerStat.direction
			});
		}, 0);
	}, [playerStat]);

	const getRandomItem = () => {
		let index;
		do {
			index = Math.floor(Math.random() * items.length);
		} while (index === playerItemIndex);

		return items[index];
	}

	return (
		<div>
			<h2 className="title-small mb-2 text-center text-xl">Opponent</h2>
			<article className="grid gap-2 rounded border-2 border-primary bg-background p-4">
				<h3 className="body-large mb-4 text-center">{currentCard.name}</h3>

				{Object.keys(currentCard).filter(x => x != 'name').map(x =>
					<div key={x} className="relative flex items-center justify-between p-4">
						<span className="pointer-events-none z-10">{x.replace(/_/g, ` `)}:</span>
						<span className="pointer-events-none z-10">{playerStat && playerStat.name == x.replace(/_/g, ` `) ? currentCard![x as keyof IStarship] as number : '???'}</span>
					</div>
				)}
			</article>
		</div>
	)
}