var express = require('express');
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"dankmemes420",
    database:"bamazon",
    port: 3306
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    
  });
  
console.log("hi")
//app.get("/")