var PLAYER = {
        //los recortes o imagenes del mism
    poceFrente : [
        {x:0,y:0},
        {x:96,y:0}
        ],
    
    poceArriva : [
        {x:0,y:96*3},
        {x:96,y:96*3}
    ],

    poceDerecha : [
        {x:0,y:96},
        {x:96,y:96}
    ],

    poceIzquierda : [
        {x:0,y:96*2},
        {x:96,y:96*2}
    ],

    indiceAnimacion: 0,
    velocidadMovimiento : 5,
    x: 10,
    y: 10,
    objetivoX:0,
    objetivoY:0,
    tiempoAcumulado: 0,
    movimiento : false,

    actualizaConTeclas: function(){
        if(teclado.teclasPrecionadas['65']){
            this.x--;
            if(this.indiceAnimacion < 2 && this.tiempoAcumulado > 0.7 ){
                this.tiempoAcumulado = 0;
                this.indiceAnimacion ++;
            }
        }
        if(teclado.teclasPrecionadas['68']){
            this.x++;
            if(this.indiceAnimacion < 2 && this.tiempoAcumulado > 0.7 ){
                this.tiempoAcumulado = 0;
                this.indiceAnimacion ++;
            }
        }
        if(teclado.teclasPrecionadas['83']){
            this.y++;
            this.movimientoArriva = true;
            if(this.indiceAnimacion < 2 && this.tiempoAcumulado > 0.7 ){
                this.tiempoAcumulado = 0;
                this.indiceAnimacion ++;
            }
        }
        if(teclado.teclasPrecionadas['87']){
            this.y--;
            if(this.indiceAnimacion < 2 && this.tiempoAcumulado > 0.7 ){
                this.tiempoAcumulado = 0;
                this.indiceAnimacion ++;
            }
        }
    },
    
    actualizar: function(delta){
        this.tiempoAcumulado += delta;
        this.actualizaConTeclas();
    },

    dibujar: function(contexto){
        if(teclado.teclasPrecionadas['65']){
            this.movimiento = true;
            contexto.drawImage(sprite,PLAYER.poceIzquierda[0].x,PLAYER.poceIzquierda[0].y, 96, 96,this.x,this.y,96,96);
        }else{
            this.movimiento = false;
        }

        if(teclado.teclasPrecionadas['83']){
            this.movimiento = true;
            contexto.drawImage(sprite,PLAYER.poceFrente[0].x,PLAYER.poceFrente[0].y, 96, 96,this.x,this.y,96,96);
        }else{
            this.movimiento = false;
        }

        if(teclado.teclasPrecionadas['87']){
            this.movimiento = false;
            contexto.drawImage(sprite,PLAYER.poceArriva[0].x,PLAYER.poceArriva[0].y, 96, 96,this.x,this.y,96,96);
        }else{
            this.movimiento = false;
        }

        if(teclado.teclasPrecionadas['68']){
            this.movimiento = true;
            contexto.drawImage(sprite,PLAYER.poceDerecha[0].x,PLAYER.poceDerecha[0].y, 96, 96,this.x,this.y,96,96);
        }else{
            this.movimiento = false;
        }

        if(this.movimiento){
            contexto.drawImage(sprite,PLAYER.poceFrente[0].x,PLAYER.poceFrente[0].y, 96, 96,this.x,this.y,96,96);
        }
    }
};