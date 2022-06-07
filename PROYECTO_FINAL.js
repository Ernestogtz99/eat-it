window.addEventListener("load",reset,true);
var	indice_activo;
function reset() {
	document.getElementById('new_usuario').value = "";
	document.getElementById('correo').value = "";
	document.getElementById('new_contraseña').value = "";
	document.getElementById('confirmar_contraseña').value = "";
	document.getElementById('direccion').value = "";
}

function registrarUsuario() {
	var usuario =  document.getElementById('new_usuario').value;
	var contraseña =  document.getElementById('new_contraseña').value;
	var confirmar_contraseña =  document.getElementById('confirmar_contraseña').value;
	var direccion =  document.getElementById('direccion').value;

	if (contraseña == confirmar_contraseña){
		if (localStorage.getItem('usuarios')) {
			//RECIBIR TODO DE LOCAL
			usuarios = localStorage.getItem('usuarios');
			contraseñas = localStorage.getItem('contraseñas');
			direcciones = localStorage.getItem('direcciones');

			usuarios = usuarios.split(',');
			contraseñas = contraseñas.split(',');
			direcciones = direcciones.split(',');
			//
			//METER LOS DATOS AL ARREGLO
			usuarios.push(usuario);
			contraseñas.push(contraseña);
			direcciones.push(direccion);
			//
			//GUARDAR EN LOCAL
			localStorage.setItem('usuarios', usuarios);
			localStorage.setItem('contraseñas', contraseñas);
			localStorage.setItem('direcciones', direcciones);

			indice_activo = usuarios.indexOf(usuario);
			localStorage.setItem("indice_activo", indice_activo);

		}
		else {
			usuarios = [];
			contraseñas = [];
			direcciones = [];

			//METER LOS DATOS AL ARREGLO
			usuarios.push(usuario);
			contraseñas.push(contraseña);
			direcciones.push(direccion);
			//
			//GUARDAR EN LOCAL
			localStorage.setItem('usuarios', usuarios);
			localStorage.setItem('contraseñas', contraseñas);
			localStorage.setItem('direcciones', direcciones);

			indice_activo = usuarios.indexOf(usuario);
			localStorage.setItem("indice_activo", indice_activo);

		}	
	}
	else {
		alert("Las contraseñas no coinciden, por favor vuelve a introducirlas");
	}
	
	window.location.href = "inicio_usuario.html";
}

function registrarRestaurante(){
	var restaurante =  document.getElementById('new_restaurante').value;
	var contraseña =  document.getElementById('new_contraseña_res').value;
	var confirmar_contraseña =  document.getElementById('confirmar_contraseña_res').value;
	var direccion =  document.getElementById('direccion_res').value;
	var categoria = document.getElementById('select').value;
	console.log(categoria);
	if (contraseña == confirmar_contraseña){
		if (localStorage.getItem('restaurantes')) {
			//RECIBIR TODO DE LOCAL
			restaurantes = localStorage.getItem('restaurantes');
			contraseñas_res = localStorage.getItem('contraseñas_res');
			direcciones_res = localStorage.getItem('direcciones_res');
			categorias = localStorage.getItem('categorias');

			restaurantes = restaurantes.split(',');
			contraseñas_res = contraseñas_res.split(',');
			direcciones_res = direcciones_res.split(',');
			categorias = categorias.split(',');
			//
			//METER LOS DATOS AL ARREGLO
			restaurantes.push(restaurante);
			contraseñas_res.push(contraseña);
			direcciones_res.push(direccion);
			categorias.push(categoria);
			//
			//GUARDAR EN LOCAL
			localStorage.setItem('restaurantes', restaurantes);
			localStorage.setItem('contraseñas_res', contraseñas_res);
			localStorage.setItem('direcciones_res', direcciones_res);
			localStorage.setItem('categorias', categorias);

			indice_activo = restaurantes.indexOf(restaurante);
			localStorage.setItem("indice_activo", indice_activo);
		}
		else {
			restaurantes = [];
			contraseñas_res = [];
			direcciones_res = [];
			categorias = [];

			//METER LOS DATOS AL ARREGLO
			restaurantes.push(restaurante);
			contraseñas_res.push(contraseña);
			direcciones_res.push(direccion);
			categorias.push(categoria);
			//
			//GUARDAR EN LOCAL
			localStorage.setItem('restaurantes', restaurantes);
			localStorage.setItem('contraseñas_res', contraseñas_res);
			localStorage.setItem('direcciones_res', direcciones_res);
			localStorage.setItem('categorias', categorias);

			indice_activo = restaurantes.indexOf(restaurante);
			localStorage.setItem("indice_activo", indice_activo);
		}	
	}
	else {
		alert("Las contraseñas no coinciden, por favor vuelve a introducirlas");
	}


	window.location.href = "inicio_restaurante.html";
}