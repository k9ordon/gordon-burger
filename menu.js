var $menu = document.querySelector('#menu'),
	$menu_close = $menu.querySelector('.menu-close');

$menu_close.addEventListener("click", function() {
	document.dispatchEvent(menuClose());
});

var menuTimeout,
	menuStateCache;

$menu.addEventListener("animationend", function(e) {
	if (e.animationName === "menuOpen") {
		document.dispatchEvent(menuDidOpen());
	} else if (e.animationName === "menuClose") {
		document.dispatchEvent(menuDidClose());
	}
}, false);

function menuUpdate() {
	if (state.menu == menuStateCache) return;
	else menuStateCache = state.menu;

	if(state.menu == MENU_STATE_CLOSE || state.menu == MENU_STATE_WILL_CLOSE || state.menu == MENU_STATE_WILL_CLOSE) {
		$menu_close.classList.add('menu-close--off');
	} else {
		$menu_close.classList.remove('menu-close--off');
	}

	if (state.menu == MENU_STATE_WILL_OPEN) {
		$menu.classList.add('menu--willOpen');
	} else {
		$menu.classList.remove('menu--willOpen');
	}

	if (state.menu == MENU_STATE_OPEN) {
		$menu.classList.add('menu--open');
	} else {
		$menu.classList.remove('menu--open');
	}

	if (state.menu == MENU_STATE_WILL_CLOSE) {
		$menu.classList.add('menu--willClose');
	} else {
		$menu.classList.remove('menu--willClose');
	}

	if (state.menu == MENU_STATE_CLOSE) {
		$menu.classList.add('menu--close');
	} else {
		$menu.classList.remove('menu--close');
	}
}

document.addEventListener('state', menuUpdate);
menuUpdate();
