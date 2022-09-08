var supra,police,background
var suprapng,policepng,backgroundwebp
var road
var barrel

function preload() {
suprapng = loadImage("supra.png")
policepng = loadImage("police.png")
roadjpg = loadImage("road.jpg")
barrelpng = loadImage("barrel.png")

}

function setup() {
createCanvas(1366,650)

road = createSprite(683,325,width,650)
road.addImage(roadjpg)
road.scale = 2.9
road.velocityX = 25

supra = createSprite(899,500,100,100)
supra.scale = 0.5;
supra.addImage(suprapng)



police = createSprite(500,500,100,100)
police.scale = 0.32
police.addImage(policepng)


barrel = createSprite(500,500,300,300)
barrel.scale = 0.10
barrel.addImage(barrelpng)


}

function draw() {
 background("green")
drawSprites()


if (road.x > road.width/2){
    road.x = 0;
}

}