window.addEventListener("load",cargar_nombre,true);
window.addEventListener("load",cargar_restaurantes,true);
function cerrarSesion(){window.location.href = "PROYECTO FINAL.html";}
function toHistorial(){window.location.href = "historial_usuario.html";}

function cargar_nombre(){
var indice_activo = localStorage.getItem("indice_activo");
usuarios = [];
usuarios = localStorage.getItem('usuarios');
usuarios = usuarios.split(',');
var usuario_activo = usuarios[indice_activo];

document.getElementById("nombre_usuario").innerHTML = usuario_activo;
}

function cargar_restaurantes(){
	restaurantes = [];
	restaurantes = localStorage.getItem("restaurantes");
	restaurantes = restaurantes.split(',');
	categorias = [];
	categorias = localStorage.getItem("categorias");
	categorias = categorias.split(',');

	for (var i = 0; i<restaurantes.length; i++){
		//background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(hamburguesas.jpg) ;
		switch (categorias[i]){
			case "general":
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(general.jpg)">'+restaurantes[i]+'</div>';
				break;
			case "pizza":
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(Pizza.jpg)">'+restaurantes[i]+'</div>';
				break;
			case "ensaladas":
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(ensaladas.jpg)">'+restaurantes[i]+'</div>';
				break;
			case "pollo":
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(Pollo.jpg)">'+restaurantes[i]+'</div>';
				break;
			case "sushi":
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(Sushi.jpg)">'+restaurantes[i]+'</div>';
				break;
			case "china":
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(china.jpg)">'+restaurantes[i]+'</div>';
				break;
			case "postre":
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(postre.jpg)">'+restaurantes[i]+'</div>';
				break;
			case "tacos":
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(tacos.jpg)">'+restaurantes[i]+'</div>';
				break;
			default:
					document.getElementById('restaurantes').innerHTML += '<div id="'+i+'" class="restaurante" onclick="ir_a_restaurante(this.id)" style="background-image: linear-gradient( rgba(0,0,0,0.5) , rgba(0,0,0,0.4) ), url(general.jpg)">'+restaurantes[i]+'</div>';
				break;
		}

		
	}
}

function ir_a_restaurante(id){
	localStorage.setItem("restaurante_activo", id);
	window.location.href = "restaurante_usuario.html";
}
