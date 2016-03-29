const MENU_STATE_WILL_OPEN = "MENU_STATE_WILL_OPEN";
const MENU_STATE_OPEN = "MENU_STATE_OPEN";
const MENU_STATE_WILL_CLOSE = "MENU_STATE_WILL_CLOSE";
const MENU_STATE_CLOSE = "MENU_STATE_CLOSE";


function menuReducer(state, action) {
	switch (action.type) {
		case MENU_OPEN:
			return Object.assign(state, {
				menu: MENU_STATE_WILL_OPEN
			});
		case MENU_DID_OPEN:
			return Object.assign(state, {
				menu: MENU_STATE_OPEN
			});
		case MENU_CLOSE:
			return Object.assign(state, {
				menu: MENU_STATE_WILL_CLOSE
			});
		case MENU_DID_CLOSE:
			return Object.assign(state, {
				menu: MENU_STATE_CLOSE
			});
		default:
			return state
	}
}
