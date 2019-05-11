class ARROW{
    constructor(x,y){
        PLAYER.x = x; //pocicion de la flecha H
        PLAYER.y = y; //posicion de la flecha V

        PLAYER.flecha0 = [
            {x:0,y: 0},
            {x:16*3,y: 0}
        ];
    }

    pintarDerecha(contexto){
        contexto.clearRect(PLAYER.x,PLAYER.y,16*3,16*3);
        contexto.drawImage(arrow,PLAYER.flecha0[indiceAnimacion].x,PLAYER.flecha0[indiceAnimacion].y, 16*3, 16*3,PLAYER.x,PLAYER.y,16*3,16*3);
        PLAYER.animacion_1();
    }

    derecha(contexto){
        PLAYER.x+=1;
    }

    animacion_1(){
        var esteCuadro = new Date().getTime(),
        delta = (esteCuadro - ultimoCuadro)/1000;
        ultimoCuadro = esteCuadro;
        tiempoAcumulado += delta;

        if(indiceAnimacion < 2 && tiempoAcumulado > 0.3 ){
            tiempoAcumulado = 0;
            indiceAnimacion ++;
        }

        indiceAnimacion = indiceAnimacion % 2;
    }
}