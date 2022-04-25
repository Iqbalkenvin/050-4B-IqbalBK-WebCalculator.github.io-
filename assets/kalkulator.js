const calculator = {
	displayNumber: '0',
	operator: null,
	firstNumber: null,
	waitingForSecondNumber: false
};

function updateDisplay() {
	document.querySelector(#displayNumber).innertext = calculator.displayNumber;	
}

function clearCalculator() {
	calculator.displayNumber = '0';
	calculator.operator = null;
	calculator.firstNumber = null;
	calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
	if (calculator.displayNumber === '0'){
		calculator.displayNumber = digit
;}else{
	calculator.displayNumber+= digit;
}
}

function inverseNumber() {
	if(calculator.displayNumber === '0'){
		return;
	}
	calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator){
	if(!calculator.waitingForSecondNumber){
		calculator.operator = operator;
		calculator.waitingForSecondNumber = true;
		calculator.firstNumber = calculator.displayNumber;
		calculator.displayNumber = '0';
	}
	else{
		alert('Operator sudah ditetapkan')
	}
}

function performCalculation(){
	if(calculator.firstNumber == null || calculator.operator == null){
		alert("Anda belum menetapkan operator");
		return;
	}
	let result = 0;
	if(calculator.operator === "+"){
		result = parseInt(calculator.firstNumber)+parseInt(calculator.displayNumber);
	}else{
		result = parseInt(calculator.firstNumber)-parseInt(calculator.displayNumber)
	}

	calculator.displayNumber = result;
}