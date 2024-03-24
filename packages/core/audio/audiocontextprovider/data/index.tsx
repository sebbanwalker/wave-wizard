import React, { createContext, useContext, useState, useEffect } from "react";

type AudioContextType = {
	isLoading: boolean;
	audioContext: AudioContext | null;
	masterGain: GainNode | null;
	setVolume: (volume: number) => void;
	analyser: AnalyserNode | null;
	activeSounds: number;
	incrementActiveSounds: () => void;
	decrementActiveSounds: () => void;
};

const AudioContextState = createContext<AudioContextType | null>(null);

export const useAudioContext = () => useContext(AudioContextState)!;

export const AudioContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
	const [masterGain, setMasterGain] = useState<GainNode | null>(null);
	const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
	const [activeSounds, setActiveSounds] = useState(0);

	const incrementActiveSounds = () => setActiveSounds((prev) => prev + 1);
	const decrementActiveSounds = () => setActiveSounds((prev) => prev - 1);

	useEffect(() => {
		try {
			const context = new AudioContext({ sampleRate: 44100 });
			const gain = context.createGain();
			gain.connect(context.destination);
			gain.gain.value = 0.25;
			setAudioContext(context);
			setMasterGain(gain);

			const analyser = context.createAnalyser();
			gain.connect(analyser);
			setAnalyser(analyser);
			console.log("AudioContext created");
		} catch (error) {
			console.error("Failed to create AudioContext:", error);
		} finally {
			setIsLoading(false);
		}

		return () => {
			console.log("AudioContextProvider unmounted");
		};
	}, []);

	useEffect(() => {
		console.log(`Active sounds: ${activeSounds}`);
	}, [activeSounds]);

	const setVolume = (volume: number) => {
		if (masterGain) {
			masterGain.gain.value = volume;
		}
	};

	return (
		<AudioContextState.Provider
			value={{
				isLoading,
				audioContext,
				masterGain,
				setVolume,
				analyser,
				activeSounds,
				incrementActiveSounds,
				decrementActiveSounds,
			}}>
			{!isLoading && children}
		</AudioContextState.Provider>
	);
};
