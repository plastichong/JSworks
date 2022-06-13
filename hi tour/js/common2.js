

$(document).ready( function() {
	//fadeoOut 시간 설정

	function goHide(){
		for (let i = 1; i <= 4; i++) {
			$(".gnb_depth2_"+i).fadeOut("fast")

		}

	}


	$(".openAll1").mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$(".gnb_depth2_1").fadeIn("fast")
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$(".gnb_depth2_1").fadeIn("fast")
	}).mouseout(function(){
		$(".gnb_depth2_1").fadeOut("fast")
	}).blur(function(){
		$(".gnb_depth2_1").fadeOut("fast")
	})

	// $(".gnb_depth2_1").mouseover(function(){
	// 	if ( parseInt($('header').css('width')) > 800 )
	// 	$(".gnb_depth2_1").fadeIn("fast")
	// }),mouseo






	$(".openAll2").mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$(".gnb_depth2_2").stop().fadeIn("fast")
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$(".gnb_depth2_2").stop().fadeIn("fast")
	}).mouseout(function(){
		$(".gnb_depth2_2").stop().fadeOut("fast")
	}).blur(function(){
		$(".gnb_depth2_2").fadeOut("fast")

	})

	$(".openAll3").mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$(".gnb_depth2_3").stop().fadeIn("fast")
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$(".gnb_depth2_3").stop().fadeIn("fast")
	}).mouseout(function(){
		$(".gnb_depth2_3").stop().fadeOut("fast")
	}).blur(function(){
		$(".gnb_depth2_3").fadeOut("fast")

	})

	$(".openAll4").mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$(".gnb_depth2_4").stop().fadeIn("fast")
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$(".gnb_depth2_4").stop().fadeIn("fast")
	}).mouseout(function(){
		$(".gnb_depth2_4").stop().fadeOut("fast")
	}).blur(function(){
		$(".gnb_depth2_4").fadeOut("fast")

	})





	$('a.s_point').smoothScroll();

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	else $('.to_top').removeClass('hide');
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
	});


	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){
		$('header').addClass('on');
		$('header .header_cont').slideDown('fast');
		$('header .header_area .header_cont .closePop').show();			
		$("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
        $("body").unbind('touchmove');
	});
	
});


$(document).ready(function(){
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    $(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
    }); 
    
    // 프로그램 소개 - 더보기/접기 작동
	$('.program_list li .btn_more a').click(function(){
		if ($(this).parent().parent().find('.subtxt').css('display') == 'none') {
			$(this).parent().parent().find('.subtxt').css('display','inline');
			$(this).text('접기');
		} else {
			$(this).parent().parent().find('.subtxt').css('display','none');
			$(this).text('더보기');
		}
	});
   
});
