var bg, tomImg1, tomImg2, tomImg3, jerryImg1, jerryImg2, jerryImg3


function preload() {
    //load the images here
    
    
    bg = loadImage("images/garden.png")
    tomImg1 = loadAnimation("images/cat1.png")
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
    tomImg3 = loadAnimation("images/cat4.png")
    jerryImg1 = loadAnimation("images/mouse1.png")
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    jerryImg3 = loadAnimation("images/mouse4.png")

}

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(900,600)
tom.addAnimation("sleeping", tomImg1)
tom.scale = 0.2

jerry = createSprite(200,600)
jerry.addAnimation("standing", jerryImg1)
jerry.scale = 0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x = jerry.x<(tom.width-jerry.width)/2){
tom.velocityX = 0
tom.addAnimation("tejas", tomImg3)
tom.x = 200;
tom.scale = 0.2;
tom.changeAnimation("tejas")
jerry.addAnimation("john", jerryImg3)
jerry.scale = 0.2;
jerry.changeAnimation("john")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
tom.velocityX = -5;
tom.addAnimation("tomrunning", tomImg2)
tom.changeAnimation("tomrunning")

jerry.addAnimation("jerryteasing", jerryImg2)
jerry.frameDelay = 25;
jerry.changeAnimation("jerryteasing")

}

}
