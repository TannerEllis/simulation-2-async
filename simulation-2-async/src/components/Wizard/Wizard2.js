import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard2.css'
import HeaderLogo from '../Dashboard/header_logo.png';
import { updateAddress, updateCity, updateLocationState, updateZip, resetInput } from '../../Redux/reducer';



class Wizard2 extends Component {
    constructor() {
        super()
        this.state = {
            address: '',
            city: '',
            locationState: '',
            zip: ''
        }

        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleLocationState = this.handleLocationState.bind(this)
        this.handleZip = this.handleZip.bind(this)
        this.handleCancel = this.handleCancel.bind(this);

    }

    handleAddress(e) {
        this.props.updateAddress(e.target.value)
    }
    
    handleCity(e) {
        this.props.updateCity(e.target.value)
    }
    
    handleLocationState(e) {
        this.props.updateLocationState(e.target.value)
    }
    
    handleZip(e) {
        this.props.updateZip(e.target.value)
    }
    
    handleCancel(){
        this.props.resetInput()
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
                        <Link to="/dashboard"><button className="cancel-btn" onClick={this.handleCancel}>Cancel</button></Link>
                    </div>
                    <div className='progress'>
                        <div className='dots'>
                            <img src={require('../../assets/step_completed.png')} alt='step-completed' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_active.png')} alt='step-active' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_inactive.png')} alt='step-inactive' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_inactive.png')} alt='step-inactive' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_inactive.png')} alt='step-inactive' />
                        </div>
                    </div>
                    <h5>Address</h5>
                    <input onChange={this.handleAddress} value={this.props.address} className="input-address" type="text" />
                    <div className='city-container'>
                    <div className='city-title'>
                        <h5 className="city">City</h5>
                        </div>
                        <div className='state-title'>
                        <h5 className="state">State</h5>
                        </div>
                    <div className="city-state">
                        <input onChange={this.handleCity} value={this.props.city} className="input-city" type="text" />
                        <input onChange={this.handleLocationState} value={this.props.locationState} className="input-state" type="text" />
                        </div>
                    </div>
                    <div className='zip-title'>
                    <h5>Zip</h5>
                    </div>
                    <input onChange={this.handleZip} value={this.props.zip} className="input-zip" type="text" />
                    <div className="btn-footer">
                        <button onClick={this.props.history.goBack} className="prev-step" >Previous Step</button>
                        <Link to="/wizard/3"><button className="next-step" >Next Step</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    return {
        address: reduxState.address,
        city: reduxState.city,
        locationState: reduxState.locationState,
        zip: reduxState.zip
    }
}

export default connect(mapStateToProps, {updateAddress, updateCity, updateLocationState, updateZip, resetInput}) (Wizard2);