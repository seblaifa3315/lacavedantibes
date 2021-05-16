import React, { Component, Fragment } from "react";

//Importing Router stuff
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

//Importing Components
import NavComponent from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import Terms from "./Terms";
import About from "./About";
import Contact from "./Contact";
import Categories from "./Categories";
import Reds from "./Reds";
import Whites from "./Whites";
import Roses from "./Roses";
import Champagnes from "./Champagnes";
import Digestives from "./Digestives";
import Oils from "./Oils";
import Cart from "./Cart";

//importing react-redux stuff
import { connect } from "react-redux";

//importing reducers
import {
    fetchReds,
    fetchWhites,
    fetchRoses,
    fetchChampagnes,
    fetchDigestives,
    fetchOils,
    fetchCategories,
    fetchCart
} from "../redux/ActionCreators";

const mapDispatchToProps = {
    fetchReds: () => fetchReds(),
    fetchWhites: () => fetchWhites(),
    fetchRoses: () => fetchRoses(),
    fetchChampagnes: () => fetchChampagnes(),
    fetchDigestives: () => fetchDigestives(),
    fetchOils: () => fetchOils(),
    fetchCategories: () => fetchCategories(),
    fetchCart: () => fetchCart(),
};

class Main extends Component {
    componentDidMount() {
        this.props.fetchReds();
        this.props.fetchWhites();
        this.props.fetchRoses();
        this.props.fetchChampagnes();
        this.props.fetchDigestives();
        this.props.fetchOils();
        this.props.fetchCategories();
        this.props.fetchCart();
    }

    render() {
        return (
            <div className="mainBody">
                <NavComponent />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/terms" component={Terms} />
                    <Route exact path="/shop" component={Categories} />
                    <Route exact path="/shop/Reds" component={Reds} />
                    <Route exact path="/shop/Whites" component={Whites} />
                    <Route exact path="/shop/Roses" component={Roses} />
                    <Route exact path="/shop/Champagnes" component={Champagnes} />
                    <Route exact path="/shop/Digestives" component={Digestives} />
                    <Route exact path="/shop/Oils" component={Oils} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Main));
