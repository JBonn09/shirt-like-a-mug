import $ from 'jquery';
//import Mongodb from '../src/server';

function displayResults(products) {
    // First, empty the table
    // $("tbody").empty();
  
    // // Then, for each entry of that json...
    // products.forEach(function(product) {
    //   // Append each of the animal's properties to the table
    //   console.log(product.item_type)
    //   var tr = $("<tr>").append(
    //     $("<td>").text(product.item_name),
    //     $("<td>").text(product.item_price),
    //     $("<td>").text(product.item_quantity),
    //     $("<td>").text(product.item_type)
    //   );
  
    //   $("tbody").append(tr);
 //   });
 //return products;
 console.log("Product Data "+ products);
  }
  
  function setActive(selector) {
    // remove and apply 'active' class to distinguish which column we sorted by
    $("th").removeClass("active");
    $(selector).addClass("active");
  }
  

  $.getJSON("/all", function(data) {
    console.log(data)
    // Call our function to generate a table body
    displayResults(data);
  });