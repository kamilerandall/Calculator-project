const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const sumBtn = document.querySelector(".sum-btn");
const numBtns = document.querySelectorAll(".num");
const symbols = document.querySelectorAll(".sym");

let selectedNums = "";
let total;
let previousSym = "";

function changeScreen() {
	screen.innerText = selectedNums ? selectedNums : 0;
}

function clearScreen() {
	selectedNums = "";
	total = 0;
	changeScreen();
}

function deleteLast() {
	selectedNums = selectedNums.slice(0, -1);
	console.log(selectedNums);
	changeScreen();
}

function sumUp() {}

function handleNums(value) {
	selectedNums += value;
	changeScreen();
}

function getTotal() {
	const collectedNum = parseInt(selectedNums);
	if (total === 0) {
		total = collectedNum;
	} else {
		doCalculations(collectedNum);
		selectedNums = total.toString();
		changeScreen();
	}

	selectedNums = "";
}

function doCalculations(collectedNum) {
	switch (previousSym) {
		case "÷":
			total /= collectedNum;
			break;
		case "×":
			total *= collectedNum;
			break;
		case "-":
			total -= collectedNum;
			break;
		case "+":
			total += collectedNum;
			break;
	}
}

clear.addEventListener("click", clearScreen);
backspace.addEventListener("click", deleteLast);
sumBtn.addEventListener("click", sumUp);

numBtns.forEach((num) => {
	num.addEventListener("click", (e) => {
		handleNums(e.target.innerText);
	});
});

symbols.forEach((sym) => {
	sym.addEventListener("click", (e) => {
		getTotal();
		previousSym = e.target.innerText;
	});
});

// symbols.forEach((sym) => {
// 	sym.addEventListener("click", (e) => {
// 		const collectedNum = parseInt(selectedNums) || 0;

// 		if (total === undefined) {
// 			total = collectedNum;
// 		} else {
// 			doCalculations(collectedNum);
// 			selectedNums = total.toString();
// 			changeScreen();
// 		}

// 		selectedNums = "";
// 		previousSym = e.target.innerText;
// 	});
// });
