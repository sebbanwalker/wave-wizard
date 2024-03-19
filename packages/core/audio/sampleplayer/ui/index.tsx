import React, { useRef, useState, useEffect } from "react";
import { useAudioContext } from "@sebban/audio";

type SamplePlayerProps = {
	type: "upload" | "sample";
	sampleUrl?: string;
};

export const SamplePlayer: React.FC<SamplePlayerProps> = ({
	type,
	sampleUrl,
}) => {
	const { audioContext, masterGain } = useAudioContext();
	const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
	const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

	const handleFileUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const files = event.target.files;
		if (files && audioContext) {
			const audioData = await files[0].arrayBuffer();
			const audioBuffer = await audioContext.decodeAudioData(audioData);
			setAudioBuffer(audioBuffer);
		}
	};

	const loadSample = async (url: string) => {
		const response = await fetch(url);
		const arrayBuffer = await response.arrayBuffer();
		if (audioContext) {
			const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
			setAudioBuffer(audioBuffer);
		}
	};

	useEffect(() => {
		if (type === "sample" && sampleUrl) {
			loadSample(sampleUrl);
		}
	}, [type, sampleUrl]);

	const handlePlay = () => {
		if (audioContext && audioBuffer && masterGain) {
			const sourceNode = audioContext.createBufferSource();
			sourceNode.buffer = audioBuffer;
			sourceNode.loop = true; // make the audio loop
			sourceNode.connect(masterGain);
			sourceNode.start();
			sourceNodeRef.current = sourceNode;
		}
	};

	const handleStop = () => {
		if (sourceNodeRef.current) {
			sourceNodeRef.current.stop();
			sourceNodeRef.current = null;
		}
	};

	return (
		<div>
			{type === "upload" && <input type="file" onChange={handleFileUpload} />}
			<button onClick={handlePlay}>Play</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	);
};
