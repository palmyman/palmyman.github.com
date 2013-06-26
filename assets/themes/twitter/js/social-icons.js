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
  
    $("p#hiding").delay(1500).slideUp(800);
  
});