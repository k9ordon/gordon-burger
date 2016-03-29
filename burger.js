var $burger = document.querySelector('.burger');

$burger.addEventListener("click", function() {
	document.dispatchEvent(menuOpen());
});

function burgerRender() {
	if(state.menu) {
		$burger.classList.add('burger--off');
	} else {
		$burger.classList.remove('burger--off');
	}
}

document.addEventListener('state', burgerRender);
