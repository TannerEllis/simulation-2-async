import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard4.css'
import HeaderLogo from '../Dashboard/header_logo.png';
import { updateLoanAmount, updateMonthlyMortgage, resetInput } from '../../Redux/reducer';



class Wizard4 extends Component {
    constructor() {
        super()
        this.state = {
            loanAmount: '',
            monthlyMortgage: ''
        }

        this.handleLoanAmount = this.handleLoanAmount.bind(this);
        this.handleMonthlyMortgage = this.handleMonthlyMortgage.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }

    handleLoanAmount(e) {
        this.props.updateLoanAmount(e.target.value)
    }

    handleMonthlyMortgage(e) {
        this.props.updateMonthlyMortgage(e.target.value)
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
                    <input onChange={this.handleLoanAmount} value={this.props.loanAmount} className="loan-amount" type="text" />
                    <h5>Monthly Mortgage</h5>
                    <input onChange={this.handleMonthlyMortgage} value={this.props.monthlyMortgage} className="monthly-mortgage" type="text" />


                    <div className="btn-footer">
                        <button onClick={this.props.history.goBack} className="prev-step" >Previous Step</button>
                        <Link to="/wizard/5"><button className="next-step" >Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        loanAmount: reduxState.loanAmount,
        monthlyMortgage: reduxState.monthlyMortgage
    }
}

export default connect(mapStateToProps, {updateLoanAmount, updateMonthlyMortgage, resetInput}) (Wizard4);