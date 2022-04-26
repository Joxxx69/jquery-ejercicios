$(document).ready(function () {
    $('.reptar').hover(function () {
        let image2 = $(this).attr('src');
        let image1 = $(this).attr('data-alt-src');
        $(this).attr({'src':image1,'data-alt-src':image2});

        // $(this).attr('src', 'reptar-2.jpg'); //-----> este metodo lo hace directo


    }, function () {
        let image2 = $(this).attr('src');
        let image1 = $(this).attr('data-alt-src');
        $(this).attr({'src':image1,'data-alt-src':image2});

        // $(this).attr('src', 'reptar.jpg'); // -----> este metodo lo hace directo
    });
});