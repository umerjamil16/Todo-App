var express = require("express");
var app = express();

var routes = require("./routes");
var tasks = require("./routes/tasks");
var http = require("http");
var path = require("path");

var mongoskin = require("mongoskin");
var mongoURL = "";

var db = mongoskin(mongoURL, {safe: true});


