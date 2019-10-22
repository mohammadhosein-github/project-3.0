// ------ Navbar Background Chagne On Scroll ------
window.onscroll = () => {
  const nav = document.querySelector('#my-navbar');
  if(this.scrollY <= 10) nav.className = 'navbar navbar-expand-lg navbar-light bg-light fixed-top'; else nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top';
};

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





