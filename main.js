img = "";
function preload(){
img = loadImage("tv.jpeg")
}
function setup(){
canvas =  createCanvas(640, 420)
canvas.center()
objectDetect = ml5.objectDetector('cocossd',modelLoaded)
}
function modelLoaded(){
    console.log("op in the chat ")
}
function draw(){
    image(img, 0, 0, 640, 420)
    fill("#FF0000")
    text("TV",250, 130)
    noFill()
    stroke("#FF0000")
    rect(235, 115, 220, 100)
}