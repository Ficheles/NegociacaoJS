// client/app/controllers/NegociacaoController.js

class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);

		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event) {

		// cancelando a submisssão do formulário
		event.preventDefault();

		// let data = new Date(this._inputData.value.split('-'));
		// let data = new Date(this._inputData.value.replace(/-/g, ','));
		//let converter = new DateConverter();

		let negociacao = new Negociacao(
			DateConverter.paraData(this._inputData.value),
			parseInt(this._inputQuantidade.value),
			parseFloat(this._inputValor.value)
		);

		console.log(negociacao);

		let diaMesAno = DateConverter.paraTexto(negociacao.data);

		console.log(diaMesAno);
	}
}