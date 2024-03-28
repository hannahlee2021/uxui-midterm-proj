
//variable declarations

//icons
let hair1 = [];
let hair2 = [];
let hair3 = [];
let hair4 = [];

//# of iterations per icon
let iconNum = 20;

//declaring icon as arrays (for placement)
let icon_hair1 = [];
let icon_hair2 = [];
let icon_hair3 = [];
let icon_hair4 = [];



//loading + declaring image files
function preload(){
  

//    icon_hair1 = loadImage('bigger-books-sketch/pink-book.png');
//    icon_hair2 = loadImage('bigger-books-sketch/blue-book.png');
//    icon_hair3 = loadImage('bigger-books-sketch/green-book.png');
//    icon_hair4 = loadImage('bigger-books-sketch/orange-book.png');

   icon_hair1 = loadImage('books-sketch/pink-book.png');
   icon_hair2 = loadImage('books-sketch/blue-book.png');
   icon_hair3 = loadImage('books-sketch/green-book.png');
   icon_hair4 = loadImage('books-sketch/orange-book.png');

  
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //declaring randomized placements of each icon
    for (let i = 0; i < iconNum; i++){
    
    hair1[i] = new Hair(random(windowWidth),random(windowHeight));
    hair2[i] = new Hair2(random(windowWidth), random(windowHeight));
    hair3[i] = new Hair3(random(windowWidth), random(windowHeight));
    hair4[i] = new Hair4(random(windowWidth), random(windowHeight));

      
    }



  
}

function draw() {

  background(255);

  //calling the function where everything that happens is defined
      scene0();


}

//assigning what happens in scene 0 (aka the content)
function scene0() {

  //creating constant iterations
  for (let i = 0; i < iconNum; i++){
  
  //calling the body + move constructors defined
  hair1[i].body()
  hair1[i].move()

  hair2[i].body()
  hair2[i].move()

  hair3[i].body()
  hair3[i].move()

  hair4[i].body()
  hair4[i].move()

 
  }

  }


//declaring icons for scene 0
/* HAIR1 ICON */

//defining the class for each hair icon
class Hair{
  constructor(x,y){
	this.x = x;
	this.y = y;
   
  }
  
  //defines how the image is to be presented + placement on canvas
  body(){
    
    noStroke()
    image(icon_hair1,this.x,this.y,50,50);
   }
  
   //defines how the image will move down the canvas
  move(){
    this.y++;
    if (this.y>height){
      this.y=0;
    }
  }

  //defines when the image is to be removed from the canvas
  remove(){
    this.x = -100;
    this.y = -100;
  }

}

class Hair2 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  body() {
    noStroke();
    image(icon_hair2, this.x, this.y, 50, 50);
  }

  move() {
    this.y++;
    if(this.y>height) {
      this.y=0;
    }
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
}

class Hair3 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  body() {
    noStroke();
    image(icon_hair3, this.x, this.y, 50, 50);
  }

  move() {
    this.y++;
    if(this.y>height) {
      this.y=0;
    }
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
}

class Hair4 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  body() {
    noStroke();
    image(icon_hair4, this.x, this.y, 50, 50);
  }

  move() {
    this.y++;
    if(this.y>height) {
      this.y=0;
    }
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
}