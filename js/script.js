
class Fighter {

  constructor(name, superMove, armor) {
    this.name = name;
    this.superMove = superMove;
    this.armor = armor;
    this.life = 10;
    this.slogan = this.getSlogan();
    this.damage = getRandomInt(5, 10);
    this.resistance = getRandomInt(0, 5);
    this.wins = 0;
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

  winner() {
    this.wins += 1;
  }



}


function Battle(fighter1, fighter2) {

  fighter1.life = (fighter1.life + fighter1.resistance) - fighter2.damage;
  fighter2.life = (fighter2.life + fighter2.resistance) - fighter1.damage;

  if (fighter1.life<fighter2.life){
    results.textContent = fighter2.name + " wins!";
    travonScore += 1;
    results.classList.add("visible");
    if (travonScore == 3) {
      setTimeout(function() {
        document.querySelector(".winner2").classList.remove("hidden");
        document.querySelector(".winner2").classList.add("fadeIn");
      }, 10000);     
    }

  }
  else if(fighter2.life<fighter1.life){
    results.textContent = fighter1.name + " wins!";
    dannyScore += 1;
    results.classList.add("visible");
    if (dannyScore == 3) {
    setTimeout(function() {
      document.querySelector(".winner1").classList.remove("hidden")
      document.querySelector(".winner1").classList.add("fadeIn");
    }, 10000); 
  } 
  }else{
    results.textContent = "It's a DRAW!";
    results.classList.add("visible"); 
    setTimeout(function() {
      document.querySelector(".winner1").classList.remove("hidden");    
    }, 10000);  

  }
  if (travonScore == 3 || dannyScore == 3) {
  setTimeout(function() {
    stanceImg.forEach(element => {
      element.classList.add("hidden");
      element.classList.remove("show");
    });
  
  }, 10000);     
  }
}




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function reset() {
  runningImg.forEach(element => {
    element.classList.remove("show");
    element.classList.add("hidden");
  });

  stanceImg.forEach(element => {
    element.classList.add("show");
    element.classList.remove("hidden");
  });

  fighter1.classList.remove("fighter1clash");
  fighter2.classList.remove("fighter2clash");

  document.querySelector(".winner1").classList.add("hidden")
  document.querySelector(".winner1").classList.remove("fadeIn");
  document.querySelector(".winner2").classList.add("hidden")
  document.querySelector(".winner2").classList.remove("fadeIn");
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

var stanceImg = document.querySelectorAll(".stance");

var bubbles = document.querySelectorAll(".bubble");
var stats = document.querySelectorAll(".stats");


var runningImg = document.querySelectorAll(".running");

var travonScore = 0;
var dannyScore = 0;

var stats1 = document.querySelectorAll(".fightinfo");
var stats2 = document.querySelectorAll(".moveinfo");
var stats3 = document.querySelectorAll(".wininfo");

function loadStats() {
  stats.forEach((e, i) => {
    if(i == 0) {
      e.innerHTML = Travon.name; 
    } else {
      e.innerHTML =  Danny.name;
    }
  });

  stats2.forEach((e, i) => {
    if(i == 0) {
      e.innerHTML += Travon.superMove; 
    } else {
      e.innerHTML +=  Danny.superMove;
    }
  });

}

var Danny;
var Travon;
buttonSelected.addEventListener("click",function(){
  Danny = new Fighter("The Dagger", "Eclipse", "Steel");
  Travon = new Fighter("Hawk", "Fire Storm", "Cloth");

  loadStats();
 
  reset();

  bubbles.forEach(element => {
    slogan1.textContent = Travon.getSlogan();
    slogan2.textContent = Danny.getSlogan();
    element.classList.remove("hidden");
    element.classList.add("show");
    element.classList.remove("sloganremove");
  });

  setTimeout(function() {
    bubbles.forEach(element => {
      element.classList.add("sloganremove");
      element.classList.remove("show");
    });
    stats.forEach(element => {
      element.classList.remove("hidden");
      element.classList.add("show");
    });
  }, 3000);


setTimeout(function() {
  runningImg.forEach(element => {
    element.classList.remove("hidden");
    element.classList.add("show");
  });

  stanceImg.forEach(element => {
    element.classList.add("hidden");
    element.classList.remove("show");
  });

  fighter1.classList.add("fighter1clash");
  fighter2.classList.add("fighter2clash");
}, 6000);



setTimeout(function() {
  stanceImg.forEach(element => {
    element.classList.remove("hidden");
    element.classList.add("show");
  });

  runningImg.forEach(element => {
    element.classList.add("hidden");
    element.classList.remove("show");
  });

}, 8000);



   Battle(Danny, Travon);



  // Danny.life = Danny.Life - Travon.damage + Danny.resistance;
  //
  // Travon.life = Travon.Life - Danny.damage + Travon.resistance;



});
