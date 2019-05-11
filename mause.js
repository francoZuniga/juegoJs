var mause = {
    x: 0,
    y:0,
    clickmause: function(event){
       mause.x = event.x;
       mause.y = event.y; 
    },

    iniciar: function(){
        framework.canvas.addEventListener('click',this.clickmause,false);
    }
};