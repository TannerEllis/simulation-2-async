import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import HeaderLogo from '../Dashboard/header_logo.png';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            price: 0,
            listings: [],
            input: ''
        }

        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.displayHomeList = this.displayHomeList.bind(this);
        this.handleDeleteListing = this.handleDeleteListing.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        this.displayHomeList()
    }

    displayHomeList() {
        axios.get('/api/properties').then((res) => {
            this.setState({
                listings: res.data
            })
        })
    }

    handleDeleteListing(id) {
        console.log(id)
        axios.delete(`/api/properties/${id}`)
        .then((res) => {
            this.setState({
                listings: res.data
            })
        })
    }
 

    handleChangePrice(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleFilter(){
        this.setState({
            price: this.state.input
        })
    }

    handleReset() {
        this.setState({
            price: 0
        })
    }

    render() {
        console.log(this.state.listings)
        let homeListings = this.state.listings.filter((list, index) => {
            return list.desired_rent > this.state.price ? true : false
        }).map((houses, index) => {
            return (
                <div key={index} className="list">
                        <div className='list-image'>
                            <img className='image-background' src={houses.image_url}  />
                        </div>
                        <div className='list-name'>
                            <div className='name-container'>
                            {houses.property_name}
                        </div>
                            <div className='home-desc'>
                            <p>{houses.property_description}</p>
                            </div>
                </div>
                                                     
                        <div className='line-container'>
                            <div className='line'>
                            </div>
                        </div>
                        <div className='list-info'>  
                                <li>Loan: ${houses.loan_amount}</li>
                                <li>Monthly Mortgage: ${houses.monthly_mortgage}</li>
                                <li>Desired Rent: ${houses.desired_rent}</li>
                                <li>Address: {houses.address}</li>
                                <li>City: {houses.city}</li>
                                <li>State: {houses.us_state}</li>
                                <li>Zip: {houses.zip}</li>
                        </div>
                        <div className='x'onClick={()=> this.handleDeleteListing(houses.property_id)}><i className="fas fa-times"></i></div>
                    </div>
            )
        })

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
                        <input className="number-input" type="text" placeholder="0" onChange={this.handleChangePrice} value={this.state.input} />
                        <button className="filter-btn" onClick={this.handleFilter} >Filter</button>
                        <button className="reset-btn" onClick={this.handleReset}>Reset</button>
                    </div>
                    <hr />
                    <h3 className="home-listings" >Home Listings</h3>
                    <div className='list-container'>
                    {homeListings}
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard;
