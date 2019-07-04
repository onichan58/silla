class Silla{
	constructor(c, al, an, x, y, rr, h,ed){
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.Edad = ed;
	}

	Dibujar(contextoDeDibujo){

	contextoDeDibujo.strokeStyle = this.Color; 
	contextoDeDibujo.fillStyle  = this.Color;
           

            var radio = this.Ancho/5;
            contextoDeDibujo.beginPath();

            contextoDeDibujo.moveTo(this.X+100,this.Y+69);
            contextoDeDibujo.lineTo(this.X+215,this.Y+69);
            //parte del haciento arriba
            contextoDeDibujo.lineTo(this.X+155,this.Y+5);
            contextoDeDibujo.lineTo(this.X+25,this.Y+5);
 
              contextoDeDibujo.fill();
            contextoDeDibujo.closePath();
          
           
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (1/3)*this.RadioCopa;
        var y_esi = yc - (28/4)*this.RadioCopa;

        var ancho_rect = this.RadioCopa;;
        var altura_rect = this.Altura + (20/4)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);
         contextoDeDibujo.fill();
var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (17/3)*this.RadioCopa;
        var y_esi = yc - (28/4)*this.RadioCopa;

        var ancho_rect = this.RadioCopa;;
        var altura_rect = this.Altura + (2/4)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);
         contextoDeDibujo.fill();




           ///respaldo
       
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (1/4)*this.RadioCopa;
        var y_esi = yc - (24/3)*this.RadioCopa;

        var ancho_rect = this.Ancho +(14/3)*this.RadioCopa;
        var altura_rect = this.Altura - (12/3)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();
          /////respaldo



        
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (26/3)*this.RadioCopa;
        var y_esi = yc + (7/3)*this.RadioCopa;

        var ancho_rect = this.RadioCopa;;
        var altura_rect = this.Altura - (1/4)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();
       
        
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (12/3)*this.RadioCopa;
        var y_esi = yc + (7/3)*this.RadioCopa;

        var ancho_rect = this.RadioCopa;;
        var altura_rect = this.Altura - (1/4)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        
        
        contextoDeDibujo.fill();
        contextoDeDibujo.closePath();
        contextoDeDibujo.stroke();
    
       
    }
}
