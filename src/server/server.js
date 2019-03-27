const curr_dir = __dirname ;
const path = require("path") ;
const bodyParser = require("body-parser") ;
const express = require("express") ;
const app = express() ;
const PORT = process.env.PORT || 3000 ;
const spawn = require("child_process").spawn;
const waitUntil = require('wait-until');
const timeout_secs = 60 ;
const static_path = path.resolve(curr_dir, "../client") ;
const rater_path = path.resolve(curr_dir, "MachineLearning", "predictor.py") ;
const classifierPath = path.resolve(curr_dir, "MachineLearning", "classifier.py") ;

app.use(bodyParser.json()) ;
app.use(express.static(static_path, {index: "Home.html"})) ;

console.log("Serving Predictor files on: " + rater_path) ;

app.get("/HelloWorld", (req, res) => {
	res.send("Hello World!") ; 
}) ; 

app.post("/api/predict", (req, res) => {

	let data = req.body.data ;
	let count = 2 ;
	let predictions = {} ;

	const raterProcess = spawn('python',  [rater_path, data]);
	const strainifyProcess = spawn('python',  [classifierPath, data]);

	raterProcess.stdout.on('data', (data) => {
		const rating = parseFloat(data.toString()) ;
		predictions["predicted_rating"] = rating ;
		count--;
	});

	strainifyProcess.stdout.on('data', (data) => {
		const strain = data.toString() ;
		predictions["predicted_strain"] = strain ;
		count-- ;
	});

	waitUntil(500, 2 * timeout_secs, function condition() {
		return (count == 0);
	}, function done() {

		if(count != 0)
			res.send({error: "Got tired of waiting for predictions models"}) ;
		else
			res.send(predictions) ;
	}) ;

}) ;

app.listen(PORT) ;
