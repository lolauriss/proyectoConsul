//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import Routes from './routes';


//include your index.scss file into the bundle
//import "./component/style.scss";


//import your own components
//import Nav from "./component/nav.jsx";
//import EventCalendar from "./component/EventCalendar.jsx";
import Layout from "./layout";




ReactDOM.render(<Layout />, document.querySelector("#root"));

//npm install bootstrap
//npm install -g jsx
//npm install --save-dev css-loader
//npm install @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list
//npm i @fullcalendar/react