import React from "react";
import PropType from "prop-types";
import "./index.scss";

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
   			<h3>BOOTSTRAP SIDEBAR</h3>
   		</div>


   		<ul className="list-unstyled components">
   			<p>Dummy Heading</p>
   			<li className="active">
   				<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
   				<ul className="collapse list-unstyled" id="homeSubmenu">
   					<li>
   						<a href={'http://google.com'}>home1</a>
   					</li>
   					<li>
   						<a href={'http://google.com'}>home2</a>
   					</li>
   					<li>
   						<a href={'http://google.com'}>home3</a>
   					</li>
   				</ul>
   			</li>

   			<li>
   				<a href={'http://google.com'}>About</a>
   			</li>
   			<li>
   				<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Page</a>
   				<ul className="collapse list-unstyled" id="pageSubmenu">
   					<li>
   						<a href={'http://google.com'}>page1</a>
   					</li>
   					<li>
   						<a href={'http://google.com'}>page2</a>
   					</li>
   					<li>
   						<a href={'http://google.com'}>page3</a>
   					</li>
   				</ul>
   			</li>
   			<li>
   				<a href={'http://google.com'}>Services</a>
   			</li>
   			<li>
   				<a href={'http://google.com'}>Contact Us</a>
   			</li>
   		</ul>

   		<ul className="list-unstyled CTAs">
   			<li>
   				<a href={'http://google.com'} className="download">Download code</a>
   			</li>
   			<li>
   				<a href={'http://google.com'} className="article">article</a>
   			</li>
   		</ul>
   	</nav>

   	<div className="content">
   		<nav className="navbar navbar-expand-lg navbar-light bg-light">

   		<button type="button" id="sidebarCollapse" className="btn btn-info">
   			<i className="fa fa-align-justify"></i> <span>toggle sidebar</span>
   		</button>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href={'http://google.com'}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={'http://google.com'}>Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={'http://google.com'}>Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href={'http://google.com'}>Disabled</a>
      </li>
    </ul>
  </div>
</nav>




  	<div className="line"></div>

   	</div>





   </div>


	);
}
