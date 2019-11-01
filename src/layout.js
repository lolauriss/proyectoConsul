import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/Home";
import { Perfil } from "./views/Perfil";
import { Community } from "./views/Community";
import injectContext from "./store/appContext";
import { agendaHoy } from "./views/agendaHoy";
import { Register } from "./views/Register";

//import React,{Component} from 'react';




//create your first component
export class Layout extends React.Component {
    render() {
        //the basename is used when your project is published in a subdirectory and not in the root of the domain
        // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
        const basename = process.env.BASENAME || "";
        return (
            <div className="d-flex flex-column h-100">
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Perfil" component={Perfil} />
                            <Route path="/Community" component={Community} />
                            <Route path="/agendaHoy" component={agendaHoy} />
                            <Route path="/Register" component={Register} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
            </div>
        );
    }
}
export default injectContext(Layout);