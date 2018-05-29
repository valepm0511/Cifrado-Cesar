window.cipher = {
	encode: (string, offset) => {
		/* Acá va tu código */
		let msgCipher = "";
		//for recorre el texto caracter por caracter
		for(let i = 0; i < string.length; i++){
			//reconoce espacios vacios
			if(string.charCodeAt(i) == 32){
				msgCipher = " ";
			}else{
				let textChart = (string.charCodeAt(i) - 65 + offset) %26 + 65;
				console.log("variable textChart-->"+textChart);
				msgCipher += String.fromCharCode(textChart).toLowerCase();
				console.log("variable msgCipher-->"+msgCipher);
			}
		}
		document.getElementById("msg-encode-check").innerHTML = msgCipher;
		
	},
	decode: () => {
		/* Acá va tu código */
	}
}