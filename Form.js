class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Name");
        
        this.button = createButton("PLAY");
        this.greeting =createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
       
        this.title.html("CAR RACING GAME");
        this.title.position(130,0);

      
        this.input.position(130,160);

        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index =playerCount;
            player.update();
          
            player.updateCount(playerCount);
          
            this.greeting.position(130,160);
            this.greeting.html("hello   "+player.name)
        })
    }

}