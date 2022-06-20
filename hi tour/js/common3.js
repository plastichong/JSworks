

$(document).ready( function() {
	//fadeoOut 시간 설정
	let isOver1 = [false, false, false, false, ]
	let isOver2 = [false, false, false, false, ]

	function goHide(){
		for (let i = 0; i < 4; i++) {
			if(!isOver1[i] && !isOver2[i]){
				$(".gnb_depth2_"+(i+1)).fadeOut("fast")
			}

		}

	}

	//상위 메뉴
	$(".openAll1").mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$(".gnb_depth2_1").fadeIn("fast")
			isOver1[0] = true;
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$(".gnb_depth2_1").fadeIn("fast")
		isOver1[0] = true;
	}).mouseout(function(){
		isOver1[0] = false;
		setTimeout("goHide()",200);
	}).blur(function(){
		isOver1[0] = false;
		setTimeout("goHide()",200);
	})


	//하위 메뉴
	$('.gnb_depth2_1').mouseover(function(){		
		isOver2[0] = true;			
	}).focus(function(){
		isOver2[0] = true;			
	});	

	$('.gnb_depth2_1').mouseout(function(){
		isOver2[0] = false;
		setTimeout("goHide()",200);
	}).blur(function(){
		isOver2[0] = false;
		setTimeout("goHide()",200);
	});	

	//2
	//상위 메뉴
	$(".openAll2").mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$(".gnb_depth2_2").fadeIn("fast")
			isOver1[1] = true;
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$(".gnb_depth2_2").fadeIn("fast")
		isOver1[1] = true;
	}).mouseout(function(){
		isOver1[1] = false;
		setTimeout("goHide()",200);
	}).blur(function(){
		isOver1[1] = false;
		setTimeout("goHide()",200);
	})


	//하위 메뉴
	$('.gnb_depth2_2').mouseover(function(){		
		isOver2[1] = true;			
	}).focus(function(){
		isOver2[1] = true;			
	});	

	$('.gnb_depth2_2').mouseout(function(){
		isOver2[1] = false;
		setTimeout("goHide()",200);
	}).blur(function(){
		isOver2[1] = false;
		setTimeout("goHide()",200);
	});	



	//3
	//상위 메뉴
	$(".openAll3").mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$(".gnb_depth2_3").fadeIn("fast")
			isOver1[2] = true;
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$(".gnb_depth2_3").fadeIn("fast")
		isOver1[2] = true;
	}).mouseout(function(){
		isOver1[2] = false;
		setTimeout("goHide()",200);
	}).blur(function(){
		isOver1[2] = false;
		setTimeout("goHide()",200);
	})


	//하위 메뉴
	$('.gnb_depth2_3').mouseover(function(){		
		isOver2[2] = true;			
	}).focus(function(){
		isOver2[2] = true;			
	});	

	$('.gnb_depth2_3').mouseout(function(){
		isOver2[2] = false;
		setTimeout("goHide()",200);
	}).blur(function(){
		isOver2[2] = false;
		setTimeout("goHide()",200);
	});	


	//4
	//상위 메뉴
	$(".openAll4").mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 )
			$(".gnb_depth2_4").fadeIn("fast")
			isOver1[3] = true;
	}).focus(function(){
		if ( parseInt($('header').css('width')) > 800 )
		$(".gnb_depth2_4").fadeIn("fast")
		isOver1[3] = true;
	}).mouseout(function(){
		isOver1[3] = false;
		setTimeout("goHide()",200);
	}).blur(function(){
		isOver1[3] = false;
		setTimeout("goHide()",200);
	})


	//하위 메뉴
	$('.gnb_depth2_4').mouseover(function(){		
		isOver2[3] = true;			
	}).focus(function(){
		isOver2[3] = true;			
	});	

	$('.gnb_depth2_4').mouseout(function(){
		isOver2[3] = false;
		setTimeout("goHide()",200);
	}).blur(function(){
		isOver2[3] = false;
		setTimeout("goHide()",200);
	});	



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
