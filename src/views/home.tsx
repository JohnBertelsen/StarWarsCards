export default function Home() {
	return (
		<article className='py-32'>
			<header className='text-center'>
				<h1 className='title-large mb-6'>StarWars Cards</h1>
				<p>Choose a stat, and if you think it is higher or lower than the opponents same stat</p>
				<p>If you are correct, you get a point, if not the opponent does</p>
				<p>When the opponent reaches 10 points, the game is over!</p>
			</header>

			<div className='mx-auto mt-32 flex w-fit gap-8'>
				<a className='title-small' href={'/game'}>START GAME</a>
			</div>
		</article>
	)
}
