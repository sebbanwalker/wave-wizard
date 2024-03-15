import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useAudioContext } from "@sebban/audio";
import "./style.scss";

export const Mixer: React.FC = () => {
	const { setVolume } = useAudioContext();

	const handleVolumeChange = (event: Event, value: number | number[]) => {
		const volume = Array.isArray(value) ? value[0] : value;
		setVolume(volume);
	};

	return (
		<section className="mixer-container">
			<Box sx={{ height: 200 }} className="mixer">
				<Slider
					orientation="vertical"
					defaultValue={0.5}
					step={0.01}
					min={0}
					max={1}
					onChange={handleVolumeChange}
				/>
			</Box>
		</section>
	);
};
