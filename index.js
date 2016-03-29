var controllerStateCache = null,
	scrollPosition = null;

function controllerIndexRender() {
	if (state.menu && controllerStateCache !== true) {
		scrollPosition = document.body.scrollTop;
	} else if (!state.menu && controllerStateCache !== false) {
		setTimeout(function() {
			window.scrollTo(0, scrollPosition);
		}, 0);
	}

	controllerStateCache = state.menu;
}

document.addEventListener('state', controllerIndexRender);
