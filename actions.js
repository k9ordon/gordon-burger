const MENU_OPEN = "MENU_OPEN";

function menuOpen() {
	return new CustomEvent('action', {
		detail: {
			type: MENU_OPEN
		}
	});
}

const MENU_CLOSE = "MENU_CLOSE";

function menuClose() {
	return new CustomEvent('action', {
		detail: {
			type: MENU_CLOSE
		}
	});
}
