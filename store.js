state = {
	menu: MENU_STATE_CLOSE
};

var reducers = function(state, action) {
	return menuReducer(state, action);
}

document.addEventListener('action', function(e) {
	state = reducers(state, e.detail);
	document.dispatchEvent(new CustomEvent('state'));
}, false);
