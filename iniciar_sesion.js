window.addEventListener("load",reset,true);
function cargar_events(){
	document.getElementById("iniciar_sesion_restaurante").addEventListener("click", moverse_usuario);
	document.getElementById("iniciar_sesion_usuario").addEventListener("click", moverse_restaurante);
}
function moverse_usuario(){
	var usuario = document.getElementById("iniciar_sesion_usuario");
	var restaurante = document.getElementById("iniciar_sesion_restaurante");

	usuario.classList.add("animacion_usuario");
	usuario.classList.remove("bounce");
	restaurante.classList.remove("bounce");
	restaurante.removeEventListener("click", moverse_usuario);
	restaurante.classList.add("arriba");
	document.getElementById("ingresa_como").style.display = "none" ;
	document.getElementById("imagen_restaurante").classList.add("mostrar2");
	document.getElementById("formulario_iniciar_sesion_restaurante").classList.add("mostrar_form_dos");

	usuario.addEventListener("click", cambiar_a_usuario);
}
function cambiar_a_usuario() {
	var usuario = document.getElementById("iniciar_sesion_usuario");
	var restaurante = document.getElementById("iniciar_sesion_restaurante");

	document.getElementById("imagen_usuario").classList.add("mostrar1");

	usuario.classList.remove("animacion_usuario");
	restaurante.classList.remove("arriba");
	restaurante.classList.add("animacion_restaurante");
	usuario.classList.add("arriba");
	
	document.getElementById("imagen_restaurante").classList.remove("mostrar2");
	document.getElementById("formulario_iniciar_sesion_restaurante").classList.remove("mostrar_form_dos");
	document.getElementById("formulario_iniciar_sesion_usuario").classList.add("mostrar_form_uno");
}
function moverse_restaurante() {
	var usuario = document.getElementById("iniciar_sesion_usuario");
	var restaurante = document.getElementById("iniciar_sesion_restaurante");

	restaurante.classList.add("animacion_restaurante");
	restaurante.classList.remove("bounce");
	usuario.classList.remove("bounce");
	usuario.removeEventListener("click", moverse_restaurante);
	usuario.classList.add("arriba");
	document.getElementById("ingresa_como").style.display = "none" ;
	document.getElementById("imagen_usuario").classList.add("mostrar1");
	document.getElementById("formulario_iniciar_sesion_usuario").classList.add("mostrar_form_uno");

	restaurante.addEventListener("click", cambiar_a_restaurante);
}
function cambiar_a_restaurante(){
	var usuario = document.getElementById("iniciar_sesion_usuario");
	var restaurante = document.getElementById("iniciar_sesion_restaurante");

	document.getElementById("imagen_restaurante").classList.add("mostrar2");

	restaurante.classList.remove("animacion_restaurante");
	usuario.classList.remove("arriba");
	usuario.classList.add("animacion_usuario");
	restaurante.classList.add("arriba");

	document.getElementById("imagen_usuario").classList.remove("mostrar1");
	document.getElementById("formulario_iniciar_sesion_usuario").classList.remove("mostrar_form_uno");
	document.getElementById("formulario_iniciar_sesion_restaurante").classList.add("mostrar_form_dos");
}
//-----------------------------------------------------ANIMACION--------------------------------------------
function reset() {
	document.getElementById("usuario").value = "";
	document.getElementById("contraseña").value = "";
	document.getElementById("restaurante").value = "";
	document.getElementById("contraseña_res").value = "";
}

function ingresarUsuario(){
	var usuarioGood = false;
	var contraseñaGood = false;
	var indice_activo;
	var usuario = document.getElementById('usuario').value;
	var contraseña = document.getElementById('contraseña').value;

	usuarios = [];
	usuarios = localStorage.getItem('usuarios');
	usuarios = usuarios.split(',');
	contraseñas = [];
	contraseñas = localStorage.getItem('contraseñas');
	contraseñas = contraseñas.split(',');

	for (var i = 0; i<usuarios.length; i++){
		if (usuario == usuarios[i]){ usuarioGood = true; indice_activo = i; }
	}
	for (var i = 0; i<contraseñas.length; i++){
		if (contraseña == contraseñas[i]){ contraseñaGood = true; }
	}

	if (usuarioGood == true){
		if (contraseñaGood == true){
			localStorage.setItem("indice_activo", indice_activo);
			window.location.href = "inicio_usuario.html";
		}
		else {
			alert('La contraseña es incorrecta.');
		}
	}
	else {
		alert('No existe el usuario, por favor ingresa un usuario válido o registrate.');
	}
}

function ingresarRestaurante() {
	var restauranteGood = false;
	var contraseña_resGood = false;
	var indice_activo;
	var restaurante = document.getElementById('restaurante').value;
	var contraseña = document.getElementById('contraseña_res').value;

	restaurantes = [];
	restaurantes = localStorage.getItem('restaurantes');
	restaurantes = restaurantes.split(',');
	contraseñas_res = [];
	contraseñas_res = localStorage.getItem('contraseñas_res');
	contraseñas_res = contraseñas_res.split(',');

	for (var i = 0; i<restaurantes.length; i++){
		if (restaurante == restaurantes[i]){ restauranteGood = true; indice_activo = i; }
	}
	for (var i = 0; i<contraseñas_res.length; i++){
		if (contraseña == contraseñas_res[i]){ contraseña_resGood = true; }
	}

	if (restauranteGood == true){
		if (contraseña_resGood == true){
			localStorage.setItem("indice_activo", indice_activo);
			window.location.href = "inicio_restaurante.html";
		}
		else {
			alert('La contraseña es incorrecta.');
		}
	}
	else {
		alert('No existe el restaurante, por favor ingresa un restaurante válido o registralo.');
	}
}