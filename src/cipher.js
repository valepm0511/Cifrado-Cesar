window.cipher = {
	encode: (offset,string) => {
		let msgCipher = "";
		string = string.toLocaleUpperCase();
		for(let i = 0; i < string.length; i++){
			if(string.charCodeAt(i) === 32){
				msgCipher = " ";
			}else{
				let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
				msgCipher += String.fromCharCode(textChar).toLowerCase();
			}
		}
		document.getElementById("msg-encode-check").innerHTML = msgCipher;
	},
	decode: (offset,string) => {
		let msgDecipher = "";
		string = string.toLocaleUpperCase();
		for(let i = 0; i < string.length; i++){
			if(string.charCodeAt(i) === 32){
				msgDecipher = " ";
			}else{
				let textChar = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
				msgDecipher += String.fromCharCode(textChar).toLowerCase();
			}
		}
		document.getElementById("msg-decode-check").innerHTML = msgDecipher;
	}
}



