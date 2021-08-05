class Zombie{
    constructor(){

    }

    display(){
       if(frameCount% 120 === 0){
           zombie = createSprite(830, 120);
           zombie.y = Math.round(random(300, 260));
           zombie.addImage(zombieImg);
           zombie.scale = 0.25;
           zombie.velocityX = -3;
       }
    }
}