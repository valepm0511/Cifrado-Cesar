window.cipher = {
	encode: (offset,string) => {
		//mensaje recibido
		let msgCipher = "";
		//inicio recorrido de caracteres
		for(let i = 0; i < string.length; i++){
			//identificacion de espacios vacios
			if(string.charCodeAt(i) === 32){
				msgCipher += " ";
			}else{
				//aplicando formula de cifrado
				let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
				//conviertiendo el texto cifrado en minusculas
				msgCipher += String.fromCharCode(textChar).toLowerCase();
			}
		}
		//retornar respuesta
		return msgCipher;
	},
	decode: (offset,string) => {
		//mensaje recibido
		let msgDecipher = "";
		//inicio recorrido de caracteres
		for(let i = 0; i < string.length; i++){
			//identificacion de espacios vacios
			if(string.charCodeAt(i) === 32){
				msgDecipher += " ";
			}else{
				//aplicando formula de decifrado
				let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
				//conviertiendo el texto decifrado en minusculas
				msgDecipher += String.fromCharCode(textChar).toLowerCase();
			}
		}
		//retornar respuesta
		return msgDecipher;
	}
}



