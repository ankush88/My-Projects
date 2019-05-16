var express = require('express');
var app = express();
var db = require('./server/models/index.js');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.route('/')
    .get(function(req, res) {
          console.log(__dirname);
          res.sendFile(__dirname + '/index.html');
});

// Authentication REST APIs
app.route('/userlogin').post(db.login);
app.route('/users').get(db.users);
app.route('/updateuser').post(db.updateuser);
app.route('/createuser').post(db.createuser);
app.route('/deleteuser').post(db.deleteuser);
app.route('/adminlogin').post(db.login);
app.route('/contacts').get(db.contacts);
app.route('/createcontact').post(db.createcontact);
app.route('/deletecontact').post(db.deletecontact);
app.route('/updatecontact').post(db.updatecontact);
/*
app.route('/users').get(db.users);
app.route('/getuser').get(db.getuser);
app.route('/register').post(db.register);

// USERS section REST APIs
app.route('/users/candidates').get(db.candidates);
app.route('/users/vote').post(db.vote);
app.route('/users/votedfor').post(db.votedfor);
app.route('/users/getapproval').post(db.getapproval);
app.route('/users/results').get(db.userresults);

// ADMIN section REST APIs
app.route('/admin/candidates').get(db.candidates);
app.route('/admin/addcandidate').post(db.addcandidate);
app.route('/admin/deletecandidate').post(db.deletecandidate);
app.route('/admin/approvallist').get(db.approvallist);
app.route('/admin/approvevoter').post(db.approvevoter);
app.route('/admin/rejectvoter').post(db.rejectvoter);
app.route('/admin/results').get(db.adminresults);
*/
// Routes Test
app.route('/testroute/:username')
    .get(function(req, res) {
        var user_name = (req.query.username);
        var user_name1 = (req.params.username);
        res.send("Hi, "+user_name+" Welcome to Edureka" +user_name1);
});
app.route('*')
    .get(function(req, res) {
        res.redirect('/');
});
module.exports = app;
