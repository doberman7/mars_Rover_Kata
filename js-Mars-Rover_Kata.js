//create a function to turn the rover,
//create a function to move the rover forward or backward based on its direction,
//create a function to receive a list of commands and move based on those commands.
//The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (as North).
let log = (print)=>{

  return console.log(print);
}

// Rover object goes here:
let rover = {
  direction: "N",
  position: [0,0],
}

// ======================

const moveRoover = () => {

};

function turnLeft(rover) {
  console.log('turnLeft was called!');
  switch(rover.direction) {
    case 'N':
     log(" Rover is now facing West")
      // rover.position[0]++;
      break;
    case 'E':
      log("Rover is now facing North")
      // rover.position[1]++;
      break;
    case 'S':
      log("Rover is now facing East")
      // rover.position[0]--;
      break;
    case 'W':
      log("Rover is now facing South");
      // rover.position[1]--;
      break;

};

function turnRight(rover) {
  console.log('turnRight was called!');
};

function moveForward(rover) {
  console.log('moveForward was called');
};

function moveBackward(rover) {
  console.log('moveForward was called');
};
