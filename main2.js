var arregloSillas;

function crearsilla(){
	  
    Clear();
	
           
           arregloSillas = new Array(
      new Silla("green", 150, 39, 350,167, 315, 2, 4),
      new Silla("orange", 120, 40, 20,166, 11, 6, 8),
      new Silla("red", 140, 38, 650,396, 10, 5, 3));
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
  for (var i = arregloSillas.length - 1; i >= 0; i--) {
    arregloSillas[i].Dibujar(context);
  }
	 
} 
	
	

	


function ordenarSillasTamaño(){
  var myCanvas = document.getElementById("myCanvas");
  var context = myCanvas.getContext("2d");

	var n = arregloSillas.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloSillas[j].Altura > arregloSillas[j+1].Altura){
				//Intercambio
				aux = arregloSillas[j];
				aux_x_j = arregloSillas[j].X;
				aux_y_j = arregloSillas[j].Y;
				aux_x_j_1 = arregloSillas[j+1].X;
				aux_y_j_1 = arregloSillas[j+1].Y;
				
				arregloSillas[j] = arregloSillas[j+1];
				arregloSillas[j+1] = aux;

				arregloSillas[j].X = aux_x_j;
				arregloSillas[j].Y = aux_y_j;

				arregloSillas[j+1].X = aux_x_j_1;
				arregloSillas[j+1].Y = aux_y_j_1;
			}
		}
	}

  for (var i = arregloSillas.length - 1; i >= 0; i--) {
    arregloSillas[i].Dibujar(context);
  }
} 
function OrdenarMaterial(){
  var myCanvas = document.getElementById("myCanvas");
  var context = myCanvas.getContext("2d");

	var n = arregloSillas.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloSillas[j].Color > arregloSillas[j+1].Color){
				//Intercambio
				aux = arregloSillas[j];
				aux_x_j = arregloSillas[j].X;
				aux_y_j = arregloSillas[j].Y;
				aux_x_j_1 = arregloSillas[j+1].X;
				aux_y_j_1 = arregloSillas[j+1].Y;
				
				arregloSillas[j] = arregloSillas[j+1];
				arregloSillas[j+1] = aux;

				arregloSillas[j].X = aux_x_j;
				arregloSillas[j].Y = aux_y_j;

				arregloSillas[j+1].X = aux_x_j_1;
				arregloSillas[j+1].Y = aux_y_j_1;
			}
		}
	}

  for (var i = arregloSillas.length - 1; i >= 0; i--) {
    arregloSillas[i].Dibujar(context);
  }
} 
function OrdenarEdad(){
  var myCanvas = document.getElementById("myCanvas");
  var context = myCanvas.getContext("2d");

	var n = arregloSillas.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloSillas[j].Edad > arregloSillas[j+1].Edad){
				//Intercambio
				aux = arregloSillas[j];
				aux_x_j = arregloSillas[j].X;
				aux_y_j = arregloSillas[j].Y;
				aux_x_j_1 = arregloSillas[j+1].X;
				aux_y_j_1 = arregloSillas[j+1].Y;
				
				arregloSillas[j] = arregloSillas[j+1];
				arregloSillas[j+1] = aux;

				arregloSillas[j].X = aux_x_j;
				arregloSillas[j].Y = aux_y_j;

				arregloSillas[j+1].X = aux_x_j_1;
				arregloSillas[j+1].Y = aux_y_j_1;
			}
		}
	}

  for (var i = arregloSillas.length - 1; i >= 0; i--) {
    arregloSillas[i].Dibujar(context);
  }
} 
function Clear(){
   var myCanvas = document.getElementById("myCanvas");
   if(myCanvas && myCanvas.getContext("2d"))
   var context = myCanvas.getContext("2d");
   context.fillStyle ="white";
   context.fillRect(0,0,1000,1000);
   context.clearRect(0,500,200,40)

  
}