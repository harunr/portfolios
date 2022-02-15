
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
        });
        
        $('.main-nav ul li a').click(function () {
            $("this").removeClass("active");
            $("this").addClass("active");
        });

        
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1){  
                $('.navbar-default').addClass("navbar-shrink");
            }
            else{
                $('.navbar-default').removeClass("navbar-shrink");
            }
        });
        
        if($('#get_value').length){
        $('#get_value').selectric().on('change', function() {
            $selectValue.text($(this).val());
        });
        }  
        
        //Modal form
        if($('#business-size').length){
            $('#business-size').selectric().on('change', function() {
            $selectValue.text($(this).val());
        });
        }
        
        //sticky header
            'use strict';
            var defaults = {
                topOffset: 100, //px - offset to switch of fixed position
                hideDuration: 300, //ms
                stickyClass: 'is-fixed'
            };

            $.fn.stickyPanel = function(options){
                if(this.length == 0) return this; // returns the current jQuery object

                var self = this,
                    settings,
                    isFixed = false, //state of panel
                    stickyClass,
                    animation = {
                        normal: self.css('animationDuration'), //show duration
                        reverse: '', //hide duration
                        getStyle: function (type) {
                            return {
                                animationDirection: type,
                                animationDuration: this[type]
                            };
                        }
                    };

                // Init carousel
                function init(){
                    settings = $.extend({}, defaults, options);
                    animation.reverse = settings.hideDuration + 'ms';
                    stickyClass = settings.stickyClass;
                    $(window).on('scroll', onScroll).trigger('scroll');
                }

                // On scroll
                function onScroll() {
                    if ( window.pageYOffset > settings.topOffset){
                        if (!isFixed){
                            isFixed = true;
                            self.addClass(stickyClass)
                                .css(animation.getStyle('normal'));
                        }
                    } else {
                        if (isFixed){
                            isFixed = false;

                            self.removeClass(stickyClass)
                                .each(function (index, e) {
                                // restart animation
                                // https://css-tricks.com/restart-css-animation/
                                void e.offsetWidth;
                            })
                                .addClass(stickyClass)
                                .css(animation.getStyle('reverse'));

                            setTimeout(function () {
                                self.removeClass(stickyClass);
                            }, settings.hideDuration);
                        }
                    }
                }

                init();

                return this;
            }
            $(function () {
                $('#fixed').stickyPanel();
            });
     

        
        //mixit-up
       /* if($('#Container').length){
        var mixer = mixitup('#Container');
        }*/
        
        
        //Category dropdown filter;
        $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropdown-menu').slideToggle(300);
        });
        $('.dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu').slideUp(300);
        });
        $('.dropdown .dropdown-menu li').click(function () {
            $(this).parents('.dropdown').find('span').text($(this).text());
        });
        
        
       

        
   
        
        
        //Project page
        if($('#services-thumb-wrap').length){
            $('#services-thumb-wrap').slick({
                dots: false,
                arrows:true,
                autoplay:false,
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 1000,
                slidesToShow:1,
                slidesToScroll: 1,
                asNavFor: '#services-nav-slider',
            });
            $(window).on('resize', function () {
                $('#services-thumb-wrap').slick('resize');

            });
        }
        if($('#services-nav-slider').length){
            $('#services-nav-slider').slick({
                arrows:false,
                infinite: false,
                autoplay: true,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '#services-thumb-wrap',
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('#services-nav-slider').slick('resize');

            });
        }
        
        if($('.performance-item-wrap').length){
            $('.performance-item-wrap').slick({
                arrows:true,
                infinite: false,
                autoplay:false,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.performance-item-wrap').slick('resize');

            });
        }
        
        
        if($('.home-blog-item-slider').length){
            $('.home-blog-item-slider').slick({
                arrows:false,
                infinite: false,
                autoplay:false,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                centerMode: true,
                centerPadding: '40px',
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('.home-blog-item-slider').slick('resize');

            });
        }
     
		
        
       

        
        
        
	})// End ready function.
   

})(jQuery)

