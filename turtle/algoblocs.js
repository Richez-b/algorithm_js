/*a1 initialisation
setPos(100, 100);
changeColor(color.red);
//réalisation
forward(200);
faceLeft();
forward(200);


a2 initialisation
setPos(300, 300);
changeColor(color.yellow);
faceLeft();
// réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


//a3 initialisation
setPos(250, 250);
changeColor(color.yellow);
//realisation
faceLeft();
forward(50);
faceRight();
forward(100);
faceLeft();
forward(50);
faceUp();
forward(50);
faceDown();
forward(100);


//a4 initialisation
setPos(100, 300);
changeColor(color.green);
//realisation
faceRight();
forward(100);
arcLeft(50, 180);
forward(50);
arcRight(50, 180);
forward(100);


//a5 initialisation
setPos(400, 200);
faceRight();
changeColor(color.fushcia);
//realisation
arcRight(100, 180);
arcRight(50, 180);
arcLeft(50, 180);
arcLeft(100, 180);


//a6 initialisation
setPos(500, 200);
changeColor(color.blue);
//realisation
forward(100);
up();
forward(100);
down();
forward(200);


//a7 initilisation
setPos(100, 300);
changeColor(color.blue);
faceDown();
//realisation
forward(100);
arcLeft(50, 180);
forward(100);
up();
forward(50);
down();
forward(100);
arcLeft(50, 180);
forward(50);


//a8 initialisation
setPos(200, 250);
changeColor(color.green);
faceUp();
//realisation
forward(200);
faceRight();
forward(200);
faceDown();
forward(400);
faceLeft();
forward(50);
up();
forward(150);
faceUp();
forward(50);
down();
forward(100);


//a9 initialisation
setPos(50, 580);
faceRight();
//realisation
forward(300);
faceLeft();
arcRight(50, 180);
arcLeft(50, 180);
forward(300);
arcLeft(50, 180);
arcRight(50, 180);


//a10 initialisation
setPos(100, 200);
faceRight();
//realisation
changeColor(color.red);
arcLeft(25, 180);
changeColor(color.green);
arcLeft(50, 180);
changeColor(color.yellow);
arcLeft(100, 180);


//a11 initialisation
setPos(100, 100);
faceUp();
changeColor(color.blue);
//realisation
arcRight(50, 180);
up();
arcLeft(25, 180);
down();
arcRight(50, 180);
up();
forward(25);
faceLeft();
forward(25);
faceDown();
forward(25);
changeColor(color.red);
down();
arcRight(100, 180);


//a12 initialisation
setPos(20, 150);
faceUp();
//realisation
arcRight(50, 180);
forward(100);
arcLeft(50, 180);
up();
changeColor(color.red);
faceRight();
forward(100);
faceDown();
down();
arcLeft(50, 180);
forward(100);
arcRight(50, 180);


//b1 initialisation
setPos(50, 100);
changeColor(color.green);
faceRight();
//realisation
for (let i = 0; i < 4; i++) {
  forward(100);
  faceDown();
  forward(100);
  faceRight();
}


//b2 initialisation
setPos(50, 300);
changeColor(color.red);
faceUp();
//realisation
for (let i = 0; i < 4; i++) {
  forward(50);
  faceRight();
  forward(50);
  faceDown();
  forward(50);
  faceRight();
  forward(50);
  faceUp();
}


//b3 initialisation
setPos(200, 200);
changeColor(color.green);
faceRight();
//realisation
for (let i = 0; i < 4; i++) {
  forward(100);
  right(90);
}


//b4
setPos(200, 200);
faceRight();
//realisation
for (let i = 0; i < 3; i++) {
  forward(50);
  left(120);
}


//b5 initialisation
setPos(50, 300);
faceUp();
//realisation
forward(100);
changeColor(color.red);
for (let i = 0; i < 4; i++) {
  forward(50);
  right(120);
}


//b6 initlisation
setPos(50, 200);
faceRight();

//realisation
for (let i = 0; i < 2; i++) {
  forward(50);
  faceUp();
  forward(50);
  faceRight();
}
changeColor(color.green);
for (let j = 0; j < 3; j++) {
  forward(50);
  faceDown();
  forward(50);
  faceRight();
}


//b7 initialisation
setPos(100, 300);
changeColor(color.yellow);
faceRight();
//realisation
for (let i = 0; i < 3; i++) {
  forward(100);
  left(120);
}
for (let i = 0; i < 4; i++) {
  forward(100);
  right(90);
}


//b8 initialisation
setPos(100, 300);
changeColor(color.yellow);

//realisation
for (let i = 0; i < 8; i++) {
  forward(100);
  right(180 - 45);
}


//b9 initlisation
setPos(100, 100);
faceRight();
//realisation
forward(100);
up();
forward(100);
down();
for (let i = 0; i < 4; i++) {
  forward(100);
  right(120);
}

//b10 initialisation
setPos(50, 100);
faceRight();
//realisation
for (let i = 0; i < 8; i++) {
  forward(50);
  right(180 - 45);
}
up();
forward(200);
down();
changeColor(color.green);
for (let i = 0; i < 8; i++) {
  forward(100);
  left(180 - 45);
}
up();
right(90);
forward(200);
down();
changeColor(color.red);
for (let i = 0; i < 8; i++) {
  forward(200);
  right(180 - 45);
}

//b11 initialisation
setPos(100, 100);
faceRight();
changeColor(color.red);
//realisation
for (let i = 0; i < 4; i++) {
  forward(50);
  left(90);
  forward(50);
  right(90);
  forward(50);
  right(90);
}


//b12 initialisation
setPos(300, 200);
faceRight();
//realisation
for (let i = 0; i < 3; i++) {
  right(90);
  forward(100);
}
up();
changeColor(color.red);
forward(100);
down();
for (let i = 0; i < 3; i++) {
  forward(100);
  right(90);
}

//b13 initialisation
setPos(100, 100);
faceRight();

//realisation
for (let i = 0; i < 8; i++) {
  forward(100);
  left(180 - 45);
  forward(50);
  right(90);
  forward(50);
  right(90);
}

//b14 initialisation
setPos(20, 20);
faceRight();

//realisation
forward(100);
for (let i = 0; i < 5; i++) {
  right(180 - 60);
  forward(100);
  left(180 - 60);
  forward(100);
}


//b15 initialisation
setPos(100, 400);
faceRight();

//realisation
for (let i = 0; i < 4; i++) {
  forward(100);
  arcLeft(100, 90);
}

//b16 initilisation
setPos(100, 400);
faceRight();
//realisation
arcLeft(200, 90);
faceLeft();
for (let i = 0; i < 4; i++) {
  arcLeft(25, 90);
  arcRight(25, 90);
}


//b17 initialisation
setPos(50, 300);
faceRight();
changeColor(color.blue);
//realisation
for (let i = 0; i < 6; i++) {
  arcLeft(100, 180);
  left(180 - 60);
}


//b18 initialisation
setPos(100, 200);
faceRight();

//realisation
for (let i = 0; i < 8; i++) {
  forward(100);
  left(90);
  forward(25);
  left(180 - 135);
}

//b19 initialisation
setPos(300, 590);
faceRight();

//realisation
for (let i = 0; i < 4; i++) {
  arcLeft(50, 180);
  faceRight();
}
up();
faceUp();
forward(50);
faceLeft();
down();
for (let i = 0; i < 4; i++) {
  arcLeft(50, 180);
  faceLeft();
}

/*b20 initlisation
setPos(50, 200);
faceRight();
//realisation
forward(200);
faceUp();
forward(50);
for (let i = 0; i < 2; i++) {
  arcLeft(50, 90);
  forward(100);
}
forward(50);
for (let i = 0; i < 2; i++) {
  arcLeft(50, 90);
  forward(100);
}
up();
faceDown();
forward(25);
faceLeft();
forward(100);
down();
for (let i = 0; i < 4; i++) {
  arcLeft(50, 90);
}

//b21 initialisation
setPos(400, 200);
faceRight();
shiftColor(0.6);
//realisation
for (let i = 0; i < 6; i++) {
  forward(100);
  left(180 - 60);
  forward(50);
  left(180 - 60);
  forward(100);
  right(180 - 120);
  forward(50);
  right(180 - 60);
  forward(50);
  right(180 - 60);
  up();
  forward(100);
  shiftColor(0.1);
  down();
}


//b22 initialisation
setPos(300, 400);
faceRight();
left(30);
changeColor(color.yellow);
//realisation
for (let i = 0; i < 6; i++) {
  forward(100);
  left(180 - 120);
}
changeColor(color.green);
for (let i = 0; i < 7; i++) {
  forward(100);
  right(90);
}
changeColor(color.red);
left(180 - 120);
forward(100);
changeColor(color.green);
right(180 - 150);
for (let i = 0; i < 7; i++) {
  forward(100);
  right(90);
}
left(180 - 120);
forward(100);


//b23 initialisation
setPos(100, 200);
faceRight();
left(30);
//realisation
for (let i = 0; i < 3; i++) {
  forward(50);
  right(90);
  forward(50);
  left(90);
}
right(180 - 45);
forward(50);
right(180 - 135);
for (let i = 0; i < 3; i++) {
  forward(50);
  right(90);
  forward(50);
  left(90);
}
right(180 - 45);
forward(50);


//b24 initialisation
setPos(100, 50);
faceRight();

//realisation
for (let i = 0; i < 8; i++) {
  forward(100);
  left(180 - 45);
}
forward(50);
changeColor(color.green);
for (let i = 0; i < 3; i++) {
  right(180 - 45);
  forward(100);
  left(180 - 45);
  forward(50);
}
forward(50);
right(90);
for (let i = 0; i < 3; i++) {
  forward(25);
  left(90);
}
right(180);
forward(50);
for (let i = 0; i < 3; i++) {
  forward(50);
  left(180 - 45);
  forward(100);
  right(180 - 45);
}

/*c1
setPos(50, 100);
faceRight();

// realisation
for (let i = 0; i < 4; i++) {
  for (let i = 0; i < 6; i++) {
    forward(100);
    right(180 - 60);
  }
  forward(100);
}


//c2 initialisation
setPos(10, 590);
faceUp();
//realisation
for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 4; i++) {
    forward(50);
    right(90);
  }
  up();
  forward(100);
  down();
}


//c3 initialisation
setPos(50, 300);
faceRight();
shiftColor(0);
//realisation
for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 8; i++) {
    forward(100);
    left(180 - 45);
  }
  up();
  forward(200);
  down();
  shiftColor(0.1);
}


//c4 initialisation
setPos(50, 300);
faceRight();
changeColor(color.red);
//realisation
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    forward(50);
    left(180 - 60);
  }
  changeColor(color.green);
  for (let k = 0; k < 4; k++) {
    forward(50);
    right(90);
  }
  up();
  forward(100);
  down();
  changeColor(color.red);
}

//c5initialisation
setPos(200, 300);
faceRight();
shiftColor(0);

//realisation
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    forward(200);
    left(180 - 45);
  }
  right(90);
  shiftColor(0.25);
}


//c6 initialisation
setPos(300, 300);
faceRight();
//realisation
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 10; j++) {
    forward(100);
    left(180 - 60);
  }
  forward(100);
}


//c7 initialisation
setPos(100, 400);
faceRight();
//realisation
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 3; j++) {
    forward(50);
    right(180 - 60);
  }
  forward(50);
  left(180 - 135);
}


//c8 initialisation
setPos(350, 580);
changeCorlor(color.green);
right(180);
setLineWidth(2);
//realisation
forward(200);
left(180 - 135);

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    changeColor(color.red);
    forward(200);
    arcLeft(60);
  }
  changeColor(color.yellow);
  right(180 - 90);
  forward(200);
}


//c9 initialisation
setPos(400, 300);
faceRight();
//realisation
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 4; k++) {
      right(90);
      forward(50);
    }
    forward(100);
    right(180 - 60);
  }
  left(180 - 60);
  forward(200);
}


//c10 initialisation
setPos(300, 100);
faceDown();
//realisation
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    forward(50);

    for (let k = 0; k < 4; k++) {
      left(90);
      forward(25);
    }
    right(90);
  }
  forward(100);
} 

//c11 initialisation
setPos(1, 1);
faceRight();
shifColor(0);
//realisation
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    for (let k = 0; k < 3; k++) {
      forward(50);
      left(180 - 60);
    }
    forward(50);
    left(180 - 120);
  }
  up();
  forward(100);
  down();
  shifColor(0.1);
  right(180 - 120);
}


//c12 initialisation
setPos(300, 200);
faceRight();
//realisation
for (i = 0; i < 4; i++) {
  arcLeft(100, 90);
  forward(100);
  left(90);
  arcLeft(100, 90);
  forward(100);
  left(90);
  arcRight(100, 45);
}
changeColor(color.blue);
arcRight(100, 180);
left(180 - 60);
arcLeft(200,300)
*/




/* d1 initialisation
setPos(100, 100);
faceRight();
let nb = 8;
let px = 100;
let angle = 180 - 135;

//realisation
for (let i = 0; i < nb; i++) {
  forward(px);
  right(angle);
}


//d9 ini
setPos(300, 200);
faceRight();
let number = 20;
//realisation
for (let i = 0; i < 6; i++) {
  forward(number);
  right(180 - 60);
  number = number * 2;
}

//d10 ini
setPos(200, 200);
faceRight();
let number = 2;
//realisation
for (let i = 0; i < 10; i++) {
  forward(number);
  right(90);
  number = number + number / 2; //10;
}


//d11 ini
setPos(1, 300);
faceRight();
let number = 200;

//realisation
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < 3; k++) {
    forward(number);
    left(180 - 60);
  }
  forward(number);
  number = number - 40;
}

//d12 ini
setPos(300, 350);
let number = 50;
faceRight();
//realisation
for (let i = 0; i < 6; i++) {
  for (let k = 0; k < 3; k++) {
    forward(number);
    left(180 - 60);
  }
  forward(number);
  number = number + 25;
  left(180 - 120);
}

//d13 ini
setPos(300, 400);
faceRight();
let rayon = 50;
let number = 100;
//realisation
for (let i = 0; i < 8; i++) {
  arcRight(rayon, 180);
  up();
  rayon = rayon + 25;
  forward(number);
  down();
}

//d14 ini
setPos(50, 400);
faceRight();
left(30);
//realisation
for (let i = 0; i < 2; i++) {
  let number = 20;
  for (let k = 0; k < 4; k++) {
    forward(number);
    right(90);
    forward(number);
    number = number + 20;
    left(90);
  }
  right(180);
}

//d15 ini
setPos(100, 100);
faceDown();
let angle = 90;
let number = 100;
//realisation
for (let i = 0; i < 10; i++) {
  forward(number);
  left(angle);
  number = number + 20;
  angle = angle - 5;
}

//d16 ini
setPos(200, 300);
faceDown();
changeColor(color.green);
let rayon = 50;
//realisation
forward(100);
right(180 - 60);
forward(50);
faceLeft();
for (let i = 0; i < 3; i++) {
  forward(50);
  right(90);
}
faceDown();
left(180 - 60);
forward(50);
faceRight();
changeColor(color.red);
up();
forward(100);
down();
for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 2; i++) {
    arcRight(rayon, 180);
    rayon = rayon + 25;
    up();
  }
  down();
}




/*e1 ini
setPos(10, 200);
faceRight();
changeColor(color.yellow);
//realisation
function draw() {
  for (let i = 0; i < 5; i++) {
    forward(75);
    right(180 - 36);
  }
}
draw();
forward(100)
draw();
forward(200);
changeColor(color.green);
draw();


//e2 ini
setPos(100, 300);
faceRight();
changeColor(color.blue);
//realisation
function draw() {
  forward(100);
  for (let i = 0; i < 2; i++) {
    right(180 - 60);
    forward(50);
  }
  left(180 - 120);
  forward(50);
}
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        draw();
        right(90);
        left(90);
    }
right(90);
changeColor(color.red);
}

//e3 ini
setPos(200, 300);
faceRight();
changeColor(color.yellow);
//realisation
function draw() {
  for (let i = 0; i < 4; i++) {
    forward(50);
    left(90);
  }
}
for (let i = 0; i < 6; i++) {
  draw();
  forward(100);
  left(180 - 120);
}


//e4 ini
setPos(1, 300);
faceRight();
changeColor(color.red);
//realisation
function draw() {
  for (let i = 0; i < 2; i++) {
    forward(20);
    faceUp();
    forward(20);
    faceRight();
  }
}
draw();
changeColor(color.yellow);
forward(40);
changeColor(color.blue);
draw();
changeColor(color.green);
draw();
forward(40);


//e5 ini
setPos(300, 200);
faceDown();
//realisation
function draw() {
  forward(100);
  left(90);
  forward(50);
}
draw();
changeColor(color.green);
draw();
changeColor(color.red);
draw();
changeColor(color.blue);
right(90);
draw();


//e6 ini
setPos(100, 200);
faceRight();
changeColor(color.green);
//realisation
function draw() {
  for (let i = 0; i < 3; i++) {
    forward(100);
    right(180 - 60);
  }
  forward(100);
}

draw();
changeColor(color.fuchsia);
draw();
up();
forward(100);
changeColor(color.red);
right(90);
down();
draw();


//e7 ini
setPos(20, 300);
faceRight();
changeColor(color.red);
//realisation
function draw() {
  down();
  for (let i = 0; i < 2; i++) {
    forward(50);
    left(180 - 135);
    forward(100);
    left(180 - 45);
  }
  up();
}
for (let k = 0; k < 2; k++) {
    draw();
    forward(100);
  }
changeColor(color.blue);
for (let j = 0; j < 3; j++) {
  draw();
  forward(50);
}


//e8 ini
setPos(100, 300);
faceRight();

function draw() {
  for (let i = 0; i < 3; i++) {
    forward(100);
    left(120);
  }
  for (let j = 0; j < 3; j++) {
    forward(50);
    right(120);
  }
}

draw();
forward(100);
changeColor(color.blue);
draw();
forward(100);
faceDown();
changeColor(color.yellow);
draw();



//e9 ini
setPos(2,300)
faceRight();

//realisation
function draw(){
    faceUp();
    forward(100);
    right(180-135);
    forward(50);
    right(90);
    forward(50);
    right(180-135);
    forward(100);
    faceRight();
}
forward(50);
draw();
forward(100);
draw();
forward(50)
changeColor(color.green);
draw()
forward(100);


//e11 ini
setPos(100, 200);
faceRight();
shiftColor(0);
//realisation
function draw() {
  forward(100);
  for (let i = 0; i < 2; i++) {
    right(180 - 120);
    forward(50);
  }
}

for (let j = 0; j < 3; j++) {
  draw();
  shiftColor(-0.1);
  up();
  forward(50);
  down();
}
up();

faceRight();
right(180-270);
forward(100);
down();
for (let k = 0; k < 3; k++) {
  draw();
}


//e12 ini
setPos(120, 200);
faceRight();

//realisation
shiftColor(0);
function draw() {
  let number = 5;
  down();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      forward(number);
      arcLeft(100, 90);
    }
    number += 50;
  }
  up();
}

draw();
faceDown();
forward(200);
shiftColor(0.25);
draw();
faceRight();
forward(500);
shiftColor(0.25);
draw();
*/
