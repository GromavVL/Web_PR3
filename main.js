const $btnKick = document.getElementById("btn-kick");
const $btnQuick = document.getElementById("btn-quick");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  lost: false,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
  renderHPLife,
  renderProgressbarHP,
  renderHP,
  changeHP,
};

function renderHPLife() {
  this.elHP.innerText = this.damageHP + " / " + this.defaultHP;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damageHP + "%";
  if (this.damageHP > 60) {
    this.elProgressbar.style.background = "#4CAF50";
  } else if (this.damageHP > 30) {
    this.elProgressbar.style.background = "#FF9800";
  } else {
    this.elProgressbar.style.background = "#F44336";
  }
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function changeHP(count) {
  if (this.damageHP <= count) {
    this.damageHP = 0;
    this.renderHP();
    if (!this.lost) {
      alert("Бідний " + this.name + " програв бій!");
      this.lost = true;
    }
  } else {
    this.damageHP -= count;
    this.renderHP();
  }
}

const enemy1 = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  lost: false,
  elHP: document.getElementById("health-enemy1"),
  elProgressbar: document.getElementById("progressbar-enemy1"),
  renderHPLife,
  renderProgressbarHP,
  renderHP,
  changeHP,
};

const enemy2 = {
  name: "Bulbasaur",
  defaultHP: 100,
  damageHP: 100,
  lost: false,
  elHP: document.getElementById("health-enemy2"),
  elProgressbar: document.getElementById("progressbar-enemy2"),
  renderHPLife,
  renderProgressbarHP,
  renderHP,
  changeHP,
};

function random(num) {
  return Math.ceil(Math.random() * num);
}

function attack(person, maxDamage) {
  person.changeHP(random(maxDamage));
}

$btnKick.addEventListener("click", function () {
  console.log("Thunder Jolt!");
  attack(enemy1, 20);
  attack(enemy2, 20);
});

$btnQuick.addEventListener("click", function () {
  console.log("Quick Attack!");
  attack(enemy1, 10);
  attack(enemy2, 10);
});

function init() {
  console.log("Start Game!");
  character.renderHP();
  enemy1.renderHP();
  enemy2.renderHP();
}

init();