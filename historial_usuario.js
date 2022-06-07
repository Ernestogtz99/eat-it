window.addEventListener("load", cargarVista, true);
function toInicio(){window.location.href = "inicio_usuario.html";}
function cerrarSesion(){window.location.href = "PROYECTO FINAL.html";}

var total = 0;
platillos_pedido = [];
platillos_pedido = localStorage.getItem('platillos_pedido');
platillos_pedido = platillos_pedido.split(',');
precios_pedido = [];
precios_pedido = localStorage.getItem('precios_pedido');
precios_pedido = precios_pedido.split(',');
restaurantes = [];
restaurantes = localStorage.getItem('restaurantes');
restaurantes = restaurantes.split(',');
var index = localStorage.getItem('restaurante_activo');
var restaurante_activo = restaurantes[index];
var fecha = localStorage.getItem('fecha_pedido');
var hora = localStorage.getItem('hora_pedido');

function cargarVista(){
	document.getElementById('pedidos').innerHTML = "";
	
	if (localStorage.getItem('platillos_pedido')){
	for (var i = 0; i < platillos_pedido.length; i++){
		document.getElementById('pedidos').innerHTML += '<div class="pedido"><h1>'+platillos_pedido[i]+'</h1><h2>1</h2><h3>$'+precios_pedido[i]+'</h3></div>'
		total += Number(precios_pedido[i]);
	}
	document.getElementById('total').innerHTML = "$" + total;
	document.getElementById('historial_usuario').innerHTML += '<div class="pedido_historial" style="background-color: #00AE43 "><h1>'+restaurante_activo+'</h1><h2>Realizado a las '+hora+'</h2><h3>'+fecha+'</h3></div>'
	}
	else{
		total = 0;
		//document.getElementById('historial_usuario').innerHTML = "";
		document.getElementById('pedidos').innerHTML = "";
		document.getElementById('total').innerHTML = "$" + total;
	}
	
}

function cancelarPedido() {
	total = 0;
	document.getElementById('historial_usuario').innerHTML += '<div class="pedido_historial" style="background-color: #F87302"><h1>'+restaurante_activo+'</h1><h2>Realizado a las '+hora+'</h2><h3>'+fecha+'</h3></div>';
	document.getElementById('pedidos').innerHTML = "";
	document.getElementById('total').innerHTML = "$" + total;

	localStorage.removeItem('platillos_pedido');
	localStorage.removeItem('precios_pedido');
	alert('Pedido Cancelado.');
}