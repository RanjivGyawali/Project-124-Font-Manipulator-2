function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(50, 30)
    canvas = createCanvas(550, 450);
    canvas.position(680, 80);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#0000ff');
}
function modelLoaded() {
    console.log('PoseNet is initialized');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}