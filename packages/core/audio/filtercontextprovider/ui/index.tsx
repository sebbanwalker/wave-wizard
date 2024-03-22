// FilterContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAudioContext } from "@sebban/audio";

type FilterContextType = {
	filter: BiquadFilterNode | null;
	setFrequency: (frequency: number) => void;
};

const FilterContextState = createContext<FilterContextType | null>(null);

export const useFilterContext = () => useContext(FilterContextState)!;

export const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { audioContext } = useAudioContext();
	const [filter, setFilter] = useState<BiquadFilterNode | null>(null);

	useEffect(() => {
		if (audioContext) {
			const filterNode = audioContext.createBiquadFilter();
			filterNode.type = "lowpass";
			setFilter(filterNode);
		}
	}, [audioContext]);

	const setFrequency = (frequency: number) => {
		if (filter) {
			filter.frequency.value = frequency;
		}
	};

	return (
		<FilterContextState.Provider value={{ filter, setFrequency }}>
			{children}
		</FilterContextState.Provider>
	);
};
