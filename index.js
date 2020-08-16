
var name = prompt("What is your name?");

setInterval("sayHi(name)",1400)

function sayHi(name){

  name_ = name.slice(0,1).toUpperCase()+ name.slice(1,name.length).toLowerCase();
  $("#name").text(name_+"!");
  $("#name").addClass("name");

  setTimeout(function() {

    $("#name").removeClass("name")}, 700)

  setTimeout(function() {

    $("#name").text("World")}, 700)

}
