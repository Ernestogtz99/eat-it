window.addEventListener("load",cargarMenu,true);
function toInicio () {window.location.href = "inicio_restaurante.html" }
function cerrarSesion(){window.location.href = "PROYECTO FINAL.html";}

restaurantes = [];
restaurantes = localStorage.getItem('restaurantes');
restaurantes = restaurantes.split(',');
var indice_activo = localStorage.getItem('indice_activo');
var restaurante = restaurantes[indice_activo];

function mostrarFormularioDePlatillo(){
	document.getElementById("barra_derecha").classList.remove("hidden");
}

function crearPlatillo(){
	var platillo = document.getElementById('new_platillo').value;
	var precio = document.getElementById('new_precio').value;
	var categoria = document.getElementById('select').value;

	if (categoria == "Alimento"){
		if(localStorage.getItem(restaurante + '_alimentos')){
			alimentos= localStorage.getItem(restaurante+'_alimentos');
			alimentos = alimentos.split(',');
			alimentos.push(platillo);
			precios = localStorage.getItem(restaurante+'_alimentos_precios');
			precios = precios.split(',');
			precios.push(precio);

			localStorage.setItem(restaurante+'_alimentos', alimentos);
			localStorage.setItem(restaurante+'_alimentos_precios', precios);
		}
		else{
			localStorage.setItem(restaurante+'_alimentos', platillo);
			localStorage.setItem(restaurante+'_alimentos_precios', precio);
		}
		cancelarFormularioDePlatillo();
		cargarMenu();
	}
	else{
		if(localStorage.getItem(restaurante + '_bebidas')){
			bebidas= localStorage.getItem(restaurante+'_bebidas');
			bebidas = bebidas.split(',');
			bebidas.push(platillo);
			precios = localStorage.getItem(restaurante+'_bebidas_precios');
			precios = precios.split(',');
			precios.push(precio);

			localStorage.setItem(restaurante+'_bebidas', bebidas);
			localStorage.setItem(restaurante+'_bebidas_precios', precios);
		}
		else{
			localStorage.setItem(restaurante+'_bebidas', platillo);
			localStorage.setItem(restaurante+'_bebidas_precios', precio);
		}
		cancelarFormularioDePlatillo();
		cargarMenu();
	}
}

function cargarMenu() {
	document.getElementById('menu_alimentos').innerHTML = "";
	document.getElementById('menu_bebidas').innerHTML = "";
	if (localStorage.getItem(restaurante+'_alimentos')){
		alimentos= localStorage.getItem(restaurante+'_alimentos');
		alimentos = alimentos.split(',');
		precios = localStorage.getItem(restaurante+'_alimentos_precios');
		precios = precios.split(',');
		for (var i=0; i<alimentos.length; i++){
			document.getElementById('menu_alimentos').innerHTML += '<div id="a'+i+'" class="platillo_menu"><h1>'+ alimentos[i] + '</h1><h2>$' + precios[i] + '</h2><h3 id="a'+i+'" onclick="eliminarPlatillo(this.id)">Eliminar</h3></div>'
		}
	}
	if (localStorage.getItem(restaurante+'_bebidas')){
		bebidas= localStorage.getItem(restaurante+'_bebidas');
		bebidas= bebidas.split(',');
		precios = localStorage.getItem(restaurante+'_bebidas_precios');
		precios = precios.split(',');
		for (var i=0; i<bebidas.length; i++){
			document.getElementById('menu_bebidas').innerHTML += '<div class="platillo_menu"><h1>'+ bebidas[i] + '</h1><h2>$' + precios[i] + '</h2><h3 id="b'+i+'" onclick="eliminarPlatillo(this.id)">Eliminar</h3></div>'
		}
	}
}


function cancelarFormularioDePlatillo(){
	document.getElementById('new_platillo').value ="";
	document.getElementById('new_precio').value = "";
	document.getElementById('select').value = "";
	document.getElementById("barra_derecha").classList.add("hidden");
}

function eliminarPlatillo(id){
	if (id.indexOf('a') > -1){ //Si es ID de alimentos...
		id = id.substr(1, 1);	//sustrae a partir del indice uno, un string de longitud 1
		alimentos= localStorage.getItem(restaurante+'_alimentos');
		alimentos = alimentos.split(',');
		precios = localStorage.getItem(restaurante+'_alimentos_precios');
		precios = precios.split(',');

		alimentos.splice(id, 1);
		precios.splice(id, 1);

		localStorage.setItem(restaurante+'_alimentos', alimentos);
		localStorage.setItem(restaurante+'_alimentos_precios', precios);
		cargarMenu();
	}
	else{	//si es ID de bebidas
		id = id.substr(1, 1);	//sustrae a partir del indice uno, un string de longitud 1
		bebidas= localStorage.getItem(restaurante+'_bebidas');
		bebidas = bebidas.split(',');
		precios = localStorage.getItem(restaurante+'_bebidas_precios');
		precios = precios.split(',');

		bebidas.splice(id, 1);
		precios.splice(id, 1);

		localStorage.setItem(restaurante+'_bebidas', bebidas);
		localStorage.setItem(restaurante+'_bebidas_precios', precios);
		cargarMenu();
	}
}