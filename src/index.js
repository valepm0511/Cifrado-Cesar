window.onload = () => {

	/*activado y desactivado de los enlaces de cada pestaña*/

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

	/*rescatando el valor del texto a codificar */

	const btnTextEncode = document.getElementById("btn_encode");
	btnTextEncode.addEventListener("click",function(){
		
		let textEncode = document.getElementById("box-msg-encode").value;
		let number_offset = document.getElementById("n_offset_e").value;
		//document.getElementById("msg-encode-check").innerHTML = textEncode;
		window.cipher.encode(textEncode,number_offset);
	});

	/*rescatando el valor del texto a decodificar*/

	const btnTextDecode = document.getElementById("btn_decode");
	btnTextDecode.addEventListener("click",function(){
		let textDecode = document.getElementById("box-msg-decode").value;
		let number_offset = document.getElementById("n_offset_d").value;
		//document.getElementById("msg-decode-check").innerHTML = textDecode;
	});
	

}