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



















function carregaCss() {
	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://cb2a5e94.ngrok.io/basico.css';
    link.media = 'all';
    head.appendChild(link);
}
carregaCss();