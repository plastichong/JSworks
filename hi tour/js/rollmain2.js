let num=0;
var slidingAuto=null;

function play(direct) {	
	if(direct =="right"){
				num++;
				if(num>2)num=0; 
			}else if(direct =="left"){
				num--;
				if(num<0)num=2;
			}else {
				num = direct ;
			} 
			
			
			if(num==0) {
				$(".viewImgList li.imglist1").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist2").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist0").animate({'opacity' : 1 },1000);
			}else if (num==1){
				$(".viewImgList li.imglist0").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist2").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist1").animate({'opacity' : 1 },1000);
			}else if (num==2){
				$(".viewImgList li.imglist1").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist0").animate({'opacity' : 0 },1000);
				$(".viewImgList li.imglist2").animate({'opacity' : 1 },1000);
			}
			
			//버튼 off로 돌리기
			$(".rollingbtn").find('li.seq a').each(function(){
				$(".rollingbtn li.seq a img").attr('src',$(".rollingbtn li.seq a img").attr('src').replace('_on.png','_off.png'));
			});
			$(".rollingbtn li.butt"+num+ " a img").attr('src',$(".rollingbtn li.butt"+num+ " a img").attr('src').replace('_off.png','_on.png'));
			//해당 num의 버튼 on으로 바꾸기


			// if(slidingAuto)clearTimeout(slidingAuto);
			slidingAuto = setTimeout("play('right')",3000);
		}
		setTimeout("play('right')", 3000);
		
		
		$(function(){
			$(".rollplay a").click(function(){
				$(this).parent().hide();
				$(".rollstop").css('display','inline-block');
				play("right")
			})

			$(".rollstop a").click(function(){
				$(this).parent().hide();
				$(".rollplay").css('display','inline-block');
				if(slidingAuto)clearTimeout(slidingAuto);	

			});

		})