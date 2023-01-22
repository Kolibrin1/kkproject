document.addEventListener("DOMContentLoaded", function () {


    $("#regBtn").click(function () {
        openForm();
        
        animate({
            duration: 700,
            timing: function circ(timeFraction) {
              return 0.3;
            },
            draw: function(progress) {
              $(".FormVue").css("left", 110-progress*110+"px");
              $(".FormVue").css("bottom", 45-progress*45+"px");
              $(".FormVue").css("width",  progress * 100 + "%");
              $(".FormVue").css("height",  progress * 100 + "%");
              $("#formavue").css("opacity", progress);
              $("#close_regBtn").css("opacity", progress);
            }
          });
    });

    $(".FormVue").click(function (event) {
        
        if((String)(event.target) === "[object HTMLSpanElement]") 
        {
            $("#messageSuccess").css("display", "none");
            $("#messageError").css("display", "none");
            openHome();
            animate({
                duration: 400,
                timing: function circ(timeFraction) {
                return 0.3;
                },
                draw: function(progress) {
                $(".FormVue").css("left", progress*110+"px");
                $(".FormVue").css("bottom", progress*45+"px");
                $(".FormVue").css("width",  (1- progress) * 100 + "%");
                $(".FormVue").css("height",  (1 - progress) * 100 + "%");
                $("#formavue").css("opacity", 1-progress);
                $("#close_regBtn").css("opacity", 1-progress);
                }
            });
        }
    });

});


function openForm() {    
    history.pushState({page: 2}, "Form", "?form");
    return false;
}

function openHome() {    
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

addEventListener("popstate", function () {
    openHome();
        $(".FormVue").hide(300);
        $("#formavue").hide(300);
}, false);

function changeBtn() { 
    if ($("#sub").css("opacity") != 0.2) {
        $("#sub").css("pointer-events", "none");
        $("#sub").css("opacity", "0.2"); 
    } else { 
        $("#sub").css("pointer-events", "unset");
        $("#sub").css("opacity", "1"); 
    }
}

function animate({timing, draw, duration}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {

      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      
      let progress = timing(timeFraction);
  
      draw(progress); 
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}



$(document).ready(function(){

    //УВЕЛИЧЕНИЕ ТАРИФОВ ПРИ НАВЕДЕНИИ

    $('.plans-card-starter').mouseover(function(){
        $(this).addClass('scaled');
        $('.plans-card-business').addClass('business-scale');
    });
    $('.plans-card-starter').mouseout(function(){
        $(this).removeClass('scaled');
        $('.plans-card-business').removeClass('business-scale');
    });
    $('.plans-card-vip').mouseover(function(){
        $(this).addClass('scaled');
        $('.plans-card-business').addClass('business-scale');
    });
    $('.plans-card-vip').mouseout(function(){
        $(this).removeClass('scaled');
        $('.plans-card-business').removeClass('business-scale');
    });
        
    // СЛАЙДЕР ДЛЯ ОТЗЫВОВ

    $('.reviews-slider').on(`init reInit`, function (event, slick) {
        $('.slick-slide-num-current').text('0' + 1 + ' '); 
    })
    $('.reviews-slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' '); 
    })
    $('.reviews-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        easing: 'ease',
        appendArrows: '.slick-arrows',
        prevArrow: '<span class="slick-prev"><</span>',
        nextArrow: '<span class="slick-next">></span>'

    });


    // ПАРТНЕРЫ СЛАЙД ПЕРВЫЙ
    $('.partners-slider-first').slick({
        dots:false,
        slidesToScroll: 1,
        slidesToShow: 6,
        arrows:false,
        easing: 'ease',
        pauseOnFocus:true,
        autoplay:true,
        autoplaySpeed:2400,
        speed:1400,
        responsive:[{
            breakpoint:480,
            settings:{
                slidesToScroll:1,
                slidesToShow:2,
                variableWidth:true,
                centerMode: false,
            }
        }],
    });
    
    // ПАРТНЕРЫ СЛАЙД ВТОРОЙ
    $('.partners-slider-second').slick({
        dots: false,
        slidesToScroll: 2,
        slidesToShow: 6,
        arrows: false,
        easing: 'ease',
        pauseOnFocus: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1800,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
                variableWidth: true,
                centerMode: true,
                focusOnSelect: true
            }
        }],
    });
});
