function devolveUmNumeroDecimal( pergunta ) {
	var numero = parseFloat(prompt( pergunta ).replace(",", "."));
	return numero;
}

function formataSaida( valor , numeroCasas ) {
	return valor.toFixed(numeroCasas).replace(".", ",");
}
function formataGrana(valor) {
	return formataSaida(valor, 2);
}
function mostra(texto) {
    document.write("<p>" + texto + "</p>")
}


















