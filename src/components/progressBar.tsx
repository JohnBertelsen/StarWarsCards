import { useEffect, useState } from "react";

type Props = {
	total: number;
	current: number;
}

function ProgressBar(props: Props) {
	const [percent, setPercent] = useState(0)

	useEffect(() => {
		setPercent(Math.round(props.current / props.total * 100));
	})

	return (
		<div className="relative h-2 w-full rounded bg-surface-variant">
			<div className={`absolute inset-y-0 start-0 w-fit rounded bg-on-surface-variant transition-all`}
				style={{ width: percent + '%' }}></div>
		</div>
	)
}

export default ProgressBar;