$('.topRight > .open').click(function(){
    $('.menu_open').animate({right:0},300,"swing");
    $('.dark, .menu_open >.close').css({'display':'block'}); 
});

$('.dark').click(function(){
    $('.dark').css({'display':'none'});
    $('.menu_open').animate({right:-540},300,"swing");

});





const swiper = new Swiper('.swiper', {

    loop: true,


    pagination: {
        el: '.swiper-pagination',
        type:"fraction"
    },


    navigation: {
        nextEl: '.next_btn',
        prevEl: '.prev_btn',
    },

    
    });


    