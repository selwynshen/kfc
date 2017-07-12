//菜单点击跳转
function comment_click_scroll() {
    var scroll_offset = $("#classCommentDetail").offset();
    //console.log(scroll_offset);
    /*$(".classIntro>span").removeClass('underline');
    $(".classComment>span").addClass('underline');*/
    if($(".menu").css("position")=="fixed"){
    	$("body").animate({
	        scrollTop: scroll_offset.top-$(".menu").height()
	    }, 750);
    }else{
    	$("body").animate({
	        scrollTop: scroll_offset.top-$(".menu").height()-8.625
	    }, 750);
    }
    
}

//菜单点击跳转
function intro_click_scroll() {
    var scroll_offset = $("#classIntroDetail").offset();
   // console.log(scroll_offset);

   	/*$(".classComment>span").removeClass('underline');
    $(".classIntro>span").addClass('underline');*/
    if($(".menu").css("position")=="fixed"){
    	$("body").animate({
	        scrollTop: scroll_offset.top-$(".menu").height()
	    }, 750);
    }else{
    	$("body").animate({
	        scrollTop: scroll_offset.top-$(".menu").height()-8.625
	    }, 750);
    }
    
}

//固定的bar 菜单
function fixedBar(){

	$(window).scroll(function() {
		var classCommentDetail_offset = $("#classCommentDetail").offset().top-$(".menu").height()-8.625;
		//var classIntro_offset = $("#classIntroDetail").offset().top;

		//var classIntro_offset = $(".menu").offset().top;
		//console.log($("body").scrollTop());
  		if($("body").scrollTop()>=285){
			$(".menu").css({		
				"position": "fixed",
			    "width": "100%",
			    "top": "-0.6em"
			});

			$(".classIntroDetail").css({		
				"margin-top": "3em"
			});
		} else{
			$(".menu").css({		
				"position": "static",
			    "width": "auto",
			    "top": "0em"
			});

			$(".classIntroDetail").css({		
				"margin-top": "0em"
			});
		}

		if($("body").scrollTop()>=classCommentDetail_offset){
			$(".classIntro>span").removeClass('underline');
    		$(".classComment>span").addClass('underline');
		} else {
			$(".classComment>span").removeClass('underline');
    		$(".classIntro>span").addClass('underline');
		}
		
	});
	
}

fixedBar();

//支付方式的切换
$(".pay-methods").find(".pay-mothod").each(function(){
	$(this).click(function(){
		if(!$(this).hasClass('alipay')){
			$(this).find(".choose-icon").attr("src","images/choose.png");
			$(".alipay").find(".choose-icon").attr("src","images/nchoose.png");
		} else{
			$(this).find(".choose-icon").attr("src","images/choose.png");
			$(".wechat").find(".choose-icon").attr("src","images/nchoose.png");
		}
	});
});


