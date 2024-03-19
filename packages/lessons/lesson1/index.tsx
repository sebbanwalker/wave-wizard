import React from "react";

import { lessons } from "@sebban/lessons";
import "./style.scss";

export const Lesson: React.FC = () => {
	return (
		<>
			{lessons.map((lesson, index) => (
				<React.Fragment key={index}>{lesson}</React.Fragment>
			))}
		</>
	);
};
