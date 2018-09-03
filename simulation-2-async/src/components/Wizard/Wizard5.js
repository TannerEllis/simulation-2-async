import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Wizard5.css'
import HeaderLogo from '../Dashboard/header_logo.png';
import {
    updatePropertyName, updatePropertyDescription,
    updateAddress, updateCity,
    updateLocationState, updateZip,
    updateImage, updateLoanAmount,
    updateMonthlyMortgage, updateDesiredRent
} from '../../Redux/reducer';



class Wizard5 extends Component {
    constructor() {
        super()
        this.state = {
            desiredRent: ''
        }

        this.handleDesiredRent = this.handleDesiredRent.bind(this);
        this.addHomeListing = this.addHomeListing.bind(this);
    }

    handleInputReset(){
        
    }

    handleDesiredRent(e) {
        this.props.updateDesiredRent(e.target.value)
    }

    addHomeListing() {
        let { name, description, address, city, locationState, zip, image, loanAmount, monthlyMortgage, desiredRent } = this.props
      
        axios.post('/api/properties', { name, description, address, city, locationState, zip, image, loanAmount, monthlyMortgage, desiredRent })
        .then((res) => this.props.history.push('/dashboard'))
       
    }

    render() {

        return (
            <div className="wizard" >
                <div className="dashboard-header">
                    <img className="header-logo" src={HeaderLogo} alt="" />
                    <h2 className="houser-sub">Houser </h2>
                    <h2 className="dashboard-sub"> Dashboard</h2>
                    <Link to="/"><div className="logout"><h5>Logout</h5></div></Link>
                </div>
                <div className="dashboard-body">
                    <div className="wizard-header" >
                        <h2 className="add-new-listing">Add new listing</h2>
                        <Link to="/dashboard"><button className="cancel-btn">Cancel</button></Link>
                    </div>
                    <div className='progress'>
                        <div className='dots'>
                            <img src={require('../../assets/step_completed.png')} alt='step-completed' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_completed.png')} alt='step-completed' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_completed.png')} alt='step-completed' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_completed.png')} alt='step-completed' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_active.png')} alt='step-active' />
                        </div>
                    </div>
                    <h5>Desired Rent</h5>
                    <input onChange={this.handleDesiredRent} value={this.props.desiredRent} className="desired-rent" type="text" />

                    <div className="btn-footer">
                        <button onClick={this.props.history.goBack} className="prev-step" >Previous Step</button>
                       <button onClick={this.addHomeListing} className="complete" >Complete</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        name: reduxState.propertyName,
        description: reduxState.propertyDesc,
        address: reduxState.address,
        city: reduxState.city,
        locationState: reduxState.locationState,
        zip: reduxState.zip,
        image: reduxState.image,
        loanAmount: reduxState.loanAmount,
        monthlyMortgage: reduxState.monthlyMortgage,
        desiredRent: reduxState.desiredRent,
    }
}

export default connect(mapStateToProps, {  
    updatePropertyName, updatePropertyDescription,
    updateAddress, updateCity,
    updateLocationState, updateZip,
    updateImage, updateLoanAmount,
    updateMonthlyMortgage, updateDesiredRent })(Wizard5);