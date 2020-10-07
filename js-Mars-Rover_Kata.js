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
let board = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
]
// console.log("This rover versions default view its East, considering that the increase of value of the vectors X and Y make rover move down instead of up, theres no use in rover to look North cuz he cant move freely in tthis scenario ");
// ======================

function turnLeft(rover) {
  log('Left Turn!');
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
  switch (rover.direction) {
    case 'N':
      rover.direction = "E";
      log('Rigth N -> E');
      // log("Rover is now facing East");
      break;
    case 'E':
      rover.direction = "S";
      log("Rigth E -> S")
      // log("Rover is now facing South");
      break;
    case 'S':
      rover.direction = "W";
      log("Rigth S -> W")
      // log("Rover is now facing West");
      break;
    case 'W':
      rover.direction = "N";
      log("Rigth W -> N")
      // log("Rover is now facing North");
      break;
  }
};

function moveForward(rover) {
  // log('moveForward was called');
  let posicions = JSON.parse(JSON.stringify(rover.position));
  let posicionY = posicions[1];
  let posicionX = posicions[0];
  let directionF = JSON.parse(JSON.stringify(rover.direction));

  switch (directionF) {
    case 'N': //If the rover is facing north and moves forward, we would encrease the rover’s y by 1.
      posicionY--;
      if (posicionY > 0 && posicionY < 10) {
        rover.position[1] = posicionY
        console.log("North FORWARD, position: " + rover.position);
      } else console.log("cant go any further on Y axis, aborting ");

      break;
    case 'E': //If the rover is facing East and moves forward, we would encrease the rover’s y by 1.
      posicionX++;
      if (posicionX > 0 && posicionX < 10) {
        rover.position[0] = posicionX;
        console.log("East FORWARD , position: " + rover.position);
      } else console.log("cant go any further on X axis, aborting");

      break;
    case 'S': //If the rover is facing south and moves forward, we would decrease the y by 1.
      posicionY++;
      if (posicionY > 0 && posicionY < 10) {
        rover.position[1] = posicionY;
        console.log("South FORWARD , position: " + rover.position);
      } else console.log("cant go any further on Y axis, aborting")
      break;
    case 'W': //if the rover is facing west and moves forward, we would decrease the rover’s x by 1.
      // rover.position[0]--;
      posicionX--;
      if (posicionX > 0 && posicionX < 10) {
        rover.position[0] = posicionX;
        console.log("West FORWARD , position: " + rover.position);
      } else console.log("cant go any further on X axis aborting")
      // log("Rover is now facing West moving Forward at " + rover.position);
      break;
  }
};

function moveBackward(rover) {
  // log('moveBackward was called');
  switch (rover.direction) {
    case 'N': //If the rover is facing north and moves backwards, we would deacrease the rover’s y by 1.
      rover.position[1]--;
      // log(" Rover is now facing South moving backwards at " + rover.position);
      break;
    case 'E': //If the rover is facing East and moves backwards, we would decrease the rover’s x by 1.
      rover.position[0]--;
      // log("Rover is now facing East moving backwards at " + rover.position);
      break;
    case 'S': //If the rover is facing south and moves backwards, we would increase the y by 1.
      rover.position[1]++;
      // log("Rover is now facing North moving backwards at " + rover.position);
      break;
    case 'W': //if the rover is facing west and moves backwards, we would increase the rover’s x by 1.
      rover.position[0]++;
      // log("Rover is now facing West moving backwards at " + rover.position);
      break;
  }
};

function commands(strings) {
  log("Rover initial position is "+ rover.position +" looking "+ rover.direction+"ast" )
  // printMovement();
  let cleanedStrings = cleanComands(strings);

  for (var i in cleanedStrings) {

    let xAxis = rover.position[0];
    let yAxis = rover.position[1];

    if ((xAxis >= 0) && (yAxis <= 9) && (xAxis <= 9) && (yAxis >= 0)) // conditions to avoid gout grid
    {
      switch (cleanedStrings[i]) {
        case 'f':
          moveForward(rover);
          let positionsForward = JSON.parse(JSON.stringify(rover.position));
          rover.travelLog.push(positionsForward);
          break;
        case 'b':
          moveBackward(rover);
          let positionsBackward = JSON.parse(JSON.stringify(rover.position));
          rover.travelLog.push(positionsBackward);
          // console.log("BACK, position: " + rover.position);
          break;
        case 'l':
          turnLeft(rover);
          // console.log("LEFT, position: " + rover.position);
          break;
        case 'r':
          turnRight(rover);
          // log("RIGHT, position: " + rover.position)
          break;
      };
    };
  };
  printMovement();
};

function cleanComands(command) { //function to filter strings
  command.toLowerCase(); //make minusc the command
  let comandSplited = command.split(""); //obtain ary of commands
  let usefulStrings = ["f", "l", "r", "b"]; //define valid comands
  let filteredCommands = comandSplited.filter((letter) => { //assign filtered letters of the commands
    return usefulStrings.indexOf(letter) > -1; //obtain index of letter found in the usefulStrings Ary
  });
  return filteredCommands;
};

printMovement = () => {
  let xEje = JSON.parse(JSON.stringify(rover.position[0]));
  let yEje = JSON.parse(JSON.stringify(rover.position[1]));
  console.log("Last position:");
  console.log(rover.position);
  board[yEje][xEje] = "R"; //"board" its a graphical representation, in which [x=column,y=row], not a vector of the form [x=row,y=column],
  console.log(board.join('\n') + '\n\n');

};




// commands(`ffzzzzrblf`);
// commands(`ffz340jaddnvsdjvnsvzzzrblf`);
// commands(`frflfrflfrflfrflfrflfrflfrflfrflfrflfrflfakdjnvsfbsnblfn`);//go last box
commands("flrlflrlflrl");
