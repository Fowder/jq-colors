// good luck !

function main() {
	$('.color').each(function(){
		var color = $(this).data('color');
		$(this).attr('style', 'background-color:'+color+'');
	});

$('.color').click(function(){
	var check = $('#modify-texte').is(':checked');
	var color = $(this).data('color');

		if (check){
		$('.main').css('color', color);

		}else{

		$('.main').css('background-color', color);
	}
});
}

$(document).ready(function(){
	main();
});