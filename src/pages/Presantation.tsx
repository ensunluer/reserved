import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import Embed from "./Embed";

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	color: red;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return (
		<ModalContainer>
			<ModalOverlay onClick={onClose} />
			{children}
		</ModalContainer>
	);
}

const Presantation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClick = () => {
		var password = prompt("Please enter the password");
		if (password === process.env.REACT_APP_PASSWORD) {
			setIsOpen((prevValue) => !prevValue);
		} else {
			alert("Wrong password");
		}
	};

	return (
		<div className="app">
			<Navbar />
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen((prevValue) => !prevValue)}
				children={<Embed src={process.env.REACT_APP_PRESENTATION_ID} />}
			/>
			<section id="introduction" className="introduction section is-medium">
				<div className="introduction-container container">
					<div className="columns">
						<div className="column is-12">
							<ScrollAnimation animateIn="animate__slideInUp" animateOnce={true}>
								<div className="content" style={{ textAlign: "center" }}>
									<h1 className="title">
										Hello, I'm <span className="blue-text">Kleuize</span>.
									</h1>
									<p className="description">Coming soon...</p>
									<button className="button" onClick={handleClick}>
										Show Presentation
										<span>→</span>
									</button>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Presantation;
