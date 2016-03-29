var $burger = document.querySelector('.burger');

$burger.addEventListener("click", function() {
	document.dispatchEvent(menuOpen());
});

function burgerRender() {
	if(state.menu == MENU_STATE_OPEN || state.menu == MENU_STATE_WILL_OPEN) {
		$burger.classList.add('burger--off');
	} else {
		$burger.classList.remove('burger--off');
	}
}

document.addEventListener('state', burgerRender);
