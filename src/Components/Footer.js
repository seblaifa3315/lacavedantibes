import React, { Component } from 'react'

//importing react-router-dom stuff
import { NavLink } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <a className="btn btn-social-icon btn-facebook facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/La-cave-dAntibes-106473434485167">
                    <i className="fa fa-facebook" />
                </a>
                <NavLink to="/terms" className="myTerms">
                    <p className="terms">Terms and conditions</p>
                </NavLink>
            </footer>
        )
    }
}

export default Footer;