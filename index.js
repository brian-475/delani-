$("document").ready(function(){
    $(".desn-2").click(function(){
        $("#twenty").toggle();
    })
})
$("document").ready(function(){
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