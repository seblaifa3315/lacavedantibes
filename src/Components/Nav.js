//importing React stuff
import React, { Component } from "react";

//importing reactstrap stuff
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Collapse,
    NavbarToggler,
} from "reactstrap";

//importing react-router-dom stuff
import { NavLink } from "react-router-dom";

//importing base URL
import { baseUrl } from "../shared/baseUrl";

//importing react-redux stuff
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

class NavComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            La Cave d'Antibes
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="myNav">
                                <NavItem className="myNavItem">
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem className="myNavItem">
                                    <NavLink className="nav-link" to="/shop">
                                        Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem className="myNavItem">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem className="myNavItem">
                                    <NavLink
                                        className="nav-link"
                                        to="/contactus"
                                    >
                                        Contact us
                                    </NavLink>
                                </NavItem>
                                <NavItem className="myNavItem">
                                    <NavLink className="nav-link" to="/cart">
                                        {/* <i className="fa fa-shopping-cart fa-2x"></i> */}
                                        <i
                                            className="fa"
                                            style={{ fontSize: "26px" }}
                                        >
                                            &#xf07a;
                                        </i>
                                        <span
                                            className="badge badge-warning"
                                            id="lblCartCount"
                                        >
                                            {this.props.cart.cart
                                                .map(
                                                    (element) =>
                                                        element.quantity
                                                )
                                                .reduce((a, c) => a + c, 0)}
                                        </span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(NavComponent);
