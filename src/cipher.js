window.cipher = {
	encode: (offset,string) => {
		/* Acá va tu código */
		let msgCipher = "";
		//for recorre el texto caracter por caracter
		string = string.toUpperCase();
		for(let i = 0; i < string.length; i++){
			//reconoce espacios vacios
			if(string.charCodeAt(i) == 32){
				msgCipher = " ";
			}else{
				let textChar = string.charCodeAt(i) - 65;
				let charOff = (textChar + parseInt(offset)) % 26;
				let textOk = charOff + 65;
				msgCipher += String.fromCharCode(textOk).toLowerCase();
			}
		}
		document.getElementById("msg-encode-check").innerHTML = msgCipher;
	},
	decode: () => {
		/* Acá va tu código */
	}
}