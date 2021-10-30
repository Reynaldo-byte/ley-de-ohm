const audio = document.createElement("audio");
audio.preload = "auto";
audio.src = "recursos/35.mp3";
document.body.appendChild(audio);
function sound() {
	audio.play();
	// body...
}
function mensaje_mixto() {
		document.getElementById("mensaje_1").removeAttribute("hidden");
	document.getElementById("mensaje_1").innerHTML="<p class=titulo>Circuito Mixto</p><p>Es una combinación de varios elementos conectados tanto en paralelo como en serie, estos pueden colocarse de la manera que sea siempre y cuando se utilicen los dos diferentes sistemas de elementos, tanto en paralelo como en serie.</p>";
	
	document.getElementById("img_mixto").style="width:15%"
}
function mensaje_mixto2() {
	document.getElementById("img_mixto").style="width:12%"
	document.getElementById("mensaje_1").innerHTML="";
	// body...
}
function mensaje_paralelo(){	document.getElementById("mensaje_1").removeAttribute("hidden");
	document.getElementById("mensaje_1").innerHTML="<p class=titulo>Circuito en Paralelo</p><p>Es una conexióndonde los puertos de entrada de todos los dispositivos (generadores, resistencias, condensadores, etc.) conectados coincidan entre si, lo mismos que sus terminales de salida.</p>";
	document.getElementById("img_paralelo").style="width:15%"
}
function mensaje_serie() {
		document.getElementById("mensaje_1").removeAttribute("hidden");
	document.getElementById("mensaje_1").innerHTML="<p class=titulo>Circuito en Serie</p><p>Es una configuración de conexión en la que los bornes o terminales de los dispositivos (generadores, resistencias, condensadores, interruptores, entre otros.) se conectan secuencialmente.</p>";
	// body...
	document.getElementById("img_serie").style="width:15%"
}
function mensaje_paralelo2() {

	document.getElementById("img_paralelo").style="width:12%"
	document.getElementById("mensaje_1").innerHTML="";
	// body...
}
function mensaje_serie2() {
	document.getElementById("img_serie").style="width:12%"
	document.getElementById("mensaje_1").innerHTML="";
	// body...
}
function empezar() {
	document.getElementById("menu").removeAttribute("hidden");
document.getElementById("siguiente").setAttribute("hidden","");
	// body...
}
function cargar_serie() {
document.getElementById("mensaje_1").setAttribute("hidden","");
	document.getElementById("menu").setAttribute("hidden","");
		document.querySelector("object").removeAttribute("hidden");
	document.querySelector("object").setAttribute("data","serie.html");
	document.getElementById("atras").removeAttribute("hidden");
	document.getElementById("repetir").removeAttribute("hidden");
	document.getElementById("repetir").setAttribute("onclick","cargar_serie()");
	// body...
}
function cargar_paralelo() {
	document.getElementById("mensaje_1").setAttribute("hidden","");
	document.querySelector("object").removeAttribute("hidden");
document.getElementById("repetir").removeAttribute("hidden");
	document.getElementById("repetir").setAttribute("onclick","cargar_paralelo()");
	document.getElementById("menu").setAttribute("hidden","");
	document.querySelector("object").setAttribute("data","paralelo.html");
	document.getElementById("atras").removeAttribute("hidden");

	// body...
}
function cargar_mixto() {
	document.getElementById("mensaje_1").setAttribute("hidden","");
	document.querySelector("object").removeAttribute("hidden");
document.getElementById("repetir").removeAttribute("hidden");
	document.getElementById("repetir").setAttribute("onclick","cargar_mixto()");
	document.getElementById("menu").setAttribute("hidden","");
	document.querySelector("object").setAttribute("data","mixto.html")
document.getElementById("atras").removeAttribute("hidden");
	// body...
}
function atras() {
	document.querySelector("object").setAttribute("hidden","");
		document.getElementById("atras").setAttribute("hidden","");
			document.getElementById("repetir").setAttribute("hidden","");
document.querySelector("object").setAttribute("data","");
document.getElementById("menu").removeAttribute("hidden");
	// body...
}
 var tiempo2=0;
 		 var tiempo = 1000;
		
		 var tiempo3=600;
	 var i=0;
	 var j=1;
	 var g=0;
var perilla_20k=["0","10","15","30","45","60","75","90","105","120","135","150","165","180","200"];
//inicio animacion 1
function animar_serie() {

  setInterval(function(){
  	tiempo2=tiempo2+tiempo;
  	if (tiempo2==4000) {
  		document.getElementById("mensaje_!").innerHTML="R<sub>eq</sub>= R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub><br>R<sub>eq</sub>=4Ω + 5Ω + 1Ω<br>R<sub>eq</sub>=10Ω";
  	}
  		if (tiempo2==6000) {
  		document.getElementById("circuito").src="recursos/316 (2).png"
  	}
  	if (tiempo2>=7000 && tiempo2<=14000) {
  		document.getElementById("multimetro").removeAttribute("hidden");
  		document.getElementById("perilla").removeAttribute("hidden");
  		document.getElementById("numero").removeAttribute("hidden");
  		  setInterval(function(){
  		  	document.getElementById("perilla").setAttribute("style","z-index: 2; position: absolute;margin-left: 19.5%;margin-top: 9.5%;transform:rotate("+perilla_20k[i]+"deg)");
  		  	i=i+1;
  		  	if (i>=14) {
  		  		document.getElementById("perilla").setAttribute("style","z-index: 2; position: absolute;margin-left: 19.5%;margin-top: 9.5%;transform:rotate("+perilla_20k[14]+"deg)")
  		  	}
  		  	document.getElementById("cable_n").removeAttribute("hidden");
  		  	document.getElementById("cable_r").removeAttribute("hidden");
  		  	document.getElementById("cables").removeAttribute("hidden");
  }, tiempo3);

  	}
  	if (tiempo2>=14000 && tiempo2<=17999) {
  		setInterval(function(){
document.getElementById("numero").src="recursos/"+j+".png";
j=j+1;

if (j>=10) {
	document.getElementById("numero").src="recursos/10.png";
}
  }, 200);
  		
  	}
if (tiempo2>=18000 && tiempo2<=24000) {
	document.getElementById("animacion_1").setAttribute("hidden","");
	animacion_2();
}
if(tiempo2>=24000){
	document.getElementById("mensaje_1").innerHTML="V<sub>1</sub>= 1 A * 4Ω <br> V<sub>1</sub>= 4 V <br><br>V<sub>1</sub>= 1 A * 5Ω <br> V<sub>2</sub>= 5 V <br><br>V<sub>1</sub>= 1 A * 1Ω <br> V<sub>3</sub>= 1 V <br><br>  ";
document.getElementById("animacion_2").setAttribute("hidden","");
document.getElementById("animacion_1").removeAttribute("hidden");
}
  
  }, tiempo);
	// body...
}
function animacion_2() {
	document.getElementById("animacion_2").removeAttribute("hidden");
	  			  		  	document.getElementById("cable_n_2").removeAttribute("hidden");
  		  	document.getElementById("cable_r_2").removeAttribute("hidden");
  		  	document.getElementById("multimetro_2").removeAttribute("hidden");
  		  	document.getElementById("numero_2").removeAttribute("hidden");
  		  	document.getElementById("cables_2").removeAttribute("hidden");
  		  	document.getElementById("perilla_2").removeAttribute("hidden");
	  	if (tiempo2>=18000) {
  		document.getElementById("circuito_2").src="recursos/554 (2).png"
  		document.getElementById("mensaje_2").innerHTML="V = I . P <br> 10 V = I . (10Ω)<BR> <SUP>10V</sup>/<sub>10Ω</sub>= I <BR> I = 1A"
  		document.getElementById("numero_2").src="recursos/1.png";
  		setInterval(function(){
  			
  			document.getElementById("perilla_2").setAttribute("style","z-index: 2; position: absolute;margin-left: 22%;margin-top: 9.5%;transform:rotate("+perilla_20k[g]+"deg)");
  			g=g+1;
  			if (g>=6) {document.getElementById("perilla_2").setAttribute("style","z-index: 2; position: absolute;margin-left: 22%;margin-top: 9.5%;transform:rotate("+perilla_20k[6]+"deg)");
  			document.getElementById("numero_2").src="recursos/2.png";}
  			document.getElementById("cables_2").src="recursos/cables_2.png";
  			document.getElementById("cables_2").style="z-index: 3;position: absolute;left: 8%;margin-top: 1%;";
  			document.getElementById("multimetro_2").style="z-index: 1;position: absolute;left: 15.19%;";
  			
  			document.getElementById("numero_2").setAttribute("style","z-index: 2; position: absolute;margin-left: 22.5%;margin-top: 2.3%;")

  		},1000);
	// body...
}}//fin animacion 1: circuito en serie
//Inicio animacion 2: circuito en paralelo
function animar_paralelo_1() {
	g=0;
	i=0;
	j=0;
	tiempo2=0;
	  		setInterval(function(){
	  			tiempo2=tiempo2+tiempo;
	  			if(tiempo2==2000){
	  				document.getElementById("mensaje_1").innerHTML="<sup>1</sup>/<sub>R<sub>eq</sub></sub> = <sup>1</sup>/<sub>R<sub>1</sub></sub> + <sup>1</sup>/<sub>4<sub>2</sub></sub> <br> <sup>1</sup>/<sub>R<sub>eq</sub</sub> = <sup>1</sup>/<sub>5Ω</sub> + <sup>1</sup>/<sub>5Ω</sub><br><sup>1</sup>/<sub>R<sub>eq</sub></sub>=<sup>2</sup>/<sub>5</sub>Ω<br>R<sub>eq</sub> = <sup>2</sup>/<sub>5</sub>Ω<br>R<sub>eq</sub> = 2.5Ω";
	  			}
	  			if (tiempo2>=3000 && tiempo2<=6000) {
	  					  				  		document.getElementById("multimetro").removeAttribute("hidden");
  		document.getElementById("perilla").removeAttribute("hidden");
  		document.getElementById("numero").removeAttribute("hidden");
	  				document.getElementById("circuito").src="recursos/366 (2).png";
	  				  		  	document.getElementById("cable_n").removeAttribute("hidden");
  		  	document.getElementById("cable_r").removeAttribute("hidden");
  		  	document.getElementById("cables").removeAttribute("hidden");
	  			
	  			}
	  			if (tiempo2>=6000 && tiempo2<=9000) {

  		  	  		setInterval(function(){
document.getElementById("numero").src="recursos/"+j+".png";
j=j+1;

if (j>=10) {
	document.getElementById("numero").src="recursos/2_5.png";
}
  }, 200);

	  			}
	  		setInterval(function(){
  			
  			document.getElementById("perilla").setAttribute("style","z-index: 2; position: absolute;margin-left: 19.5%;margin-top: 9.5%;transform:rotate("+perilla_20k[g]+"deg)");
  			g=g+1;
  			if (g>=12) {document.getElementById("perilla").setAttribute("style","z-index: 2; position: absolute;margin-left: 19.5%;margin-top: 9.5%;transform:rotate("+perilla_20k[12]+"deg)");}}

, 500);
	  		if(tiempo2>=1000 && tiempo2<=15000){
	  				document.getElementById("animacion_1").setAttribute("hidden","");
	  			animacion_paralelo_2();
}
		  			  		if(tiempo2>=15000){
	document.getElementById("animacion_2").setAttribute("hidden","");
		document.getElementById("animacion_3").removeAttribute("hidden");}


	// body...

},tiempo);}

function animacion_paralelo_2(){


	document.getElementById("animacion_2").removeAttribute("hidden");
		document.getElementById("circuito_2").removeAttribute("hidden");
	  			  		  	document.getElementById("cable_n_2").removeAttribute("hidden");
  		  	document.getElementById("cable_r_2").removeAttribute("hidden");
  		  	document.getElementById("multimetro_2").removeAttribute("hidden");
  		  	document.getElementById("numero_2").removeAttribute("hidden");
  		  	document.getElementById("cables_2").removeAttribute("hidden");
  		  	document.getElementById("perilla_2").removeAttribute("hidden");


		  			  		setInterval(function(){
  			document.getElementById("mensaje_2").innerHTML="I=<sup>V</sup>/<sub>R</sub><br>I=<sup>10V</sup>/<sub>2.5Ω</sub><br>I = 4A";
  			document.getElementById("perilla_2").setAttribute("style","z-index: 2; position: absolute;margin-left: 21.5%;margin-top: 9.5%;transform:rotate("+perilla_20k[i]+"deg)");
  			i=i+1;
  			if (i>=6) {document.getElementById("perilla_2").setAttribute("style","z-index: 2; position: absolute;margin-left: 21.5%;margin-top: 9.5%;transform:rotate(85deg)");}
  				setInterval(function(){
document.getElementById("numero_2").src="recursos/"+j+".png";
j=j+1;

if (j>=10) {
	document.getElementById("numero_2").src="recursos/5.png";
}
  }, 200);}

, 500);

}
//fin animacion 2: circuito en paralelo
function animacion_mixto_1() {
		g=0;
	i=0
	tiempo2=0;
	setInterval(function(){
tiempo2=tiempo2+tiempo;
if (tiempo2==2000){
	document.getElementById("mensaje_1").innerHTML="<sup>1</sup>/<sub>R<sub>eq</sub></sub> = <sup>1</sup>/<sub>R<sub>2</sub></sub> + <sup>1</sup>/<sub>4<sub>3</sub></sub> <br> <sup>1</sup>/<sub>R<sub>eq</sub</sub> = <sup>1</sup>/<sub>8Ω</sub> + <sup>1</sup>/<sub>8Ω</sub><br><sup>1</sup>/<sub>R<sub>eq</sub></sub>=<sup>2</sup>/<sub>8</sub>Ω<br>R<sub>eq</sub> = <sup>8</sup>/<sub>2</sub>Ω<br>R<sub>eq</sub> = 4Ω";
}
if(tiempo2==4000){
	document.getElementById("circuito").src="recursos/323 (2).png";
}
if(tiempo2==5000){
	document.getElementById("mensaje_1").innerHTML="R<sub>total</sub> = R<sub>1</sub> + R<sub>eq</sub> + R<sub>4</sub> <br> R<sub>total</sub> = 10Ω";}
	if(tiempo2==8000){
	document.getElementById("multimetro").removeAttribute("hidden");
  		document.getElementById("perilla").removeAttribute("hidden");
  		document.getElementById("numero").removeAttribute("hidden");
  		document.getElementById("circuito").src="recursos/316 (2).png"
  		  setInterval(function(){
  		  	document.getElementById("perilla").setAttribute("style","z-index: 2; position: absolute;margin-left: 19.5%;margin-top: 9.5%;transform:rotate("+perilla_20k[i]+"deg)");
  		  	i=i+1;
  		  	if (i>=14) {
  		  		document.getElementById("perilla").setAttribute("style","z-index: 2; position: absolute;margin-left: 19.5%;margin-top: 9.5%;transform:rotate("+perilla_20k[14]+"deg)")
  		  	}

  		  	document.getElementById("cable_n").removeAttribute("hidden");
  		  	document.getElementById("cable_r").removeAttribute("hidden");
  		  	document.getElementById("cables").removeAttribute("hidden");
  }, tiempo3);
  		  		}
  		  		if (tiempo2==16000) {
  		  			setInterval(function(){
document.getElementById("numero").src="recursos/"+j+".png";
j=j+1;

if (j>=10) {
	document.getElementById("numero").src="recursos/10.png";
}
  }, 200);
  		  		}
  		  		if (tiempo2>=22000 && tiempo2<=27000) {
  		  			document.getElementById("animacion_1").setAttribute("hidden","");
  		  				document.getElementById("animacion_2").removeAttribute("hidden");
	  			  		  	document.getElementById("cable_n_2").removeAttribute("hidden");
  		  	document.getElementById("cable_r_2").removeAttribute("hidden");
  		  	document.getElementById("multimetro_2").removeAttribute("hidden");
  		  	document.getElementById("numero_2").removeAttribute("hidden");
  		  	document.getElementById("cables_2").removeAttribute("hidden");
  		  	document.getElementById("perilla_2").removeAttribute("hidden");
	  
  		document.getElementById("circuito_2").src="recursos/554 (2).png"
  		document.getElementById("mensaje_2").innerHTML="V = I . P <br> 10 V = I . (10Ω)<BR> <SUP>10V</sup>/<sub>10Ω</sub>= I <BR> I = 1A"
  		document.getElementById("numero_2").src="recursos/1.png";
  		setInterval(function(){
  			
  			document.getElementById("perilla_2").setAttribute("style","z-index: 2; position: absolute;margin-left: 22%;margin-top: 9.5%;transform:rotate("+perilla_20k[g]+"deg)");
  			g=g+1;
  			if (g>=6) {document.getElementById("perilla_2").setAttribute("style","z-index: 2; position: absolute;margin-left: 22%;margin-top: 9.5%;transform:rotate("+perilla_20k[6]+"deg)");
  			document.getElementById("numero_2").src="recursos/2.png";}
  			document.getElementById("cables_2").src="recursos/cables_2.png";
  			document.getElementById("cables_2").style="z-index: 3;position: absolute;left: 8%;margin-top: 1%;";
  			document.getElementById("multimetro_2").style="z-index: 1;position: absolute;left: 15.19%;";
  			
  			document.getElementById("numero_2").setAttribute("style","z-index: 2; position: absolute;margin-left: 22.5%;margin-top: 2.3%;")

  		},200);
	// body...

  		  		}
  		  		if (tiempo2==27000) {
  		  			document.getElementById("animacion_2").setAttribute("hidden","");
  		  			document.getElementById("animacion_3").removeAttribute("hidden");
  		  			document.getElementById("mensaje_3").innerHTML="V<sub>x</sub> = 1A * 4Ω <BR>V<sub>x</sub> = 4V <BR>";}
  		  			if (tiempo2>=31000) {
  		document.getElementById("animacion_3").setAttribute("hidden","");
  			document.getElementById("animacion_4").removeAttribute("hidden");
  		  				document.getElementById("circuito_4").src="recursos/mixto_2 (2).png";
  		  			}
  		  		

	},tiempo)
	// body...
}