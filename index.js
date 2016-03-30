var controllerMenuStateCache = null,
	scrollPosition = null;

function controllerIndexUpdate() {
	if(state.menu == controllerMenuStateCache) return;
	else controllerMenuStateCache = state.menu;

	if(state.menu == MENU_STATE_WILL_OPEN) {
		scrollPosition = document.body.scrollTop;
	} else if(state.menu == MENU_STATE_OPEN) {
		window.scrollTo(0, 0);
	} else if(state.menu == MENU_STATE_WILL_CLOSE) {
		setTimeout(function() {
			window.scrollTo(0, scrollPosition);
		}, 0);
	}
}

document.addEventListener('state', controllerIndexUpdate);
