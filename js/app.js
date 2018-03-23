$('.owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    margin:10,
    nav:false,
    items:1,
    mouseDrag:false,
    autoplay:false,
    video:true,
    lazyLoad:true,
    center:true,
    merge:true,
    responsive:{
        320:{
            videoWidth: 320,
            videoHeight: 300
            },
        375:{videoWidth: 375,
             videoHeight: 300
            },
        667:{videoWidth: 667,
             videoHeight: 350
        },
        768:{videoWidth: 768,
             videoHeight: 350
        },
        1024:{videoWidth: 1024,
             videoHeight: 450
        },
        1170:{videoWidth: 1170,
              videoHeight: 450}
        }
})

window.onload = function() {

    var scrollTop, skillOffset;
	var header = document.getElementById('header');
    var skillSection = document.getElementById('skill');
    
	window.onscroll = function() {
		scrollTop = window.pageYOffset;
		skillOffset = skillSection.offsetTop - 500;

		if (scrollTop >= 250) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}

		if (scrollTop > skillOffset) {
            skillSection.classList.add('active');
		} else {
            skillSection.classList.remove('active');
 		}
    }
  
   //window onload end 
}