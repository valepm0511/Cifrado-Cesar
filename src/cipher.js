window.cipher = {
	encode: (string,offset) => {
		//se guarda el mensaje ya cifrado
		let msgCipher = "";
		//inicio recorrido de caracteres
		for(let i = 0; i < string.length; i++){
			//identificacion de espacios vacios
			if(string.charCodeAt(i) === 32){
				msgCipher += " ";
			}else if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
				//aplicando formula de cifrado mayúsculas
				let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
				msgCipher+=String.fromCharCode(textChar);
			}else{
				//aplicando formula de cifrado minúsculas
				textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
				msgCipher+=String.fromCharCode(textChar);
			}
		}
		//retornar respuesta
		return msgCipher;
	},
	decode: (string,offset) => {
		//mensaje recibido
		//se guarda el mensaje ya descifrado
		let msgDecipher = "";
		//inicio recorrido de caracteres
		for(let i = 0; i < string.length; i++){
			//identificacion de espacios vacios
			if(string.charCodeAt(i) === 32){
				msgDecipher += " ";
			}else if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
				//aplicando formula de descifrado mayúsculas
				let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
				msgDecipher += String.fromCharCode(textChar);
			}else{
				//aplicando formula de descifrado minúsculas pero no funciona :'(
				textChar = (string.charCodeAt(i) + 97 - parseInt(offset)) % 26 + 97;
				msgDecipher += String.fromCharCode(textChar);
			}
		}
		//retornar respuesta
		return msgDecipher;
	}
}



