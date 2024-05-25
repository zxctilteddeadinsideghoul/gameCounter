// 0. валидация значения, введенного пользователем в поле ввода
const inputChange = (event) => {
	if (event.target.value < 1) {
	  	event.target.value = 1;
	} else if (event.target.value > 100) {
	  	event.target.value = 100;
	}
  }

  	let countAttempts = 0;
  	const counter = document.getElementById("counter");

  	const countUp = () => {	
		countAttempts += 1;

		counter.textContent = `Количество попыток: ${countAttempts}`;
  	}
  
  // 1. сгенерируем число
  	const secretValue = Math.floor(Math.random() * 100) + 1;
  
  // 2. вводим данные (триггерит выполнение функции)
	const checkValue = () => {
	const userInput = document.getElementById('user-input');
	const button = document.getElementById('button');
	const output = document.getElementById('output');
	
	if (!userInput.value) {
	  output.textContent = 'Упс! Введено некорректное значение';
	}
	
	// 3. в этой же функции сравниваем числа и выводим результат
	if (userInput.value == secretValue) {
	  output.textContent = 'Поздравляем, вы угадали число!'
	  output.setAttribute('class', 'success');
	  userInput.disabled = true;
	  button.disabled = true;
	} else {
	  const moreOrLess = userInput.value > secretValue ? 'много' : 'мало';
	  output.textContent = `Слишком ${moreOrLess}, попробуйте еще раз.`;
	  output.setAttribute('class', 'error');
	}
  }
  
  console.log(typeof inputChange, secretValue, typeof checkValue)
  
  // посчитать количество попыток
  // статья в доке Хранение по ссылке и по значению