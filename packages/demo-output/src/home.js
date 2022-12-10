import icons from "./icons.jpg?raw=1#test";

import("./about").then(module => {
  console.log(module, icons);
})

const content = "welcome home";
about();
console.log("this is home.js");

export const name = "home.js";
export default content;