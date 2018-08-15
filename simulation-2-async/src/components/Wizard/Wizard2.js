import React, { Component } from 'react';
import './Wizard2.css'
import HeaderLogo from '../Dashboard/header_logo.png';



class Wizard2 extends Component {
    constructor() {
        super()
        this.state = {
            address: '',
            city: '',
            state: '',
            zip: ''
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
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                </div>
            </div>
        )
    }
}

export default Wizard2;