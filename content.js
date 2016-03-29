var $content = document.querySelector('.content');

function contentRender() {
	if(state.menu == MENU_STATE_OPEN) {
		$content.classList.add('content--hidden');
	} else {
		$content.classList.remove('content--hidden');
	}
}

document.addEventListener('state', contentRender);
