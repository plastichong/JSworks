$(function(){
  
$('.openMOgnb').click(function(){
        $('#topMenu2').css("display","flex")

        $(".openMOgnb").css("display","none")
        $(".closePop").css("display","block")
    });

$('.closePop').click(function(){
    $('#topMenu2').css("display","none")

    $(".closePop").css("display","none")
    $(".openMOgnb").css("display","block")
});

window.onresize = function(){
    document.location.reload();
}


})