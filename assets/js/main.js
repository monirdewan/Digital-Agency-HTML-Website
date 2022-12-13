$(document).ready(function(){
    //One Page Nav Active
    $('#nav').onePageNav({
        currentClass:'curent',
    });
    //Magnipic Popup Active
    $('.project-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:'true'
        }
    });
    //Video Popup Active by Mafnipic Popup
    $('.video-popup').magnificPopup({
        type:'iframe',
        
    });

    //Mobile Menu Active

    $('#nav').slicknav();
    //Counter Up  Active
    $('.counterup').counterUp({
       
    });
    //Slick Slider Active
    $('.slider-item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        dots:true,
        loop:true,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    arrows:false,
                },
            },
            {
                breakpoint:480,
                
                    settings:{
                        arrows:false,
                        slidesToShow:1,
                    },
                },
            
        ],
        
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
      });
      // Header Sticky Menu 
    $(window).on('scroll', function(){
        if($(this).scrollTop() >50){
            $('.header-area').addClass('sticky');
        }else{
            $('.header-area').removeClass('sticky');
        }
    })
})