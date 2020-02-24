$("document").ready(function(){     //first image toggle
    $("#desn").click(function(){
        $(".twelve").toggle();
    })
})

$("document").ready(function(){   //second image toggle
    $("#desn-2").click(function(){
        $(".twenty").toggle();
    })
})
$("document").ready(function(){     //third image toggle
    $("#fear").click(function(){
        $(".building").toggle();
    })
})
$("#first-hover").mouseenter(function(){        //first hover
    $(".hover1").fadeIn();
})
$("#first-hover").mouseleave(function(){
    $(".hover").fadeOut();
})