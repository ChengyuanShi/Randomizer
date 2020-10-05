let emoji = [{
  name: "(￣▽￣)",
  color: "How are you today?"
}, {
  name: "（＞人＜；）",
  color: "How are you yesterday?"
}, {
  name: "(。・∀・)",
  color: "How are you on Sunday?"
}, {
  name: "(❤ ω ❤)",
  color: "How are you on Sunday?"
}, {
  name: "(～﹃～)",
  color: "How are you in the morning?"
}, {
  name: "( $ _ $ )",
  color: "Did you sleep well last night?"
}];
let randomIndex;
let counter = 0;
let animating = false;
let trolls = [];
let imageCounter = 0;
let button;

function preload() {
  for (let i = 0; i <= 4; i++) {
    trolls[i] = loadImage("assets/troll_" + i + ".jpg")
  }
}

function setup() {
  createCanvas(700, 700);
  background(200);
  textSize(28);
  textFont('Impact')
  imageMode(CENTER);
  frameRate(6);
  text("click to randomize", 260, 350);
  // console.log(trolls);
button = createButton("click to randomize");
button.mousePressed(buttonPressed);

  // setTimeout(changeBackground, 1000);


}

function draw() {

  if (animating == true) {
    // ellipse(random(width), random(height), random(50,200));
    clear();
    image(trolls[imageCounter], width/2, height/2);
    if (imageCounter < trolls.length - 1) {
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
      text(`${emoji[randomIndex].name} Hello!
${emoji[randomIndex].color}`, 50, 50);
image(random(trolls), width/2, height/2);
      // text(emoji[randomIndex].name + "Hello!" + emoji[randomIndex].color, 50, 50);

      emoji.splice(randomIndex, 1);

    } else {
      background(random(200, 255));
      text("END", 50, 50);
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
