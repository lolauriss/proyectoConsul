import React from "react";
import "../component/style.scss";
//import logo from "./../img/logo.png";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/agendaHoy" className="nav-link" href="#">Nombre <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/agendaHoy" className="nav-link" href="#">Inicio</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/agendaHoy" className="nav-link" href="#">Buscar familias</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/agendaHoy" className="nav-link" href="#">Crear</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/agendaHoy" className="nav-link" href="#">Solicitud de contacto</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/agendaHoy" className="nav-link" href="#">Notificaciones</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <Link to="/agendaHoy" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link to="/agendaHoy" className="dropdown-item" href="#">Nombre</Link>
                        <Link to="/agendaHoy" className="dropdown-item" href="#">Administrar perfil</Link>
                        <Link to="/agendaHoy" className="dropdown-item" href="#">Tus grupos</Link>
                        <Link to="/agendaHoy" className="dropdown-item" href="#">Administrar servicios</Link>
                        <Link to="/agendaHoy" className="dropdown-item" href="#">Registro de actividad</Link>
                        <Link to="/agendaHoy" className="dropdown-item" href="#">Preferencia de Servicios</Link>
                        <Link to="/agendaHoy" className="dropdown-item" href="#">Configuración</Link>
                        <Link to="/agendaHoy" className="dropdown-item" href="#">Cerrar Sesión</Link>

                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
        );
    }
}