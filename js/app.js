$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
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