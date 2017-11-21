
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

}

var Danny = new Fighter("The Dagger", "Dagger", "Steel");
var Travon = new Fighter("Hawk", "Bazooka", "Cloth");


Battle(Danny, Travon);




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
