import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Index from "../view/index/Index"
import Book from "../view/book/Book"
import About from "../view/about/About"
import Details from "../view/details/Details"
import User from "../view/user/User"

class RouterIndex extends Component{
    render() {
        return(
            <Switch>
                <Route path="/" exact render={
                    () => <Redirect to="/index"/>
                }/>
                <Route path="/index" component={Index}/>
                <Route path="/book" component={Book}/>
                <Route path="/details" component={Details}/>
                <Route path="/user" component={User}/>
                <Route path="/about" component={About}/>
            </Switch>
        )
    }
}

export default RouterIndex;