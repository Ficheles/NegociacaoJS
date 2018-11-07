// client/app/domain/negociacao/Negociacao.js

class Negociacao {

	constructor( _data, _quantidade, _valor ) {
		
		// cada parametro recebido será atribuido as propriedades da classe
		Object.assign(this, { _data: new Date(_data.getTime()), _quantidade, _valor }) ;
		
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