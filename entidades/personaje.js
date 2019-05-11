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
    movimiento : 'F',

    actualizaConTeclas: function(){
        if(teclado.teclasPrecionadas['65']){
            this.x--;
        }
        if(teclado.teclasPrecionadas['68']){
            this.x++;
        }
        if(teclado.teclasPrecionadas['83']){
            this.y++;
        }
        if(teclado.teclasPrecionadas['87']){
            this.y--;
        }
    },
    
    actualizar: function(delta){
        this.tiempoAcumulado += delta;
        this.actualizaConTeclas();
    },

    mapeoDeMovimiento : function(){
        if(teclado.teclasPrecionadas['65']){
            this.movimiento = 'A';
        }

        if(teclado.teclasPrecionadas['83']){
            this.movimiento = 'S';
        }

        if(teclado.teclasPrecionadas['87']){
            this.movimiento = 'W';
        }

        if(teclado.teclasPrecionadas['68']){
            this.movimiento = 'D';
        }

        if(teclado.teclasPrecionadas['68'] && teclado.teclasPrecionadas['87']){
            this.movimiento = 'D';
        }

        if(teclado.teclasPrecionadas['68'] && teclado.teclasPrecionadas['83']){
            this.movimiento = 'D';
        }

        if(teclado.teclasPrecionadas['65'] && teclado.teclasPrecionadas['87']){
            this.movimiento = 'A';
        }

        if(teclado.teclasPrecionadas['65'] && teclado.teclasPrecionadas['83']){
            this.movimiento = 'A';
        }

        if(teclado.teclasPrecionadas['87'] && teclado.teclasPrecionadas['83']){
            this.movimiento = 'F';
        }

        if(teclado.teclasPrecionadas['68'] && teclado.teclasPrecionadas['65']){
            this.movimiento = 'F';
        }

        if(teclado.teclasPrecionadas['69']){
            this.movimiento = 'E';
        }
    },
    animacion_1: function(){
        var esteCuadro = new Date().getTime(),
        delta = (esteCuadro - ultimoCuadro)/1000;
        ultimoCuadro = esteCuadro;
        tiempoAcumulado += delta;

        if(indiceAnimacion < 2 && tiempoAcumulado > 0.3 ){
            tiempoAcumulado = 0;
            indiceAnimacion ++;
        }

        indiceAnimacion = indiceAnimacion % 2;
    },

    dibujar: function(contexto){
        this.mapeoDeMovimiento();

        switch(this.movimiento){
            case 'S':
                this.movimiento = false;
                contexto.drawImage(sprite,PLAYER.poceFrente[0].x,PLAYER.poceFrente[0].y, 96, 96,this.x,this.y,96,96);
            break;
            case 'W':
                this.movimiento = false;
                contexto.drawImage(sprite,PLAYER.poceArriva[0].x,PLAYER.poceArriva[0].y, 96, 96,this.x,this.y,96,96);
            break;
            case 'A':
                this.movimiento = false;
                contexto.drawImage(sprite,PLAYER.poceIzquierda[0].x,PLAYER.poceIzquierda[0].y, 96, 96,this.x,this.y,96,96);
            break;
            case 'D':
                this.movimiento = false;
                contexto.drawImage(sprite,PLAYER.poceDerecha[0].x,PLAYER.poceDerecha[0].y, 96, 96,this.x,this.y,96,96);
            break;
            case 'W':
                this.movimiento = false;
                contexto.drawImage(sprite,PLAYER.poceDerecha[0].x,PLAYER.poceDerecha[0].y, 96, 96,this.x,this.y,96,96);
            break;
            case 'E':
                this.movimiento = false;
                contexto.drawImage(sprite,PLAYER.poceDerecha[0].x,PLAYER.poceDerecha[0].y, 96, 96,this.x,this.y,96,96);
            break;
            default:
                this.movimiento = false;
                contexto.drawImage(sprite,PLAYER.poceFrente[0].x,PLAYER.poceFrente[0].y, 96, 96,this.x,this.y,96,96);
            break;
        }

        this.animacion_1;
    }
};