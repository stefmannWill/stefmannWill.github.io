"use strict";

const bilder= function(){
      document.querySelector("#sprechstunde .pic").removeAttribute("id","bild1");
      document.querySelector("#sprechstunde .pic").setAttribute("id","bild2");
      setTimeout(bilder2,5000);
      console.log("bilderAusgeführt");

}
const bilder2= function(){
      document.querySelector("#sprechstunde .pic").removeAttribute("id","bild2");
      document.querySelector("#sprechstunde .pic").setAttribute("id","bild1");
      setTimeout(bilder,5000);
      console.log("bilder2Ausgeführt");
}
setTimeout(bilder(),5000);

// const nr=function(){
//     document.querySelector("#weiterenummern div:first-of-type").removeAttribute("id","ausnr");
//     document.querySelector("#weiterenummern div:first-of-type").setAttribute("id","wichtigenr");
// }
// const aus=function(){
//     document.querySelector("#weiterenummern div:first-of-type").removeAttribute("id","wichtigenr");
//     document.querySelector("#weiterenummern div:first-of-type").setAttribute("id","ausnr");
// }
