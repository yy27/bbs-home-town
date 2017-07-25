$(function(){
	var flag = true;
	var jinzhi=1;
	var touchEvents = {
        touchstart: "touchstart",
        touchmove: "touchmove",
        touchend: "touchend",

        /**
         * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
         */
        initTouchEvents: function () {
            if (isPC()) {
                this.touchstart = "mousedown";
                this.touchmove = "mousemove";
                this.touchend = "mouseup";
            }
        }
    };
	$("body").click(function(){
		if(flag){
			$(".top_nav .menu1 .menu2").hide();
			$(".u_center").hide();
		}

	});
	$("#hot").click(function(){
		$(".top_nav .menu1 .menu2").toggle();
		$(".u_center").hide();
		flag = false;
	});
	$("#user").click(function(){
		$(".u_center").toggle();
		$(".top_nav .menu1 .menu2").hide();
		flag = false;
	});
	$(".list_btn").click(function(){
		jinzhi=0;
		scrool();
		$("body").css({"overflow":"hidden"});
		$(".cover").show();
		$(".ht_window").show();
		$(this).hide();
		$(".cancel").show();
	});
	$(".cancel").click(function(){
		jinzhi=1;
		cancel_c();
	});
	$(".cover").bind(touchEvents.touchstart, function (event) {
        jinzhi=1;
		cancel_c();     
    });
    
    
	function cancel_c(){
		$("body").css({"overflow":"auto"});
		$(".cover").hide();
		$(".ht_window").hide();
		$(".list_btn").show();
		$(".cancel").hide();
	};
	
	function scrool(){
		document.addEventListener("touchmove",function(e){
		if(jinzhi==0){
		e.preventDefault();
		e.stopPropagation();
		}
		},false);
	}
});

