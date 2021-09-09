"use strict";
// Array anlegen in dem die Felder ohne Eingabe  hinterlegt werden
let fehlerbox=[];

const meldungAnzeigen = function(e){
  let htmlCode=`<div class="flexbox" id="anzeige"> <div class="meldung" id="terminmeldung">Guten Tag ${e.Anrede} ${e.Nachname}, <br> <br> vielen Dank für Ihr Interesse an meiner Website. Natürlich können Sie keinen Termin für eine Impfung machen.</div></div>`;
  if (document.querySelector("#anzeige")!=null) {
    document.querySelector("#anzeige").remove();
  }
  document.querySelector("#termin.flexcont").insertAdjacentHTML("afterbegin",htmlCode);
}

// Gibt eine fehlermeldung aus die Anezigt welche Felder nicht ausgefüllt wurden
const fehlermeldungAnzeigen = function(){
  let fehlercode="";
  let htmlCode=`<div class="flexbox" id="anzeige"> <div class="meldung" id="fehlermeldung">Die folgende Felder wurden nicht korrekt ausgefüllt: <div id="fehler"></div></div></div>`;
  if (document.querySelector("#anzeige")!=null) {
    document.querySelector("#anzeige").remove();
  }
  document.querySelector("#termin .flexcont").insertAdjacentHTML("afterbegin",htmlCode);
  document.querySelector("#formular").style.margin="0 20% 0 0";
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
  let stoff="Videosprechstunde";
  if(e.target.elements.vorort.checked){
    stoff="Sprechstunde"
  }

  return{
    Anrede:e.target.elements.anrede.value,
    Vorname:e.target.elements.vorname.value,
    Nachname:e.target.elements.nachname.value,
    Stadt:e.target.elements.stadt.value,
    Postleitzahl:e.target.elements.postleitzahl.value,
    Straße:e.target.elements.straße.value,
    Hausnummer:e.target.elements.hausnummer.value,
    Telefonnummer:e.target.elements.telefonnr.value,
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

let eintrag = document.querySelector("#formular_sprechstunde");
eintrag.addEventListener("submit",e=>{
  e.preventDefault();
  console.log("KHBKJB")
  if (document.querySelector("#anzeige")!=null) {
    document.querySelector("#anzeige").remove();
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
