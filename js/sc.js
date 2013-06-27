/* gallery */
$(function() {
    $('#MainGallery').galleryView({
        panel_width: 1000,
        panel_height: 345,
        frame_width: 126,
        frame_height: 71,
        frame_gap: 10,
        show_captions: true,
        show_infobar: false,
        show_filmstrip_nav: false,
        autoplay: true,
        transition_interval: 3400,
        panel_animation: 'slide'
    });
});
$(function() {
    $('.gv_panelWrap').click(function() {
        document.location.href = $('.gv_panelWrap').attr('href');
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
            $(ulItems).css('height','56');
            $(click).addClass('active');
        }
    });
});
/* toolips */
$(function(){
    $('.tooltips__popup').css('display','none');
    $('.tooltips').mouseover(function(){
        $(this).find('.tooltips__popup').css('display','block');
        $('.content__indexPage__block03_learn').css('z-index', '10');
    });
    $('.tooltips').mouseout(function(){
        $(this).find('.tooltips__popup').css('display','none');
        $('.content__indexPage__block03_learn').css('z-index', '101');
    })
    $('.tooltips .close').click(function(){
        $('.tooltips__popup').css('display','none');
    });
});
/* slidetoggle */
$(document).ready(function(){
  $(".footer_hide__button").click(function(e){
    e.preventDefault();
    $(".footer_hide__menus").slideToggle("slow", function() {
        if ($(this).css("display") == 'block') {
            $('.footer_hide__button').addClass('down');
        }
        else if ($(this).css("display") == 'none') {
            $('.footer_hide__button').removeClass('down');
        }
    });
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
/* image position */
$(function(){
    var img = $('.content__innerPage__content img');
    $(img).each(function(){
    var align = $(this).attr("align");
    if (align == "left") {
       $(this).addClass("image__left");
    }
    else if (align == "right") {
       $(this).addClass("image__right");
    }
    });
});
/* sitemap */
$(function() {
    /*$('.map-columns li').find('ul').parent().addClass('toggleSitemap')*/
    $('.toggleSitemap').find('ul').css('display','none')
    $('.toggleSitemap').click(function(){
        $(this).parent().find('ul').slideToggle('slow');
    });
});
/* accordion vacanse */
$(function() {
    $("#acc_vacanse").accordion({
      collapsible: true,
      heightStyle: "content"
    });
  });
/* PlaceHolder */
$(function() {
    $('[placeholder]').placeholder();
});
/* select */
$(function(){
    $('.styled').customSelect();
});
