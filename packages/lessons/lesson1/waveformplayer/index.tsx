import React, { useState, useEffect } from "react";
import { useAudioContext } from "@sebban/audio";
import { useFilterContext } from "@sebban/filtercontext";

type WaveProps = {
	type: "sine" | "square" | "triangle" | "sawtooth";
};

export const WaveFormPlayer: React.FC<WaveProps> = ({ type }) => {
	const {
		audioContext,
		masterGain,
		incrementActiveSounds,
		decrementActiveSounds,
	} = useAudioContext();
	const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
	const context = useFilterContext();
	let filter: BiquadFilterNode | null;

	if (context) {
		({ filter } = context);
	}

	const startOscillator = () => {
		if (audioContext && masterGain && !oscillator) {
			const osc = audioContext.createOscillator();
			osc.type = type as OscillatorType;

			const oscGain = audioContext.createGain();

			if (filter) {
				osc.connect(oscGain);
				oscGain.connect(filter);
				filter.connect(masterGain);
			} else {
				osc.connect(oscGain);
				oscGain.connect(masterGain);
			}

			masterGain.connect(audioContext.destination);

			const now = audioContext.currentTime;
			const attackTime = 0.1;

			oscGain.gain.setValueAtTime(0, now);
			oscGain.gain.linearRampToValueAtTime(1, now + attackTime);

			osc.start(now);

			setOscillator(osc);
			incrementActiveSounds();
		}
	};

	useEffect(() => {
		return () => {
			stopOscillator();
		};
	}, []);

	const stopOscillator = () => {
		if (oscillator) {
			const now = audioContext?.currentTime ?? 0;
			oscillator.stop(now);
			oscillator.disconnect();
			setOscillator(null);
			decrementActiveSounds();
		}
	};

	const handleMouseDown = () => {
		startOscillator();
	};

	const handleMouseUp = () => {
		stopOscillator();
	};

	return (
		<button
			className={`waveform ${type}`}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}>
			{type}
		</button>
	);
};
