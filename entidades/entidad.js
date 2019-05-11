var enemigo = {
    x: (Math.random()*400)+40,
    y:20,
    
    actualizar:function(){
        
    },

    dibujar: function(contexto){
        contexto.drawImage(enemigoSprite,0,0, 96, 96,this.x,this.y,96,96);
    }
};