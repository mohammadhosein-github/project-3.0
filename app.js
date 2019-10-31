// ------ Navbar Background Chagne On Scroll ------
// window.onscroll = () => {
//   const nav = document.querySelector('#my-navbar');
//   if(this.scrollY <= 10){
//     nav.className = 'navbar navbar-expand-lg navbar-light fixed-top';
//   }else{
//     nav.className = 'navbar navbar-expand-lg navbar-dark fixed-top onScroll';
//   }
// };

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

// ------ Navbar Toggler ------
// const navBtn = document.querySelector('.navbar-toggler');
// const navMenu = document.querySelector('#navbarMenu');
// navBtn.addEventListener('click', function(){
//   navMenu.className = ''
// });

// ------ Filter Gallery ------
const filterBtns = document.querySelectorAll('.filter-nav > button');
for(const cur of filterBtns){
  cur.addEventListener('click', function(){
    for(const elem of filterBtns){
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

var offset = 72;
$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});



