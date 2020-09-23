//create a function to turn the rover,
//create a function to move the rover forward or backward based on its direction,
//create a function to receive a list of commands and move based on those commands.
//The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (as North).
let log = (print) => {
  return console.log(print);
};

// Rover object goes here:
let rover = {
  direction: "W",
  //         [x,y]
  position: [0, 0],
};

// ======================

function turnLeft(rover) {
  log('turnLeft was called!');
  switch (rover.direction) {
    case 'N':
      log(" Rover is now facing West");
      // rover.position[0]++;
      break;
    case 'E':
      log("Rover is now facing North");
      // rover.position[1]++;
      break;
    case 'S':
      log("Rover is now facing East");
      // rover.position[0]--;
      break;
    case 'W':
      log("Rover is now facing South");
      // rover.position[1]--;
      break;
  }
};

function turnRight(rover) {
  // console.log('turnRight was called!');
  switch (rover.direction) {
    case 'N':
      log(" Rover is now facing East");
      break;
    case 'E':
      log("Rover is now facing South");
      break;
    case 'S':
      log("Rover is now facing West");
      break;
    case 'W':
      log("Rover is now facing North");
      break;
  }
};

function moveForward(rover) {
  // log('moveForward was called');
  switch (rover.direction) {
    case 'N': //If the rover is facing north and moves forward, we would encrease the rover’s y by 1.
      rover.position[1]++;
      log(" Rover is now facing North at "+ rover.position);
      break;
    case 'E'://If the rover is facing East and moves forward, we would encrease the rover’s y by 1.
      rover.position[0]++;
      log("Rover is now facing East at "+ rover.position);
      break;
    case 'S': //If the rover is facing south and moves forward, we would decrease the y by 1.
      rover.position[1]--;
      log("Rover is now facing South at "+ rover.position);
      break;
    case 'W': //if the rover is facing west and moves forward, we would decrease the rover’s x by 1.
      rover.position[0]--;
      log("Rover is now facing West at "+ rover.position);
      break;
  }
};

function moveBackward(rover) {
  // log('moveBackward was called');
  switch (rover.direction) {
    case 'N': //If the rover is facing north and moves backwards, we would deacrease the rover’s y by 1.
      rover.position[1]--;
      log(" Rover is now facing North at "+ rover.position);
      break;
    case 'E'://If the rover is facing East and moves backwards, we would decrease the rover’s x by 1.
      rover.position[0]--;
      log("Rover is now facing East at "+ rover.position);
      break;
    case 'S': //If the rover is facing south and moves backwards, we would increase the y by 1.
      rover.position[1]++;
      log("Rover is now facing South at "+ rover.position);
      break;
    case 'W': //if the rover is facing west and moves backwards, we would increase the rover’s x by 1.
      rover.position[0]++;
      log("Rover is now facing West at "+ rover.position);
      break;
  }

};

let commands = (strings) => {
  let stringsMin = strings.toLowerCase();

  for (var variable in stringsMin) {


    switch (stringsMin[variable]) {
      case 'f':
        log("forward");
        break;
      case 'b':
        log("backward");
        break;
      case 'l':
        log("left");
        break;
      case 'r': //if the rover is facing west and moves backwards, we would increase the rover’s x by 1.
        log("rigth");
        break;
    }

  }

};

// turnLeft(rover);
// moveForward(rover);
// moveBackward(rover);
commands(`rffrfflfrff`);
