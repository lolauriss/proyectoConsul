import React from "react";
import PropType from "prop-types";

//create your first component

export default function Card(props) {
	Card.propTypes = {
		img: PropType.string,
		title: PropType.string,
		content: PropType.string,
		btnName: PropType.string
	};
	return (
		<div className="card h-100">
			<img className="card-img-top" src={props.img} alt="" />

			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text">{props.content}</p>
			</div>
			<div className="card-footer">
				<a href="{}" className="btn btn-primary">
					{props.btnName}
				</a>
			</div>
		</div>
	);
}

/*
export class Card extends React.Component {
	render() {
		Card.propTypes = {
			img: PropType.string,
			title: PropType.string,
			content: PropType.string,
			btnName: PropType.string
		};
		return (
			<div className="card h-100">
				<img className="card-img-top" src={this.props.img} alt="" />

				<div className="card-body">
					<h4 className="card-title">{this.props.title}</h4>
					<p className="card-text">{this.props.content}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						{this.props.btnName}
					</a>
				</div>
			</div>
		);
	}
}
*/