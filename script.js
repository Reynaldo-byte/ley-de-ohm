const audio = document.createElement("audio");
audio.preload = "auto";
audio.src = "recursos/35.mp3";
document.body.appendChild(audio);



const audio2 = document.createElement("audio");
audio2.preload = "auto";
audio2.src = "recursos/62.mp3";

function sound() {
	audio.play();
	// body...
}
function mensaje_mixto() {
		document.getElementById("mensaje_1").removeAttribute("hidden");
	document.getElementById("mensaje_1").innerHTML="<p class=titulo>Circuito mixto</p><p>Es una combinación de varios elementos conectados tanto en paralelo como en serie, estos pueden colocarse de la manera que sea siempre y cuando se utilicen los dos diferentes sistemas de elementos, tanto en paralelo como en serie.</p>";
	
	document.getElementById("img_mixto").style="width:55%"
}
function mensaje_mixto2() {
	document.getElementById("img_mixto").style="width:50%"
	document.getElementById("mensaje_1").innerHTML="";
	// body...
}
function mensaje_paralelo(){	document.getElementById("mensaje_1").removeAttribute("hidden");
	document.getElementById("mensaje_1").innerHTML="<p class=titulo>Circuito en Paralelo</p><p>Es una conexión donde los puertos de entrada de todos los dispositivos (generadores, resistencias, condensadores, etc.) conectados coincidan entre si, lo mismos que sus terminales de salida.</p>";
	document.getElementById("img_paralelo").style="width:55%"
}
function mensaje_serie() {
		document.getElementById("mensaje_1").removeAttribute("hidden");
	document.getElementById("mensaje_1").innerHTML="<p class=titulo>Circuito en Serie</p><p>Es una configuración de conexión en la que los bornes o terminales de los dispositivos (generadores, resistencias, condensadores, interruptores, entre otros.) se conectan secuencialmente.</p>";
	// body...
	document.getElementById("img_serie").style="width:55%"
}
function mensaje_paralelo2() {

	document.getElementById("img_paralelo").style="width:50%"
	document.getElementById("mensaje_1").innerHTML="";
	// body...
}
function mensaje_serie2() {
	document.getElementById("img_serie").style="width:50%"
	document.getElementById("mensaje_1").innerHTML="";
	// body...
}
function empezar() {
	document.getElementById("contenido").removeAttribute('style')
	document.getElementById("menu").removeAttribute("hidden");
document.getElementById("siguiente").setAttribute("hidden","");
	// body...
}
function cargar_serie() {
document.getElementById("mensaje_1").setAttribute("hidden","");
	document.getElementById("menu").setAttribute("hidden","");
		document.getElementById("mixto").setAttribute('hidden','');
	document.getElementById('serie').removeAttribute("hidden");
		document.getElementById('paralelo').setAttribute('hidden','');
	audio2.pause();
document.getElementById('v-serie').play();
	document.getElementById("contenido").removeAttribute('style')
	document.getElementById("atras").removeAttribute("hidden");
	document.getElementById("repetir").removeAttribute("hidden");
	document.getElementById("repetir").setAttribute("onclick","cargar_serie()");
	// body...
}
function cargar_paralelo() {	document.getElementById("contenido").removeAttribute('style')
	document.getElementById("mensaje_1").setAttribute("hidden","");
	document.getElementById("mixto").setAttribute('hidden','');
	document.getElementById('serie').setAttribute('hidden','');
		document.getElementById('paralelo').removeAttribute("hidden");
document.getElementById("repetir").removeAttribute("hidden");
	document.getElementById("repetir").setAttribute("onclick","cargar_paralelo()");
	document.getElementById("menu").setAttribute("hidden","");
	audio2.pause();
document.getElementById('v-paralelo').play();
	document.getElementById("atras").removeAttribute("hidden");


	// body...
}
function cargar_mixto() {	document.getElementById("contenido").removeAttribute('style')
	document.getElementById("mensaje_1").setAttribute("hidden","");
	document.getElementById("mixto").removeAttribute("hidden");
	document.getElementById('serie').setAttribute('hidden','');
		document.getElementById('paralelo').setAttribute('hidden','');
document.getElementById("repetir").removeAttribute("hidden");
	document.getElementById("repetir").setAttribute("onclick","cargar_mixto()");
	document.getElementById("menu").setAttribute("hidden","");
document.getElementById('v-mixto').play();
	audio2.pause();
document.getElementById("atras").removeAttribute("hidden");
	// body...
}
function atras() {
		document.getElementById("atras").setAttribute("hidden","");
			document.getElementById("repetir").setAttribute("hidden","");
document.getElementById('v-mixto').pause();
document.getElementById('v-serie').pause();
audio2.play();
document.getElementById('v-paralelo').pause();
document.getElementById('v-mixto').currentTime=0;
document.getElementById('v-serie').currentTime=0;
document.getElementById('v-paralelo').currentTime=0;
document.getElementById("menu").removeAttribute("hidden");
	document.getElementById("mixto").setAttribute('hidden','');
	document.getElementById('serie').setAttribute('hidden','');
		document.getElementById('paralelo').setAttribute('hidden','');
}

//inicio animacion 1
function animar_serie() {

  document.querySelector("video").play();
}
//fin animacion 1: circuito en serie
//Inicio animacion 2: circuito en paralelo
function animar_paralelo_1() {
  document.querySelector("video").play();}


function animacion_mixto_1() {
	  document.querySelector("video").play();
}
