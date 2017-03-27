$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var moviesInput = $("#movies").val();
    var cityInput = $("#cities").val();
    var foodInput = $("#food").val();

    var things = [moviesInput, cityInput, foodInput];
    var favThings = [];
    favThings.push(things[0],things[2]);
    $("ul").prepend("<li>" + things[0] + "</li>");
    $("ul").prepend("<li>" + things[1] + "</li>");
    $("ul").prepend("<li>" + things[2] + "</li>");

    console.log(things);
    console.log(favThings);

  });


});
