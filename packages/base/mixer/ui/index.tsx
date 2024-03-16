import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useAudioContext } from "@sebban/audio";
import { Oscilloscope } from "@sebban/oscilloscope";
import "./style.scss";

export const Mixer: React.FC = () => {
	const { setVolume } = useAudioContext();

	const handleVolumeChange = (event: Event, value: number | number[]) => {
		const volume = Array.isArray(value) ? value[0] : value;
		setVolume(volume);
	};

	return (
		<section className="mixer-container">
			<Oscilloscope />
			<Box sx={{ height: 200 }} className="mixer">
				<Slider
					orientation="vertical"
					defaultValue={0.25}
					step={0.01}
					min={0}
					max={0.5}
					onChange={handleVolumeChange}
				/>
			</Box>
		</section>
	);
};
