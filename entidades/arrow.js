 var ARROW = {
        x: 0, //pocicion de la flecha H
        y: 0, //posicion de la flecha V
        velocidad: 2,
        nombre: 'arrow',
        visible: true,

        flecha0 : [
            {x:0,y: 0},
            {x:16*3,y: 0}
        ],

        actualizacionMause: function(){
            this.x += (mause.x - this-x)/this.velocidad;
            this.y += (mause.y - this-y)/this.velocidad;
        },

        dibujar: function(contexto){
            if(this.visible){
                contexto.clearRect(PLAYER.x,PLAYER.y,16*3,16*3);
                contexto.drawImage(arrow,PLAYER.flecha0[indiceAnimacion].x,PLAYER.flecha0[indiceAnimacion].y, 16*3, 16*3,PLAYER.x,PLAYER.y,16*3,16*3);
            }
        },

        actualizar: function(){
            this.actualizacionMause();
        },

        animacion_1:function(){
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
};