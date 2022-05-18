function preload() {
    }
    
    function setup() {
        canvas = createCanvas(500 , 500);
        video = createCapture(VIDEO);
        video.hide();
        canvas.position(100 , 250);
        color_name = "";
    }
    function filter_tint(){
        color_name = document.getElementById("color_name").value;
            }
    
    function draw() {
    image(video , 0 , 0 , 500 , 500);
    tint(color_name);
    }
    
    function take_snapshot() {
save("filter_image.png");
    }