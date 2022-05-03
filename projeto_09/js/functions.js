$(function(){
    $('.desktop a').hover(function(){
        $('.desktop li').removeClass('selected');
        $(this).parent().addClass('selected');
    })
    $('nav.mobile h3').click(function(){
        $('nav.mobile ul').slideToggle(1000);
    })
   
});