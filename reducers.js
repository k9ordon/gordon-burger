function menuReducer(state, action) {
	switch (action.type) {
		case MENU_OPEN:
			return Object.assign(state, {
				menu: true
			});
		case MENU_CLOSE:
			return Object.assign(state, {
				menu: false
			});
		default:
			return state
	}
}
