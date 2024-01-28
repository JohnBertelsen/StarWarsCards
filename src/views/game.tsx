import { useEffect, useState } from 'react';
import StarshipService from '../services/starshipService';
import { GameState, useGameStore } from '../store';
import ProgressBar from '../components/progressBar';
import Player from '../components/player';
import Opponent from '../components/opponent';
import ScoreBoard from '../components/scoreBoard';

const starshipService = new StarshipService();

export default function Game() {
	const items = useGameStore(state => state.items);
	const gameState = useGameStore(state => state.gameState);
	const setStoreProp = useGameStore(state => state.setStore)

	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const controller = new AbortController();

		setStoreProp("gameState", GameState.Loading)

		loadItems(1, controller.signal);

		return () => controller.abort();
	}, [])


	const loadItems = async (page: number, signal: AbortSignal) => {
		const response = await starshipService.getAll(page, signal);

		const newItems = response.results.map(x => ({
			name: x.name,
			cost_in_credits: getSafeNumberFromString(x.cost_in_credits.toString()),
			length: getSafeNumberFromString(x.length.toString()),
			crew: getSafeNumberFromString(x.crew.toString()),
			passengers: getSafeNumberFromString(x.passengers.toString()),
			max_atmosphering_speed: getSafeNumberFromString(x.max_atmosphering_speed.toString().replace(/N\/A/g, '0')),
			hyperdrive_rating: getSafeNumberFromString(x.hyperdrive_rating.toString()),
			MGLT: getSafeNumberFromString(x.MGLT.toString()),
			cargo_capacity: getSafeNumberFromString(x.cargo_capacity.toString()),
			consumables: getSafeNumberFromString(x.consumables.toString()),
			films: (x.films as string[]).length,
			pilots: (x.pilots as string[]).length
		}));


		setStoreProp("items", [...items, ...newItems]);

		setTotalItems(response.count);

		page++;

		if (response.next)
			loadItems(page, signal);
		else
			setStoreProp("gameState", GameState.Running)
	}

	const getSafeNumberFromString = (str: string) => {
		return !str || isNaN(parseInt(str)) ? 0 : parseInt(str);
	}

	return (
		<article className='py-4'>
			<header className='mb-8 text-center'>
				<h1 className='title-large'>Compare stats</h1>
				<p>(hint: hover on a stat)</p>
			</header>

			<div className={`container mx-auto grid ${gameState === GameState.Loading ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-8'}`}>
				{gameState === GameState.Loading &&
					<>
						<p className='text-center'>Loading...</p>
						<ProgressBar current={items.length} total={totalItems} />
					</>}
				{gameState === GameState.Running &&
					<>
						<div className='col-span-2'>
							<ScoreBoard />
						</div>
						<Player />
						<Opponent />
					</>}
			</div>
		</article>
	)
}
