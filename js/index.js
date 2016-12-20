document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";

	<!-- Initialize Swiper -->
		var menuButton = document.getElementsByClassName('button')[0]
		var myBtn = document.getElementById('myBtn')
		 
		var toggleMenu = function(){			
			swiper1.slideNext();
        	swiper1.activeIndex =1;        	
		}
		
		var swiper1 = new Swiper('.swiper1', {	
			initialSlide:0,
			onInit:function(){
				menuButton.addEventListener('click', toggleMenu, false);
				
			},
			onSlideChangeStart: function(slider) {

				if (swiper1.activeIndex == 0){	
					menuButton.removeEventListener('click', toggleMenu, false)
				}else if(swiper1.activeIndex == 1){
					activeIndex = 0
				}

					
			},
			slidesPerView: 'auto',
			onSlideChangeEnd: function(slider) {
				console.log(swiper1.activeIndex)
					console.log(swiper1.activeIndex)
					menuButton.addEventListener('click', toggleMenu, false)
			}
			, slideToClickedSlide: 'auto'
		})
		var swiper2 = new Swiper('.swiper2', {
	        pagination: '.swiper-pagination',
	        effect: 'coverflow',
	        grabCursor: true,
	        centeredSlides: true,
	        slidesPerView: 'auto',
	        coverflow: {
	            rotate: 50,
	            stretch: 0,
	            depth: 100,
	            modifier: 1,
	            slideShadows : false
	        }
	    });

 function my(){
 	window.history.back(-1); 
 }

