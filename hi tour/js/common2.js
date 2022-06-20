$(function(){

	
	
let isOver1 = [false, false, false, false,]
let isOver2 = [false, false, false, false,]
function goHide(){
	for (i = 0; i < 4; i++) {
		if(!isOver1[i] && !isOver2[i]){
			$(".gnb_depth2_"+(i+1)).fadeOut("fast")
		}
		
	}
	
}
// let i = 0;


	// let j = 0;
	for(j=0;j<4;j++){

			
		$(".openAll"+(j+1)).mouseover(function(){
			//서브메뉴 나타나기(header의 너비가 800보다 클때)
			if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_"+(j+1)).stop().fadeIn("fast");
			isOver1[0] = true;
		}).focus(function(){
			if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_"+(j+1)).stop().fadeIn("fast");
			isOver1[0] = true;
		}).mouseout(function(){
			setTimeout(goHide, 300);  //0.5초
			isOver1[0] = false;
		}).blur(function(){
			setTimeout(goHide, 300);
			isOver1[0] = false;
		});
		
		//하위메뉴
		$(".gnb_depth2_"+(j+1)).mouseover(function(){
			isOver2[0] = true;
		}).focus(function(){
			isOver2[0] = true;
		}).mouseout(function(){
			setTimeout(goHide, 300);
			isOver2[0] = false;
		}).blur(function(){
			setTimeout(goHide, 300);
			isOver2[0] = false;
		})
		
	}
	
})