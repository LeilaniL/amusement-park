$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height >= 60) {
    $("#tall").addClass("highlight");

    }
  else {
    $("#short").addClass("highlight");

  }

});
