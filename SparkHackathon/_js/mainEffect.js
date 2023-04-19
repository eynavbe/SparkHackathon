$(window).ready(function() {
    document.getElementsByClassName('video')[0].style.opacity= "0";
    document.getElementsByClassName('weather_recommendation')[0].style.opacity= "0";
    document.getElementsByClassName('map')[0].style.opacity= "0";
    document.getElementsByClassName('trackM')[0].style.opacity= "0";
    document.getElementsByClassName('citiesM')[0].style.opacity= "0";
    document.getElementsByClassName('lodgingM')[0].style.opacity= "0";



    
})
$(window).scroll(function() {
var height = $(window).scrollTop();
console.log(height);

if((height > 100) ){

    $(".video").animate({
        opacity: "1"
    },"slow");
    $(".weather_recommendation").animate({
        opacity: "1"
    },"slow");
}
if((height > 600)){

    $(".map").animate({
        opacity: "1"
    },"slow");
    $(".trackM").animate({
        opacity: "1"
    },"slow");
}
if((height > 1160)){

    $(".citiesM").animate({
        opacity: "1"
    },"slow");
}
if((height > 1760)){

    $(".lodgingM").animate({
        opacity: "1"
    },"slow");
}

})