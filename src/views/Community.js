import React from "react";
//import { Link } from "react-router-dom";
import "./../styles/style.scss";
export const Community = () => (
    <div className="container-fluid">
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Community Planner</h3>
                </div>
                <ul className="list-unstyled components">
                    <p />
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            AGENDA
                        </a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                Agenda de Hoy
                            </li>
                            <li>
                                Invitar Usuario a Evento
                            </li>
                            <li>
                                Reporte
                            </li>
                        </ul>
                    </li>
                    <li>

                    </li>
                    <li>

                            MANTENEDORES

                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                Usuarios
                            </li>
                            <li>
                                Grupos
                            </li>
                            <li>
                                Servicios
                            </li>
                        </ul>
                    </li>
                    <li>
                        REPORTES
                    </li>
                    <li>
                        SOPORTE
                    </li>
                </ul>
                <ul className="list-unstyled CTAs">
                    <li>

                            DESCARGA REPORTES

                    </li>
                    <li>

                            ALERTAS

                    </li>
                </ul>
            </nav>
        </div>
        <div className="content-container">
            <div className="container-fluid">
                <div className="jumbotron">
                    <h1>Navbar example</h1>
                    <p>
                        This example is a quick exercise to illustrate how the default, static and fixed to top navbar
                        work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.
                    </p>
                    <p>To see the difference between static and fixed top navbars, just scroll.</p>
                    <p>
                        <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">
                            View navbar docs &raquo;
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);