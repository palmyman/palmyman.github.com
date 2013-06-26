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
  
  $("p#hiding").after('<div id="open" style="display: none;">roll down</div>');
  $("p#hiding").delay(2500).slideUp('slow', function(){    
    $("div#open").slideDown('slow');
  });
  $("div#open").mouseover(function(){    
    $("p#hiding").slideDown('slow');
    $("div#open").slideUp('slow');
  });
});