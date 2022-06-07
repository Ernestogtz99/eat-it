window.addEventListener("load", cargarVista, true);
function cerrarSesion(){window.location.href = "PROYECTO FINAL.html";}
function toInicio(){window.location.href = "inicio_usuario.html";}
function toHistorial(){window.location.href = "historial_usuario.html";}

var index = localStorage.getItem('restaurante_activo');

var total = 0;
var indice_activo = localStorage.getItem('indice_activo');
restaurantes = [];
restaurantes = localStorage.getItem('restaurantes');
restaurantes = restaurantes.split(',');
direcciones = [];
direcciones = localStorage.getItem('direcciones');
direcciones = direcciones.split(',');
direcciones_res = [];
direcciones_res = localStorage.getItem('direcciones_res');
direcciones_res = direcciones_res.split(',');
categorias = [];
categorias = localStorage.getItem('categorias');
categorias = categorias.split(',');
alimentos = [];
alimentos = localStorage.getItem(restaurantes[index]+'_alimentos');
alimentos = alimentos.split(',');
alimentos_precios = [];
alimentos_precios = localStorage.getItem(restaurantes[index]+'_alimentos_precios');
alimentos_precios = alimentos_precios.split(',');
bebidas = [];
bebidas = localStorage.getItem(restaurantes[index]+'_bebidas');
bebidas = bebidas.split(',');
bebidas_precios = [];
bebidas_precios = localStorage.getItem(restaurantes[index]+'_bebidas_precios');
bebidas_precios = bebidas_precios.split(',');

if (localStorage.getItem('platillos_carrito')){
			platillos_carrito = [];
			platillos_carrito = localStorage.getItem('platillos_carrito');
			platillos_carrito = platillos_carrito.split(',');
			precios_carrito = [];
			precios_carrito = localStorage.getItem('precios_carrito');
			precios_carrito = precios_carrito.split(',');
}

function cargarVista(){
	switch (categorias[index]){
			case "general":
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('general.jpg')";	
				break;
			case "pizza":
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('Pizza_banner.jpg')";			
				break;
			case "ensaladas":
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('ensaladas.jpg')";			
				break;
			case "pollo":
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('pollo banner.jpg')";			
				break;
			case "sushi":
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('Sushi Banner.jpg')";			
				break;
			case "china":
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('china.jpg')";			
				break;
			case "postre":
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('postre banner.jpg')";			
				break;
			case "tacos":
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('tacos banner.jpg')";			
				break;
			default:
		document.getElementById('banner').style.backgroundImage = "linear-gradient( rgba(0,0,0,0.2) , rgba(0,0,0,0.2) ), url('general.jpg')";			
				break;
		}
	document.getElementById('total').innerHTML = "$"+total;
	document.getElementById('enviar_a').innerHTML = direcciones[indice_activo];
	document.getElementById('big_title').innerHTML = restaurantes[index];
	document.getElementById('domicilio').innerHTML = direcciones_res[index];

	for(var i = 0; i < alimentos.length; i++){
		document.getElementById('alimentos').innerHTML += '<div id="a'+i+'" class="platillo" onclick="agregarAlCarrito(this.id)"><div class="capa1"><h2>+</h2><h3>$'+alimentos_precios[i]+'</h3></div><div class="capa2"><img src="alimentos.jpg"><h1>'+alimentos[i]+'</h1></div></div>';
	}
	for(var i = 0; i < bebidas.length; i++){
		document.getElementById('bebidas').innerHTML += '<div id="b'+i+'" class="platillo" onclick="agregarAlCarrito(this.id)"><div class="capa1"><h2>+</h2><h3>$'+bebidas_precios[i]+'</h3></div><div class="capa2"><img src="bebidas.jpg"><h1>'+bebidas[i]+'</h1></div></div>';
	}
	total = 0;
	for(var i = 0; i <platillos_carrito.length; i++ ){
		document.getElementById('pedidos').innerHTML += '<div class="pedido"><h1>'+platillos_carrito[i]+'</h1><h2>1</h2><h3>$'+precios_carrito[i]+'</h3><h4 id="'+i+'" onclick="eliminarDelCarrito(this.id)">Eliminar</h4></div>';
		total = total + Number(precios_carrito[i]);
	}
	document.getElementById('total').innerHTML = "$"+total;
	

}

function agregarAlCarrito(id){

	if (id.indexOf('a') > -1){ //se tiene que tomar de alimentos
		id = id.substr(1, 1);
	
		if (localStorage.getItem('platillos_carrito')){
			platillos_carrito = [];
			platillos_carrito = localStorage.getItem('platillos_carrito');
			platillos_carrito = platillos_carrito.split(',');
			precios_carrito = [];
			precios_carrito = localStorage.getItem('precios_carrito');
			precios_carrito = precios_carrito.split(',');

			platillos_carrito.push(alimentos[id]);
			precios_carrito.push(alimentos_precios[id]);

			localStorage.setItem('platillos_carrito', platillos_carrito);
			localStorage.setItem('precios_carrito', precios_carrito);			
		}
		else{
			localStorage.setItem('platillos_carrito', alimentos[id]);
			localStorage.setItem('precios_carrito', alimentos_precios[id]);
		}
	}
	else{ //se tiene que tomar de bebidas
		id = id.substr(1, 1);

		if (localStorage.getItem('platillos_carrito')){
			platillos_carrito = [];
			platillos_carrito = localStorage.getItem('platillos_carrito');
			platillos_carrito = platillos_carrito.split(',');
			precios_carrito = [];
			precios_carrito = localStorage.getItem('precios_carrito');
			precios_carrito = precios_carrito.split(',');

			platillos_carrito.push(bebidas[id]);
			precios_carrito.push(bebidas_precios[id]);

			localStorage.setItem('platillos_carrito', platillos_carrito);
			localStorage.setItem('precios_carrito', precios_carrito);			
		}
		else{
			localStorage.setItem('platillos_carrito', bebidas[id]);
			localStorage.setItem('precios_carrito', bebidas_precios[id]);
		}
	}

	platillos_carrito = [];
	platillos_carrito = localStorage.getItem('platillos_carrito');
	platillos_carrito = platillos_carrito.split(',');
	precios_carrito = [];
	precios_carrito = localStorage.getItem('precios_carrito');
	precios_carrito = precios_carrito.split(',');

	document.getElementById('pedidos').innerHTML = "";
	
	total = 0;
	for(var i = 0; i <platillos_carrito.length; i++ ){
		document.getElementById('pedidos').innerHTML += '<div class="pedido"><h1>'+platillos_carrito[i]+'</h1><h2>1</h2><h3>$'+precios_carrito[i]+'</h3><h4 id="'+i+'" onclick="eliminarDelCarrito(this.id)">Eliminar</h4></div>';
		total = total + Number(precios_carrito[i]);
	}
	document.getElementById('total').innerHTML = "$"+total;
}

function eliminarDelCarrito(id){
	//TRABAJAR EN ESTO!!!!!!
	platillos_carrito.splice(id,1);
	precios_carrito.splice(id, 1);

	localStorage.setItem('platillos_carrito', platillos_carrito);
	localStorage.setItem('precios_carrito', precios_carrito);

	document.getElementById('pedidos').innerHTML = "";
	total = 0;
	for(var i = 0; i <platillos_carrito.length; i++ ){
		document.getElementById('pedidos').innerHTML += '<div class="pedido"><h1>'+platillos_carrito[i]+'</h1><h2>1</h2><h3>$'+precios_carrito[i]+'</h3><h4 id="'+i+'" onclick="eliminarDelCarrito(this.id)">Eliminar</h4></div>';
		total = total + Number(precios_carrito[i]);
	}
	document.getElementById('total').innerHTML = "$"+total;
}

function hacerPedido() {
	var usuario_activo = indice_activo;
	localStorage.setItem('usuario_activo', usuario_activo);
	
	platillos_pedido = [];
	platillos_pedido = localStorage.getItem('platillos_carrito');
	platillos_pedido = platillos_pedido.split(',');

	precios_pedido = [];
	precios_pedido = localStorage.getItem('precios_carrito');
	precios_pedido = precios_pedido.split(',');

	localStorage.setItem('platillos_pedido', platillos_pedido);
	localStorage.setItem('precios_pedido', precios_pedido);
	localStorage.setItem('platillos_carrito', "");
	localStorage.setItem('precios_carrito', "");
	//Obtener la fecha
	var date = new Date();
	var año =  date.getFullYear();
	var mes = date.getMonth();
	var dia = date.getDate();
	var new_mes;
switch (mes) {
	case 0: mes = "enero"; break;
	case 1: mes = "febrero"; break;
	case 2: mes = "marzo"; break;
	case 3: mes = "abril"; break;
	case 4: mes = "mayo"; break;
	case 5: mes = "junio"; break;
	case 6: mes = "julio"; break;
	case 7: mes = "agosto"; break;
	case 8: mes = "septiembre"; break;
	case 9: mes = "octubre"; break;
	case 10: mes = "noviembre"; break;
	case 11: mes = "diciembre"; break;
}	
	//Obtener la hora
	var fecha = dia + ' de ' + mes + ' de ' + año;
	var hora = date.getHours() + ':' + date.getMinutes();
	
	localStorage.setItem('fecha_pedido', fecha);
	localStorage.setItem('hora_pedido', hora);

	document.getElementById('pedidos').innerHTML = '';
	document.getElementById('total').innerHTML = "$0";
	alert('¡Orden enviada!');

localStorage.setItem('new_pedido', 1);
localStorage.removeItem('status_pedido');
}	
