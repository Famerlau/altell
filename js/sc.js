/* gallery */
$(function() {
    $('#MainGallery').galleryView({
        panel_width: 1000,
        panel_height: 345,
        frame_width: 126,
        frame_height: 71,
        frame_gap: 10,
        show_captions: false,
        show_infobar: false,
        show_filmstrip_nav: false
    });
});
/* sliders */
$(function() {
    $( "#tabs001" ).tabs();
});
    
$(function(){
    $('#slider001').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        prevText: '',
        nextText: ''
        });
});
    
$(function(){
    $('#slider002').bxSlider({
        displaySlideQty: 8,
        moveSlideQty: 3,
        prevText: '',
        nextText: ''
        });
});
/* flag */
$(function(){
    var ulItems = $('.header_top__topMenu_item03_flag_items');
    var click = $('.header_top__topMenu_item03_flag_arrow');
    $(click).click(function(){
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(ulItems).css('height','22');
        }
        else {
            $(ulItems).css('height','116');
            $(click).addClass('active');
        }
    });
});
/* toolips */
$(function(){
    $('.tooltips__popup').css('display','none');
    $('.tooltips').mouseover(function(){
        $(this).find('.tooltips__popup').css('display','block');
    });
    $('.tooltips').mouseout(function(){
        $(this).find('.tooltips__popup').css('display','none');
    })
    $('.tooltips .close').click(function(){
        $('.tooltips__popup').css('display','none');
    });
});
/* slidetoggle */
$(document).ready(function(){
  $(".footer_hide__button").click(function(e){
    e.preventDefault();
    $(".footer_hide__menus").slideToggle("slow");
  });
});
/* go top button */
$(function(){
    $('#go_top').each(function(){
        $(this).click(function(){ 
            $(window).animate({ scrollTop: 0 }, 100);
        });
    });
});
/* right Menu */
$(function(){
    $('.rightMenu__innerMenu').addClass('innerMenu__close');
    $('.rightMenu__innerMenu').click(function(){
        if ($(this).hasClass('innerMenu__close')) {
             $(this).removeClass('innerMenu__close');
             $(this).addClass('innerMenu__open');
        }
        else if ($(this).hasClass('innerMenu__open')) {
            $(this).removeClass('innerMenu__open');
            $(this).addClass('innerMenu__close');
        }
     });
});