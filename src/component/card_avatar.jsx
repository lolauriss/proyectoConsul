import React from "react";
import "./../styles/Home.scss";
import "../component/style.scss";
//import { Link } from "react-router-dom";

//create your first component

export default class ClassAvatar extends React.Component {
        render(){
            return (

                <div className="card">
                    <h6 className="name">Coloca tu nombre acá</h6>
                        <div className="photo">
                            <h6>Tu foto de perfil</h6>
                        </div>
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