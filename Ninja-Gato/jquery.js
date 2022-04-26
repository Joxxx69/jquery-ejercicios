$(document).ready(function () {

    $('.ninja').click(function () { 
        let image1=$(this).attr('data-alt-src');
        let image2= $(this).attr('src');
        $(this).attr('src', image1);
        $(this).attr('data-alt-src', image2);
    });

});

