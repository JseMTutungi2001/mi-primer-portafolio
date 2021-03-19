$(document).ready(function(){

    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion:1
    }

    var info = {
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        posicion:1
    }

    banner.padre.children('.slide').first().css({
        'left': 0
    });
    info.padre.children('.slide').first().css({
        'left': 0
    });

   var altoBanner = function(){
       var alto = banner.padre.children('.slide').outerHeight();

       banner.padre.css({
           'height': alto +'px'
       });

    }

   var altoInfo = function(){
       var alto = info.padre.children('.active').outerHeight();

       info.padre.animate({
           'height': alto +'px'
       });
    }


    var altoContenedor = function(){
        var altoVentana = $(window).height();

        if (altoVentana <= $('#contenedor').outerHeight() + 200 ){
            $('#contenedor').css({
                'height': ''
            });
        } else{
            $('#contenedor').css({
                'height': altoVentana + 'px'
        });
    }
}

    altoBanner();
    altoInfo();
    altoContenedor();
 
    $(window).resize(function(){
        altoBanner();
        altoInfo();
        altoContenedor();
    });

$('#info').children('.slide').each(function(){
    $('#botones').append('<span>');
});

$('#botones').children('span').first().addClass('active');




    /* ***** Banner **** */

    /* Boton siguiente */

    $('#banner-next').on('click', function(e){
        e.preventDefault();

        if(banner.posicion < banner.numeroSlides){
/* Nos aseguramos de que las demas slides empiecen desde la derecha  */
            banner.padre.children().not('.active').css({
                'left': '100%'
            });
/* quitamos la clase active y se la ponemos al siguiente elemento */
        $('#banner .active').removeClass('active').next().addClass('active').animate({
            'left': '0'
        });

        /* animamos el slide anterior para que se deslaza hacia la izquierda */
        $('#banner .active').prev().animate({
            'left': '-100%'
        });

        banner.posicion = banner.posicion + 1; 
    } else {
        /* hacemos que el slide activo (es decir ultimo) se anime hacia la derecha */
        $('#banner .active').animate({
            'left': '-100%'
        });

        /* seleccionamos todos los slides que no tengan la clase .active y los posicionamos a la derecha */

        banner.padre.children().not('.active').css({
            'left': '100%'
        });

/* eliminamos la clase active y se la ponemos al primer elemento y despues lo animamos */
        $('#banner .active').removeClass('active');
        banner.padre.children('.slide').first().addClass('active').animate({
            'left': 0
        });

        /* reseteamos la posicion a 1 */
        banner.posicion= 1;
        }


    });

    /* Boton anterior */

    $('#banner-prev').on('click', function(e){
        e.preventDefault();

        if(banner.posicion > 1){

            banner.padre.children().not('.active').css({
                'left': '-100%'
            });
    
            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': '0'
            });

            banner.posicion = banner.posicion -1;


        } else{
            banner.padre.children().not('.active').css({
    'left': '100%'
            });

            $('#banner .active').animate({
                'left': '100%'
            });

            $('#banner .active').removeClass('active');
            banner.padre.children().last().addClass('active').animate({
    'left': 0
            });

            banner.posicion = banner.numeroSlides;

        }

    });




  /* ***** Info **** */

    /* Boton siguiente */

    $('#info-next').on('click', function(e){
        e.preventDefault();

        if(info.posicion < info.numeroSlides){
/* Nos aseguramos de que las demas slides empiecen desde la derecha  */
            info.padre.children().not('.active').css({
                'left': '100%'
            });
/* quitamos la clase active y se la ponemos al siguiente elemento */
        $('#info .active').removeClass('active').next().addClass('active').animate({
            'left': '0'
        });

        /* animamos el slide anterior para que se deslaza hacia la izquierda */
        $('#info .active').prev().animate({
            'left': '-100%'
        });

        /* hacemos que el boton activo se cambie a medida que cambia a otro slide */

        $('#botones').children('.active').removeClass('active').next().addClass('active');


        info.posicion = info.posicion + 1; 
    } else {
        /* hacemos que el slide activo (es decir ultimo) se anime hacia la derecha */
        $('#info .active').animate({
            'left': '-100%'
        });

        /* seleccionamos todos los slides que no tengan la clase .active y los posicionamos a la derecha */

        info.padre.children().not('.active').css({
            'left': '100%'
        });

/* eliminamos la clase active y se la ponemos al primer elemento y despues lo animamos */
        $('#info .active').removeClass('active');
        info.padre.children('.slide').first().addClass('active').animate({
            'left': 0
        });
/* removemos la clase active y se la damos de nuvo al primero, hacemos que el boton activo se cambie a medida que cambia a otro slide del final al comienzo*/
        $('#botones').children('active').removeClass('active');
        $('#botones').children('span').first().addClass('active');

        /* reseteamos la posicion a 1 */
        info.posicion= 1;
        }

        altoInfo();


    });

    /* Boton anterior */

    $('#info-prev').on('click', function(e){
        e.preventDefault();

        if(info.posicion > 1){

            info.padre.children().not('.active').css({
                'left': '-100%'
            });
    
            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left': '0'
            });

            /* accedemos a los botones, y sus elementos hijos, le  eliminamos su class active, luego seleccionamos su elemento anterior y se la agrega su addclass active  */

$('#botones').children('.active').removeClass('active').prev().addClass('active');


            info.posicion = info.posicion -1;


        } else{
            info.padre.children().not('.active').css({
    'left': '100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active');
            info.padre.children().last().addClass('active').animate({
    'left': 0
            });

            /* se eelimina la clase active y se le agregada al anterior */

            $('#botones').children('.active').removeClass('active');
            $('#botones').children('span').last().addClass('active');

            info.posicion = info.numeroSlides;

        }

        altoInfo();

    });



});