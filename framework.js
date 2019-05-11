var framework = {

    indiceAnimacion : 0,
    ultimoCuadro : new Date().getTime(),
    tiempoAcumulado : 0,
    contexto : null,
    canvas:null,
    objetosDeJuego : [],

    iniciar: function(){
        this.canvas = document.getElementById('canvas');
        this.contexto = this.canvas.getContext('2d');

        window.obtenerCuadroDeAnimacion = (function(){
            return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    function(callback, element){
                        window.setTimeout(actualizarJuego, 1000/60);
                    };
        })();

        obtenerCuadroDeAnimacion(this.buclePrincipal);
    },

    buclePrincipal: function(){
        var esteCuadro = new Date().getTime(),
        delta = (esteCuadro - PLAYER.ultimoCuadro)/1000;
        framework.ultimoCuadro = esteCuadro;
        framework.tiempoAcumulado += delta;

        framework.contexto.fillStyle = 'white';
        framework.contexto.fillRect(0,0,640,480);

        for(var i = 0; i < framework.objetosDeJuego.length; i++){
            framework.objetosDeJuego[i].actualizar(delta);
            framework.objetosDeJuego[i].dibujar(framework.contexto);
        }

        this.obtenerCuadroDeAnimacion(framework.buclePrincipal);
    }
}