import { useEffect } from "react";
import { useGameStore } from "../store";

export default function ScoreBoard() {
	const score = useGameStore(state => state.score);
	const playerStat = useGameStore(state => state.playerStat);
	const opponentStat = useGameStore(state => state.opponentStat);
	const setStoreProp = useGameStore(state => state.setStore);

	useEffect(() => {
		if (!playerStat || !opponentStat)
			return;

		setStoreProp("score", {
			player: (playerStat.value >= opponentStat.value && playerStat.direction == "HIGHER") ||
				(playerStat.value <= opponentStat.value && playerStat.direction == "LOWER") ?
				score.player + 1 : score.player,
			opponent: (opponentStat.value >= playerStat.value && playerStat.direction == "HIGHER") ||
				(opponentStat.value <= playerStat.value && playerStat.direction == "LOWER") ?
				score.opponent + 1 : score.opponent
		});

		setStoreProp("playerStat", null);
	}, [opponentStat])

	const resetScore = () => {
		setStoreProp("score", {
			player: 0,
			opponent: 0
		})
	}

	return (
		<>
			{score.player >= 10 || score.opponent >= 10 &&
				<article className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-black/80">
					{score.player >= 10 &&
						<>
							<h3 className="title-medium">CONGRATULATION</h3>
							<h2 className="title-large">YOU WIN!!!</h2>
						</>
					}
					{score.opponent >= 10 &&
						<>
							<h3 className="title-medium">BAD LUCK</h3>
							<h2 className="title-large">YOU LOST!!!</h2>
						</>
					}
					<button onClick={resetScore} className="title-small mt-4">Play again!</button>
				</article>
			}

			<article className="flex items-center justify-center gap-8">
				<span className="text-5xl">
					{score.player}
				</span>
				<span className="text-xl">VS</span>
				<span className="text-5xl">
					{score.opponent}
				</span>
			</article>
		</>
	)
}