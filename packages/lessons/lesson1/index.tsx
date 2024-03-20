import React from "react";

import { lessons } from "@sebban/lessons";
import "./style.scss";

interface LessonProps {
	index: number;
}

export const Lesson: React.FC<LessonProps> = ({ index }) => {
	return <React.Fragment key={index}>{lessons[index]}</React.Fragment>;
};
