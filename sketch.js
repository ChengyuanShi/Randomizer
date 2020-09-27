
let dogs = [{name: "(￣▽￣)", color: "one"},{name: "（＞人＜；）", color: "two"},{name: "(。・∀・)", color:"three"},{name: "(❤ ω ❤)", color:"four"},{name: "(～﹃～)", color:"five"},{name: "( $ _ $ )", color:"six"}];
let randomIndex;

function setup() {
  createCanvas(600, 600);
    background(200);
    textSize(32);
    text("click",50,50);


}

function draw() {
 
}

function mousePressed(){
  if (dogs[0]){
  background(random(200, 255));
  randomIndex = int(random(dogs.length));
  //console.log(dogs[randomIndex].name);
  text(dogs[randomIndex].name, 50, 50);

  dogs.splice(randomIndex, 1);

} else {
  background(random(200, 255));
  text("END",50,50);
}
}
