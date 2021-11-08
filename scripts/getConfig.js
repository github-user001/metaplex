// const devnetTemp = require("../.cache/devnet-temp");
// if (!devnetTemp) return;

var fs = require("fs");
var devnetDeployCache = JSON
  .parse
  //   fs.readFileSync("/.cache/devnet-temp", "utf8")
  ();

const candyMachineConfigAddress = devnetDeployCache.program.config;
console.log(candyMachineConfigAddress);
