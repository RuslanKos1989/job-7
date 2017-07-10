$(function() {

	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;
			
			showPage = function(i){
				$(tabs).children("div").children("p").hide();
				$(tabs).children("div").children("p").eq(i).show();
				$(tabs).children("ul").children("li").removeClass("active");
				$(tabs).children("ul").children("li").eq(i).addClass("active");
			}
								
			showPage(0);				
			
			$(tabs).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});
			
			$(tabs).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};



	$(".tabs").lightTabs();


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
});
