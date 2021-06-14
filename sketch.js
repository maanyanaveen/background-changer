var btn_red;
var btn_green;
var pinkb;
var r = 0;
var g = 0;
var b = 0;
var p = 0;

function setup() {
  createCanvas(400, 400); 
  btn_red=createButton("red") ;
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_green=createButton("green") ;
  btn_green.position(200,50);
  btn_green.mousePressed(green_bg);

  pinkb=createButton("pink") ;
  pinkb.position(300,50);
  pinkb.mousePressed(pink_bg);

}

function draw() {
  background(r,g,b);

}

function red_bg()
{
  r=255;
  g=0;
  b=0;
}
function green_bg()
{
  r=0;
  g=255;
  b=0;
}
function pink_bg()
{
  r=0;
  g=0;
  b=0;
  p=255;
}
