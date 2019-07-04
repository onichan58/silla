class cuadrado{
	constructor(c, an, x, y, rr, h){
		this.Color = c;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        }

	Dibujar(contextoDeDibujo){

	contextoDeDibujo.strokeStyle = this.Color; 
	contextoDeDibujo.fillStyle  = this.Color;
           
           

           
         var Area =this.Ancho/2
         contextoDeDibujo.beginPath();
         contextoDeDibujo.moveTo(this.X+20*Area,this.Y+20*Area);  
         contextoDeDibujo.lineTo(this.X+60*Area,this.y+20*Area);
         contextoDeDibujo.fill();
    }
}