nose_x=0;
nose_y=0;


function preload(){

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,400,400);
}

function take_snapshot(){
    save('myFilterImage.jpg');
}

function modelLoaded(){
    console.log("poseNet intialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("x ="+nose_x);
        console.log("y ="+nose_y);
    }
}