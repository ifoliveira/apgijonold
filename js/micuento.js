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


/* Cambiar de color cuando pasas por su posicion */
	
	/*posicion de la barra de navegacion al principio*/

};