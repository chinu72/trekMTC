$(document).ready(function(){
    var HeaderHeight = $('nav').outerHeight();
    $('.one').click(function(e){
        var linkHref = $(this).attr('href');    
    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - HeaderHeight
    });    
        e.preventDefault();        
});   
});