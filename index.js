$("document").ready(function(){     //first image toggle
    $(".des-image").click(function(){
        $("#twelve").toggle();
    })
})

$("document").ready(function(){   //second image toggle
    $(".desn-2").click(function(){
        $("#twenty").toggle();
    })
})
$("document").ready(function(){     //third image toggle
    $(".fear").click(function(){
        $("#building").toggle();
    })
})
$("document").ready(function(){
    $(".col-md-4").click(function(){
    $("#planning").toggle();
    $(".fear").toggle();
    });
});

$("document").ready(function(){
    $("#p").hover(function(){
        $("#pp").addClass("class1");   
    
});
});