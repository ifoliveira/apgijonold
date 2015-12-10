    $(document).ready(inicio);

    function inicio(){
    /*Smooth link animation*/
    $('a[href*=#]:not([href=#],[href*=#myC])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top 
                }, 1000);
                return false;
            }
        }
    });

     $('.media-object').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });


	$('.more-info').hover(function(){
		$(this).find('img').attr("src", "images/mas_hover.png");
		$(this).css("cursor", "pointer");
		$(this).css("box-shadow", "0px 1px 2px 0px rgba(50, 50, 50, 0.5)");
	},function(){
		$(this).find('img').attr("src", "images/mas.png");
		$(this).css("box-shadow", "0px 3px 10px 0px rgba(50, 50, 50, 0.5)");
	});


/* Cambiar de color cuando pasas por su posicion */
	
	/*posicion de la barra de navegacion al principio*/

};