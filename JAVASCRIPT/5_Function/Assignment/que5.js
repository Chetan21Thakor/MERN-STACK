let correctInstruction = (trafficLightColor) => {
  if (trafficLightColor.toLowerCase() === "red") {
    console.log("Stop your car");
  } else if (trafficLightColor.toLowerCase() === "yellow") {
    console.log("Ready for Go");
  } else if (trafficLightColor.toLowerCase() === "green") {
    console.log("GO GO");
  }else{
    console.log("Invalid Color");
  }
};

correctInstruction('RED');
