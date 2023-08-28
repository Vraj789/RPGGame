var hero = new Image();
hero.src = "resources/Hero.png";
id = "firsthero";
style = "visibility: visible;";
var herosword = new Image();
herosword.src = "resources/HeroSword.png";
id = "secondhero";
var monster1 = new Image();
monster1.src = "resources/monsterlevelone.png";
var monster2 = new Image();
monster2.src = "resources/monsterleveltwo.png";
var monster3 = new Image();
monster3.src = "resources/monsterlevelthree.png";
var monster4 = new Image();
monster4.src = "resources/monsterlevelfour.png";
var boss = new Image();
boss.src = "resources/Boss.png";
var StartBackground = new Image();
StartBackground.src = "resources/GameSCover.png";
var level1Back = new Image();
level1Back.src = "resources/LevelOneBack.png";
var level2Back = new Image();
level2Back.src = "resources/Level2Back.jpg";
var level3Back = new Image();
level3Back.src = "resources/Level3Back.jpg";
var level4Back = new Image();
level4Back.src = "resources/Level4Back.jpg";
var bossBack = new Image();
bossBack.src = "resources/BossBack.jpg";

var heroName;
var heroSpeed;
var heroIntelligence;
var heroHealth;
var heroStrength;
var enemyHealth;
var enemyStrength;
var enemySpeed;
var heroDamage;
var enemyDamage;
var heroCoins = 0;
var heroHearts = 3;
var heroKills = 0;
var health;
var strength;
var levels = 1;
var fightMonster;
var totalscore = 0;


function initialize() {
    startBackground()
}

function startBackground() {
    var ctx = document.getElementById("myCanvas").getContext("2d");     //assigns var ctx to the canvas
    ctx.drawImage(StartBackground, 0, 0, 1500, 700);                      //draws the start background on the canvas
}

$(document).keydown(function (event) {                                                   //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode === 13) {                                                               //If the variable equals 13 (Enter key)
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);                                                               //Then it will draw the first level's background
    }
    document.getElementById("Start").style.display = "block"

});

function startGame() {
    drawBackground1();
    document.getElementById("Start").style.display = "none";
    heroName = prompt("What do you want to choose as your hero name");
    document.getElementById("heroHearts").innerHTML = "Your hearts: " + heroHearts
    document.getElementById("heroKills").innerHTML = "Your kills: " + heroKills
    main()
}

function main() {
    heroAttributes();
    while (levels <= 5) {
        LevelScenarios();
        if (levels === 1) {
            document.getElementById("Stages").innerHTML = "Level One:";
            Level1EnemyAttributes();
            LevelOneImages();
        } else if (levels === 2) {
            document.getElementById("Stages").innerHTML = "Level Two:";
            Level2EnemyAttributes();
            LevelTwoImages()
        } else if (levels === 3) {
            document.getElementById("Stages").innerHTML = "Level Three:";
            Level3EnemyAttributes();
            LevelThreeImages()
        } else if (levels === 4) {
            document.getElementById("Stages").innerHTML = "Level Four:";
            Level4EnemyAttributes();
            LevelFourImages()
        } else if (levels === 5) {
            document.getElementById("Stages").innerHTML = "Level Five:";
            bossAttributes();
            BossLevelImages()
        }
        checkAttributes();

    }
    if (heroHearts === 0) {
        Defeat();
        if (levels === 5 && heroKills === 5) {
            Victory()
        }
    }
}


function heroAttributes() {
    var acceptAttribute = false;
    while (acceptAttribute === false) {
        heroSpeed = Math.floor(Math.random() * 30) + 70;
        heroIntelligence = Math.floor(Math.random() * 30) + 70;
        heroHealth = Math.floor(Math.random() * 50) + 100;
        heroStrength = Math.floor(Math.random() * 40) + 60;
        document.getElementById("Hero Attributes").innerHTML = "Your strength: " + heroStrength + ", health: " + heroHealth + ", speed: " + heroSpeed + ", intelligence: " + heroIntelligence;
        document.getElementById("heroCoins").innerHTML = "Coins: " + heroCoins;
        var accept = prompt("Your speed: " + heroSpeed + " ,intelligence: " + heroIntelligence + " ,health: " + heroHealth + " ,strength: " + heroStrength + "(Type Y if you like your stats or N if you want new stats)");
        if (accept === "Y") {
            acceptAttribute = true
        } else if (accept === "N") {
            acceptAttribute = false
        } else {
            alert("This is invalid input");
            acceptAttribute = false
        }
    }
}


function LevelScenarios() {
    if (levels === 1) {
        fightMonster = prompt("There is a black dungeon ahead. Would you like to go into it? (Y for yes and N for no")

    } else if (levels === 2) {
        fightMonster = prompt("There is a forest ahead. Would you like to go into it? (Y for yes and N for no")

    } else if (levels === 3) {
        fightMonster = prompt("There are snowy mountains ave ahead. Would you like to go into it? (Y for yes and N for no")

    } else if (levels === 4) {
        fightMonster = prompt("There is underwater cave ahead. Would you like to go into it? (Y for yes and N for no")

    } else {
        fightMonster = prompt("There is a fire dungeon ahead. Would you like to go into it? (Y for yes and N for no")
    }
    if (fightMonster === "Y") {
        alert("You are approaching the enemy")
    } else if (fightMonster === "N") {
        alert("You are running away from the enemy");
        setTimeout(LevelScenarios, 5000);
    } else {
        alert("That is not a valid response");
        setTimeout(LevelScenarios, 5000);
    }
}


function Level1EnemyAttributes() {
    enemyHealth = Math.floor(Math.random() * 30) + 20;
    enemyStrength = Math.floor(Math.random() * 30) + 20
    enemySpeed = Math.floor(Math.random() * 30) + 20;
}

function Level2EnemyAttributes() {
    enemyHealth = Math.floor(Math.random() * 40) + 20;
    enemyStrength = Math.floor(Math.random() * 40) + 20
    enemySpeed = Math.floor(Math.random() * 40) + 20;
}

function Level3EnemyAttributes() {
    enemyHealth = Math.floor(Math.random() * 50) + 20;
    enemyStrength = Math.floor(Math.random() * 50) + 20;
    enemySpeed = Math.floor(Math.random() * 50) + 20;
}

function Level4EnemyAttributes() {
    enemyHealth = Math.floor(Math.random() * 55) + 20;
    enemyStrength = Math.floor(Math.random() * 55) + 20;
    enemySpeed = Math.floor(Math.random() * 55) + 20;
}

function bossAttributes() {
    enemyHealth = Math.floor(Math.random() * 60) + 20;
    enemyStrength = Math.floor(Math.random() * 60) + 20;
    enemySpeed = Math.floor(Math.random() * 60) + 20;
}

function drawBackground1() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(level1Back, 0, 0, window.innerWidth, window.innerHeight);
}

function LevelOneImages() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(monster1, 1200, 425, 250, 250);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(hero, 0, 425, 250, 250)
}

function LevelTwoImages() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(level2Back, 0, 0, window.innerWidth, window.innerHeight);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(monster2, 1200, 425, 250, 250);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(hero, 0, 425, 250, 250)

}

function LevelThreeImages() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(level3Back, 0, 0, window.innerWidth, window.innerHeight);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(monster3, 1200, 425, 250, 250);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(hero, 0, 425, 250, 250)

}

function LevelFourImages() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(level4Back, 0, 0, window.innerWidth, window.innerHeight);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(monster4, 1200, 425, 250, 250);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(hero, 0, 425, 250, 250)
}

function BossLevelImages() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(bossBack, 0, 0, window.innerWidth, window.innerHeight);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(boss, 1200, 425, 250, 250);
    ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(hero, 0, 425, 250, 250)

}

function checkAttributes() {
    if (fightMonster === "Y") {
        document.getElementById("Enemy Attributes").innerHTML = "Enemy strength: " + enemyStrength + ", health: " + enemyHealth + ", speed: " + enemySpeed;
        var turn = Math.floor(Math.random() * 2) + 1;
        if (turn === 1) {
            enemy()
        } else {
            hero()
        }

        function enemy() {
            if (enemyStrength >= 20 && enemyStrength <= 30) {
                enemyDamage = Math.floor(Math.random() * (enemyStrength - 19)) + (enemyStrength - 19);
            } else if (enemyStrength >= 30 && enemyStrength <= 40) {
                enemyDamage = Math.floor(Math.random() * (enemyStrength - 29)) + (enemyStrength - 29);
            } else if (enemyStrength >= 40 && enemyStrength <= 50) {
                enemyDamage = Math.floor(Math.random() * (enemyStrength - 39)) + (enemyStrength - 39);
            } else if (enemyStrength >= 50 && enemyStrength <= 60) {
                enemyDamage = Math.floor(Math.random() * (enemyStrength - 49)) + (enemyStrength - 49);
            } else if (enemyStrength >= 60 && enemyStrength <= 70) {
                enemyDamage = Math.floor(Math.random() * (enemyStrength - 59)) + (enemyStrength - 59);
            } else if (enemyStrength >= 70 && enemyStrength <= 80) {
                enemyDamage = Math.floor(Math.random() * (enemyStrength - 69)) + (enemyStrength - 69);
            }
            alert("The enemy did " + enemyDamage + " damage.");
            if (enemyDamage >= heroHealth || heroHealth < 1) {
                heroHealth = heroHealth - enemyDamage;
                heroHealth = 0;
                document.getElementById("Stage Stats1").innerHTML = "The monster did " + enemyDamage + " damage to you and you are now at " + heroHealth + " health";
                document.getElementById("Hero Attributes ").innerHTML = "Your speed: " + heroSpeed + " ,intelligence: " + heroIntelligence + " ,health: " + heroHealth + " ,strength: " + heroStrength
                alert("You have been defeated by the monster")
            } else {
                heroHealth = heroHealth - enemyDamage;
                document.getElementById("Stage Stats1").innerHTML = "The monster did " + enemyDamage + " damage to you and you are now at " + heroHealth + " health";
                document.getElementById("Hero Attributes").innerHTML = "Your speed: " + heroSpeed + " ,intelligence: " + heroIntelligence + " ,health: " + heroHealth + " ,strength: " + heroStrength
                hero()
            }
        }

        function hero() {
            if (heroStrength >= 60 && heroStrength <= 70) {
                heroDamage = Math.floor(Math.random() * (heroStrength - 59)) + (heroStrength - 59);
            } else if (heroStrength >= 70 && heroStrength <= 80) {
                heroDamage = Math.floor(Math.random() * (heroStrength - 69)) + (heroStrength - 69);
            } else if (heroStrength >= 80 && heroStrength <= 90) {
                heroDamage = Math.floor(Math.random() * (heroStrength - 79)) + (heroStrength - 79);
            } else if (heroStrength >= 90 && heroStrength <= 100) {
                heroDamage = Math.floor(Math.random() * (heroStrength - 89)) + (heroStrength - 89);
            }
            alert("You did " + heroDamage + " damage.");
            if (heroDamage >= enemyHealth || enemyHealth < 1) {
                enemyHealth = enemyHealth - heroDamage;
                enemyHealth = 0;
                document.getElementById("Stage Stats2").innerHTML = "You did " + heroDamage + " damage to the monster and it is now at " + enemyHealth + " health";
                document.getElementById("Enemy Attributes").innerHTML = "Enemy strength: " + enemyStrength + ", health: " + enemyHealth + ", speed: " + enemySpeed;
                alert("Good job, the monster has been defeated")
            } else {
                enemyHealth = enemyHealth - heroDamage;
                document.getElementById("Stage Stats2").innerHTML = "You did " + heroDamage + " damage to the monster and it is now at " + enemyHealth + " health";
                document.getElementById("Enemy Attributes").innerHTML = "Enemy strength: " + enemyStrength + ", health: " + enemyHealth + ", speed: " + enemySpeed;
                enemy()
            }
        }

        if (heroHealth <= 0) {
            heroHearts = heroHearts - 1;
            document.getElementById("heroHearts").innerHTML = "Hearts: " + heroHearts;
            document.getElementById("heroCoins").innerHTML = "Coins: " + heroCoins;
            alert("Unfortunately, you died and now have less lives. If your lives reduce to 0 you will have to restart the entire game.");
            levels = levels + 1
        }

        if (enemyHealth <= 0) {
            heroCoins = heroCoins + Math.floor(Math.random() * 7) + 3;
            document.getElementById("heroCoins").innerHTML = "Coins: " + heroCoins;
            document.getElementById("heroHearts").innerHTML = "Hearts: " + heroHearts;
            heroKills = heroKills + 1;
            levels = levels + 1
        }
    }
}

function Defeat() {
    var kills;
    var coins;
    kills = (heroKills * 200);
    coins = (heroCoins * 5);
    totalscore = totalscore + kills;
    totalscore = totalscore + coins;
    alert("Your final score after defeat was: " + totalscore)
}

function Victory() {
    var kills;
    var coins;
    kills = (heroKills * 200);
    coins = (heroCoins * 5);
    totalscore = totalscore + kills;
    totalscore = totalscore + coins;
    alert("Congratulations on winning. Your final score was: " + totalscore)
}

function shop() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("shop").innerHTML = "Welcome to the shop. Here you can buy various things to better prepare yourself for battle.";
    document.getElementById("Sword").style.display = "block";
    document.getElementById("Health").style.display = "block";
    document.getElementById("Strength").style.display = "block"

}

function buySword() {
    if (heroCoins >= 5) {
        //gives sword to player
        heroCoins = heroCoins - 5;
        document.getElementById("heroCoins").innerHTML = "You have" + heroCoins
    } else {
        document.getElementById("FirstWeapon").innerHTML = "You do not have enough coins to buy this"
    }
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(herosword, -315, 165, 1400, 750)
}


function buyHealth() {
    if (heroCoins >= 5 && heroHealth < 100) {
        health = Math.floor(Math.random() * 4) + 3;
        heroHealth = heroHealth + y;
        document.getElementById("Hero Attributes").innerHTML = "Your strength: " + heroStrength + ", health: " + heroHealth + ", speed: " + heroSpeed + ", intelligence: " + heroIntelligence;
        heroCoins = heroCoins - 5;
        document.getElementById("heroCoins").innerHTML = "You have" + heroCoins
    }
}

function buyStrength() {
    if (heroCoins >= 5 && heroHealth < 100) {
        strength = Math.floor(Math.random() * 4) + 3;
        heroStrength = heroStrength + strength;
        document.getElementById("Hero Attributes").innerHTML = "Your strength: " + heroStrength + ", health: " + heroHealth + ", speed: " + heroSpeed + ", intelligence: " + heroIntelligence;
        heroCoins = heroCoins - 5;
        document.getElementById("heroCoins").innerHTML = "You have" + heroCoins
    }
}

