leftWristX=0;
rightWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
 
 
    canvas = createCanvas(550, 500);
    canvas.position(560, 150)
 
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
 }
 
 
 function draw() {
    background('#a5b4d4')
    text('Anushka', 80, 40);
    textSize(difference);
    console.log(textSize)
 }
 
 function textSize(){
    fill('#93a8ed');

 }

 function modelLoaded() {
    console.log(' PoseNet Is Initialized');
 }
 
 
 function gotPoses(results)
 {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.X;
        rightWristX=results[0].pose.rightWrist.X;
        console.log('leftWristX=' +leftWristX +'rightWristX=' +rightWristX);
        difference= floor(leftWristX-rightWristX);
        console.log('difference='+ difference)
    }
 }
 