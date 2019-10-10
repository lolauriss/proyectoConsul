import React from "react";
import "./../styles/Home.scss";
import "../component/style.scss";

export default class Nav extends React.Component {
    render() {
        return (

      <div className="wrapper">
   	<nav id="sidebar">
   		<div className="sidebar-header">
   			<h3>Community Planner</h3>
   		</div>


   		<ul className="list-unstyled components">
   			<p></p>
   			<li className="active">
   				<a >AGENDA</a>
   				<ul className="collapse list-unstyled" id="homeSubmenu">
   					<li>
   						<a >Agenda de Hoy</a>
   					</li>
   					<li>
   						<a >Invitar Usuario a Evento</a>
   					</li>
   					<li>
   						<a >Reporte</a>
   					</li>
   				</ul>
   			</li>

   			<li>
   				<a ></a>
   			</li>
   			<li>
   				<a >MANTENEDORES</a>
   				<ul className="collapse list-unstyled" id="pageSubmenu">
   					<li>
   						<a >Usuarios</a>
   					</li>
   					<li>
   						<a >Grupos</a>
   					</li>
   					<li>
   						<a >Servicios</a>
   					</li>
   				</ul>
   			</li>
   			<li>
   				<a >REPORTES</a>
   			</li>
   			<li>
   				<a >SOPORTE</a>
   			</li>
   		</ul>

   		<ul className="list-unstyled CTAs">
   			<li>
   				<a >DESCARGA REPORTES</a>
   			</li>
   			<li>
   				<a >ALERTAS</a>
   			</li>
   		</ul>
   	</nav>





   </div>


	);
  }
}
