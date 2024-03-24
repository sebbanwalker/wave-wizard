import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useAudioContext } from "@sebban/audio";
import { Oscilloscope } from "@sebban/oscilloscope";
import "./style.scss";
import { useState } from "react";

export const Mixer: React.FC = () => {
	const { setVolume } = useAudioContext();
	const [value, setValue] = useState(0.25);

	const handleVolumeChange = (_: Event, newValue: number | number[]) => {
		const volume = Array.isArray(newValue) ? newValue[0] : newValue;
		setVolume(volume);
		setValue(volume);
	};

	return (
		<section className="mixer-container">
			<Oscilloscope />
			<section className="mixer-box">
				<Box sx={{ height: "60vh" }} className="mixer">
					<Slider
						orientation="vertical"
						defaultValue={0.25}
						step={0.01}
						min={0}
						max={0.5}
						value={value}
						onChange={handleVolumeChange}
					/>
				</Box>
				<p className="label">Volume</p>
			</section>
		</section>
	);
};
