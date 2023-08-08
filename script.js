$(document).ready(function(){
    $('.register').on('click', function(){

        //Animation on register form

        $('.register-Form').animate({
            opacity: 1,
            marginLeft: '450px',
            zIndex: 1,
        }, 'slow', 'linear').css('display', 'flex');
        $('.login-Form').animate({
            opacity: 0,
            marginLeft: '-500px',
        }, 'slow', 'linear')
    });

        //Animation on login form
    
     $('#login-btn').click(function(e) {
        // Remove any existing ripples
        $('.ripple').remove();

        // Get button dimensions and click coordinates
        const button = $(this);
        const buttonWidth = button.outerWidth();
        const buttonHeight = button.outerHeight();
        const x = e.pageX - button.offset().left;
        const y = e.pageY - button.offset().top;

        // Create and position the ripple element
        const ripple = $('<div class="ripple"></div>');
        ripple.css({
            width: Math.max(buttonWidth, buttonHeight),
            height: Math.max(buttonWidth, buttonHeight),
            left: x - (buttonWidth / 2),
            top: y - (buttonHeight / 2),
        });

        // Append the ripple to the button and remove it after animation
        button.append(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 600);
    });

      $('.register-btn').click(function(e) {
        // Remove any existing ripples
        $('.ripple').remove();

        // Get button dimensions and click coordinates
        const button = $(this);
        const buttonWidth = button.outerWidth();
        const buttonHeight = button.outerHeight();
        const x = e.pageX - button.offset().left;
        const y = e.pageY - button.offset().top;

        // Create and position the ripple element
        const ripple = $('<div class="ripple"></div>');
        ripple.css({
            width: Math.max(buttonWidth, buttonHeight),
            height: Math.max(buttonWidth, buttonHeight),
            left: x - (buttonWidth / 2),
            top: y - (buttonHeight / 2),
        });

        // Append the ripple to the button and remove it after animation
        button.append(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 600);
    });

    
    
    $('.login-switch').on('click', function(){
        
        $('.register-Form').animate({
            opacity: 0,
            marginLeft: '-500px',
            

        }, 'slow', 'linear').css('display', 'flex');
        $('.login-Form').animate({
            opacity: 1,
            marginLeft: '450px',
            zIndex: 1,
        }, 'slow', 'linear')
    });
    
    // PopUp animation for register button
    
    $('.register-btn').on('click', function(){
        $('.alert-reg').css('display', 'block');
    });

    $('.close').click(function(){
        $('.alert-reg').css('display', 'none');
    });

    
    $('#login-btn').on('click', function(){
        window.open("otherPage.html", '_blank');

    });

    // Animation for opening otherPage.html

    $('.otherPageDiv').click(function(){
    
        if (!$(this).hasClass('active')) {
    
           $('.otherPageDiv.active').removeClass('active').animate({maxHeight: '0'}, '300');
    
           $(this).addClass('active').animate({maxHeight: '1000px'}, '300');
        }
        
    });
 

    
});