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