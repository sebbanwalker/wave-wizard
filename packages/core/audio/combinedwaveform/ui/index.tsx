import React, { useState } from "react";
import { useAudioContext } from "@sebban/audio";

type CombinedWaveProps = {
	type1: "sine" | "square" | "triangle" | "sawtooth";
	type2: "sine" | "square" | "triangle" | "sawtooth";
};

export const CombinedWaveFormPlayer: React.FC<CombinedWaveProps> = ({
	type1,
	type2,
}) => {
	const {
		audioContext,
		masterGain,
		incrementActiveSounds,
		decrementActiveSounds,
	} = useAudioContext();
	const [oscillators, setOscillators] = useState<OscillatorNode[]>([]);

	const startOscillators = () => {
		if (audioContext && masterGain && oscillators.length === 0) {
			const osc1 = audioContext.createOscillator();
			osc1.type = type1 as OscillatorType;

			const osc2 = audioContext.createOscillator();
			osc2.type = type2 as OscillatorType;

			const now = audioContext.currentTime;
			const attackTime = 0.1;

			const envelopeGain = audioContext.createGain();
			envelopeGain.gain.setValueAtTime(0, now);
			envelopeGain.gain.linearRampToValueAtTime(1, now + attackTime); // Half the gain

			osc1.connect(envelopeGain);
			osc2.connect(envelopeGain);
			envelopeGain.connect(masterGain);

			osc1.start(now);
			osc2.start(now);

			setOscillators([osc1, osc2]);
			console.log(
				`Started oscillators. Total oscillators: ${oscillators.length}`
			);
			incrementActiveSounds();
		}
	};

	const stopOscillators = () => {
		if (oscillators.length > 0) {
			const now = audioContext?.currentTime ?? 0;
			oscillators.forEach((osc) => {
				osc.stop(now);
				osc.disconnect();
			});
			setOscillators([]);
			console.log(
				`Stopped oscillators. Total oscillators: ${oscillators.length}`
			);
			decrementActiveSounds();
		}
	};

	const handleMouseDown = () => {
		startOscillators();
	};

	const handleMouseUp = () => {
		stopOscillators();
	};

	React.useEffect(() => {
		return () => {
			stopOscillators();
		};
	}, []);

	return (
		<button
			className={`waveform ${type1}`}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}>
			{`${type1} + ${type2}`}
		</button>
	);
};
