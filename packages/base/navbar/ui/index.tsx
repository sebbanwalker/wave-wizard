import React from "react";
import logoImage from "/logo.png";
import "./style.scss";

interface NavBarProps {
	onNavigate: (lessonId: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onNavigate }) => {
	return (
		<section className="nav-bar">
			<img src={logoImage} alt="Logo" />
			<nav>
				<ul className="nav-list">
					<li onClick={() => onNavigate("lesson-tutorial")}>Tutorial 📎</li>
					<ul>
						<li onClick={() => onNavigate("lesson-tutorial-oscilloscope")}>
							How to use Wave Wizard ⌨️🖱️
						</li>
						<li onClick={() => onNavigate("lesson-tutorial-oscilloscope")}>
							Oscilloscope 📈
						</li>
						<li onClick={() => onNavigate("lesson-tutorial-oscilloscope")}>
							Master Volume 🔊
						</li>
					</ul>
					<li onClick={() => onNavigate("lesson-1")}>Waveforms 〰️</li>
					<ul>
						<li onClick={() => onNavigate("lesson-1-basic")}>
							Basic Waveshapes 🟠🟨🔷
						</li>
						<li onClick={() => onNavigate("lesson-1-noise")}>Noise 🎲</li>
						<li onClick={() => onNavigate("lesson-1-combining")}>
							Combining Waveshapes 🧩
						</li>
					</ul>
					<li onClick={() => onNavigate("lesson-2")}>Filters 🧪</li>
					<ul>
						<li onClick={() => onNavigate("lesson-1-basic")}>
							Low Pass Filter 🌙
						</li>
						<li onClick={() => onNavigate("lesson-1-noise")}>
							High Pass Filter ☀️
						</li>
						<li onClick={() => onNavigate("lesson-1-combining")}>
							Band Pass Filter 🗻
						</li>
						<li onClick={() => onNavigate("lesson-1-combining")}>
							Notch Filter ✂️
						</li>
					</ul>
				</ul>
			</nav>
		</section>
	);
};
