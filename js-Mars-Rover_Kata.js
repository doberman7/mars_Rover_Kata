//create a function to turn the rover,
//create a function to move the rover forward or backward based on its direction,
//create a function to receive a list of commands and move based on those commands.
//The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (as North).
let log = (print) => {
  return console.log(print);
};

// Rover object goes here:
let rover = {
  direction: "E",
  //         [x,y]
  position: [0, 0],
  travelLog: [
    [0, 0]
  ]
};

// ======================

function turnLeft(rover) {
  // log('turnLeft was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = "W";
      // log("Rover is now facing West");
      break;
    case 'E':
      rover.direction = "N";
      // log("Rover is now facing North");
      break;
    case 'S':
      rover.direction = "E";
      // log("Rover is now facing East");
      break;
    case 'W':
      rover.direction = "S";
      // log("Rover is now facing South");
      break;
  }
};

function turnRight(rover) {
  // console.log('turnRight was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = "E";
      // log("Rover is now facing East");
      break;
    case 'E':
      rover.direction = "S";
      // log("Rover is now facing South");
      break;
    case 'S':
      rover.direction = "W";
      // log("Rover is now facing West");
      break;
    case 'W':
      rover.direction = "N";
      // log("Rover is now facing North");
      break;
  }
};

function moveForward(rover) {
  switch (rover.direction) {
    case 'N': //If the rover is facing north and moves forward, we would encrease the rover’s y by 1.
      rover.position[1]++;
      log("Rover is now facing North moving Forward to " + rover.position);
      break;
    case 'E': //If the rover is facing East and moves forward, we would encrease the rover’s y by 1.
      // log("------------------")
      // log(rover.travelLog);
      // log("------------------")
      rover.position[0]++;
      log("Rover is now facing East moving Forward to " + rover.position);

      break;
    case 'S': //If the rover is facing south and moves forward, we would decrease the y by 1.
      rover.position[1]--;
      log("Rover is now facing South moving Forward to " + rover.position);
      break;
    case 'W': //if the rover is facing west and moves forward, we would decrease the rover’s x by 1.
      rover.position[0]--;
      log("Rover is now facing West moving Forward to " + rover.position);
      break;
  }
};

function moveBackward(rover) {
  // log('moveBackward was called');
  switch (rover.direction) {
    case 'N': //If the rover is facing north and moves backwards, we would deacrease the rover’s y by 1.
      rover.position[1]--;
      log(" Rover is now facing North moving backwards to " + rover.position);
      break;
    case 'E': //If the rover is facing East and moves backwards, we would decrease the rover’s x by 1.
      rover.position[0]--;
      log("Rover is now facing East moving backwards to " + rover.position);
      break;
    case 'S': //If the rover is facing south and moves backwards, we would increase the y by 1.
      rover.position[1]++;
      log("Rover is now facing South moving backwards to " + rover.position);
      break;
    case 'W': //if the rover is facing west and moves backwards, we would increase the rover’s x by 1.
      rover.position[0]++;
      log("Rover is now facing West moving backwards to " + rover.position);
      break;
  }
};

function commands(strings) {
  let stringsMin = strings.toLowerCase();
  for (var variable in stringsMin) {
    let xEje = rover.position[0];
    let yEje = rover.position[1];
    if (xEje < 10 && yEje < 10) {
      switch (stringsMin[variable]) {
        case 'f':
          // enforceBoundaries(rover.travelLog);//limit movement inside grid before mov
          moveForward(rover);
          let positionsForward = JSON.parse(JSON.stringify(rover.position));
          rover.travelLog.push(positionsForward);
          // rover.travelLog.push([rover.position[0], rover.position[1]]);//this versions given on slack
          break;
        case 'b':
          moveBackward(rover);
          let positionsBackward = JSON.parse(JSON.stringify(rover.position));
          rover.travelLog.push(positionsBackward);
          break;
        case 'l':
          turnLeft(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
      };
    };
  };
};

function enforceBoundaries(grids) {
  let lastAry = grids[grids.length - 1]; //last position known
  for (var i = 0; i < lastAry.length - 1; i++) {
    let xAxis = lastAry[i]; //obtain x axis
    let yAxis = lastAry[i + 1]; //obtain y axis
    if (xAxis >= 10) { //if x is greater or equal than grid
      rover.position = lastAry;
      console.log("your out of the X grid returning to last know position ");
    };
    if (xAxis < 0) console.log("your out of the X grid");
    if (yAxis > 10) console.log("your out of the Y grid");
    if (yAxis < 0) console.log("your out of the Y grid");

  };
};

// commands(`rffrfflfrff`);
// commands(`lfffffffffffffff`);
commands(`lffffffffffffffff`);
