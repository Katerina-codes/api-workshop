$(document).ready(function(){

  console.log("Current Weather with OpenWeather");

  const URL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=20be58afb720dfef31baab431a2fb509"; // ?

  console.log("tfl air quality call in log");
  $("#inside").click(function(){
    $.ajax({
      dataType: "json",
      type:"GET", // ?
      url: URL, // ?
      success: function(data) {
        console.log(data); // ?
      }
    });
  });

  // console.log("tfl call in html") //only prints JSON to console
  // $("#inside").click(function(){ // ajax function definition that will be executed with the selector button
  //   $.ajax({url: URL, success: function(data){ //.ajax returns result, which contains the returned data in JSON format and us used here immediately as param for the callback success function
  //     $("#weather").html(data); // puts the success result into the div selector element via the .html function. We again pass the result as the param to be printed. Now we can make our page "understand" JSON by using the function JSON.stringify and finally make it pretty by using the `pre` tags
  //     console.log(data);
  //   }});
  // });

  // console.log("call in html with JSON.stringify")
  // $("#inside").click(function(){ // ajax function definition that will be executed with the selector button
  //   $.ajax({url: URL, success: function(data){ //.ajax returns result, which contains the returned data in JSON format and us used here immediately as param for the callback success function
  //     $("#weather").html(JSON.stringify(data)); // puts the success result into the div selector element via the .html function. We again pass the result as the param to be printed. Now we can make our page "understand" JSON by using the function JSON.stringify and finally make it pretty by using the `pre` tags
  //     console.log(data);
  //   }});
  // });


  console.log("tfl call in html with JSON.stringify and HTML `<pre>` tags")
  $("#inside").click(function(){ // ajax function definition that will be executed with the selector button
    $.ajax({url: URL, success: function(data){ //.ajax returns result, which contains the returned data in JSON format and us used here immediately as param for the callback success function
      $("#weather").html("<pre>" +JSON.stringify(data) +"</pre>"); // puts the success result into the div selector element via the .html function. We again pass the result as the param to be printed. Now we can make our page "understand" JSON by using the function JSON.stringify and finally make it pretty by using HTML `<pre>` tags
      console.log(data);
    }});
  });





});
// https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa
