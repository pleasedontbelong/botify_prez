$(document).ready(function(){
	$("button").on('click', function(e){
		$("h2").addClass("active");
		$("h2").animate({
			opacity: 0
		}, function(){
			$("h2").html("Tu peux pas test");
		})
		.animate({
			opacity: 1
		});
		$("button").hide();
	});
});