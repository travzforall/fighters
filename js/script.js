
class Fighter {

  constructor(name, weapon, armor) {
    this.name = name;
    this.weapon = weapon;
    this.armor = armor;
    this.life = 10;
    this.slogan = this.getSlogan();
    this.damage = getRandomInt(5, 10);
    this.resistance = getRandomInt(0, 5);
  }

  getSlogan() {
    var slogans = ["Feel the angle of my pain!!",
                  "Don't worry, Pain is just weakness leaving your body!!",
                  "I will win!! Whatever it takes",
                  "If you haven't seen the lights, you haven't wrestled me yet",
                  "It's time for your DOOM!!!",
                  "You will serve Hard Time!!",
                  "Can you dig it Sucka?!!",
                  "I'm the best in the word at what I do",
                  "Welcome to Raw is " + this.name,
                  "You can't see me!!!"];

    return slogans[getRandomInt(0, slogans.length - 1)];
  }



}


function Battle(fighter1, fighter2) {

  fighter1.life = (fighter1.life + fighter1.resistance) - fighter2.damage;
  fighter2.life = (fighter2.life + fighter2.resistance) - fighter1.damage;

  if (fighter1.life<fighter2.life){
    results.textContent = "Danny wins.";
    results.classList.add("visible");

  }
  else if(fighter2.life<fighter1.life){
    results.textContent = "Travon wins.";
    results.classList.add("visible");
  }else{
    results.textContent = "It's a DRAW!";
    results.classList.add("visible");
  }

}

var Danny = new Fighter("The Dagger", "Dagger", "Steel");
var Travon = new Fighter("Hawk", "Bazooka", "Cloth");



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var buttonSelected = document.querySelector("#fightbutton");
console.log(fightbutton);

var slogan1 = document.querySelector("#slogan1");
console.log(slogan1);

var slogan2 = document.querySelector("#slogan2");
console.log(slogan2);

var fighter1 = document.querySelector("#fight1");
console.log(fighter1);

var fighter2 = document.querySelector("#fight2");
console.log(fighter2);

var statistics1 = document.querySelector("#stats1");
console.log(fighter1);

var statistics2 = document.querySelector("#stats2");
console.log(fighter2);

var results = document.querySelector("#results");
console.log(fighter1);






buttonSelected.addEventListener("click",function(){
  slogan1.textContent = "You are going down.";
  slogan2.textContent = "You are going up.";

  slogan1.classList.add("sloganremove");
  slogan2.classList.add("sloganremove");

  fighter1.classList.add("fighter1clash");
  fighter2.classList.add("fighter2clash");

  statistics1.textContent = "FIGHTER. GUN. TWO-SHOTS";
  statistics2.textContent = "GRAPPLER. FISTS. CHOCKEHOLD";

  Battle(Danny, Travon);

  // Danny.life = Danny.Life - Travon.damage + Danny.resistance;
  //
  // Travon.life = Travon.Life - Danny.damage + Travon.resistance;



});
