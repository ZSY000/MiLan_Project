$(window).scroll(function(){
	headerInit();
});

function headerInit(){
	if($(this).scrollTop()>100){
		$("body").addClass("fixed-header-on");
	}else{
		$("body").removeClass("fixed-header-on");
	}
}
headerInit();


$(window).scroll(function(){
	headerInit1();
});

function headerInit1(){
	if($(this).scrollTop()>200&&$(this).scrollTop()<1600){
		$("body").addClass("bg-show");
	}else{
		$("body").removeClass("bg-show");
	}
}
headerInit1();


$(window).scroll(function(){
	headerInit3();
});

function headerInit3(){
	if($(this).scrollTop()>3000){
		$("body").addClass("bg-show1");
	}else{
		$("body").removeClass("bg-show1");
	}
}
headerInit3();