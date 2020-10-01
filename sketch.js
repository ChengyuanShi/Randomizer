
let emoji = [{name: "(￣▽￣)", color: "How are you today?"},{name: "（＞人＜；）", color: "How are you yesterday?"},{name: "(。・∀・)", color:"How are you on Sunday?"},{name: "(❤ ω ❤)", color:"How are you on Sunday?"},{name: "(～﹃～)", color:"How are you in the morning?"},{name: "( $ _ $ )", color:"Did you sleep well last night?"}];
let randomIndex;
let counter = 0;
let animating = false;

function setup() {
  createCanvas(600, 600);
    background(200);
    textSize(32);
    text("click",50,50);

    // setTimeout(changeBackground, 1000);


}

function draw() {

if(animating == true){
  ellipse(random(width), random(height), random(50,200));
}
}

function randomizer(){
    animating = false;
    if (emoji[0]){
    background(random(200, 255));
    randomIndex = int(random(emoji.length));
    //console.log(emoji[randomIndex].name);
    text(`${emoji[randomIndex].name} Hello!
${emoji[randomIndex].color}`, 50, 50);
    // text(emoji[randomIndex].name + "Hello!" + emoji[randomIndex].color, 50, 50);

    emoji.splice(randomIndex, 1);

  } else {
    background(random(200, 255));
    text("END",50,50);
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

function mousePressed(){
  animating = true;
  setTimeout(randomizer, 2000);

}
