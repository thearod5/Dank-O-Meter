import React, { Component } from 'react';
import Prediction from "./Prediction/Prediction.js" ;
import DankForm from "./DankForm/DankForm.js"
import Header from "./Header/Header" ;
import {precise} from "../js/Helpers"

class App extends Component {

    constructor(props){
        super(props) ;
        this.state = {
            strain: "?",
            rating: "?"} ;
        this.title = "Dank-O-Meter" ;
        this.subtitle = "Helping you solve: what weed is this?"
    }

    receivePredictions = (predictions) => {
        const newStrain = predictions.predicted_strain ;
        const newRating = precise(predictions.predicted_rating) ;

        this.setState({
            strain: newStrain,
            rating: newRating
        });
    } ;

    setLoad = () => {
        this.setState({
            strain: "...",
            rating: "..."
        }) ;
    }

    getStyle(){
        return {
            width: "500px"
        }
    }

    render() {
        return (
          <div className="App" style={this.getStyle()}>
              <Header
                title={this.title}
                subtitle={this.subtitle}
              />
              <DankForm
                  onSubmit={this.receivePredictions}
                  beforeSubmit={this.setLoad}
              />
                <Prediction
                    rating={this.state.rating}
                    strain={this.state.strain}
                />
          </div>
        );
    }
}

export default App;
