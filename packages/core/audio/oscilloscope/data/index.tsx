import { useRef, useEffect } from "react";
import { useAudioContext } from "@sebban/audio";

export const Oscilloscope = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const { analyser } = useAudioContext();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || !analyser) return;
		const context = canvas.getContext("2d");
		if (!context) return;

		analyser.fftSize = 512;
		const data = new Uint8Array(analyser.frequencyBinCount);
		const draw = () => {
			// const delay = 30;

			// setTimeout(() => {
			// 	requestAnimationFrame(draw);
			// }, delay);

			requestAnimationFrame(draw);
			analyser.getByteTimeDomainData(data);

			context.clearRect(0, 0, canvas.width, canvas.height);
			context.lineWidth = 4;
			context.strokeStyle = "rgb(243, 242, 213)";
			context.beginPath();

			const sliceWidth =
				(canvas.width * 1.0) / (analyser.frequencyBinCount / 1);
			let x = 0;

			for (let i = 0; i < analyser.frequencyBinCount; i++) {
				const v = data[i] / 128.0;
				const y = (v * canvas.height) / 2;

				if (i === 0) {
					context.moveTo(x, y);
				} else {
					context.lineTo(x, y);
				}

				x += sliceWidth;
			}
			context.stroke();
		};

		draw();
	}, [analyser]);

	return <canvas ref={canvasRef} />;
};
