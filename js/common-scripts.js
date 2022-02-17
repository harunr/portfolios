
(function($){
	$(function(){
        
       
     
       
          // Phone nav click function
        $('#burger').click(function(){
            $('#menu').slideToggle()
        
        }) 

        $('#event-slider').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            buttons: false,
            
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        
        });


   
        $('#testimonial-wrap').slick({
            autoplay:true,
            autoplaySpeed: 500,
            slidesToShow:1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            buttons: false,
            
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        
        });

        
	});// End ready function.
  
})(jQuery);

