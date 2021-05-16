import React, { Component } from "react";

//importing reactstrap stuff
import {
    Button,
    Input,
    FormGroup,
    Label,
    Breadcrumb,
    BreadcrumbItem 
} from "reactstrap";

//importing react-router-dom stuff
import { Link } from "react-router-dom";

//importing react-redux stuff
import { connect } from "react-redux";

//importing base URL
import { baseUrl } from "../shared/baseUrl";

//importing reducers
import { postCart } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        champagnes: state.champagnes,
    };
};

const mapDispatchToProps = {
    postCart: (name, quantity, price, image) =>
        postCart(name, quantity, price, image),
};

class RenderCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
        };

        this.resetForm = this.resetForm.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
    }

    resetForm() {
        this.setState({ quantity: 1 });
    }

    handleAddToCart() {
        this.props.postCart(
            this.props.item.name,
            parseFloat(this.state.quantity),
            parseFloat(this.props.item.price),
            this.props.item.image
        );
        console.log(this.props.item.price);

        let totalPrice =
            parseFloat(this.props.item.price) * this.state.quantity;
        alert(
            `you added ${this.state.quantity} bottle(s) of ${this.props.item.name} at ${this.props.item.price} the bottle or total of ${totalPrice}€`
        );

        this.resetForm();
    }

    handleQuantity(event) {
        this.setState({ quantity: event.target.value });
    }

    render() {
        return (
            <div className="container myCardContainer">
                <div className="row">
                    <div className="col-sm-4 col-md-2 myCol1">
                        <div className="images">
                            <img
                                src={baseUrl + this.props.item.image}
                                alt={this.props.item.image}
                            />
                        </div>
                    </div>

                    <div className="col-sm-8 col-md-10">
                        <div className="row">
                            <div className="col-7 myCol2">
                                <h5>{this.props.item.name}</h5>
                                <p>{this.props.item.description}</p>
                                <p>
                                    <span>Grape:</span> {this.props.item.cepage}{" "}
                                    <br />
                                    <span>Millenium:</span>{" "}
                                    {this.props.item.millenium} <br />
                                    <span>Alcohol:</span>{" "}
                                    {this.props.item.alcohol}
                                </p>
                            </div>
                            <div className="col-5 myCol3">
                                <div className="myCol3">
                                    <h2>{this.props.item.price}</h2>
                                    <p>
                                        <span>
                                            The bottle of{" "}
                                            {this.props.item.volume}
                                        </span>
                                    </p>

                                    <FormGroup
                                        row
                                        className="row align-items-center"
                                    >
                                        <div className="col-sm-12 col-md-5 col-lg-4">
                                            <Label htmlFor="quantity">
                                                Quantity:
                                            </Label>
                                        </div>
                                        <div className="col-sm-12 col-md-5 col-lg-4">
                                        <Input
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                placeholder="1"
                                                value={this.state.quantity}
                                                onChange={this.handleQuantity}
                                            />
                                        </div>
                                    </FormGroup>
                                    <Button
                                        className="btn btn-danger"
                                        onClick={this.handleAddToCart}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Champagnes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: ""
        };

        this.handleRegion = this.handleRegion.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
    }

    handleRegion(event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSortBy(event) {
        this.setState({ sortBy: event.target.value });
    }

    render() {
        const all = this.props.champagnes.champagnes;

        const numResult = all.length;

        switch (this.state.sortBy) {
            case "low":
                all.sort((a, b) =>
                    parseInt(a.price) > parseInt(b.price)
                        ? 1
                        : parseInt(b.price) > parseInt(a.price)
                        ? -1
                        : 0
                );
                break;
            case "high":
                all.sort((a, b) =>
                    parseInt(a.price) < parseInt(b.price)
                        ? 1
                        : parseInt(b.price) < parseInt(a.price)
                        ? -1
                        : 0
                );
                break;
        }

        const champagnes = all.map((champagne) => {
            return (
                <div key={champagne.id} className="row myRow">
                    <RenderCard item={champagne} postCart={this.props.postCart} />
                </div>
            );
        });

        return (
            <div className="bodyBackground">
                {/* Header */}
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/shop">Shop</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Champagne</BreadcrumbItem>
                </Breadcrumb>
                <div className="text-center header">
                    <h1 className="display-4">Our Champagnes</h1>
                    <p>Can add more text here.</p>
                </div>

                {/* Body */}
                <div className="container">
                    <div className="row justify-content-between sortByContainer">
                        <div className="col-3">
                            <h5>{numResult} results </h5>
                        </div>
                        <div className="col-3 sortBy">
                            <form>
                                <label>
                                    Sort by:
                                    <select
                                        className="form-select"
                                        value={this.state.sortBy}
                                        onChange={this.handleSortBy}
                                    >
                                        <option value=""></option>
                                        <option value="low">
                                            Price: low to high
                                        </option>
                                        <option value="high">
                                            Price: high to low
                                        </option>
                                    </select>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 container myContainer">
                            {champagnes}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Champagnes);
