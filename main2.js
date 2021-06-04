img = "";
function preload(){
img = loadImage("bottle.jpeg")
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
    text("bottle",245, 30)
    noFill()
    stroke("#FF0000")
    rect(235, 11, 220, 400)
}