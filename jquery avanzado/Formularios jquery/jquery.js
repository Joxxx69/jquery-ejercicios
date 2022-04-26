$(document).ready(function () {
    // $('.form').submit(function () { 
    //     alert('hola como estas');
    //     console.log($('.form').serialize());
    //     return false;
    // });
    $('.btn-submit').click(function () { 
        $('.form').submit();
    });
});