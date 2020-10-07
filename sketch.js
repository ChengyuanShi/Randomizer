let emoji = [{
  name: "(￣▽￣)",
  color: "Cool!"
}, {
  name: "（＞人＜；）",
  color: "Not Bad ~"
}, {
  name: "(。・∀・)",
  color: "Looks great..."
}, {
  name: "(❤ ω ❤)",
  color: "uhm~ Interesting"
}, {
  name: "(～﹃～)",
  color: "Do U like it?"
}, {
  name: "( $ _ $ )",
  color: "Nice!"
}];
let randomIndex;
let counter = 0;
let animating = false;
let troll = [];
let upon = [];
let down = [];
let imageCounter = 0;
let button;

function preload() {
  for (let i = 0; i <= 4; i++) {
    troll[i] = loadImage("assets/troll_" + i + ".jpg")
  }
  for (let i = 0; i <= 4; i++) {
    upon[i] = loadImage("assets/upon_" + i + ".png")
  }
  for (let i = 0; i <= 4; i++) {
    down[i] = loadImage("assets/down_" + i + ".png")
  }
}

function setup() {
  createCanvas(700, 700);
  background(200);
  textSize(28);
  textFont('Impact')
  imageMode(CENTER);
  frameRate(6);
  text("randomize anime characters face", 150, 350);
  // console.log(trolls);
button = createButton("click me => *_*");
button.mousePressed(buttonPressed);

  // setTimeout(changeBackground, 1000);


}

function draw() {

  if (animating == true) {
    // ellipse(random(width), random(height), random(50,200));
    clear();
    image(troll[imageCounter], width/2, height/2);
    if (imageCounter < troll.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }

}

function randomizer() {
    animating = false;
    if (emoji[0]) {
      // background(random(200, 255));
      clear();
      randomIndex = int(random(emoji.length));
      //console.log(emoji[randomIndex].name);
      text(`${emoji[randomIndex].name} ${emoji[randomIndex].color}`, 50, 50);
image(random(upon), 350, 330);
image(random(down), 350, 350);
      // text(emoji[randomIndex].name + "Hello!" + emoji[randomIndex].color, 50, 50);

      emoji.splice(randomIndex, 1);

    } else {
      background(random(200, 255));
      text("THE END", width/2, height/2);
    }
  }
  // function changeBackground(){
  //   if (counter <= 5){
  //     counter++;
  //     console.log(counter)
  //   background(random(255), random(255), random(255));
  //   setTimeout(changeBackground, 1000);
  // } else{
  //
  // }
  // }

  function buttonPressed() {
    animating = true;
    setTimeout(randomizer, 2000);

  }
