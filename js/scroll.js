$(document).ready(function(){

    // Storing the reference to the element
  const upButton = document.getElementById('upbtn');

  // Adding the scroll event listener
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      upButton.classList.add('showup');
    } else {
      upButton.classList.remove('showup');
    }
  });

  // Adding the click event listener
  upButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

    





	
  

		





});

