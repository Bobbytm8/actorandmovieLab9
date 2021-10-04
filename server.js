let bodyParser = require('body-parser');
let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let actors = require('./routes/actor');
let movies = require('./routes/movie');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use("/", express.static(path.join(__dirname, "dist/wk9ang")));

mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true}, function (err) {
  if (err) {
    return console.log('Mongoose - connection error:', err);
  }
  console.log('Connect Successfully');
});


//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.put('/actors/:actorName/:movieTitle', actors.addMovie);
app.delete('/actors/:id', actors.deleteOne);
app.delete('/actors/:actorId/:movieId', actors.removeMovie);

//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.delete('/movies/:id', movies.deleteOne);
app.delete('/movies/:movieId/:actorId', movies.removeActor);
app.put('/movies/:movieTitle/:actorName', movies.addActor);
app.get('/movies/:year1/:year2', movies.getAllYear);

app.listen(8080);
console.log("Server running at http://localhost:8080");