   $(document).ready(function(){

    const facebook = document.getElementById('facebook'); 
    const fiicon = document.getElementById('fbk');         
    const twitter = document.getElementById('tweet');         
    const twt = document.getElementById('twt');         
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





   })
    