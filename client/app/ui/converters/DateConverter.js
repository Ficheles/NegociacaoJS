// client/app/ui/converters/DateConverter.js

class DateConverter {

	constructor() {

		throw new Error('Esta classe não pode ser instanciada');
	}

	static paraTexto(data) {

		// return data.getDate()
		// 	+ '/' + (data.getMonth() + 1)
		// 	+ '/' + data.getFullYear()
	
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}

	static paraData(texto) {

		if( ! /^[12][0-9]{3}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(texto))
			throw new Error('Deve esta no formato aaaa-mm-dd');

		return new Date(...texto.split('-').map((item, index) => item - index % 2 ));
	}
}

