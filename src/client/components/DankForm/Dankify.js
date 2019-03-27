
/*
import {str_obj} from "../../js/Helpers" ;

const auth_cookie_name = "Weed-O-Meter-Authorization"  ;
const auth_success = "VALID";
const auth_failure = "NOPE" ; //yes, this is a joke


//Authorize a user via cookies
function authorize() {

    let user_cookie = str_obj(document.cookie) ;

    if(user_cookie[auth_cookie_name] === auth_success)
        return true ;


    if(user_cookie[auth_cookie_name] === auth_failure){
        window.alert("Sorry, can't let you in.") ;
        return false ;
    }

    const message = "Are you older than 21 or do you own a medical marijuana recommendation?" ;
    const is_valid = window.confirm(message) ;
    const cookie_value = is_valid ? auth_success : auth_failure ;
    document.cookie = auth_cookie_name + " = " + cookie_value + ";" ;
    return is_valid ;
}
*/

//Removes punctuation and capitalizes each word
function cleanText(text){
    return text
            .replace(/[.,#!$%&;:{}=`~()]/g,"")
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
}

//returns a promise that delivers the predictions sent back from server
//given: String of descriptors space separated where each word is capitalized
function dankify(description){

    return new Promise((resolve, reject) => {

        if(typeof(description) !== "string" || description.length === 0)
            reject("Error: Expected non-empty string.") ;

        const request_data = JSON.stringify({data: cleanText(description)}) ;

        //Make Request for predictions
        fetch('/api/predict', {
            method: 'POST',
            body: request_data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            res.json()
                .then((dank_scores) => {
                    resolve(dank_scores) ;
            }).catch(e => console.log(e))
        }).catch(e => console.log(e)) ;
        console.log("Waiting for server...") ;
    });
}

export {dankify}

