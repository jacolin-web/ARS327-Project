$(document).ready(function(){    
    $(".card-holder .rectangle3").click(function() {
       $('.rectangle3').css("background", "black")
    });

    $(function() {
    $(".holding-div .card-holder .rectangle1").mouseenter(function() {
        $(this).css("background", "black")
    }).mouseleave(function() {
        $(this).css("background", "blue")
    	});
	});

	$(function() {
    $(".rectangle2").mouseenter(function() {
        $(this).addClass("action-card");
    }).mouseleave(function() {
        $(this).removeClass('action-card')
    	});
	});

	$(function() {
    $(".rectangle3").mouseenter(function() {
        $(this).addClass("action-card");
    }).mouseleave(function() {
        $(this).removeClass('action-card')
    	});
	});

	$(function() {
    $(".rectangle4").mouseenter(function() {
        $(this).addClass("action-card");
        $(this).removeClass('action-card')
    }).mouseleave(function() {
        $(this).removeClass('action-card')
    	});
	});

	$(function() {
    $(".rectangle5").mouseenter(function() {
        $(this).addClass("action-card");
    }).mouseleave(function() {
        $(this).removeClass('action-card')
    	});
	});
});