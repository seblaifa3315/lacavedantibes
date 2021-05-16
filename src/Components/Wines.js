import React, { Component } from 'react';

//importing react-router-dom stuff
import { NavLink } from 'react-router-dom';

//importing reactstrap stuff
import { Card, CardImg, CardBody, CardTitle, CardText,
    Button,
    Input, FormGroup, Label, Col } from 'reactstrap';

function RenderWineCard ({item}) {
    return (
        <div className="wineCard overflow">
            <div className="row">
                <div className="col-12 col-md-3 col-lg-2 firstCol">
                    <img src={item.image} alt={item.name} />
                </div>
                
                <div className="col-12 col-md-9 col-lg-10">
                    <div className="row">
                        <div className="col-12 col-md-7 secondCol">
                            <div className="wineName">
                                <h4>{
                                    item.name} <br />
                                    - {item.underName}
                                </h4>
                            </div>
                            <div className="wineText">
                                <p>{item.text}</p>
                            </div>
                            <div className="wineSpec">
                                <span>Grape: </span>{item.cepage} <br />
                                <span>Millenium: </span>{item.millenium} <br />
                                <span>Alcohol: </span>{item.alcohol}
                            </div>

                        </div>
                        <div className="col-12 col-md-5 thirdCol">
                            <div className="winePrice">
                                <h4>{item.price}</h4>
                                <p>The bottle of {item.volume}</p>
                            </div>
                            <FormGroup row className="row align-items-center">
                                <div className="col-sm-12 col-md-5 col-lg-4">
                                    <Label htmlFor="quantity">Quantity:</Label>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-4">
                                    <Input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        placeholder="Qty"
                                        // value={this.state.firstName}
                                        // invalid={errors.firstName}
                                        // onBlur={this.handleBlur("firstName")}
                                        // onChange={this.handleInputChange}
                                    />
                                </div>
                                        {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
                                    
                                </FormGroup>
                            <Button className="btn btn-danger">Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Wines (props) {
    const onlyWines = props.products.filter(product => product.category === "wine");

    const winesCard = onlyWines.map(product => {
        return (
            <div key={product.id} className="col-12">
                <RenderWineCard item={product} />
            </div>
        )
    })

        return (
            <React.Fragment>
                {/* Header */}
                <div className="text-center header" >
                    <h1 className="display-4">Our Wines</h1>
                    <p>Can add more text here.</p>
                </div>
                
                {/* Body */}
                <div className="container bigContainer">
                    <div className="row">
                        <div className="col-3 filters">
                            <h1>FILTERS</h1>
                        </div>
                        <div className="col-8 container winesContainer">
                            <div className="row">
                            {winesCard}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default Wines;
