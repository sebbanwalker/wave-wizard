import "./style.scss";
import { NavBar } from "@sebban/navbar";
import { MainContent } from "@sebban/main";
import { Mixer } from "@sebban/mixer";

export const LandingPage = () => {
	return (
		<main className="landing">
			<img src="./wave.svg" alt="wave" className="background-wave"></img>
			<NavBar></NavBar>
			<MainContent></MainContent>
			<Mixer></Mixer>
		</main>
	);
};
