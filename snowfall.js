class snowfall {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction:0.001,
            isStatic:false
        }
        this.r = 5;
        this.snow = Bodies.circle(x, y, 5, options);


        var num=Math.round(random(1,2));
        var img;
        if(num===1){
        img="snow4.webp";
        }
        else{
        img="snow5.webp";
        }
        this.image=loadImage(img);
    
        
        World.add(world, this.snow);
    }
    display() {
    fill("blue");
    imageMode(CENTER);
    
    image(this.image,this.snow.position.x,this.snow.position.y,10,10)


    }
    updateY(){
    if(this.snow.position.y>height){random(0,800)};
    
    
    }
};