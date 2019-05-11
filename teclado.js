var teclado = {
    teclasPrecionadas:{
        '65':false,
        '87':false,
        '68':false,
        '83':false,
        '82':false
    },
    
    teclaNoPrecionada:function(event){
        var tecla = event.keyCode;
        teclado.teclasPrecionadas[tecla] = false;
    },
    
    teclaPrecionada:function(event){
        var tecla = event.keyCode;
        teclado.teclasPrecionadas[tecla] = true;
        console.log(tecla); 
   },
    
    iniciar: function(){
        document.addEventListener('keydown', this.teclaPrecionada, false);
        document.addEventListener('keyup', this.teclaNoPrecionada, false);
    }
}