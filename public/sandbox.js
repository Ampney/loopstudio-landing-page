const hamLink = document.getElementById('hamburger');
const navBar = document.getElementById('mobileMenu');


// to open menu
hamLink.addEventListener('click', function(e){

  navBar.classList.remove('hidden');

});


// to close menu
document.getElementById('close').addEventListener('click', function(e){

  navBar.classList.add('hidden');

})
