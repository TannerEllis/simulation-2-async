import React, {Component} from 'react';

class Wizard extends Component{
    constructor(){
        super()
        this.state = {
            propertyName: '',
            propertyDescription: ''
        }

    }

    handlePropertyName(e){
        this.setState({
            propertyName: e.target.value
        })
    }
    handlePropertyDescription(e){
        this.setState({
            propertyDescription: e.target.value
        })
    }

    render(){

        return (
            <div className="wizard" >
                Wizard
            </div>
        )
    }
}

export default Wizard;