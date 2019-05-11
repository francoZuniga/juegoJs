class TERRENO{
    constructor(x,y){
        PLAYER.x = X;
        PLAYER.y = Y;

        PLAYER.indice = Math.random(0,2);
        console.log(parseInt(indice));
    }

    pintar(contexto){
        contexto.drawImage(terrenoImg,PLAYER.caminarFrente[PLAYER.indice].x,PLAYER.caminarFrente[PLAYER.indice].y, 96, 96,PLAYER.x,PLAYER.y,96,96);
    }
}