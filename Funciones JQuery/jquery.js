$(document).ready(function () {

    // -----------------click and toogle------------------------------
    $('.btn').click(function () {
        $('.title').toggle("fast");
    });
    // ----------------- hide and show------------------------------
    $('.btn-hide').click(function () {
        $('.paragraph-1').hide();
    });
    $('.btn-show').click(function () {
        $('.paragraph-1').show();

    });
    // -----------------slideup and slidedowm------------------------------
    $('.btn-slideup').click(function () {
        $('.paragraph-2').slideUp(1000,
            'linear',
            function () {
                $('.paragraph-2').slideDown();
                $('.paragraph-2').css('background', 'aqua');
            });

    });
    $('.btn-slidedown').click(function () {
        $('.paragraph-slidedown').slideDown(1000, 'swing');
    });
    // -----------------slidetoggle------------------------------
    $('.btn-slidetoggle').click(function () {
        $('.paragraph-3').slideToggle('slow');
    });
    // -----------------fadein fadeout------------------------------
    $('.btn-fadein').click(function () {
        $('.fadein').fadeIn(3000);

    });
    $('.btn-fadeout').click(function () {
        $('.fadeout').fadeOut('slow');
    });
    // -----------------addclass------------------------------
    $('.btn-addclass').click(function () {
        $('.addclass').addClass('intro');

    });
    //-----------------before-------------------------------
    $('.btn-before').click(function () {
        $('.paragr-1').before('<p>before before before before before before before before</p>');
    } 
    );
    //-----------------after-------------------------------
    $('.btn-after').click(function () {
        $('.before-and-after').after('<p>after after after after after after after</p>');
    }
    );
    //----------------------append---------------------------
    $('.btn-append').click(function () { 
        $('.lista').append('<li>append</li>');  
    });
    //--------------------------html--------------------------
    $('.btn-html').click(function () { 
        $('.html-1:last').html('estoy ocupando html en jquery');
    });
    //---------------------------attr---------------------------------
    $('.btn-attr').click(function () { 
    $('.attr').attr({width :400});
    });
    //--------------------------val--------------------------------------
    $('.btn-val').click(function (e) { 
        e.preventDefault();
        let nombre=$('.val').val();
        alert(nombre);
    });
    //--------------------------text-------------------------------------------
    $('.btn-text').click(function () { 
        $('.paragraph-5').text('este es el texto que se cambio con text al dar click al boton');
        let paragra =$('.paragraph-5').text();
        alert(paragra);
        
    });
});