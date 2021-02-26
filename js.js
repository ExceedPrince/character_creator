window.addEventListener("load", _load);

function _load() {
	
	let gender = document.getElementById("gender-input");
	let race = document.getElementById("race-input");
	let classes = document.getElementById("class-input");
	let bigPic = document.getElementById("bigPic");

	gender.addEventListener("change", genderSym);
	race.addEventListener("change", raceSym);
	classes.addEventListener("change", classesSym);
	btn.addEventListener("click", final);

	function bigPicFunc() {
		bigPic.innerHTML = "";
		bigPic.insertAdjacentHTML("afterbegin", `
		<img src="./img/${gender.value}${race.value}${classes.value}.png" id="bigCharPic">
	`)
	}
	
	function genderSym() {
		document.getElementById("first-sym").innerHTML = "";
		document.getElementById("first-sym").insertAdjacentHTML("afterbegin", `
		<img src="./img/${gender.value}_sym.png" class="sym-pic" alt="">
	`)
		bigPicFunc();
		race.disabled = false;
	}

	function raceSym() {
		document.getElementById("second-sym").innerHTML = "";
		document.getElementById("second-sym").insertAdjacentHTML("afterbegin", `
			<img src="./img/${race.value}_sym.png" class="sym-pic" alt="">
		`)
		bigPicFunc();
		classes.disabled = false;
	}

	function classesSym() {
		document.getElementById("third-sym").innerHTML = "";
		document.getElementById("third-sym").insertAdjacentHTML("afterbegin", `
			<img src="./img/${classes.value}_sym.png" class="sym-pic" alt="">
		`)
		bigPicFunc();
	}
}