$(document).ready(function(){
    //This will open and close stack of cards in the start up page
    $(".card-holder").click(function() {
       $('.rectangle1').toggleClass('rect1-active');
        $('.rectangle2').toggleClass('rect2-active');
        $('.rectangle3').toggleClass('rect3-active');
        $('.rectangle4').toggleClass('rect4-active');
        $('.rectangle5').toggleClass('rect5-active');
    });
    
    //after card is pick, about cards will slide in
    $(".about-div").click(function() {
       $(".about-div").toggleClass("slide-out slide-in");
    });

});
