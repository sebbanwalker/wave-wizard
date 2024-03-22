import React from "react";
import { useFilterContext } from "@sebban/filtercontext";

export const FilterControl: React.FC = () => {
	const { setFrequency } = useFilterContext();

	const minLog = Math.log(20);
	const maxLog = Math.log(20000);

	const handleFrequencyChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = Number(event.target.value);
		// Convert the linear slider value to a logarithmic scale
		const logValue = Math.exp(minLog + (maxLog - minLog) * (value / 20000));
		setFrequency(logValue);
	};

	return (
		<input
			type="range"
			min="0"
			max="20000"
			step="1"
			onChange={handleFrequencyChange}
		/>
	);
};
