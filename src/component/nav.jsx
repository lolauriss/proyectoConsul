import React from "react";
import PropType from "prop-types";
import "./style.scss";

export default function Nav(props) {
	Nav.propTypes = {
		btnOne: PropType.string,
		btnTwo: PropType.string,
		btnThree: PropType.string,
		btnFour: PropType.string
	};
	return (

      <div className="wrapper">
   	<nav id="sidebar">
   		<div className="sidebar-header">
   			<h3>Community Planner</h3>
   		</div>


   		<ul className="list-unstyled components">
   			<p></p>
   			<li className="active">
   				<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">AGENDA</a>
   				<ul className="collapse list-unstyled" id="homeSubmenu">
   					<li>
   						<a href={''}>Agenda de Hoy</a>
   					</li>
   					<li>
   						<a href={''}>Invitar Usuario a Evento</a>
   					</li>
   					<li>
   						<a href={''}>Reporte</a>
   					</li>
   				</ul>
   			</li>

   			<li>
   				<a href={''}></a>
   			</li>
   			<li>
   				<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">MANTENEDORES</a>
   				<ul className="collapse list-unstyled" id="pageSubmenu">
   					<li>
   						<a href={''}>Usuarios</a>
   					</li>
   					<li>
   						<a href={''}>Grupos</a>
   					</li>
   					<li>
   						<a href={''}>Servicios</a>
   					</li>
   				</ul>
   			</li>
   			<li>
   				<a href={''}>REPORTES</a>
   			</li>
   			<li>
   				<a href={''}>SOPORTE</a>
   			</li>
   		</ul>

   		<ul className="list-unstyled CTAs">
   			<li>
   				<a href={''} className="download">DESCARGA REPORTES</a>
   			</li>
   			<li>
   				<a href={''} className="article">ALERTAS</a>
   			</li>
   		</ul>
   	</nav>

   {/* 	<div className="content">
   		<nav className="navbar navbar-expand-lg navbar-light bg-light">

   		<button type="button" id="sidebarCollapse" className="btn btn-info">
   			<i className="fa fa-align-justify"></i> <span>MENU PRINCIPAL</span>
   		</button>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href={''}>SERVICIOS<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={''}>ESPECIALIDADES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={''}>HORARIOS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href={''}>PREALERTAS</a>
      </li>
    </ul>
  </div>
</nav>



   	</div>

*/}



   </div>


	);
}
