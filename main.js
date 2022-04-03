function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(510,160);
    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model is Initialized"); 
}
function gotPoses(result){
if(result.length>0){
    console.log(result);
}
}