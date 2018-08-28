import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <input className="input-address" type="text" />
                    <div className='city-container'>
                    <div className='city-title'>
                        <h5 className="city">City</h5>
                        </div>
                        <div className='state-title'>
                        <h5 className="state">State</h5>
                        </div>
                    <div className="city-state">
                        <input className="input-city" type="text" />
                        <input className="input-state" type="text" />
                        </div>
                    </div>
                    <div className='zip-title'>
                    <h5>Zip</h5>
                    </div>
                    <input className="input-zip" type="text" />
                    <div className="btn-footer">
                        <button onClick={this.props.history.goBack} className="prev-step" >Previous Step</button>
                        <Link to="/wizard/3"><button className="next-step" >Next Step</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Wizard2;