import React from "react";
import "./../styles/Home.scss";
import "../component/style.scss";
//import { Link } from "react-router-dom";

//create your first component

export default class ClassInformation extends React.Component {
        render(){
            return (

                <div className="new-card">
                    <h3>Información Aministrador</h3>
                    <br>
                    </br>
                    <h3>Nombre</h3>
                    <br>
                    </br>
                    <h3>Correo electrónico</h3>
                    <br>
                    </br>
                    <h3>Sobre mí</h3>
                    <br>
                    </br>
                    <h3>Community</h3>
                </div>

            );
        }
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