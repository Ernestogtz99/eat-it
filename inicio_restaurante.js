window.addEventListener('load', cargarVista, true);
function toMenu(){window.location.href = "menu_restaurante.html";}
function cerrarSesion(){window.location.href = "PROYECTO FINAL.html";}

usuarios = localStorage.getItem('usuarios');
usuarios = usuarios.split(',');
var index = localStorage.getItem('usuario_activo');
var usuario_activo = usuarios[index];
var platillos_pedido = localStorage.getItem("platillos_pedido");
platillos_pedido = platillos_pedido.split(',');
var hora = localStorage.getItem('hora_pedido');
var fecha = localStorage.getItem('fecha_pedido');
restaurantes = localStorage.getItem('restaurantes');
restaurantes = restaurantes.split(',');
var indice_activo = localStorage.getItem('indice_activo');
var restaurante_activo = restaurantes[indice_activo];

var new_pedido = localStorage.getItem('new_pedido');

function cargarVista(){
 if (new_pedido == 1){
 	document.getElementById('space').innerHTML += '<div id="nuevos_pedidos"><h1>'+usuario_activo+'</h1><h2>Pedido de:</h2><h3>Realizado a las '+hora+'</h3><h4>'+fecha+'</h4><hr><div id="table"><table id="tableee"></table></div><div id="botones"><button style="background-color:#F87302  " onclick="cancelarPedido()">Cancelar</button> <button style="background-color: #FEB618; float: right;" onclick="terminarPedido()">Terminado</button></div></div>'
 }
 	for (var i = 0; i < platillos_pedido.length; i++){
 		document.getElementById('tableee').innerHTML += '<tr><td>'+platillos_pedido[i]+'</td><td>1</td></tr>';
 	}

document.getElementById('big_title').innerHTML = restaurante_activo;
}


function terminarPedido(){
	new_pedido = 0;
 	localStorage.setItem('new_pedido', new_pedido);

 	document.getElementById('space').innerHTML = '<h1 style="margin-top:-10px;" id="big_title">'+restaurante_activo+'</h1><div id="titulo_nuevos_pedidos"><h2>Nuevos Pedidos</h2></div>'

 	localStorage.setItem('status_pedido', 'terminado');
}

 function cancelarPedido(){
 	new_pedido = 0;
 	localStorage.setItem('new_pedido', new_pedido);

 	document.getElementById('space').innerHTML = '<h1 style="margin-top:-10px;" id="big_title">'+restaurante_activo+'</h1><div id="titulo_nuevos_pedidos"><h2>Nuevos Pedidos</h2></div>'

 	localStorage.setItem('status_pedido', 'cancelado');

 }