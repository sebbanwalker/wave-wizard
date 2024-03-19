// LandingPage.tsx
import React, { useCallback, useRef } from "react";
import { NavBar } from "@sebban/navbar";
import { MainContent, MainContentHandle } from "@sebban/main"; // Make sure this import matches the updated export
import { Mixer } from "@sebban/mixer";
import "./style.scss"; // Adjust path as needed

export const LandingPage: React.FC = () => {
	// Specify the type of the ref to be MainContentHandle or null
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
