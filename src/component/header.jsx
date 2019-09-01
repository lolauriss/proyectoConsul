import React from "react";
import PropType from "prop-types"; 

export default function Header(props) {
	Header.propTypes = {
		title: PropType.string,
		content: PropType.string,
		btnName: PropType.string
	};
	return (
		<header className="jumbotron my-4">
			<h1 className="display-3">{props.title}</h1>
			<p className="lead">{props.content}</p>
			<a className="btn btn-primary btn-lg" href="{}" role="button">
				{props.btnName}
			</a>
		</header>
	);
}