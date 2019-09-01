//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';


//include your index.scss file into the bundle
import "./styless/index.scss";

//import your own components
import Nav from "./component/nav.jsx";
import Header from "./component/header.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";


class App extends React.Component {
	render() {
		return (
			<div>
				<Nav
					btnOne="Home"
					btnTwo="About"
					btnThree="Services"
					btnFour="Contact"
				/>
				<div className="container">
					<Header
						title="Titulo Principal"
						content="Contenido Principal"
						btnName="Boton Principal"
					/>
					<div className="row text-center">
						<div className="col-lg-3 col-md-6 mb-4">
							<Card
								img="http://placehold.it/500x325"
								title="Titulo 1"
								content="Contenido 1"
								btnName="Boton 1"
							/>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<Card
								img="http://placehold.it/500x325"
								title="Titulo 2"
								content="Contenido 2"
								btnName="Boton 2"
							/>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<Card
								img="http://placehold.it/500x325"
								title="Titulo 3"
								content="Contenido 3"
								btnName="Boton 3"
							/>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<Card
								img="http://placehold.it/500x325"
								title="Titulo 4"
								content="Contenido 4"
								btnName="Boton 4"
							/>
						</div>
					</div>
				</div>

				<footer className="py-5 bg-dark">
					<Footer />
				</footer>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

//npm install bootstrap
//npm install -g jsx