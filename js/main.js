$(document).ready(function() {
    //Menu
    $("ul.topnav > li").hover(function() {
        $(this).find("ul.subnav").show();
        $(this).addClass("subhover");
    }, function() {
        $(this).removeClass("subhover");
        $(this).find("ul.subnav").hide();
    });

    //Scroll On Top (home page)
    $("#scrollTop").carouFredSel({
        items: 5,
        mousewheel: true,
        scroll: {
            items: 3,
            easing: "swing",
            duration: 500,
            pauseOnHover: true
        }
    });
    
});

$(function(){
    if($.browser.msie && parseInt($.browser.version, 10) === 7){
        var zIndexNumber = 3000;
	$('nav,ul,li').each(function() {
		$(this).css('zIndex', zIndexNumber);
		zIndexNumber -= 10;
	});
    }
});