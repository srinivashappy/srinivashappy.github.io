

window.onscroll = function () {
	var top = window.pageXOffset ? window.pageXOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
	if(top > 157){
		document.getElementById("header").style.position = "fixed";
		document.getElementById("header").style.zIndex = "999";
		document.getElementById("header").style.background = "#fff";
		
	}
	else{
		document.getElementById("header").style.position = "relative";
	}
}