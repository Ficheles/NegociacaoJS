// client/app/domain/negociacao/Negociacao.js

class Negociacao {

	constructor(data, quantidade, valor) {
		
		// cada parametro recebido será atribuido as propriedades da classe
		Object.assign(this, { _data: new Date(data.getTime()), _quantidade: quantidade, _valor: valor}) ;
		
		Object.freeze(this);
	}

	get volume() {
		return this._quantidade * this._valor;
	}

	get data() {
		return new Date(this._data.getTime());
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}
}