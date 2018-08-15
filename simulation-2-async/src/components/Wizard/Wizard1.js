import React, { Component } from 'react';
import './Wizard1.css'
import HeaderLogo from '../Dashboard/header_logo.png';



class Wizard1 extends Component {
    constructor() {
        super()
        this.state = {
            propertyName: '',
            propertyDescription: ''
        }

    }

    handlePropertyName(e) {
        this.setState({
            propertyName: e.target.value
        })
    }
    handlePropertyDescription(e) {
        this.setState({
            propertyDescription: e.target.value
        })
    }

    render() {

        return (
            <div className="wizard" >
                <div className="dashboard-header">
                    <img className="header-logo" src={HeaderLogo} alt="" />
                    <h2 className="houser-sub">Houser </h2>
                    <h2 className="dashboard-sub"> Dashboard</h2>
                    <div className="logout"><h5>Logout</h5></div>
                </div>
                <div className="dashboard-body">
                <h2 className="add-new-listing">Add new listing</h2>
                <button className="cancel-btn">Cancel</button>
                <h4 className="prop-name">Property Name</h4>
                <input className="property-name-input" type="text"/>
                <h4  className="prop-desc">Property Description</h4>
                <input className="property-desc-input" type="text"/>
                </div>
            </div>
        )
    }
}

export default Wizard1;