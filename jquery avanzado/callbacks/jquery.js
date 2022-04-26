// $(document).ready(function () {
//     $('.agregar').click(function(){
//         $('.container').append('<button class="btn">I am a dynamically generated button</button>');
//      });
//      $(document).on('click','.btn', function () {
//          alert('you clicked me');
//      });
// });


// $(document).ready(function(){
//     $('button').click(function(){
//      $('div').append('<h3>I am a new content</h3>');
//     });
//     $('.a').on('mouseover', 'h3', function(){
//      $(this).css('color', 'pink');
//     });
//    });

function operation() {
    // $(document).on('click','h3', function () {
    //     alert('You clicked an H3!---kk');
    // });
    $('h3').click( function() { alert('You clicked an H3!'); });
}

$(document).ready( function() {
    $('button').click( function() {
        $('div').append('<h3>I am a dynamically generated H3</h3>');
        operation();
    });
    operation();
});      