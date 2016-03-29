var $menu = document.querySelector('#menu'),
	$menu_close = $menu.querySelector('.menu-close');

$menu_close.addEventListener("click", function() {
	document.dispatchEvent(menuClose());
});

var menuTimeout,
	menuStateCache;

function menuUpdate() {
	if(state.menu == menuStateCache) return;
	else menuStateCache = state.menu;

	// if (menuTimeout) cleanTimeout(menuTimeout);

	if (state.menu == MENU_STATE_WILL_OPEN) {
		$menu.classList.add('menu--willOpen');
		menuTimeout = setTimeout(function() {
			document.dispatchEvent(menuDidOpen());
		},500);
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
		menuTimeout = setTimeout(function() {
			document.dispatchEvent(menuDidClose());
		},500);
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
