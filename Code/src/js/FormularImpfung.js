"use strict";
// Array anlegen in dem die Felder ohne Eingabe  hinterlegt werden
let fehlerbox=[];

const meldungAnzeigen = function(e){
  let htmlCode=`<div class="meldung" id="terminmeldung">Guten Tag ${e.Anrede} ${e.Nachname}, <br> <br> vielen Dank für Ihr Interesse an meiner Website. Natürlich können Sie keinen Termin für eine Impfung machen.</div>`;
  if (document.querySelector("#terminmeldung")!=null) {
    document.querySelector("#terminmeldung").remove();
  }
  document.querySelector("#terminImpfung .flexcont .flexbox:nth-of-type(1)").insertAdjacentHTML("afterbegin",htmlCode);
}

// Gibt eine fehlermeldung aus die Anezigt welche Felder nicht ausgefüllt wurden
const fehlermeldungAnzeigen = function(){
  let fehlercode="";
  let htmlCode=`<div class="meldung" id="fehlermeldung">Die folgende Felder wurden nicht korrekt ausgefüllt: <div id="fehler"></div></div>`;
  if (document.querySelector("#fehlermeldung")!=null) {
    document.querySelector("#fehlermeldung").remove();
  }
  document.querySelector("#terminImpfung .flexcont .flexbox:nth-of-type(1)").insertAdjacentHTML("afterbegin",htmlCode);

  fehlercode=fehlerbox.join(",<br> ");
  document.querySelector("#fehler").innerHTML=fehlercode;
  fehlerbox=[];
}
//Untersuchen ob alle Daten eingegeben wurden
const datenCheck =function(daten){
  for (let eigenschaft in daten){
      if (daten[eigenschaft] == ""){
        fehlerbox.push(eigenschaft);}}
}
//Eingegebene Daten in einem Objekt hinterlegen
const daten_ermitteln = function(e) {
  let stoff;
  if(e.target.elements.biotech.checked){
    stoff="Biontech"
  }else if(e.target.elements.moderna.checked){
    stoff="Moderna"
  }else{
    stoff="Johnson & Johnson"}

  return{
    Anrede:e.target.elements.anrede.value,
    Vorname:e.target.elements.vorname.value,
    Nachname:e.target.elements.nachname.value,
    Stadt:e.target.elements.stadt.value,
    Postleitzahl:e.target.elements.postleitzahl.value,
    Straße:e.target.elements.straße.value,
    Hausnummer:e.target.elements.hausnummer.value,
    Telefonnr:e.target.elements.telefonnr.value,
    Email:e.target.elements.email.value,
    Krankenkasse:e.target.elements.krankenkasse.value,
    Impfstoff:stoff,
    Tagvorschlag_1:e.target.elements.tagvorschlag_1.value,
    Uhrzeitvorschlag_1:e.target.elements.uhrzeitvorschlag_1.value,
    Tagvorschlag_2:e.target.elements.tagvorschlag_2.value,
    Uhrzeitvorschlag_2:e.target.elements.uhrzeitvorschlag_2.value,
    Tagvorschlag_3:e.target.elements.tagvorschlag_3.value,
    Uhrzeitvorschlag_3:e.target.elements.uhrzeitvorschlag_3.value,
    }
}


let eintrag = document.querySelector("#formular_impfung");
eintrag.addEventListener("submit",e=>{
  e.preventDefault();
  if (document.querySelector("#fehlermeldung")!=null) {
    document.querySelector("#fehlermeldung").remove();
  }
  if (document.querySelector("#terminmeldung")!=null) {
    document.querySelector("#terminmeldung").remove();
  }
  let formulardaten= daten_ermitteln(e);
  datenCheck(formulardaten);
  if(fehlerbox.length>0){
    fehlermeldungAnzeigen();
  }else{
    meldungAnzeigen(formulardaten);
  }

})
