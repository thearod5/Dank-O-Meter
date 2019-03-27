import React, {Component} from 'react' ;
import {dankify} from "./Dankify.js";
import DankTextbox from "./DankTextbox" ;

//Provides the form wrapping the DankBox and Dankifier
class DankForm extends Component {

    constructor(props) {
        super(props);
        this.state = {description: ""} ;
        this.beforeSubmit = props.beforeSubmit ;
        this.onSubmit = props.onSubmit ;
    }

    cleanText(text){
        return text
                .replace(/[.,/#!$%^&*;:{}=`~()]/g,"")
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1)) ;
    }

    updateKeywords = (newValue) => {
        this.setState({description: newValue}) ;
    } ;

    handleSubmit = (event) => {
        event.preventDefault() ;
        this.beforeSubmit() ;
        const keywords = this.state.description ;
        const cleaned = this.cleanText(keywords).join(' ') ;
        dankify(cleaned).then((predictions) => {
            this.onSubmit(predictions) ;
        }).catch(e => console.log(e));
    } ;

    keyboardSubmit = (keywords) => {
        const cleaned = this.cleanText(keywords).join(' ') ;
        dankify(cleaned).then((predictions) => {
            this.onSubmit(predictions) ;
        }).catch(e => console.log(e));
    } ;

    render() {
        function getStyle() {
            return {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }
        }
        return (
            <form
                onSubmit={this.handleSubmit}
                style={getStyle()}>
                <DankTextbox
                    onChange={this.updateKeywords}
                    onSubmit={this.keyboardSubmit}
                />
                <DankifyButton defaultValue="Dankify"/>
            </form>
        );
    }
}

function DankifyButton(props){
    function getStyle(){
        return {
            width: "150px",
            height: "50px",
            backgroundColor: "Green",
            fontSize: "24px",
            borderRadius: "5px",
            textAlign: "center"
        }
    }
    return (
        <input
            className="button"
            type="Submit"
            defaultValue={props.defaultValue}
            style={getStyle()}>
        </input>
    )
}

export default DankForm ;
