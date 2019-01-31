// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Initialize Express
var app = express();

app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up front end from server ONLY if in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Database configuration
// Save the URL of our database as well as the name of our collection
//var databaseUrl = "shirtmugdb";
//var collections = ["products"];

// Use mongojs to hook the database to the db variable
//var db = mongojs(databaseUrl, collections);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shirt-like-a-mug", {useNewUrlParser: true});

app.listen(PORT, () => console.log(`🗺️ ==> Server now on ${PORT}`))

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
    console.log("Database Error:", error);
  });
  
  // Routes
  // 1. At the root path, send a simple hello world message to the browser
  app.get("/", function(req, res) {
    res.send("Hello There");
  });
  
  // 2. At the "/all" path, display every entry in the products collection
  app.get("/all",function(req, res) {
    // Query: In our database, go to the products collection, then "find" everything
    db.products.find({}, function(err, found) {
      // Log any errors if the server encounters one
      if (err) {
        console.log(err);
      }
      // Otherwise, send the result of this query to the browser
      else {
        res.json(found);
      }
    });
  });

  app.post("/AddToCart"),function(req,re){
    var col = db.carts;
  var cart = db.findOne({
      _id: userId
    , "products._id": req.body.productId
    , status: "active"});
  var oldQuantity = 0;
  
  for(var i = 0; i < cart.products.length; i++) {
    if(cart.products[i]._id == productId) {
      oldQuantity = cart.products[i].quantity;
    }
  }
  
  var newQuantity = 2;
  var delta = newQuantity - oldQuantity;
  
  col.update({
      _id: userId
    , "products._id": req.body.productId
    , status: "active"
  }, {
    $set: {
        modified_on: new Date()
      , "products.$.quantity": newQuantity
    } 
  });
  var colP = db.products;
  colP.update({
      _id: productId
    , quantity: { $gte: quantity }
  }, {
      $inc: { quantity: -quantity }
    , $push: {
      reserved: {
        quantity: quantity, _id: userId, created_on: new Date()
      }
    }
  });
  }
  