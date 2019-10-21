// ------ Navbar Background Chagne On Scroll ------
window.onscroll = () => {
  const nav = document.querySelector('#my-navbar');
  if(this.scrollY <= 10) nav.className = 'navbar navbar-expand-lg navbar-light bg-light fixed-top'; else nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top';
};

// (function(){
//   'use strict';

//   $('.filter-nav > button').on('click', function(e){
//     e.preventDefault();
//     $('.filter-nav > button').removeClass('active');
//     $(this).addClass('active');
//   })
// })(jQuery);


const filterBtns = document.querySelectorAll('.filter-nav > button');

for(const cur of filterBtns){
  cur.addEventListener('click', function(){
    for(const elem of filterBtns){
      elem.classList.remove('active');
    }
    cur.classList.add('active');
  });
}









