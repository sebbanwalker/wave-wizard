import React from "react";
import logoImage from "/logo.png";
import "./style.scss";
import { ReactSVG } from "react-svg";
import hipass from "/hipass.svg";
import lopass from "/lopass.svg";
import bandpass from "/bandpass.svg";

interface NavBarProps {
	onNavigate: (lessonId: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onNavigate }) => {
	return (
		<section className="nav-bar">
			<img src={logoImage} alt="Logo" />
			<nav>
				<ul className="nav-list">
					<li onClick={() => onNavigate("lesson-1")}>Tutorial 📎</li>
					<ul>
						<li onClick={() => onNavigate("lesson-1")}>
							How to use Wave Wizard ⌨️🖱️
						</li>
						<li onClick={() => onNavigate("lesson-1")}>Oscilloscope 📈</li>
						<li onClick={() => onNavigate("lesson-1")}>Master Volume 🔊</li>
					</ul>
					<li onClick={() => onNavigate("lesson-2")}>Waveforms 〰️</li>
					<ul>
						<li onClick={() => onNavigate("lesson-2")}>
							Basic Waveshapes 🟠🟨🔷
						</li>
						<li onClick={() => onNavigate("lesson-2")}>Noise 🎲</li>
						<li onClick={() => onNavigate("lesson-2")}>
							Combining Waveshapes 🧩
						</li>
					</ul>
					<li onClick={() => onNavigate("lesson-3")}>Filters 🧪</li>
					<ul>
						<li onClick={() => onNavigate("lesson-3")}>Low Pass Filter 🌙</li>
						<li onClick={() => onNavigate("lesson-3")}>High Pass Filter ☀️</li>
						<li onClick={() => onNavigate("lesson-3")}>Band Pass Filter 🗻</li>
					</ul>
				</ul>
			</nav>
		</section>
	);
};
