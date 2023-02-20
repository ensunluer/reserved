import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import App from "./pages/App";
import Presantation from "./pages/Presantation";

// CSS
import "bulma/css/bulma.css";
import "./styles/index.scss";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="presentation" element={<Presantation />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);
