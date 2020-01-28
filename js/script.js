/**
 * @author Aromal Anil <github.com/aromalanil>
 */


$(document).ready(()=>{


    //NavBar Drop Shadow on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('.mobile-logo').addClass('floatingNav');
        } else {
            $('.mobile-logo').removeClass('floatingNav');
        }
    });



    // Menu bar for Mobile
    $('#menu').click(() => {

        //Making Side Menu Bar Visible/Invisible On Menu Click
        $('.nav-bar').toggleClass('navBarVisible');
        


        //Changing Menu Icon
        let img = $('#menu').attr('src');
        $('#menu').attr('src', img === './img/menu.svg' ? './img/close.svg' : './img/menu.svg');


        //Making Side Menu Bar Visible/Invisible When Clicked On Link
        if ($('.nav-bar').hasClass('navBarVisible')) {
            $('.nav-link').click(() => {
                $('.nav-bar').removeClass('navBarVisible');
                $('#menu').attr('src', './img/menu.svg');
            })
        }
    })
})