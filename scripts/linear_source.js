/**
** Author: Harsh Dagar
** Language: JavaScript
*/
//  Tag remover for free hosting at 000webhostapp.com
var divElements = document.getElementsByTagName('div');
divElements[divElements.length-1].style.display = "none";

$(document).on('scroll',()=>{
    //Scrolled document from the top of the body
    var scrolledPosition = $(document).scrollTop();


    /*     Main Carousel Effect of changing the transform     ------>Module #1
           Adding background-position on scroll
    */
        var main_carousel = document.getElementsByClassName('fade');
        var carousel_text = $('.carousel .fade div .text .lable');
        var carousel_Btn = $('.carousel .fade div .text .carousel_Btn');
        for(let i=1; i<main_carousel.length+1; i++){
            let pointer = (".carousel > .fade > .img"+i).toString();
            $(pointer).css({
                'background-position':'0 '+ Math.round(scrolledPosition/4)+'px'});
        }
        //main_carousel1.css('background-position','0 '+ Math.round(-scrolledPosition/4)+'px');
        //main_carousel2.css('background-position','0 '+ Math.round(-scrolledPosition/4)+'px');
        //main_carousel3.css('background-position','0 '+ Math.round(-scrolledPosition/4)+'px');

        carousel_text.css({'transform': 'translate3d(0px, '+ Math.round(-scrolledPosition/10)+'px, 0px'});
        carousel_Btn.css({'transform': 'translate3d(0px, '+ Math.round(-scrolledPosition/10)+'px, 0px'});
        carousel_Btn.css({'transform':'translate3d(0px, '+ Math.round(-scrolledPosition/10)+'px, 0px'});
           

    /*     
        -------------------------Parallax Effect For class="py-carousel"
    */
    var offsetheight1 = scrolledPosition - (document.getElementsByClassName('py-carousel')[0].offsetHeight) ;
    ///----------->>>>>>>>>>>CONSOLE console.log(offsetheight + " is py-carousel " + scrolledPosition);
    $('.py-carousel').css({'background-position':'0 '+ Math.round(-offsetheight1/20)+'px'});
    $('.py-carousel > .container > .py_text').css({'transform': 'translate3d(0px, '+ Math.round(-offsetheight1/5)+'px, 0px'});

    /*
        -------------------------Parllax Effect for class="py-carousel2"
    */
   var offsetheight2 = (offsetheight1)-document.getElementsByClassName('py-carousel2')[0].offsetHeight;
    ///----------->>>>>>>>>>>CONSOLE console.log(offsetheight + " is py-carousel " + scrolledPosition);
    $('.py-carousel2').css({'background-position':'0 '+ Math.round(-offsetheight2/25)+'px'});
    $('.py-carousel2 > .container > .py_text').css({'transform': 'translate3d(0px, '+ Math.round(-offsetheight2/15)+'px, 0px'});
    
    /*
        -------------------------Parllax Effect for class="py-carousel3"
    */
   var offsetheight3 = (offsetheight2)-document.getElementsByClassName('py-carousel3')[0].offsetHeight;
   ///----------->>>>>>>>>>>CONSOLE console.log(offsetheight + " is py-carousel " + scrolledPosition);
   $('.py-carousel3').css({'background-position':'0px '+ Math.round(-offsetheight3/30)+'px'});
   $('.py-carousel3 > .container > .py_text').css({'transform': 'translate3d(0px, '+ Math.round(-offsetheight3/25)+'px, 0px'});

    /*
        -------------------------Parllax Effect for class="py-carousel4"
    */
   var offsetheight4 = offsetheight3 - (document.documentElement.offsetHeight-scrolledPosition);// (document.getElementsByClassName('footer')[0].offsetHeight);
   ///----------->>>>>>>>>>>CONSOLE console.log(offsetheight + " is py-carousel " + scrolledPosition);
    $('.py-carousel4').css({'background-position':'0px '+ Math.round(-offsetheight4/50)+'px'});
    $('.py-carousel4 > .container > .py_text').css({'transform': 'translate3d(0px, '+ Math.round(-offsetheight3/35)+'px, 0px'});
});


var menu_Btn = document.getElementsByClassName('alex_Btn')[0];
menu_Btn.addEventListener('click',()=>{
    $('nav').slideToggle();
    $('.contact_footer').toggle('1000ms');
});
$('.has_dropdown i').addClass("fa-angle-down");