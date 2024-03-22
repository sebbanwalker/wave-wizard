import React, { useState, useEffect } from "react";
import { useAudioContext } from "@sebban/audio";

type FilterProps = {
	type: "lowpass" | "highpass";
};

export const Filter: React.FC<FilterProps> = ({ type }) => {
	const { audioContext, masterGain } = useAudioContext();
	const [filter, setFilter] = useState<BiquadFilterNode | null>(null);

	useEffect(() => {
		if (audioContext && masterGain) {
			const newFilter = audioContext.createBiquadFilter();
			newFilter.type = type;
			newFilter.frequency.value = 0;
			newFilter.Q.value = 10;
			masterGain.connect(newFilter);
			newFilter.connect(audioContext.destination);
			setFilter(newFilter);

			return () => {
				newFilter.disconnect(audioContext.destination);
				masterGain.disconnect(newFilter);
				newFilter.frequency.value = 0;
			};
		}
	}, [audioContext, masterGain, type]);

	const handleFrequencyChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newFrequency = Number(event.target.value);
		if (filter) {
			filter.frequency.value = newFrequency;
		}
	};

	return (
		<div>
			<input
				type="range"
				min="0"
				max="20000"
				defaultValue="1000"
				onChange={handleFrequencyChange}
			/>
		</div>
	);
};
