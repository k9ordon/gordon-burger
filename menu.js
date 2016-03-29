var $menu = document.querySelector('#menu'),
	$menu_close = $menu.querySelector('.menu-close');

$menu_close.addEventListener("click", function() {
	document.dispatchEvent(menuClose());
});

function menuRender() {
	if(state.menu) {
		$menu.classList.add('menu--open');
	} else {
		$menu.classList.remove('menu--open');
	}
}

document.addEventListener('state', menuRender);
