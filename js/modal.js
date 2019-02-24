var elements = $('.modal-overlay, .modal');

$('.link1').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});




var elements1 = $('.infant-model-overlay, .infant-modal');

$('#link2').click(function(){
    elements1.addClass('active');
});

$('.infant-close-modal').click(function(){
    elements1.removeClass('active');
});
