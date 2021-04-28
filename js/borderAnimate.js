

$(document).ready(function() {
  
    var $skillSet = ['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY', 'PHP'];
    var $skillColors = ['#e34c26', '#1b73ba', '#f8dc3d', '#131b28', '#777bb3'];
    var $skillEntry = $('.entry');
    
    // Functions START
    var $counter = 0;
    function changeSkillSetColours() {
      $skillEntry.text($skillSet[$counter]).css('color', $skillColors[$counter]);
      var $colors = $skillColors[$counter];
  
      $('.borders').removeAttr('style');
      $('.borders').css('backgroundColor', $colors );
      $('.top-border').animate({
          'width': '300px'
      }, 500);
  
      $('.right-border').delay(450).animate({
          'height': '150px'
      },250);
  
      $('.bottom-border').delay(700).animate({
          'width': '300px'
      }, 500);
  
      $('.left-border').delay(1150).animate({
          'height': '150px'
      }, 250);
  
      $counter++;
      if($counter == 5) {
  
        $counter = 0;
      }
    }
    // Function END
  
    //Here we are calling the function on the HTML skil
    changeSkillSetColours();
    //Set Interval to add a delay to each animation loop
    setInterval(function(){
        changeSkillSetColours();
     }, 3000);
  });
  
  