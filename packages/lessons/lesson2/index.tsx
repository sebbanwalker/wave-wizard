import { Element } from "react-scroll";
import { Container } from "@sebban/container";
import { WaveFormPlayer } from "@sebban/lessons";
import "./style.scss";

export const Lesson2 = () => {
	return (
		<section className="lesson2">
			<h1 className="main-content__title">Content</h1>
			<Container type={"half"}>
				<h2 className="title">Basic Wave Shapes</h2>
				<p className="desc">
					Different wave shapes have a distinctive sound, thus they all are
					perfect building blocks within sound design in their own regard. The
					four most common basic wave shapes are sine, sawtooth, triangle, and
					square. lorem300
				</p>
				<WaveFormPlayer type="sine" />
				<WaveFormPlayer type="square" />
				<WaveFormPlayer type="triangle" />
				<WaveFormPlayer type="sawtooth" />
			</Container>
			<Container type={"half"}>content</Container>
			<Container type={"whole"}>content</Container>
		</section>
	);
};
