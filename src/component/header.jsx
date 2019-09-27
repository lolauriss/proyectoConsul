import React from "react";
import PropType from "prop-types";
import "./style.scss";

export default function Header(props) {
	Header.propTypes = {
		title: PropType.string,
		content: PropType.string,
		btnName: PropType.string
	};
	return (


<div className="row">
    <div className= "col 8">
    <div className="jumbotron">
      <h1>Calendario</h1>
      <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
      <p>To see the difference between static and fixed top navbars, just scroll.</p>
      <p>
        <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
      </p>
    </div>
    </div>


</div>

        /*<header className="jumbotron my-4">
			<h1 className="display-3">{props.title}</h1>
			<p className="lead">{props.content}</p>
			<a className="btn btn-primary btn-lg" href="{}" role="button">
				{props.btnName}
			</a>
		</header>*/
	);
}