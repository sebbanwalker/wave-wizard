import { WaveFormPlayer } from "@sebban/lessons";
import { SamplePlayer } from "@sebban/sampleplayer";
import { Oscilloscope } from "@sebban/oscilloscope";
import { Container } from "@sebban/container";
import drumloop01 from "/drumloop01.mp3";
import bassloop01 from "/bassloop01.mp3";

export const lessons = [
	// Tutorial

	<section className="lesson-tutorial">
		<h1 className="main-content__title">Tutorial</h1>
		<article className="row">
			<Container type={"half"}>
				<h2 className="title">How to use Wave Wizard🖱️⌨️</h2>
				<p className="desc">
					Everything in Wave Wizard is controlled either by buttons or sliders.
					Try some below!
				</p>
				<article className="flex">
					<SamplePlayer type="sample" sampleUrl={bassloop01} />
				</article>
			</Container>
			<Container type={"half"}>
				<h2 className="title">Oscilloscope 📈</h2>
				<p className="desc">
					The oscilloscope shows how the audio is oscillating in real-time.
					Press "PLAY" below to see it working.
				</p>
				<article className="flex">
					<SamplePlayer type="sample" sampleUrl={drumloop01} />
					<Oscilloscope />
				</article>
			</Container>
			<Container type={"half"}>
				<h2 className="title">Master Volume 🔊</h2>
				<p className="desc">
					The master volume controls the overall volume of the audio output.
					Lowering the slider to the bottom will mute the sound.
				</p>
			</Container>
		</article>
	</section>,

	// Waveforms

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
	</section>,

	// Lesson 2
	// <section className="lesson2">
	// 	<h1 className="main-content__title">Another Lesson</h1>
	// 	{/* ... */}
	// </section>,

	// More lessons...
];
