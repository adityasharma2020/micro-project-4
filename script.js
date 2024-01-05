const resultScreen = document.querySelector('.resultScreen');
const input = document.getElementById('input');
const options = document.querySelectorAll('.input');

let expression = '';

options.forEach((option) => {
	option.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
	const buttonText = event.target.innerText;

	if (buttonText === '=') {
		calculateResult();
	} else if (buttonText === 'DEL') {
		deleteLastInput();
	} else if (buttonText === 'RESET') {
		resetInput();
	} else {
		expression += buttonText;
		console.log(expression);
		updateDisplay();
	}
}

function calculateResult() {
	try {
		const modifiedExpression = expression.replace(/X/g, '*');
		const result = evaluateExpression(modifiedExpression);
		expression = result.toString();
		updateDisplay();
	} catch (error) {
		expression = 'Error';
		updateDisplay();
	}
}

function deleteLastInput() {
	expression = expression.slice(0, -1);
	updateDisplay();
}

function updateDisplay() {
	input.value = expression || '0';
}

function resetInput() {
	expression = '';
	updateDisplay();
}

function evaluateExpression(expression) {
	// const tokens = expression.match(/(\d+|\S)/g);
	// console.log('tokens', tokens);
	// const stack = [];
	// for (const token of tokens) {
	// 	if (!isNaN(parseFloat(token))) {
	// 		stack.push(token);
	// 	} else if (['+', '-', 'X', '/'].includes(token)) {
	// 		// handle the operator

	// 	}
	// }

	// console.log(stack);

	const result = eval(expression);
	return result;
	console.log(result);
}
