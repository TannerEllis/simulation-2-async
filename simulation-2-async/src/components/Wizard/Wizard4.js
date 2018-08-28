import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Wizard4.css'
import HeaderLogo from '../Dashboard/header_logo.png';



class Wizard4 extends Component {
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
                            <img src={require('../../assets/step_active.png')} alt='step-active' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_inactive.png')} alt='step-inactive' />
                        </div>
                    </div>
                    <h5>Loan Amount</h5>
                    <input className="loan-amount" type="text" />
                    <h5>Monthly Mortgage</h5>
                    <input className="monthly-mortgage" type="text" />


                    <div className="btn-footer">
                        <button onClick={this.props.history.goBack} className="prev-step" >Previous Step</button>
                        <Link to="/wizard/5"><button className="next-step" >Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wizard4;