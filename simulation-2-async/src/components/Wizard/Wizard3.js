import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Wizard3.css'
import HeaderLogo from '../Dashboard/header_logo.png';
import { updateImage, resetInput } from '../../Redux/reducer';



class Wizard3 extends Component {
    constructor() {
        super()
        this.state = {
            image: ''
        }

        this.handleImage = this.handleImage.bind(this)
        this.handleCancel = this.handleCancel.bind(this);

    }

    handleImage(e){
        this.props.updateImage(e.target.value)
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
                            <img src={require('../../assets/step_active.png')} alt='step-active' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_inactive.png')} alt='step-inactive' />
                        </div>
                        <div className='dots'>
                            <img src={require('../../assets/step_inactive.png')} alt='step-inactive' />
                        </div>
                    </div>
                    <img className="image-preview" placeholder="preview" src={this.state.image} alt="" />
                    <h5>Image URL</h5>
                    <input onChange={this.handleImage} value={this.props.image} className="image-url" type="text" />
                    <div className="btn-footer">
                        <button onClick={this.props.history.goBack} className="prev-step" >Previous Step</button>
                        <Link to="/wizard/4"><button className="next-step" >Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(reduxState) {
    return {
        image: reduxState.image
    }
}

export default connect(mapStateToProps, {updateImage, resetInput}) (Wizard3);