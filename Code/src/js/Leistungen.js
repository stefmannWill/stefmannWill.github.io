"use strict";

// const nr=function(){
//     document.querySelector("#weiterenummern div:first-of-type").removeAttribute("id","ausnr");
//     document.querySelector("#weiterenummern div:first-of-type").setAttribute("id","wichtigenr");
// }
// const aus=function(){
//     document.querySelector("#weiterenummern div:first-of-type").removeAttribute("id","wichtigenr");
//     document.querySelector("#weiterenummern div:first-of-type").setAttribute("id","ausnr");
// }

let kasseClick= function(){
  runter();
  console.log("hhh");
  document.querySelector("#leistungen2 .flexelement:first-of-type").removeAttribute("id", "kasseaus");
  document.querySelector("#leistungen2 .flexelement:first-of-type").setAttribute("id", "kasseein");
}

let selbstClick= function(){
  runter();
  console.log("hhh");
  document.querySelector("#leistungen2 .flexelement:last-of-type").removeAttribute("id", "selbstaus");
  document.querySelector("#leistungen2 .flexelement:last-of-type").setAttribute("id", "selbstein");

}

const runter = function() {
  window.scroll(0,350);
}
