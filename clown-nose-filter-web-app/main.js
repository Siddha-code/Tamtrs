noseX = 0;
noseY = 0;
function preload() {
    Tamatr = loadImage('https://i.postimg.cc/90LCDsMz/tamatr.png')
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotpose);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(Tamatr ,noseX, noseY, 60, 60);
    fill(255, 0,0);
    stroke(255, 0, 0);
}

function Namer() {
    Name = document.getElementById("Name_input").value + ".png";
   console.log("Name Set As" , Name);
}
function take_snapshot() {
    save(Name);
}
function modelLoaded() {
    console.log('PoseNet Is Neutrlised');
}
function gotpose(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y - 20;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}