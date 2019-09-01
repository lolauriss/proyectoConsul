import React from "react";
import PropType from "prop-types";

export default function Nav(props) {
	Nav.propTypes = {
		btnOne: PropType.string,
		btnTwo: PropType.string,
		btnThree: PropType.string,
		btnFour: PropType.string
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" href="{}">
					Start Bootstrap
				</a>

				<button
					className="navbar-toggler collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="collapse navbar-collapse "
					id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="{}">
								{props.btnOne}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="{}">
								{props.btnTwo}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="{}">
								{props.btnThree}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="{}">
								{props.btnFour}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

/*
export class Nav extends React.Component {
	render() {
		Nav.propTypes = {
			btnOne: PropType.string,
			btnTwo: PropType.string,
			btnThree: PropType.string,
			btnFour: PropType.string
		};
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>

					<button
						className="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse "
						id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									{this.props.btnOne}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{this.props.btnTwo}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{this.props.btnThree}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{this.props.btnFour}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
*/
