// LandingPage.tsx
import React, { useCallback, useRef } from "react";
import { NavBar } from "@sebban/navbar";
import { MainContent, MainContentHandle } from "@sebban/main";
import { Mixer } from "@sebban/mixer";
import "./style.scss";

export const LandingPage: React.FC = () => {
	const mainContentRef = useRef<MainContentHandle>(null);

	const onNavigate = useCallback((lessonId: string) => {
		mainContentRef.current?.handleNavigate(lessonId);
	}, []);

	return (
		<main className="landing">
			<img src="./wave.svg" alt="wave" className="background-wave" />
			<NavBar onNavigate={onNavigate} />
			<MainContent ref={mainContentRef} />
			<Mixer />
		</main>
	);
};
