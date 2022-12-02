import("./about").then(module => {
  console.log(module);
})

const content = "welcome home";
about();
console.log("this is home.js");

export const name = "home.js";
export default content;