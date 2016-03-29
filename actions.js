const MENU_OPEN = "MENU_OPEN";

function menuOpen() {
	return new CustomEvent('action', {
		detail: {
			type: MENU_OPEN
		}
	});
}

const MENU_DID_OPEN = "MENU_DID_OPEN";

function menuDidOpen() {
	return new CustomEvent('action', {
		detail: {
			type: MENU_DID_OPEN
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

const MENU_DID_CLOSE = "MENU_DID_CLOSE";

function menuDidClose() {
	return new CustomEvent('action', {
		detail: {
			type: MENU_DID_CLOSE
		}
	});
}
