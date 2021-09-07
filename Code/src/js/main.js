"use strict";

// const nr=function(){
//     document.querySelector("#weiterenummern div:first-of-type").removeAttribute("id","ausnr");
//     document.querySelector("#weiterenummern div:first-of-type").setAttribute("id","wichtigenr");
// }
// const aus=function(){
//     document.querySelector("#weiterenummern div:first-of-type").removeAttribute("id","wichtigenr");
//     document.querySelector("#weiterenummern div:first-of-type").setAttribute("id","ausnr");
// }

let wichtigeNr = new Wichtigenr();

const aus= function(){
    wichtigeNr.ausaus();
}

const nr = function(){
    wichtigeNr.nrnr();
}
