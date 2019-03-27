
import React, {Component} from 'react' ;
import PredictionCell from './PredictionCell' ;
import PropTypes from 'prop-types';

// Container of the Predicted Strain and Rating
class Prediction extends Component {

    getStyle(){
        return {
            padding: "0px",
            paddingTop: "20px",
            paddingBottom: "20px",
            display: "flex",
            flexDirection: "column"
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <PredictionCell
                    label="Predicted Rating"
                    value={this.props.rating}/>
                <PredictionCell
                    label="Predicted Strain"
                    value={this.props.strain}/>
            </div>
        )
    }
}

Prediction.propTypes = {
    rating: PropTypes.string,
    strain: PropTypes.string
} ;

export default Prediction ;