$(function() {

/* Tabs */

	$('ul.tabs__ul').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('p.tabs__txt').removeClass('active').eq($(this).index()).addClass('active');
	});




	
/* Slider (child-slider) */

	$( '#my-slider' ).sliderPro({
		width: 325,
		height: 450,
		arrows: false,
		buttons: false,
		waitForLayers: true,
		fade: true,
		autoplay: false,
		autoScaleLayers: false,
		thumbnailsPosition: 'right',
		thumbnailPointer: false,
		thumbnailWidth: 70,
		thumbnailHeight: 70,
		breakpoints: {
			800: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 70,
				thumbnailHeight: 70
			},
			500: {
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 70,
				thumbnailHeight: 70
			}
		}
	});

$( '#my-slider2' ).sliderPro({
		width: 325,
		height: 450,
		arrows: false,
		buttons: false,
		waitForLayers: true,
		fade: true,
		autoplay: false,
		autoScaleLayers: false,
		thumbnailsPosition: 'right',
		thumbnailPointer: false,
		thumbnailWidth: 70,
		thumbnailHeight: 70
});

function func(){
 	  setTimeout(function(){
		   if($(".carousel-item.active").children().hasClass("js")){
				$( '#my-slider2' ).sliderPro("resize");
				$(".carousel-item").children().removeClass("js")
				console.log("resize");
			} 
}, 650);
};

$(".carousel-control-next").on("click", function(){
	func();
});

/* FancyBox  http://fancyapps.com/fancybox/3/docs/#setup */

	$('.video-link').fancybox({
        padding     : 0,
        margin      : [30, 10, 30, 10], // Increase left/right margin
        width: 1280,
        height: 720,
        afterClose: function(){                
        },
        afterLoad: function(){},
        helpers : {
            media: true
        },
        youtube : {
            autoplay: 1,
            wmode: 'opaque',
            vq: 'hd720'                
        },
        vimeo : {
            autoplay: 0
        }
    });

/* Team carousel */

	var itemWidth = $(".team").innerWidth(),
		container = $(".slider__team"),
		items     = $(".team"),
		itemsLen  = items.length,
		current   = 4;

	$(".slider").find("button").on("click", function(){
		var direction = $(this).attr("id");
		
		if(direction == "js-next"){
			container.css({"left": "-=" + (itemWidth-20)});
			current++;
			$(items[current-1]).css("opacity", "1");
			$(items[current-5]).css("opacity", "0");
		}else if(direction == "js-prev"){
			container.css({"left": "+=" + (itemWidth-20)});
			current --;
			$(items[current-4]).css("opacity", "1");
			$(items[current]).css("opacity", "0");
		}

		if(current > 4)
			$("#js-prev").removeAttr("disabled");
		else
			$("#js-prev").attr("disabled", "disabled");
		
		if(current == itemsLen){
			$("#js-next").attr("disabled", "disabled");
		}
		else 
			$("#js-next").removeAttr("disabled");
		
		console.log(current);
	});

});