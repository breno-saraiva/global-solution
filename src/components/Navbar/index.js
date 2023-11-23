import { useRef } from "react";
import "./styles.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Usuário</a>
				<a href="/#">Paciente</a>
				<a href="/#">Blog</a>
				<a href="/#">Sobre</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>

				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>

			</button>
		</header>
	);
}

export default Navbar;