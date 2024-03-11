import React, { ReactNode } from "react";
import "./style.scss";

interface ContainerProps {
  type: "whole" | "half" | "quarter";
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ type, children }) => {
  const containerClassName = `main-content__container--${type}`;

  return <div className={containerClassName}>{children}</div>;
};
