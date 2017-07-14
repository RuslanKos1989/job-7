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

});
