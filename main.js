$(document).ready(function(){
    //This will open and close stack of cards in the start up page
    $(".rectangle1").click(function() {
       $('.rectangle1').toggleClass('rect1-active');
        $('.rectangle2').toggleClass('rect2-active');
        $('.rectangle3').toggleClass('rect3-active');
        $('.rectangle4').toggleClass('rect4-active');
        $('.rectangle5').toggleClass('rect5-active');
        $('.text').toggleClass('txt-open txt-close');
    });
    
       $(".about-img").addClass("slide-in");
       $(".about-desc").addClass("slide-desc-in");

});
