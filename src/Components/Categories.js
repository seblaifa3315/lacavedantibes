import React, { Component } from "react";

//importing react-router-dom stuff
import { Link } from "react-router-dom";

//importing components
import { Loading } from "./Loading";

//importing reactstrap stuff
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";

//importing react-redux stuff
import { connect } from "react-redux";

//importing base URL
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};

function RenderCategorieItem({ categorie }) {
    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/shop/${categorie.name}`}>
            <Card>
                <div className="overflow">
                    <CardImg
                        src={baseUrl + categorie.image}
                        alt={categorie.name}
                        className="card-img-top"
                    />
                </div>
                <CardBody>
                    <CardTitle className="text-center categoriesTitle">
                        {categorie.name}
                    </CardTitle>
                    <CardText>{categorie.description}</CardText>
                    <div className="text-center">
                        <Link to={`/shop/${categorie.name}`}>
                            <Button className="btn btn-danger">Buy Now</Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </Link>
    );
}

function Categories(props) {
    const directory = props.categories.categories.map((categorie) => {
        return (
            <div key={categorie.id} className="col-sm-6 col-md-4">
                <RenderCategorieItem categorie={categorie} />
            </div>
        );
    });

    if (props.categories.isLoading) {
        return <Loading />;
    }
    if (props.categories.errMess) {
        return <h4>{props.categories.errMess}</h4>;
    }

    return (
        <React.Fragment>
            {/* Header */}
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Shop</BreadcrumbItem>
            </Breadcrumb>
            <div className="text-center header">
                <h1 className="display-4">Shop online</h1>
                <p>Can add more text here.</p>
            </div>

            {/* Body */}
            
            <div className="container categoriesContainer">
                <div className="row">{directory}</div>
            </div>
            
        </React.Fragment>
    );
}

export default connect(mapStateToProps)(Categories);
