window.onload = () =>{
	/* Acá va tu código */
	const linkActive = document.getElementById("link-encode");
	const linkDesactive = document.getElementById("link-decode");

	linkActive.addEventListener("click",function(){
		document.getElementById("link-encode").classList.add("link_active");
		document.getElementById("link-decode").classList.remove("link_active");
		document.getElementById("content-msg-encode").classList.remove("display_none");
		document.getElementById("content-msg-encode").classList.add("display_block");
		document.getElementById("content-msg-decode").classList.remove("display_block");
		document.getElementById("content-msg-decode").classList.add("display_none");
	});
	linkDesactive.addEventListener("click",function(){
		document.getElementById("link-encode").classList.remove("link_active");
		document.getElementById("link-decode").classList.add("link_active");
		document.getElementById("content-msg-decode").classList.remove("display_none");
		document.getElementById("content-msg-decode").classList.add("display_block");
		document.getElementById("content-msg-encode").classList.remove("display_block");
		document.getElementById("content-msg-encode").classList.add("display_none");
	});

}