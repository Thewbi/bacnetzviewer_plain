const bacnetzjs = require("bacnetzjs");

const SOURCE_PORT = 20123;

const SOURCE_ADDRESS = "0.0.0.0";
//const SOURCE_ADDRESS = "127.0.0.1";
//const SOURCE_ADDRESS = "192.168.0.234";

//const TARGET_PORT = 1060;
const TARGET_PORT = 10036;

const TARGET_ADDRESS = "0.0.0.0";
//const TARGET_ADDRESS = "127.0.0.1";
//const TARGET_ADDRESS = "192.168.0.234";

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// function action() {
//   window.test();
// }

document.getElementById("test").addEventListener("click", myFunction);

function myFunction() {
  console.log("start");
  //bacnetzjs.requestObjectListSize(
  //   bacnetzjs.requestObjectList(
  bacnetzjs.requestAllProperties(
    8,
    36,
    SOURCE_ADDRESS,
    SOURCE_PORT,
    TARGET_ADDRESS,
    TARGET_PORT
  );

  //   bacnetzjs.requestAllProperties(
  //     8,
  //     36,
  //     SOURCE_ADDRESS,
  //     SOURCE_PORT,
  //     TARGET_ADDRESS,
  //     TARGET_PORT
  //   );

  setTimeout(() => {
    console.log("end");
  }, 3000);
  console.log("end");
}
