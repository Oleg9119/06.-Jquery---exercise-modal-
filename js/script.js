$(document).ready(function() {
    $('a[href="#sheldure"], a[href="#tour"], .main_btn.text-center.contact').on('click', function() {
        $('.overlay').fadeToggle();
        $('.modal').slideToggle();
    });

    $('button.close').on('click', function() {
        $('.overlay').fadeToggle();
        $('.modal').slideToggle();
    });
});