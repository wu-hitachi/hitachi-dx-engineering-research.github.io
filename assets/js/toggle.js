// Source from: https://codepen.io/nanacodesign/pen/eYYrOzy

// const chips = [...document.querySelectorAll('.c-chip')];
const chips = Array.from(document.querySelectorAll('.c-chip'));


chips.map(chip => {
	chip.addEventListener('click', function(e) {
		e.target.classList.toggle('is-active');
		e.target.blur();
	});
});