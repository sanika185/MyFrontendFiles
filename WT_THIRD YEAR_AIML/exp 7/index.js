$(".hide").on("click",function(){
    $(".hi").hide();
});


function hide(){
    alert("sdhjhfgj");
    $(".hi").hide();
}

$(".show").on("click",function(){
    $(".hi").show();
});
$(".slideUp").on("click",function(){
    $(".hi").slideUp();
});
$(".slideDown").on("click",function(){
    $(".hi").slideDown();
});
$(".dbclick").on("dblclick",function(){
    $(".hi").hide();
});
$(".mouseover").on("mouseover",function(){
    $(".hi").hide();
});
$(".ajax").on("click",function(){
    $(".div1").load("abc.txt");
});

