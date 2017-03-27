$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var moviesInput = $("#movies").val();
    var cityInput = $("#cities").val();
    var foodInput = $("#food").val();

    var things = [moviesInput, cityInput, foodInput];

    console.log(things);

  });


});
