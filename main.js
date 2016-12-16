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
        $(".port-one-img").addClass("slide-in");
       $(".port-one-desc").addClass("slide-desc-in");
    
    $(".port-one-desc").click(function() {
       $(".port-two-img").addClass("slide-in");
       $(".port-two-desc").addClass("slide-desc-in");
       $(".port-one-img").toggleClass("slide-in slide-out");
       $(".port-one-desc").toggleClass("slide-desc-in slide-desc-out");
    });
    
    $(".port-two-desc").click(function() {
       $(".port-three-img").addClass("slide-in");
       $(".port-three-desc").addClass("slide-desc-in");
       $(".port-two-img").toggleClass("slide-in slide-out");
       $(".port-two-desc").toggleClass("slide-desc-in slide-desc-out");
    });
});
