// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKG = astronautCount * averageAstronautMassKg;
let fuelMassKg = 76000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKG + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7) {
   console.log("Abort- too many astronauts");
   preparedForLiftOff = false;
} else {
    console.log("Astronaut Count OK");
}

// add logic below to verify all astronauts are ready

if (astronautStatus !== "ready") {
    console.log("Abort- Astronauts not ready.");
    preparedForLiftOff = false;
} else {
    console.log("Astronauts are ready.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg > 850000) {
    console.log("Abort- total mass too great");
    preparedForLiftOff = false;
} else {
    console.log("Total mass below maximum limit.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius > -150 || fuelTempCelsius < -300) {
    console.log("Abort- fuel temp out of range");
    preparedForLiftOff = false;
} else {
    console.log("Fuel temp within acceptable range.");
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel !== "100%") {
    console.log("Abort- check fuel level");
    preparedForLiftOff = false;
} else {
    console.log("Full tank.");
}

// add logic below to verify the weather status is clear

if (weatherStatus !== "clear") {
    console.log("Abort- bad weather.");
    preparedForLiftOff = false;
} else {
    console.log("Weather clear for takeoff.");
}

// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftOff === true) {
    console.log(
        `\nAll systems are a go! Initiating space shuttle launch sequence.\n---\nDate: `+ date + 
        `\nTime: `+ time +
        `\nAstronaut count: ` + astronautCount +
        `\nCrew mass: ` + crewMassKG + ` kg` +
        `\nFuel mass: ` + fuelMassKg + ` kg` +
        `\nShuttle mass: ` + shuttleMassKg + ` kg` +
        `\nTotal mass: ` + totalMassKg + ` kg` +
        `\nFuel temperature: ` + fuelTempCelsius + ` \u00B0C` +
        `\nWeather status: ` + weatherStatus +
        `\n---\nHave a safe trip!`
    );
} else {
    console.log("Abort- not ready yet.");
}
