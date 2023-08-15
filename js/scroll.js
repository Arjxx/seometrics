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

    const facebook = document.getElementById('facebook'); 
    const fiicon = document.getElementById('fbk');         
    const twitter = document.getElementById('tweet');         
    const TW = document.getElementById('twt');         
    const insta = document.getElementById('insta')
    const inst = document.getElementById('inst')

    facebook.addEventListener('mouseover', function(event) {
      fiicon.style.color = '#4267B2';  
    });
    facebook.addEventListener('mouseout', function(event) {
        fiicon.style.color = ''; 
    });
    

    twitter.addEventListener('mouseover', function(event) {
      twt.style.color = '#00acee';
    });

    twitter.addEventListener('mouseout', function(event) {
      twt.style.color = '';
    });
    insta.addEventListener('mouseover', function(event) {
      inst.style.color = '#E1306C';
    });

    insta.addEventListener('mouseout', function(event) {
      inst.style.color = '';
    });





	
  

		





});

