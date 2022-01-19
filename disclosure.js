/**
 * Disclosure
 * 
 * hide/show panel
 * btn must have the id of panel in aria-control
 * 
 * @param {el} htmlElement  element that contain btn and panel
 * @param {btn} selector 
 * @param {onclose} function fired when panel is closing
 * @param {onopen} function fired when panel is opening
 * @param {autoclose} boolean set if panel stay open on focuse out
 * 
 */

 function disclosure(params) {
	const el = params.el;
	const btn = el.querySelector(params.btn || 'summary');
	const clicktouch = "ontouchstart" in document.documentElement ? 'touchstart' : 'click';
	const clickOut = (e) => !el.contains(e.target) && close();
	const keyup = (e) => {
		!el.contains(document.activeElement) && close();
		if(e.key === 'Escape'){
			btn.focus();
			close();
		}
	};
	const open = () => {
		btn.setAttribute('aria-expanded', true);
		document.addEventListener('keyup', keyup);
		document.addEventListener('blur', close);
		window.addEventListener(clicktouch, clickOut);
		if (typeof params.onopen === 'function') params.onopen(el);
	};
	const close = () => {
		if(params.autoclose !== false){
			btn.setAttribute('aria-expanded', false);
			document.removeEventListener('keyup', keyup);
			document.removeEventListener('blur', close);
			window.removeEventListener(clicktouch, clickOut);
			if (typeof params.onclose === 'function') params.onclose(el);
		}
	};
	btn.onclick = (e) => {
		e.preventDefault();
		btn.getAttribute('aria-expanded') === 'true' ? close() : open();
	};
}

export default disclosure;