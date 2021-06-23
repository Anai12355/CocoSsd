img = "";
status = "";
function preload()
{
    img = loadImage("banana.jpg");
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#e0c216")
    text("Banana", 45, 75);
    noFill();
    stroke("#e0c216");
    rect(30, 60, 560, 350);

    fill("#FF0000")
    text("Apple", 460, 100);
    noFill();
    stroke("#FF0000");
    rect(260, 80, 250, 180);

}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}
