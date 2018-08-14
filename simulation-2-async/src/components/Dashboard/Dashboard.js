import React, { Component } from 'react';
import './Dashboard.css'
import HeaderLogo from '../Dashboard/header_logo.png';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            price: 0,
            listings: []
        }

        this.handleChangePrice = this.handleChangePrice.bind(this);

    }

    handleChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    render() {

        return (
            <div className="dashboard" >
                <div className="dashboard-header">
                    <img className="header-logo" src={HeaderLogo} alt="" />
                    <h2 className="houser-sub">Houser </h2>
                    <h2 className="dashboard-sub"> Dashboard</h2>
                    <div className="logout"><h5>Logout</h5></div>
                </div>
                <div className="dashboard-body">
                    <button className="add-btn">Add new property</button>
                    <br />
                    <h3 className="desired-rent">List properties with "desired rent" greater than: $</h3>
                    <input className="number-input" type="text" placeholder="0" onChange={this.handleChangePrice} value={this.state.price} />
                    <button className="filter-btn" >Filter</button>
                    <button className="reset-btn" >Reset</button>
                    <hr />
                    <h3 className="home-listings" >Home Listings</h3>
                </div>
            </div>
        )
    }
}

export default Dashboard;