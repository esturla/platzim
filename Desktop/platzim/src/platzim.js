export default function platzom(str){
	let traslation = str

	//si la palabra termina en "ar" se le quita el ar
	if (str.toLowerCase().endsWith("ar") ) {
		traslation = str.slice(0, -2)
	}

	//si la palabra empieza con "z" se le agrega "pe" al final
	if (str.toLowerCase().startsWith("z")) {
		traslation += "pe"
	}
	/*si la palabra tiene mas de 10 caracteres se divide a la mitad
	y se lo une con un guion*/
	const length = traslation.length
	if (length >= 10) {
		const firstHalf = traslation.slice(0, Math.round(length/2))
		const secondHalf = traslation.slice(Math.round(length/2))
		traslation = `${firstHalf}-${secondHalf} `
	}
	/*si la palabra es un palindromo ninguna condicion vale y se 
	devuelve la palabra en mayusc y minusc HoLa */
	const reverse = (str) => str.split('').reverse().join('')

	function minMayu(str){
		const length = str.length
		let traslation = ''
		let capitalize = true
		for (let i = 0; i < length; i++){
			const char = str.charAt(i)
			traslation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return traslation
	}

	if (str == reverse(str)) {
		return minMayu(str)
	}


	return traslation
}
