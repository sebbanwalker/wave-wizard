import React, { useState } from "react";
import { useAudioContext } from "@sebban/audio";

export const NoiseGenerator: React.FC = () => {
	const { audioContext, masterGain } = useAudioContext();
	const [processor, setProcessor] = useState<ScriptProcessorNode | null>(null);

	const startNoise = () => {
		if (audioContext && masterGain && !processor) {
			const bufferSize = 4096;
			const whiteNoiseProcessor = audioContext.createScriptProcessor(
				bufferSize,
				1,
				1
			);

			whiteNoiseProcessor.onaudioprocess = (e) => {
				const output = e.outputBuffer.getChannelData(0);
				for (let i = 0; i < bufferSize; i++) {
					output[i] = Math.random() * 2 - 1;
				}
			};

			whiteNoiseProcessor.connect(masterGain);
			setProcessor(whiteNoiseProcessor);
		}
	};

	const stopNoise = () => {
		if (processor) {
			processor.disconnect();
			setProcessor(null);
		}
	};

	const handleMouseDown = () => {
		startNoise();
	};

	const handleMouseUp = () => {
		stopNoise();
	};

	return (
		<button
			className="noise"
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}>
			noise
		</button>
	);
};
