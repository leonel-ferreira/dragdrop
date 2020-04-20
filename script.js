$(function(){

	$('#objeto').bind('mousedown', function(){
		$('#objeto').bind('mousemove', function(e){
			var x = e.originalEvent.pageX;
			var y = e.originalEvent.pageY;

			var width = $(this).width();
			var height = $(this).height();
			
			$('#objeto').css('left', (x - (width/2))+'px');
			$('#objeto').css('top', (y - (height/2))+'px');
		});
	});

	$('#objeto').bind('mouseup', function(){
		$('#objeto').unbind('mousemove');
	});
});