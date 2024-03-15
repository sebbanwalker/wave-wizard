import "./style.scss";
import { NavBar } from "@sebban/navbar";
import { MainContent } from "@sebban/main";
import { Mixer } from "@sebban/mixer";

export const LandingPage = () => {
	return (
		<main className="landing">
			<NavBar></NavBar>
			<MainContent></MainContent>
			<Mixer></Mixer>
		</main>
	);
};
