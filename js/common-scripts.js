
(function($){
	$(function(){
        
        
        
        
        $('.hamburger').click(function() {
            $('body').toggleClass('nav-shown');
        })
        
        

        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }
        
        
        
        if ($('.main-hero-wrap').length) {
            $('.main-hero-wrap').slick({
                arrows:false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
                focusOnSelect: true,
                fade: true,
            })
            $(window).on('resize', function () {
                $('.main-hero-wrap').slick('resize');

            });
        }

        
        
        
        
        if ($('.thunder-thumb-wrap').length) {
            $('.thunder-thumb-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [

                    {
                        breakpoint: 9999,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.thunder-thumb-wrap').slick('resize');

            });
        }
        
        
        
        $('.tropical-tab-trigar ul li').click(function(){
            $('.tropical-tab-trigar ul li').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.tropical-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        
        $(".collectors-faq-acordion").each(function(){
            var $this = $(this);
            $this.find(" > .collectors-faq-acordion-heading").on("click touch", function(){
                $(".collectors-faq-acordion").removeClass("accordion-active")
                $(".collectors-faq-acordion-content").slideUp();
                if($this.find(".collectors-faq-acordion-content:visible").length){
                    $(".collectors-faq-acordion").removeClass("accordion-active")
                    $(".collectors-faq-acordion-content").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".collectors-faq-acordion-content").slideUp();
                    $this.find(" > .collectors-faq-acordion-content").slideDown();
                }
            })
        })

        
        
        if ($('.collectors-clients-fitback-inner').length) {
            $('.collectors-clients-fitback-inner').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.collectors-clients-fitback-inner').slick('resize');
            });
        }
        

        // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                }
                /* else {
                                    if(!$element.hasClass('anim-once')) {
                                        $element.removeClass('in-view');
                                    }
                                }*/
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');


        const updateProperties = (elem, state) => {
            elem.style.setProperty('--x', `${state.x}px`)
            elem.style.setProperty('--y', `${state.y}px`)
            elem.style.setProperty('--width', `${state.width}px`)
            elem.style.setProperty('--height', `${state.height}px`)
            elem.style.setProperty('--radius', state.radius)
            elem.style.setProperty('--scale', state.scale)
        }

	})// End ready function.
   
    
    
    
    

	

})(jQuery)

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}