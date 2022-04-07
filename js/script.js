$("#banner .banner-slider").slick({
    slidesToShow: 4,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 400
})
$("#service .service-slider").slick({
    slidesToShow: 4,
    arrows:false,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 700,
    dots: true
})
$("#testimonial .testi-slider").slick({
    arrows: false,
    dots: true,
    fade: true
})
$("#blog .blog-main").slick({
    slidesToShow:3,
    autoplay: true,
    arrows: false,
    dots:true,
    slidesToScroll: 2
})
$(".up-button i").click(function(){
    $("html,body").animate({
        scrollTop: 0
    })
})
$(window).scroll(function(){
    if($(window).scrollTop() > 500){
        $(".up-button i").fadeIn();
    }else{
        $(".up-button i").fadeOut();
    }
})

$(window).scroll(function(){
    if($(window).scrollTop() > 400){
     $("nav").addClass("fix")
    }else{
        $("nav").removeClass("fix")
    }
})