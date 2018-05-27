/* Acá va tu código */

function linkCod(){
	document.getElementById("content-msg-encode").classList.remove("display_none");
	document.getElementById("content-msg-encode").classList.add("display_block");
	document.getElementById("content-msg-decode").classList.remove("display_block");
	document.getElementById("content-msg-decode").classList.add("display_none");
	document.getElementById("link-encode").classList.add("link_active");
	document.getElementById("link-decode").classList.remove("link_active");
}

function linkDecode(){
	document.getElementById("content-msg-decode").classList.remove("display_none");
	document.getElementById("content-msg-decode").classList.add("display_block");
	document.getElementById("content-msg-encode").classList.remove("display_block");
	document.getElementById("content-msg-encode").classList.add("display_none");
	document.getElementById("link-decode").classList.add("link_active");
	document.getElementById("link-encode").classList.remove("link_active");
}