function openNav() {
  document.getElementById("navBar").style.height = "100%";
}

function closeNav() {
  document.getElementById("navBar").style.height = "0%";
}

// go to previous page

function goBack() {
  window.history.back();
}




// slides
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}



// map

function initMap() {
  var uluru = {
    lat: 44.80359,
    lng: 20.40091
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function addInfoWindow(marker, message) {
  var infoWindow = new google.maps.InfoWindow({
    content: message
  });
  google.maps.event.addListener(marker, "click", function() {
    infoWindow.open(map, marker);
  });
}



// language

var language;
function getLanguage(identifierFile) {
  $.ajax({
    url: "https://api.myjson.com/bins/" + identifierFile,
    dataType: "json",
    async: false,
    success: function(lang) {
      language = lang;

      getTranslate();
    }
  });

}



function setLanguage(lang) {
  localStorage.setItem("language", lang);
}



function getTranslate() {
  $("*[data-localized]").each(function() {
    var k = $(this).attr("data-localized");
    if (k != null && k != "undefined" && k != "") {
      $(this).text(language[k]);
    }
  });
}



// eng
// https://api.myjson.com/bins/bi5c6

// srb
// https://api.myjson.com/bins/15byqu




$(document).ready(function() {
  getLanguage();

});
