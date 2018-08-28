import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
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
        this.handleReset = this.handleReset.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(){
        
    }

    handleChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleReset(){
        this.setState({
            price: 0
        })
    }

    render() {

        return (
            <div className="dashboard" >
                <div className="dashboard-header">
                    <img className="header-logo" src={HeaderLogo} alt="" />
                    <h2 className="houser-sub">Houser </h2>
                    <h2 className="dashboard-sub"> Dashboard</h2>
                    <Link to="/"><div className="logout"><h5>Logout</h5></div></Link>
                </div>
                <div className="dashboard-body">
                  <Link to="/wizard/1"><button className="add-btn">Add new property</button></Link>
                    <div className="desired-container" >
                    <h4 className="desired-rent">List properties with "desired rent" greater than: $</h4>
                    <input className="number-input" type="text" placeholder="0" onChange={this.handleChangePrice} value={this.state.price} />
                    <button className="filter-btn" >Filter</button>
                    <button className="reset-btn" onClick={this.handleReset}>Reset</button>
                    </div>                   
                    <hr />
                    <h3 className="home-listings" >Home Listings</h3>
                    <div className="list"></div>
                </div>
            </div>
        )
    }
}


export default Dashboard;