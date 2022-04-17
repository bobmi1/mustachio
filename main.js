function preload() {

}
function setup() {
    canvas = createCanvas(301,299);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(301,299);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded() {
    console.log("poseNet is initialized");
   }
function gotPoses(results) {
    if (results.length > 0) {

    
    console.log("results");
    console.log("Nose-x = "+results[0].pose.nose.x);
    console.log("Nose-y = "+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,301,299);
}
function ts(){
    save("saved.png");
}