const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const numBtns = document.querySelectorAll(".num");
const symbols = document.querySelectorAll(".sym");

let selectedNum = "";
let total = null;
let previousSym = "";

function changeScreen(value) {
	screen.innerText = value;
}

function clearScreen() {
	selectedNum = "";
	total = null;
	changeScreen(0);
}

function deleteLast() {
	selectedNum = selectedNum.slice(0, -1);
	changeScreen(selectedNum || 0);
}

function doCalculations(currNumber) {
	switch (previousSym) {
		case "÷":
			total /= currNumber;

			break;
		case "×":
			total *= currNumber;
			break;
		case "-":
			total -= currNumber;
			break;
		case "+":
			total += currNumber;
			break;
	}
}

clear.addEventListener("click", clearScreen);
backspace.addEventListener("click", deleteLast);

numBtns.forEach((num) => {
	num.addEventListener("click", (e) => {
		selectedNum += e.target.innerText;
		changeScreen(selectedNum);
	});
});

symbols.forEach((sym) => {
	sym.addEventListener("click", (e) => {
		const currNumber = parseInt(selectedNum) || 0;

		if (total === null) {
			total = currNumber;
		} else {
			doCalculations(currNumber);
			changeScreen(total.toString());
		}

		selectedNum = "";
		previousSym = e.target.innerText;
	});
});
