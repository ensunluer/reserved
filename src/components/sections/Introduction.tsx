import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";


export const Introduction = () => {
	return (
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
								<a href="https://www.instagram.com/kleuize/" target="_blank" className="button">
									Instagram
									<span>→</span>
								</a>
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
