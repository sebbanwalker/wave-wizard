import React, { useState, useEffect } from "react";

import { useFilterContext } from "@sebban/filtercontext";
import Slider from "@mui/material/Slider";
import "./style.scss";

type FilterControlProps = {
	filterType: "lowpass" | "highpass" | "bandpass";
};

export const FilterControl: React.FC<FilterControlProps> = ({ filterType }) => {
	const { setFrequency } = useFilterContext();

	const minLog = Math.log(20);
	const maxLog = Math.log(20000);

	// Set the initial value based on the filterType
	const initialValue =
		filterType === "lowpass" ? 20000 : filterType === "highpass" ? 20 : 600;
	const [value, setValue] = useState(initialValue);

	// Convert the logarithmic frequency value to a linear scale for the Slider
	const logToLinear = (value: number) => {
		return ((Math.log(value) - minLog) / (maxLog - minLog)) * 20000;
	};

	// Convert the linear Slider value back to a logarithmic scale
	const linearToLog = (value: number) => {
		return Math.exp(minLog + (maxLog - minLog) * (value / 20000));
	};

	useEffect(() => {
		setValue(logToLinear(initialValue));
	}, [initialValue]);

	const handleFrequencyChange = (_: any, newValue: number | number[]) => {
		const logValue = linearToLog(newValue as number);
		setFrequency(logValue);
		setValue(newValue as number);
	};

	return (
		<div className="filter-control">
			<Slider
				className={`filter-control__input filter-control__input--${filterType}`}
				min={0}
				max={20000}
				value={value}
				step={1}
				onChange={handleFrequencyChange}
			/>
			<div className={`tooltip ${value ? "" : "hidden"}`}>
				{Math.round(linearToLog(value))} Hz
			</div>
		</div>
	);
};
