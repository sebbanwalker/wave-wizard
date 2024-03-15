import React, { ReactNode } from "react";
import "./style.scss";

interface ContainerProps {
	type: "whole" | "half" | "quarter";
	spacing?: Boolean;
	children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
	type = "whole",
	spacing = false,
	children,
}) => {
	let containerClassName = `main-content__container--${type}`;
	if (spacing) {
		containerClassName += " spacing";
	}

	return <div className={containerClassName}>{children}</div>;
};
