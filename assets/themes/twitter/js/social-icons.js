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
  
  var hiding = $("p#hiding").text().substr(0,80) + '<a>...read more.</a>';
  $("p#hiding").after('<p id="open" style="display: none;">' + hiding + '</p>');

  $("p#hiding").delay(2500).slideUp('slow', function(){    
    $("p#open").slideDown('slow');
  });
  $("p#open").mouseover(function(){    
    $("p#hiding").slideDown('slow');
    $("p#open").slideUp('slow');
  });
});