

$(document).ready(function () {

	var resultado = "";

	$(".tecla").click(function () {


		resultado = resultado + $(this).text();


		$("#pantalla").text(resultado);


	});

	$("#c").click(function () {

		resultado = "";
		$("#pantalla").text("");


	});

	$("#igual").click(function () {
		$("#pantalla").text(eval($("#pantalla").text()));
	});

});

