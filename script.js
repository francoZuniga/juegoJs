var sprite = new Image();
var enemigoSprite = new Image();
var flechaSprite = new Image();

sprite.onload = function(){
    for(var i = 0; i < 5; i++){
        var enemigoClon = Object.create(enemigo);
        enemigoClon.x = (Math.random()*400)+40;
        enemigoClon.y = (Math.random()*400)+40;
        framework.objetosDeJuego.push(enemigoClon);
    }
    for(var i = 0; i < 5; i++){
        var flechas = Object.create(ARROW);
        framework.objetosDeJuego.push(flechas);
    }
    framework.objetosDeJuego.push(PLAYER);
    framework.iniciar();
    //mause.iniciar();
    teclado.iniciar();
};

sprite.src = 'img/img.png';
enemigoSprite.src = 'img/enemigo.png';
flechaSprite.src = 'img/arrow.png';