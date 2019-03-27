import React, {Component} from "react" ;
import PropTypes from 'prop-types';

class PredictionCell extends Component {

    getStyle(){
        return {
            display: "flex",
            flexDirection: "row",
            border: "1px solid black"
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <CellLabel value={this.props.label}/>
                <CellValue value={this.props.value}/>
            </div>
        )
    }
}

function CellLabel(props){
    function getStyle(){
        return {
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            borderRight: "1px solid black"
        }
    }

    return (
        <div style={getStyle()}>
            <label>
                {props.value}
            </label>
        </div>

    )
}

function CellValue(props){

    function getStyle(){
        return {
            flex: "2"
        }
    }
    return (
        <h1 style={getStyle()}>
            {props.value}
        </h1>
    )
}

PredictionCell.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
} ;

export default PredictionCell ;
