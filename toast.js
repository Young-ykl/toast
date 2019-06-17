
var toast = (function( ) {

	var timer;
	var toast = document.getElementById('toast');

	if (toast == null){
		toast = document.createElement('DIV');
		toast.id = 'toast';
		toast.style.display = 'none';
		toast.style.position = 'fixed';
		toast.style.zIndex = 9999;
		toast.style.top = '50%';
		toast.style.left = '50%';
		toast.style.maxWidth = '160px';
    toast.style.minWidth = '60px';
		toast.style.color = '#fff';
		toast.style.fontSize = '14px';
		toast.style.lineHeight = '20px';
		toast.style.textAlign = 'center';
		toast.style.padding = '10px';
    toast.style.wordWrap = 'break-word';
    toast.style.wordBreak = 'break-all';
    toast.style.overflow = 'hidden';
    toast.style.transform='translate(-50%,-50%)';
		// toast.style.marginTop = '-70px';
		// toast.style.marginLeft = '-108px';
		toast.style.borderRadius = '5px';
		toast.style.backgroundColor = 'rgba(0,0,0,.6)';
		document.body.appendChild(toast);
	}

	return {
		show: function( message, delay, callback ){

			toast.style.display = 'block';
			toast.innerText = message;

			timer && clearTimeout(timer);
			timer = setTimeout(function(){

				toast.style.display = 'none';
				callback && callback();
			}, delay || 1500);
		}
	};
})();

export default toast;
