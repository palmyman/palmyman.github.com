$(document).ready(function(){
  $("footer img").mouseover(function(){
  	var oldsrc = $(this).attr('src');
  	var newsrc = oldsrc;
  	newsrc = newsrc.replace('black', 'color');
	  $(this).attr('src', newsrc);
  });
  $("footer img").mouseout(function(){
  	var oldsrc = $(this).attr('src');
  	var newsrc = oldsrc;
  	newsrc = newsrc.replace('color', 'black');
	  $(this).attr('src', newsrc);
  });
  
  var hiding = $("p#hiding").text();
  var lenght = hiding.indexOf(' ', 85);
  hiding = hiding.substr(0, lenght) + '<a> ..read more.</a>';
  $("p#hiding").after('<p id="open" style="display: none; opacity: 0.3;">' + hiding + '</p>');

  $("p#hiding").delay(2500).slideUp('slow', function(){    
    $("p#open").slideDown('slow');
  });
  $("p#open").click(function(){
    $("p#open").slideUp('slow', function(){
      $("p#hiding").slideDown('slow');  
    });
  });
});