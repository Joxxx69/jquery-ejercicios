$(document).ready(function () {
    $('img').click(function () { 
        $(this).hide();
        
    });
    $('.btn-restore').click(function () { 
        $('img').show();
    });
});