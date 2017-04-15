import $ from 'jquery';

$('.numBtn').on('click', (event) => {
	event.preventDefault();
	if($('.answer').text() == 0) {
		$('.answer').text($(event.target).text());
	}
	else {
		let previousText = $('.answer').text();
		let newText = $('.answer').text() + $(event.target).text();
		$('.answer').text(newText);
	}
});



