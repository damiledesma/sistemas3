
/* Menu pegado en parte superior al hacer scroll */
$(document).ready(function(){
	var alt = $('.menu').offset().top; /* altura entre parte superior y menu */

	/* cuando usuario hace scroll */ 
	$(window).on('scroll', function (){
		if ($(window).scrollTop()>alt && $(window).width() > 800){
			$('.menu').addClass('menu-fixed');
		}else{
			$('.menu').removeClass('menu-fixed');
		}
	})
});


/* Menu desplegar */
$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});


/* Mostrar , ocultar Divs */
// EVENTO CUANDO SE MUEVE EL SCROLL, EL MISMO APLICA TAMBIEN CUANDO SE RESIZA
var change= false;
	$(window).on('scroll', function (){
	window_y = $(window).scrollTop(); // VALOR QUE SE HA MOVIDO DEL SCROLL
	scroll_critical = parseInt($(".breakpoint").height()); // VALOR DE TU DIV
	
	if (window_y > scroll_critical) { // SI EL SCROLL HA SUPERADO EL ALTO DE TU DIV
	// ACA MUESTRAS EL OTRO DIV Y EL OCULTAS EL DIV QUE QUIERES
		$('.breakpoint').fadeIn(3000); // VER
	} else {
	// ACA HACES TODO LO CONTRARIO
		$('.breakpoint').hide(); // OCULTAR
	}});


/* JS para seccion noticias */

 function mostrar(noticia) {
 	if (noticia == 1)
    	(document.getElementById('not1')).style.display = '';
    if (noticia == 2)
    	(document.getElementById('not2')).style.display = '';
    if (noticia == 3)
    	(document.getElementById('not3')).style.display = '';
    if (noticia == 4)
    	(document.getElementById('not4')).style.display = '';
}

function cerrar(noticia) {
    if (noticia == 1)
    	(document.getElementById('not1')).style.display = 'none';
    if (noticia == 2)
    	(document.getElementById('not2')).style.display = 'none';
    if (noticia == 3)
    	(document.getElementById('not3')).style.display = 'none';
    if (noticia == 4)
    	(document.getElementById('not4')).style.display = 'none';
}