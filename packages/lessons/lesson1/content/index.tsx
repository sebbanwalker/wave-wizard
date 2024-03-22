import { WaveFormPlayer } from "@sebban/lessons";
import { SamplePlayer } from "@sebban/sampleplayer";
import { Oscilloscope } from "@sebban/oscilloscope";
import { Container } from "@sebban/container";
import { NoiseGenerator } from "@sebban/noisegenerator";
import { CombinedWaveFormPlayer } from "@sebban/combinedwaveforms";
import { FilterContextProvider } from "@sebban/filtercontext";
import { FilterControl } from "@sebban/filtercontrol";
import drumloop01 from "/drumloop01.mp3";
import bassloop01 from "/bassloop01.mp3";
import guitarloop01 from "/guitarloop01.mp3";

export const lessons = [
	// Tutorial

	<section className="lesson-tutorial">
		<h1 className="main-content__title">Tutorial</h1>
		<article className="row">
			<Container type={"half"}>
				<h2 className="title">How to use Wave Wizard ⌨️🖱️</h2>
				<p className="desc">
					Everything in Wave Wizard is controlled either by buttons or sliders.
					Try some below!
				</p>
				<article className="flex">
					{/* This sampleplayer below is what I want filtered */}
					<SamplePlayer type="sample" sampleUrl={bassloop01} />
					{/* Here is where I want to add a filter slider that controls the sample player */}
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
				<p className="desc">
					Noise is a waveform that contains all frequencies at equal amplitude.
					This is created by generating completely random amplitudes. The way it
					sounds is similar to the static you hear on a radio or TV when it's
					not tuned to a station.
				</p>
				<section className="center-items">
					<NoiseGenerator />
				</section>
			</Container>
			<Container type={"half"}>
				<h2 className="title">Combining Waveshapes 🧩</h2>
				<p className="desc">
					Two waveshapes can be added together, essentially melding and morphing
					into a new shape between the two.
				</p>
				<section className="center-items">
					<section className="left-align">
						<CombinedWaveFormPlayer type1="sine" type2="sawtooth" />
						<CombinedWaveFormPlayer type1="square" type2="sawtooth" />
						<CombinedWaveFormPlayer type1="triangle" type2="sawtooth" />
						<CombinedWaveFormPlayer type1="sine" type2="square" />
						<CombinedWaveFormPlayer type1="triangle" type2="square" />
					</section>
				</section>
			</Container>
		</article>
	</section>,

	// Lesson 2
	<section className="lesson2">
		<h1 className="main-content__title">Filters</h1>
		<article className="row">
			<Container type={"half"}>
				<h2 className="title">Low Pass Filter</h2>
				<p className="desc">
					A low pass filter allows frequencies below a certain specific
					frequency called a cutoff to pass through, making the sound darker and
					more muffled.
				</p>
				<FilterContextProvider type="lowpass">
					<SamplePlayer type="sample" sampleUrl={guitarloop01} />
					<FilterControl />
				</FilterContextProvider>
				<section className="center"></section>
			</Container>
			<Container type={"half"}>
				<h2 className="title">High Pass Filter</h2>
				<p className="desc">
					A high pass filter is the opposite and allows frequencies above a
					certain specific frequency called a cutoff to pass through, making the
					sound brighter and thinner.
				</p>
				<FilterContextProvider type="highpass">
					<SamplePlayer type="sample" sampleUrl={guitarloop01} />
					<FilterControl />
				</FilterContextProvider>
			</Container>
			<Container type={"half"}>
				<h2 className="title">Band Pass Filter</h2>
				<p className="desc">
					A bandpass filter only allows the nearest frequencies around the
					cutoff frequency to pass through, levelling off depending on the
					resonance, commonly known as Q-factor.
				</p>
				<FilterContextProvider type="bandpass">
					<SamplePlayer type="sample" sampleUrl={guitarloop01} />
					<FilterControl />
				</FilterContextProvider>
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
