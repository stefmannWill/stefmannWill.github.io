"use strict";
 let fehlerbox=[];
// let kontaktdaten={
//
// }

let eintrag = document.querySelector("#formular_impfung");
eintrag.addEventListener("submit",e=>{
  e.preventDefault();
  let formulardaten= daten_ermitteln(e);
  datenCheck(formulardaten);
  // fensterCreate(formulardaten);
  // fensterOffnen();
  // console.log("hallo hallo");
  // console.log(e);
  // console.log(formulardaten);
})

const datenCheck =function(daten){
  console.log(daten);
  console.log(daten.anrede);
  for (let eigenschaft in daten){
      console.log(eigenschaft);
      console.log(daten[eigenschaft]);
      if (daten[eigenschaft] == ""){
        fehlerbox.push(eigenschaft);
      }
  }

  console.log(fehlerbox);
}

const daten_ermitteln = function(e) {
  return{
    anrede:e.target.elements.anrede.value,
    vorname:e.target.elements.vorname.value,
    nachname:e.target.elements.nachname.value,
    stadt:e.target.elements.stadt.value,
    postleitzahl:e.target.elements.postleitzahl.value,
    straße:e.target.elements.straße.value,
    hausnummer:e.target.elements.hausnummer.value,
    telefonnr:e.target.elements.telefonnr.value,
    email:e.target.elements.email.value,
    krankenkasse:e.target.elements.krankenkasse.value,
    biotech:e.target.elements.biotech.checked,
    moderna:e.target.elements.moderna.checked,
    johnson:e.target.elements.moderna.checked,
    astra:e.target.elements.moderna.checked,
    tagvorschlag_1:e.target.elements.tagvorschlag_1.value,
    uhrzeitvorschlag_1:e.target.elements.uhrzeitvorschlag_1.value,
    tagvorschlag_2:e.target.elements.tagvorschlag_2.value,
    uhrzeitvorschlag_2:e.target.elements.uhrzeitvorschlag_2.value,
    tagvorschlag_3:e.target.elements.tagvorschlag_3.value,
    uhrzeitvorschlag_3:e.target.elements.uhrzeitvorschlag_3.value,
    nachricht:e.target.elements.nachricht.value,}
}


// const fensterCreate =function(daten){

// let htmlcode =`<section id="terminbestätigung">
//   <h1>Ihre Terminbestätgung</h1>
//   <article class="">
//     Sehr geehrter ${daten.anrede} ${daten.nachname} ,<br>
//     <br>
//     gerne bestätigen wir Ihnen den Impftermin am  ${daten.tagvorschlag_2} um ${daten.uhrzeitvorschlag_2}  <br>
//   </article>
//   </section>`;

// console.log(htmlcode);
// // document.querySelector("body").innerHTML=htmlcode;
// // document.querySelector("body").insertAdjacentHTML("afterbegin",htmlcode)
//
//
// }

// const fensterOffnen=function() {
//   // var file =`D:/ArztSeite/hallo.txt`;
//   // console.log(file);
//   window.open(`D:/ArztSeite/Code/Terminbestätigung.html`);
// }

const daten_verarbeiten = function(formulardaten) {
    let wunschtermin1 =`Wunschtermin Nr.1: ${formulardaten.tagvorschlag_1} um ${formulardaten.uhrzeitvorschlag_1} Uhr`
    let wunschtermin2 =`Wunschtermin Nr.2: ${formulardaten.tagvorschlag_2} um ${formulardaten.uhrzeitvorschlag_2} Uhr`
    let wunschtermin3 =`Wunschtermin Nr.3: ${formulardaten.tagvorschlag_3} um ${formulardaten.uhrzeitvorschlag_3} Uhr`

    console.log(wunschtermin1);
    // return{
    //
    //
    // }
}
