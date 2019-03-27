
import React, {Component} from "react" ;
import PropTypes from "prop-types" ;

class Header extends Component {

    getStyle() {
        return {
            color: "Green"
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <Title value={this.props.title} />
                <SubTitle value={this.props.subtitle} />
            </div>
        )
    }
}

function Title(props){
    function getStyle(){
        return {
            margin: "10px 0px"
        }
    }
    return (
     <h3 style={getStyle()}>
         {props.value}
     </h3>
    )
}

function SubTitle(props){
    function getStyle(){
        return {
            fontSize: "12px",
            margin: "0px"
        }
    }
    return (
        <p style={getStyle()}>
            {props.value}
        </p>
    )
}


Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
} ;

export default Header ;

