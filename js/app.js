$('.owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    margin:10,
    nav:false,
    items:1,
    mouseDrag:false,
    autoplay:false,
    video:true,
    center:true,
    merge:true,
    videoWidth: 1170,
    videoHeight: 560
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