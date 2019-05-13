/*
**  Author: Harsh Dagar
**  Module: #002->Carousel Effect
*/

var slider=0;
var timeout;
var slides = document.getElementsByClassName("mySlides");

$(()=>{
    document.getElementsByClassName('next')[0].click();
});

// Next/previous controls
function forward(){
    if(slider<slides.length){
        slider++;
    }else{
        slider=1;
    }
}

// Thumbnail image controls
function backward(){
    if(!slider>-1){
        slider--;
    }else{
        slider=slides.length-1;
    }
}

showSlides();
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    forward();
    slides[slider-1].style.display="block";
    timeout =  setTimeout(showSlides, 5000); // Change image every 10 seconds
  }