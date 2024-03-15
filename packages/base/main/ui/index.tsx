import { Element } from "react-scroll";
import { Lesson1, Lesson2 } from "@sebban/lessons";
import "./style.scss";

export const MainContent = () => {
	return (
		<section className="main-content">
			<Element name="lesson1" className="lesson1">
				<Lesson1></Lesson1>
			</Element>
			<Element name="lesson2" className="lesson2">
				<Lesson2></Lesson2>
			</Element>
		</section>
	);
};
