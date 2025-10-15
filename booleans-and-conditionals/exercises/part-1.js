// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady
let computerStatusCode = 200;
let shuttleSpeed = 15000;


// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start"); 
} else {
   console.log("engines are off");
}

if (crewStatus === true) {
   console.log("crew ready"); 
} else {
   console.log("crew not ready");
}

if (computerStatusCode === 200) {
   console.log("Please stand by, computer is rebooting");
   } else if (computerStatusCode === 400) {
      console.log("Success! Computer online");
      } else {
         console.log("Alert! Computer is offline");
}

if (shuttleSpeed > 17500) {
   console.log("Alert! Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
   console.log("Alert! Cannot maintain orbit!");
} else  {
   console.log("Stable Speed");
}


if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("All systems go!");
} else {
   console.log("Warning- not ready"); 
}


if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("Warning NOT ready");
} else {
   console.log("ALL systems go");
}




let fuelLevel = 2000;
let engineTemperature = 2600;
engineIndicatorLight = "red blinking";
let commandOverride = true; 

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!")
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
   console.log("Check fuel level, engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
   console.log("Full tank, engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
   console.log("Fuel level above 25%. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
   console.log("Fuel level above 50%. Engines good.");
} else {
   console.log("Fuel and engine status pending.");
}

if (fuelLevel > 20000 && engineIndicatorLight === !"red blinking") {
   console.log("Clear to Launch!");
} else if (commandOverride) {
   console.log("Clear to Launch");
} else {
   console.log("Launch scrubbed.");
}
