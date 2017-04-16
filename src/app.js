import $ from 'jquery';

const myApp = {};

myApp.decimalAdded = false;
myApp.freshCalc = true;

$('.numBtn').on('click', (event) => {
	event.preventDefault();
	//If the answer should be overwritten...
	if (myApp.freshCalc && !myApp.decimalAdded) {
		$('.answer').text($(event.target).text());
		myApp.freshCalc = false;
	} else if (($('.answer').text() === '0' && $(event.target).text() === '0')) {
		$('.answer').text($(event.target).text());
		myApp.freshCalc = true;
	} else {
		let previousText = $('.answer').text();
		let newText = $('.answer').text() + $(event.target).text();
		$('.answer').text(newText);
		myApp.freshCalc = false;
	}
});

$('.decimal').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */

	if (myApp.freshCalc) {
		$('.answer').text('0.');
		myApp.freshCalc = false;
	} else if (!myApp.decimalAdded) {
		let previousText = $('.answer').text();
		let newText = $('.answer').text() + $(event.target).text();
		$('.answer').text(newText);
		myApp.decimalAdded = true;
	}
});

$('.operator').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	if (!myApp.freshCalc) {
		if ($('.calcChain').text() === '') {
			$('.calcChain').text($('.answer').text() + ' ' + $(event.target).text());
		} else {
			$('.calcChain').text($('.calcChain').text() + ' ' + $('.answer').text() + ' ' + $(event.target).text());
		}
	} else {
		let calcChainLength = $('.calcChain').text().length;
		if(calcChainLength > 0) {
			let currentCalcChain = $('.calcChain').text();
			let shatteredChain = currentCalcChain.split('');
			shatteredChain[shatteredChain.length - 1] = $(event.target).text();
			let newJoinedChain = shatteredChain.join('');
			$('.calcChain').text(newJoinedChain);
		}
	}

	myApp.freshCalc = true;
});

$('.clear').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.answer').text(0);
	myApp.decimalAdded = false;
	myApp.freshCalc = true;
});
