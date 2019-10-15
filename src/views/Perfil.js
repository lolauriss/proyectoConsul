import React from "react";
//import { Link } from "react-router-dom";
import "./../styles/style.scss";
import Nav from "../component/nav.jsx";
import CardAvatar from "../component/card_avatar.jsx";
import CardInformation from "../component/card_information.jsx";   //esta linea se agrego, faltaba indicar la ubicacion del archivo nomas
import { Container, Row, Col } from "reactstrap"; //esta linea se agrego


 export class Perfil extends React.Component {
        render (){
        return (
             <Container fluid={true}>

        <Row>
          <Col xs="3">
          <Nav />
          </Col>
           <Col xs="3">
          <CardAvatar />
          </Col>
          <Col xs="6">
          <CardInformation />
          </Col>
        </Row>

      </Container>

        );
    }
    }