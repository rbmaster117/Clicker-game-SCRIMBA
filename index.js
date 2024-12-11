let timesClicked = 0
let number = document.getElementById("count");
let savedStr = document.getElementById("saved-str");
console.log(savedStr)
function addOne() {
	timesClicked += 1
	console.log(timesClicked)
	number.textContent = timesClicked
};
function saveNum() {
	savedStr.textContent += " - " + timesClicked
}