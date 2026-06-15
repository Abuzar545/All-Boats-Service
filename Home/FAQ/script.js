$(document).ready(function(){
    $(".faqHeader").on("click", function(){
        $(this).find(".faqIcon").attr("src","../../assets/FAQ/pluseicon.png")
        $(this).next(".faqAnswerWrapper").slideToggle()
    })
})
$(document).ready(function(){
            $(".hero-slider").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 6000,
                smartSpeed: 800,
                navText: ["&#x2190;", "&#x2192;"],
                responsive: {
                    0: {
                        nav: false 
                    },
                    768: {
                        nav: true
                    }
                }
            });
        });
$(document).ready(function(){
    $(".inventery-menu").on("click",function(){
        $(".menuinv-rapper").fadeToggle()
        $(".service-menu-rapper").fadeOut()
        $(".ser-menu-raper").fadeOut()

    })
})        
$(document).ready(function(){
    $(".service-menu").on("click",function(){
        $(".service-menu-rapper").fadeToggle()
         $(".ser-menu-raper").fadeOut()
         $(".menuinv-rapper").fadeOut()
    })
}) 
$(document).ready(function(){
    $(".resources-menu").on("click",function(){
        $(".ser-menu-raper").fadeToggle()
        $(".menuinv-rapper").fadeOut()
        $(".service-menu-rapper").fadeOut()
    })
}) 
$(document).ready(function(){
    $("#mobile-manu-icon-item").on("click",function(){
        $(".mobile-menu-items").slideToggle()
        $(".ser-menu-raper").fadeTOut()
        $(".menuinv-rapper").fadeOut()
        $(".service-menu-rapper").fadeOut()
    })
}) 