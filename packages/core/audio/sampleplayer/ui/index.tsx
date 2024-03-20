import React, { useRef, useState, useEffect } from "react";
import { useAudioContext } from "@sebban/audio";
import "./style.scss";

type SamplePlayerProps = {
	type: "upload" | "sample";
	sampleUrl?: string;
};

export const SamplePlayer: React.FC<SamplePlayerProps> = ({
	type,
	sampleUrl,
}) => {
	const { isLoading, audioContext, masterGain } = useAudioContext();
	const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
	const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);

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
		const response = await fetch(url, { mode: "no-cors" });
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
	}, [type, sampleUrl, audioContext]);

	const handlePlay = async () => {
		if (audioContext && audioBuffer && masterGain && !sourceNodeRef.current) {
			if (audioContext.state !== "running") {
				await audioContext.resume();
			}
			const sourceNode = audioContext.createBufferSource();
			sourceNode.buffer = audioBuffer;
			sourceNode.loop = true;
			sourceNode.connect(masterGain);
			sourceNode.start();
			sourceNodeRef.current = sourceNode;
			setIsPlaying(true);
		}
	};

	const handleStop = () => {
		if (sourceNodeRef.current) {
			sourceNodeRef.current.disconnect();
			sourceNodeRef.current = null;
			setIsPlaying(false);
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container">
			{type === "upload" && <input type="file" onChange={handleFileUpload} />}
			<button
				className={`play ${isPlaying ? "active" : ""}`}
				onClick={handlePlay}>
				PLAY
			</button>
			<button
				className={`stop ${!isPlaying ? "active" : ""}`}
				onClick={handleStop}>
				STOP
			</button>
		</div>
	);
};
