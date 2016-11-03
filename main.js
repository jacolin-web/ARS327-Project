$(document).ready(function(){
    //This will open and close stack of cards in the start up page
    $(".card-holder").click(function() {
       $('.rectangle1').addClass('rect1-active');
        $('.rectangle2').addClass('rect2-active');
        $('.rectangle3').addClass('rect3-active');
        $('.rectangle4').addClass('rect4-active');
        $('.rectangle5').addClass('rect5-active');
    });
    
    //after card is pick, about cards will slide in
    $(".about-img").click(function() {
       $(".about-img").toggleClass("slide-out slide-in");
    });
    
    $(".about-desc").click(function() {
       $(".about-desc").toggleClass("slide-desc-out slide-desc-in");
    });

});
