$(document).ready(function(){

  console.log("Current Weather with OpenWeather");

  const URL = ; // ?

  // console.log("tfl air quality call in log");
  // $("#inside").click(function(){
  //   $.ajax({
  //     dataType: "json",
  //     type:"GET", // ?
  //     url: URL, // ?
  //     success: function(data) {
  //       console.log(data); // ?
  //     }
  //   });
  // });

  console.log("tfl call in html and pick up a specific element from the JSON response")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      // extract the description value from the weather key of the json response object
      console.log(data);
    }});
  });


});
