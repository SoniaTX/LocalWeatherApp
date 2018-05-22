$("document").ready(function() {
  
   var d = new Date();
   var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  document.getElementById("date").innerHTML = day[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();  
  
  if (navigator.geolocation) {
    
  navigator.geolocation.getCurrentPosition(function(position) {
        
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(data) { 
    
       $("#city").append(data.name);
       $("#temperature").prepend(Math.round(data.main.temp) + String.fromCharCode(176));
       $("#humidity").prepend(data.main.humidity);
       $("#weather").html(data.weather[0].description);
    var icon = data.weather[0].icon;
    
    var getIcon="https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" + icon + ".png";
    
$('#weatherIcon').prepend('<img src='+ getIcon +'>');
                   
     
        
        let backgroundImg = data.weather[0].main;
        switch (backgroundImg) {
          case "Thunderstorm": 
            $("body").css("background-image","url('https://images.unsplash.com/photo-1504466664756-1adbe6d13b36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a189df52ae152da65e86df0c833dd80&auto=format&fit=crop&w=750&q=80')");
            break;
          case "Drizzle": 
            $("body").css("background-image","url('https://images.unsplash.com/photo-1423530990185-af7dde1155fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c8382df9f5de5f7e7840bdc768d23b2&auto=format&fit=crop&w=809&q=80')");
            break;
          case "Rain": 
            $("body").css("background-image","url('https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca4c0c8dc291ec21f61ba16256362474&auto=format&fit=crop&w=667&q=80')");
            break;
          case "Snow": 
            $("body").css("background-image","url('https://images.unsplash.com/photo-1482597869166-609e91429f40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d98ed787618c3647297e51dd2e188965&auto=format&fit=crop&w=500&q=80')");
            break;
          case "Fog": 
            $("body").css("background-image","url('https://images.unsplash.com/photo-1465205568425-23fdd3805e49?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c47ad2a2b9b40e221bab0508fe2d46f&auto=format&fit=crop&w=1500&q=80')");
            break;
          case "Clear": 
            $("body").css("background-image","url('https://images.unsplash.com/photo-1493364391862-bb90969a4cc1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f60a67c220f8bb8de58e34838c52daa9&auto=format&fit=crop&w=750&q=80')");
            break;
          case "Clouds": 
            $("body").css("background-image","url('https://images.unsplash.com/photo-1499482624510-89fb8b6d0ded?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c85fac71046538fddf0662800010c27&auto=format&fit=crop&w=750&q=80')");
            break;
          case "Smoke": 
            $("#body").css("background-image","url('https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=397d68810876ed12a2343b8b9be2494d&auto=format&fit=crop&w=654&q=80')");
            break;
          case "Mist": 
            $("body").css("background-image","url('https://images.unsplash.com/photo-1446104838475-bc6508184f08?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d17594aa67af9dc6efc427dbd1324318&auto=format&fit=crop&w=1510&q=80')");
            break;
        }
      
     var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
    
    var cTemp;
    var fTemp;
    
  $.getJSON(api, function(data) {
    
    cTemp = Math.round(data.main.temp);
    fTemp = Math.round(cTemp * 9 / 5 + 32);
       
    var celsuis = true;
    $("#changeDegree").click(function () {
      if (celsuis) {
        $("#temperature").html(fTemp + String.fromCharCode(176));
        $("#degree").html("F");
        celsuis = false;
      } else {
        $("#temperature").html(cTemp + String.fromCharCode(176));
        $("#degree").html("C");
        celsuis = true;   
           
      }
    });
 });
  
      });
    });
  }

});