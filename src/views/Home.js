import React from "react";
//import fondo from "../../img/fondo.jpg";
//import logo from "../../img/logo.png";
//import "../../styles/Home.scss";
export class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 text-left ml-5">
                        
                    </div>
                </div>
                <div className="col-6 text-right">
                    <form>
                        <label className="text left">
                            Usuario:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <form>
                        <label className="text left">
                            Contraseña:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <p>Registrarme</p>
                <p>Olvidé mi contraseña</p>
            </div>
        );
    }
}