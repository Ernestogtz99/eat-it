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
