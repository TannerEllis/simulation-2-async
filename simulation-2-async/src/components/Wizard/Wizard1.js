import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard1.css'
import HeaderLogo from '../Dashboard/header_logo.png';

import { updatePropertyName, updatePropertyDescription, resetInput } from '../../Redux/reducer';



class Wizard1 extends Component {
    constructor() {
        super()
        this.state = {
            propertyName: '',
            propertyDescription: ''
        }

        this.handlePropertyName = this.handlePropertyName.bind(this);
        this.handlePropertyDescription = this.handlePropertyDescription.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }

    handlePropertyName(e) {
        this.props.updatePropertyName(e.target.value)
    }

    handlePropertyDescription(e) {
        this.props.updatePropertyDescription(e.target.value)
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
                        <h3 className="add-new-listing">Add new listing</h3>
                        <Link to="/dashboard"><button className="cancel-btn" onClick={this.handleCancel}>Cancel</button></Link>
                    </div>
                    <div className='progress'>
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
                        <div className='dots'>
                            <img src={require('../../assets/step_inactive.png')} alt='step-inactive' />
                        </div>
                    </div>
                    <h5 className="prop-name">Property Name</h5>
                    <input onChange={this.handlePropertyName} value={this.props.name} className="property-name-input" type="text" />
                    <h5 className="prop-desc">Property Description</h5>
                    <textarea onChange={this.handlePropertyDescription} value={this.props.description} className="property-desc-input" cols="30" rows="10"></textarea>
                    <div className="wiz1-next" >
                        <Link to="/wizard/2"><button className="wiz1-btn" >Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        name: reduxState.propertyName,
        description: reduxState.propertyDesc
    }
}
export default connect(mapStateToProps, { updatePropertyName, updatePropertyDescription, resetInput })(Wizard1);