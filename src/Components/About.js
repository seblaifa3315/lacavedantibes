import React, { Component } from 'react';

//importing reactstrap stuff
import {Breadcrumb, BreadcrumbItem } from "reactstrap";

//importing react-router-dom stuff
import { Link } from "react-router-dom";

class Title extends Component {
    render() {
        return (
            <>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About</BreadcrumbItem>
            </Breadcrumb>
            <div className="text-center header" >
                <h1 className="display-4">About us</h1>
                <p>Can write more text here.</p>
            </div> 
            </> 
        )
    }
}



class AboutBody extends Component {
    render() {
        return (
            
                <div className="body">
                    <div className="row myRow myRowTop">
                        <div className="col-md-5 align-self-center">
                            <img  src= "../assets/outside1.jpg" className="img-fluid" alt="shop outside" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h1>Who we are</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor obcaecati in non? Atque veniam vitae optio, eos hic praesentium, dolorum cumque, nihil eligendi unde maiores deserunt facere labore asperiores!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere perspiciatis pariatur reiciendis quis eligendi quia quod corrupti impedit nostrum repellendus voluptate non blanditiis sit asperiores laborum ad, vitae dolorum delectus.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col ourTeam">
                            <h1>Our team</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor dolore optio natus vel eveniet excepturi voluptas aliquam eligendi molestiae distinctio mollitia quis itaque, voluptatibus veniam tempore quibusdam explicabo est.
                            </p>
                            
                        </div>
                    </div>

                    <div className="row justify-content-center myRow">
                        <div className="col">
                            <img className="profilePicture" src="../assets/david.jpg" alt="david" />
                            <h5>David Martin</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor dolore optio natus vel eveniet excepturi voluptas aliquam eligendi molestiae distinctio mollitia quis itaque, voluptatibus veniam tempore quibusdam explicabo est.
                            </p>
                        </div>
                        <div className="col">
                        <img className="profilePicture" src="../assets/tito.jpg" alt="tito" />
                            <h5>Christophe Girard</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor dolore optio natus vel eveniet excepturi voluptas aliquam eligendi molestiae distinctio mollitia quis itaque, voluptatibus veniam tempore quibusdam explicabo est.
                            </p>
                        </div>
                        <div className="col">
                        <img className="profilePicture" src="../assets/davidtito.jpg" alt="davidtito" />
                            <h5>Tito & Dav</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor dolore optio natus vel eveniet excepturi voluptas aliquam eligendi molestiae distinctio mollitia quis itaque, voluptatibus veniam tempore quibusdam explicabo est.
                            </p>
                        </div>

                    </div>
                    
                    
                </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <Title />
                <AboutBody className="aaa"/>
            </div>
        )
    }
}

export default About;

