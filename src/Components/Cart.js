import React, { Component } from "react";

//importing reactstrap stuff
import {
    Breadcrumb,
    BreadcrumbItem,
    Input,
    FormGroup,
    Label,
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap";

import { LocalForm, Control, Errors } from "react-redux-form";

//importing react-router-dom stuff
import { Link } from "react-router-dom";

//importing react-redux stuff
import { connect } from "react-redux";

//importing base URL
import { baseUrl } from "../shared/baseUrl";

//importing reducers
import { deleteItem, editCart } from "../redux/ActionCreators";

const mapDispatchToProps = {
    deleteItem: (item) => deleteItem(item),
    editCart: (name, quantity, price, image, id) =>
        editCart(name, quantity, price, image, id),
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class RenderCartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.item.quantity,
        };

        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleQuantity(event) {
        this.setState({ quantity: event.target.value });
    }

    handleConfirm() {
        this.props.editCart(
            this.props.item.name,
            this.state.quantity,
            this.props.item.price,
            this.props.item.image,
            this.props.item._id
        );
    }

    handleDelete() {
        this.props.deleteItem(this.props.item);
        console.log(this.props.item.quantity);
    }

    render() {
        return (
            <div className="row rowTopCart">
                <div className="col-2 align-self-center">
                    <img
                        src={baseUrl + this.props.item.image}
                        alt={this.props.item.name}
                        width="100px"
                    />
                </div>
                <div className="col-8 align-self-center">
                    <h5>{this.props.item.name}</h5>
                    <FormGroup row className="row align-items-center">
                        <div className="col-sm-12 col-md-5 col-lg-3">
                            <Label
                                htmlFor="quantity"
                                style={{ fontWeight: "bold" }}
                            >
                                Change quantity:
                            </Label>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-2">
                            <Input
                                type="number"
                                id="quantity"
                                name="quantity"
                                placeholder={this.state.quantity}
                                value={this.state.quantity}
                                onChange={this.handleQuantity}
                            />
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-2">
                            <Button
                                className="btn btn-secondary"
                                onClick={this.handleConfirm}
                            >
                                Confirm
                            </Button>
                        </div>
                    </FormGroup>
                    <Button
                        className="btn btn-danger"
                        onClick={this.handleDelete}
                    >
                        Delete Item
                    </Button>
                </div>
                <div className="col-2 align-self-start">
                    <h5>{this.props.item.price.toFixed(2)} € / bottle</h5>
                </div>
            </div>
        );
    }
}

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            name: "",
            cardNumber: "",
            expiration: "",
            cvc: "",
            zipcode: "",
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleSubmit(values) {
        alert("ghgf");
        alert(
            `Name: ${values.name} carNumber: ${values.cardNumber} expiration: ${values.expiration} cvc/cvv: ${values.cvc} zipcode: ${values.zipcode}`
        );
        this.toggleModal();
    }

    render() {
        const cartItems = this.props.cart.cart.map((cartItem) => {
            return (
                <RenderCartItem
                    key={cartItem._id}
                    item={cartItem}
                    deleteItem={this.props.deleteItem}
                    editCart={this.props.editCart}
                />
            );
        });

        const priceByItem = this.props.cart.cart.map(
            (element) => element.price * element.quantity
        );
        const totalPrice = priceByItem.reduce((a, c) => a + c, 0).toFixed(2);

        const quantity = this.props.cart.cart.map(
            (element) => element.quantity
        );

        const numItem = quantity.reduce((a, c) => a + c, 0);

        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/shop">Shop</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Shopping Cart</BreadcrumbItem>
                </Breadcrumb>
                <div className="text-center header">
                    <h1 className="display-4">Shopping Cart</h1>
                </div>

                <div className="body">
                    <div className="row rowTopCart justify-content-end">
                        <div className="col-4">
                            <h5 style={{ float: "right" }}>
                                Total ({numItem} items): {totalPrice}€
                            </h5>
                            <Button
                                style={{ float: "right" }}
                                className="btn btn-danger"
                                onClick={this.toggleModal}
                            >
                                Proceed to checkout
                            </Button>
                        </div>
                    </div>
                    <div>{cartItems}</div>
                    <div className="row rowBottomCart justify-content-end">
                        <div className="col-4">
                            <h5 style={{ float: "right" }}>
                                Total ({numItem} items): {totalPrice}€
                            </h5>
                            <Button
                                style={{ float: "right" }}
                                color="danger"
                                onClick={this.toggleModal}
                            >
                                Proceed to checkout
                            </Button>
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.isModalOpen}
                        toggle={this.toggleModal}
                    >
                        <ModalHeader toggle={this.toggleModal}>
                            <h3>Checkout</h3>
                        </ModalHeader>
                        <ModalBody>
                            <LocalForm
                                onSubmit={(values) => this.handleSubmit(values)}
                            >
                                <div className="form-group">
                                    <Label htmlFor="name">
                                        Name on the card
                                    </Label>

                                    <Control.text
                                        model=".name"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Your Name"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(20),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength:
                                                "Must be at least 2 characters",
                                            maxLength:
                                                "Must be 15 characters or less",
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="cardNumber">
                                        Credit Card Number (16 digits)
                                    </Label>

                                    <Control.password
                                        model=".cardNumber"
                                        id="cardNumber"
                                        name="cardNumber"
                                        className="form-control"
                                        placeholder="_ _ _ _ - _ _ _ _ - _ _ _ _ - _ _ _ _"
                                        validators={{
                                            required,
                                            minLength: minLength(16),
                                            maxLength: maxLength(16),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".cardNumber"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be 16 digits",
                                            maxLength: "Must be 16 digit",
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="expiration">
                                        Expiration
                                    </Label>
                                    <Control.text
                                        model=".expiration"
                                        id="expiration"
                                        name="expiration"
                                        className="form-control"
                                        placeholder="mm/yy"
                                        validators={{
                                            required,
                                            minLength: minLength(5),
                                            maxLength: maxLength(5),
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".expiration"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be mm/yy",
                                            maxLength: "Must be mm/yy",
                                        }}
                                    />
                                </div>

                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="cvc">CVC/CVV</Label>
                                        <Control.password
                                            model=".cvc"
                                            id="cvc"
                                            name="cvc"
                                            className="form-control"
                                            placeholder=""
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(4),
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".cvc"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: "Required",
                                                minLength:
                                                    "Must be 3 characters minimum",
                                                maxLength:
                                                    "Must be 4 characters maximum",
                                            }}
                                        />
                                        <p>3 or 4 digit code</p>
                                    </Col>
                                    <Col>
                                        <Label htmlFor="zipcode">Zipcode</Label>
                                        <Control.password
                                            model=".zipcode"
                                            id="zipcode"
                                            name="zipcode"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </Col>
                                </Row>

                                <Button
                                    type="submit"
                                    color="danger"
                                    style={{ float: "right" }}
                                >
                                    Submit Payment
                                </Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
