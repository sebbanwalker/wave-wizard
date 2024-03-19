import { Container } from "@sebban/container";
import { WaveFormPlayer } from "@sebban/lessons";
import { SamplePlayer } from "@sebban/sampleplayer";
import "./style.scss";

export const Lesson1 = () => {
	return (
		<section className="lesson1">
			<h1 className="main-content__title">Waveforms</h1>
			<article className="row">
				<Container type={"half"}>
					<h2 className="title">Basic Waveshapes 🌊</h2>
					<p className="desc">
						Different waveshapes have a distinctive sound, thus they all are
						perfect building blocks within sound design in their own regard. The
						four most common basic wave shapes are sine, sawtooth, triangle, and
						square.
					</p>
					<section className="center">
						<WaveFormPlayer type="sine" />
						<WaveFormPlayer type="square" />
						<WaveFormPlayer type="triangle" />
						<WaveFormPlayer type="sawtooth" />
					</section>
				</Container>
				<Container type={"half"}>
					<h2 className="title">Noise 🎲</h2>
				</Container>
				<Container type={"half"}>
					<h2 className="title">Combining Waveshapes 🧩</h2>
				</Container>
			</article>
			<Container type={"half"}>
				<h2 className="title">Oscilloscope</h2>
				<SamplePlayer type="upload" />
			</Container>
		</section>
	);
};
