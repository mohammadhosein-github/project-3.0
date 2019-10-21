// ------ Navbar Background Chagne On Scroll ------
window.onscroll = () => {
  const nav = document.querySelector('#my-navbar');
  if(this.scrollY <= 10) nav.className = 'navbar navbar-expand-lg navbar-light bg-light fixed-top'; else nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top';
};

