import React from "react";
//import fondo from "../../img/fondo.jpg";
import logo from "./../img/logo.png";
import "./../styles/Home.scss";

export class Home extends React.Component {
    state = {
        user: '',
        password: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="logo col-6 text-left ml-5">
                        <img alt="logo" src={logo} />
                    </div>
                </div>
                <div className="inputs col-6 text-right">
                    <form onSubmit={this.handleSubmit}>
                       <div className="input-field">
                        <label className="text left">
                            Usuario:
                            <input type="user" id="user" onChange={this.handleChange} />
                        </label>
                       </div>
                       <div className="input-field">
                        <label className="text left">
                        Contraseña:
                            <input type="password" id="password" onChange={this.handleChange} />
                        </label>
                       </div>
                       <div className="input-field">
                        <label className="text left">

                            <button className="btn pink lighten-1 z-depth-0" >Login</button>
                        </label>
                       </div>
                    </form>
                    <p>Registrarme</p>
                    <p>Olvidé mi contraseña</p>
                </div>

            </div>
        );
    }
}