// ------ Navbar Background Chagne On Scroll ------
$(function(){
	var navbar = $('#my-navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('onScroll');
		} else {
			navbar.addClass('onScroll');
		}
	});
});

// ------ Navbar Collapse ------
var collapseBtn = document.querySelector('.navbar-toggler');
var navSection = document.querySelector('nav');
collapseBtn.addEventListener('click', function(){
  navSection.classList.toggle('my-collapse');
})

// ------ Navbar Offset ------
var offset = 72;
$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});


// ------ Filter Gallery ------
var filterBtns = document.querySelectorAll('.filter-nav > button');
for(const cur of filterBtns){
  cur.addEventListener('click', function(){
    for(var elem of filterBtns){
      elem.classList.remove('active');
    }
    cur.classList.add('active');
  });
}

$(function () {

  'use strict';

  var $projects = $('.projects');

  $projects.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
  });

  $('.filter-nav > button').on('click', function(){

      var filter = $(this).attr('data-filter');
      $projects.isotope({
          filter: filter
      });
  });

});




