import React, {Component} from "react" ;
import PropTypes from 'prop-types';

//The textbox located inside the DankForm that receives keywords
class DankTextbox extends Component {

    constructor(props){
        super(props);
        this.placeHolder = "Fruity Euphoric Haze" ;
        this.state = {value: ""} ;
        this.onSubmit = props.onSubmit ;
        this.onChange = props.onChange ;
    }

    handleChange = ( event ) => {
        event.preventDefault() ;

        if(event.code === "Enter")
            return this.onSubmit(event.target.value) ;

        const newText = event.target.value;
        this.onChange(newText) ;
        this.setState({value: newText}) ;
    } ;

    getStyle(){
        return {
            fontSize: "26px",
            margin: "10px 0px"
        }
    }

    render(){
        return (
            <input
                style={this.getStyle()}
                placeholder={this.placeHolder}
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
            />
        )
    }
}

DankTextbox.propTypes = {
    onSubmit: PropTypes.func
};

export default DankTextbox ;