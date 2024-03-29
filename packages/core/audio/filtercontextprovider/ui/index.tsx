// FilterContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAudioContext } from "@sebban/audio";

type FilterContextType = {
	filter: BiquadFilterNode | null;
	setFrequency: (frequency: number) => void;
	setFilterType: (type: BiquadFilterType) => void;
};

const FilterContextState = createContext<FilterContextType | null>(null);

export const useFilterContext = () => useContext(FilterContextState)!;

export const FilterContextProvider: React.FC<{
	children: React.ReactNode;
	type: BiquadFilterType;
}> = ({ children, type = "lowpass" }) => {
	const { audioContext } = useAudioContext();
	const [filter, setFilter] = useState<BiquadFilterNode | null>(null);
	const [filterType, setFilterType] = useState<BiquadFilterType>(type);

	// Function to get the default frequency based on the filter type
	const getDefaultFrequency = (filterType: BiquadFilterType) => {
		switch (filterType) {
			case "lowpass":
				return 20000;
			case "highpass":
				return 20;
			case "bandpass":
				return 600;
			default:
				return 20000;
		}
	};

	useEffect(() => {
		if (audioContext) {
			const filterNode = audioContext.createBiquadFilter();
			filterNode.type = filterType;
			filterNode.frequency.value = getDefaultFrequency(filterType); // Set the default frequency based on the filter type
			setFilter(filterNode);
		}
	}, [audioContext, filterType]);

	useEffect(() => {
		if (filter) {
			filter.type = filterType;
		}
	}, [filter, filterType]);

	const setFrequency = (frequency: number) => {
		if (filter) {
			filter.frequency.value = frequency;
		}
	};

	return (
		<FilterContextState.Provider
			value={{ filter, setFrequency, setFilterType }}>
			{children}
		</FilterContextState.Provider>
	);
};
