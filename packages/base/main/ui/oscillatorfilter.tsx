import { useState, useEffect } from "react";
import { useAudioContext } from "@sebban/audio";

export const OscillatorWithLowPassFilter = () => {
	const {
		audioContext,
		masterGain,
		incrementActiveSounds,
		decrementActiveSounds,
	} = useAudioContext();
	const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
	const [lowpassFilter, setLowpassFilter] = useState<BiquadFilterNode | null>(
		null
	);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (audioContext && masterGain) {
			const osc = audioContext.createOscillator();
			const filter = audioContext.createBiquadFilter();

			osc.type = "sawtooth";
			filter.type = "lowpass";
			filter.frequency.value = 1000;

			osc.connect(filter);
			filter.connect(masterGain);

			setOscillator(osc);
			setLowpassFilter(filter);
		}
	}, [audioContext, masterGain]);

	const handleStartStop = () => {
		if (audioContext) {
			if (isPlaying) {
				if (oscillator) {
					oscillator.stop();
					setOscillator(null);
				}
				setIsPlaying(false);
				decrementActiveSounds();
			} else {
				const osc = audioContext.createOscillator();
				osc.type = "sawtooth";
				if (lowpassFilter) {
					osc.connect(lowpassFilter);
				}
				osc.start();
				setOscillator(osc);
				setIsPlaying(true);
				incrementActiveSounds();
			}
		}
	};

	const handleFrequencyChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const frequency = Number(event.target.value);
		if (lowpassFilter) {
			lowpassFilter.frequency.value = frequency;
		}
	};

	return (
		<div>
			<button onClick={handleStartStop}>Start/Stop Oscillator</button>
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
