import logoImage from "/logo.png";
import { Link } from "react-scroll";

export const NavBar = () => {
	return (
		<section className="nav-bar">
			<img src={logoImage} alt="Logo" />
			<nav>
				<ul>
					<li>
						<Link to="lesson1" spy={true} smooth={true} duration={500}>
							Lesson 1
						</Link>
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
