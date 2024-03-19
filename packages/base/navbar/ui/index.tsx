import logoImage from "/logo.png";
import { Link } from "react-scroll";
import "./style.scss";

export const NavBar = () => {
	return (
		<section className="nav-bar">
			<img src={logoImage} alt="Logo" />
			<nav>
				<ul className="nav-list">
					<li>
						<Link to="lesson1" spy={true} smooth={true} duration={500}>
							Waveforms 〰️
						</Link>
						<ul>
							<li>
								<Link
									to="basic-waveshapes"
									spy={true}
									smooth={true}
									duration={500}>
									Basic Wave Shapes 🌊
								</Link>
							</li>
							<li>
								<Link to="noise" spy={true} smooth={true} duration={500}>
									Noise 🎲
								</Link>
							</li>
							<li>
								<Link
									to="combining-waveshapes"
									spy={true}
									smooth={true}
									duration={500}>
									Combining Waveshapes 🧩
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link to="lesson2" spy={true} smooth={true} duration={500}>
							Lesson 2
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};
