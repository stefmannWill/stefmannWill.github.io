let gestelltefragen=[];
let anzahl;
let richtigeAntwort;

let fragen={
 f1:{frage:"Welche Nusssorte hält die Blutgefäße elastisch?", a:"Walnüsse", b:"Erdnüsse", c:"Haselnüsse",d:"Mandeln",antwort:"a"},
 f2:{frage:"Welches ist das größte Gelenk des menschlichen Körpers?",a:"Kniegelenk",b:"Schultergelenk",c:"Hüftgelenk",d:"Ellenbogengelenk",antwort:"a"},
 f3:{frage:"Wo befindet sich die härteste Substanz des menschlichen Körpers?",a:"Im Schläfenbein (ein Schädelknochen)", b:"Im Sitzbeinhöcker (Teil des Beckens)", c:"Im Amboss (Knochen des Mittelohrs)",d:"Im Zahnschmelz (Bestandteil des Zahns)",antwort:"d"},
 f4:{frage:"Wo entsteht die Galle?", a:"In der Gallenblase", b:"In der Leber", c:"Im Darm",d:"In der Bauchspeicheldrüse",antwort:"b"},
 f5:{frage:"Der Blutdruck wird mit zwei unterschiedlichen Werten angegeben. Was ist ein gesunder Blutdruck?", a:"200/120", b:"80/50", c:"120/80",d:"100/60",antwort:"c"},
 f6:{frage:"Bei wie vielen Pulsschlägen pro Minute sollte der Ruhepuls eines gesunden erwachsenen Menschen liegen?", a:"20-40 Pulsschläge pro Minute", b:"60-80 Pulsschläge pro Minute", c:"100-120 Pulsschläge pro Minute",d:"120-140 Pulsschläge pro Minute",antwort:"b"},
 f7:{frage:"Ab welcher Körpertemperatur spricht man in der Medizin von Fieber?", a:"Über 36,5 Grad Celsius", b:"Über 37,5 Grad Celsius", c:"Über 38,5 Grad Celsius",d:"Über 39,5 Grad Celsius",antwort:"c"},
 f8:{frage:"Wie nennen Mediziner den Bluthochdruck?", a:"Hypertonie", b:"Arteriosklerose", c:"Tachykardie",d:"Bradykardie",antwort:"a"},
 f9:{frage:"Was sind Antikörper?", a:"Fremdstoffe, die in den Körper eindringen.", b:"Stoffe, die der Körper aufgrund ihrer molekularen Struktur nicht erkennen kann.", c:"Jede Form von Giften.",d:"Vom Immunsystem produzierte Stoffe, die der Abwehr von Erregern dienen.",antwort:"d"},
 f10:{frage:"Wie wird eine Erkältung auch genannt?", a:"Grippaler Infekt", b:"Grippe", c:"Influenza",d:"Bronchitis",antwort:"a"},
 f11:{frage:"Welche Viren können eine Erkältung verursachen?", a:"Influenza-Viren", b:"SARS-CoV-2", c:"Rotaviren",d:"Rhinoviren",antwort:"d"},
 f12:{frage:"Was hilft dem Körper NICHT, bei einer Erkältung schnell wieder gesund zu werden?", a:"Viel schlafen", b:"Joggen gehen", c:"Körperliche Schonung",d:"Ausreichend trinken",antwort:"b"},
 f13:{frage:"Warum wird man vor allem im Winter von Erkältungen heimgesucht?", a:"Die Luft ist kalt und trocken.", b:"Durch Heizungsluft werden die Schleimhäute zu feucht.", c:"Die Adventszeit ist sehr anstrengend.",d:"Die Luft ist warm und feucht.",antwort:"a"},
 f14:{frage:"Was ist Stretching?", a:"Dehnungsübungen zum Aufwärmen", b:"Eine Trainingsmethode für die Oberschenkelmuskulatur", c:"Eine Reflexzonen-Massage der Kopfhaut",d:"Eine Disziplin beim Gewichtheben",antwort:"a"},
 f15:{frage:"Wie oft schlägt das Herz durchschnittlich an einem Tag?", a:"Etwa 130.000 Mal", b:"Etwa 50.000 Mal", c:"Etwa 75.000 Mal",d:"Etwa 100.000 Mal",antwort:"d"},
 f16:{frage:"Was ist die häufigste Todesursache in Deutschland?", a:"Herzinfarkt", b:"Chronisch ischämische Herzkrankheit", c:"Chronische Lungenerkrankung",d:"Herzinsuffizienz (Herzschwäche)",antwort:"b"},
 f17:{frage:"Was gehört NICHT zu den Risikofaktoren für die chronisch ischämische Herzkrankheit (Koronare Herzkrankheit)?", a:"Rauchen, aktiv oder passiv", b:"Bluthochdruck", c:"Hoher Zuckerkonsum",d:"Starkes Übergewicht",antwort:"c"},
 f18:{frage:"Welche Sportart ist für herzkranke Patienten NICHT geeignet?", a:"Nordic Walking", b:"Wandern", c:"Radfahren",d:"Joggen",antwort:"d"},
 f19:{frage:"Was ist das Broken heart syndrome?", a:"Das Trauern nach dem Ende einer Beziehung", b:"Eine andere Bezeichnung für einen Herzinfarkt", c:"Eine durch Stress ausgelöste vorübergehende Herzschwäche",d:"Ein Immundefekt, bei dem die körpereigenen Zellen das Herz angreifen",antwort:"c"},
 f20:{frage:"Wo findet sich das erste Krankenhaus der überlieferten Geschichte?", a:"Brügge (Belgien)", b:"Caldas da Rainha (Portugal)", c:"Kos (Griechenland)",d:"Siena (Italien)",antwort:"c"},
 f21:{frage:"Wer entdeckte das Penicillin?", a:"Alexander Fleming", b:"Marie Curie", c:"Albert Nobel",d:"Carl Friedrich Wilhelm Leverkus",antwort:"a"},
 f22:{frage:"Wer entdeckte das Tuberkulosebakterium?", a:"Rainer Arbogast", b:"Robert Koch", c:"Max Planck",d:"Hwang Woo-suk",antwort:"b"},
 f23:{frage:"Für welche Leistung erhielten Francis Crick und James Watson den Nobelpreis für Medizin?", a:"Entdeckung der DNS Molekularstruktur", b:"Erfindung des Aspirins", c:"Erfindung des Herzkatheters",d:"Erste gelungene Herztransplantation",antwort:"a"},
}

const ergebnis = function(){
  let ergebnisHTML =`<section id="ergebnis">
    <h1>Sie haben ${richtigeAntwort} Fragen richtig beantwortet</h1>
    <div id="daumen">
    </div>
  </section>`;
  document.querySelector("body").insertAdjacentHTML("beforeend",ergebnisHTML);
  if (richtigeAntwort>4) {
      document.querySelector("#daumen").setAttribute("class","drehengut");
  }else if (richtigeAntwort>2) {
      document.querySelector("#daumen").setAttribute("class","drehenmittel");
  }else{
    document.querySelector("#daumen").setAttribute("class","drehenschlecht");
  }
}
  const nextFrage=function(){
    spielverlauf();}
  const finish = function(){
    document.querySelector("#quiz").remove();
    document.querySelector("#fragenNr").remove();
    ergebnis();
    document.querySelector("#quizstart").style.display="block";
  }
  const richtigfalsch =function(ergebnis) {
    if (ergebnis=="a") {
      document.querySelector("#a").setAttribute("class","richtige");
      document.querySelector("#b").setAttribute("class","falsche");
      document.querySelector("#c").setAttribute("class","falsche");
      document.querySelector("#d").setAttribute("class","falsche");
    } else if(ergebnis=="b"){
      document.querySelector("#a").setAttribute("class","falsche");
      document.querySelector("#b").setAttribute("class","richtige");
      document.querySelector("#c").setAttribute("class","falsche");
      document.querySelector("#d").setAttribute("class","falsche");
    }else if(ergebnis=="c"){
      document.querySelector("#a").setAttribute("class","falsche");
      document.querySelector("#b").setAttribute("class","falsche");
      document.querySelector("#c").setAttribute("class","richtige");
      document.querySelector("#d").setAttribute("class","falsche");
    }else if(ergebnis=="d"){
      document.querySelector("#a").setAttribute("class","falsche");
      document.querySelector("#b").setAttribute("class","falsche");
      document.querySelector("#c").setAttribute("class","falsche");
      document.querySelector("#d").setAttribute("class","richtige");
    }
  }
  const auswertung = function(ergebnis){
    document.querySelector("#a").removeAttribute("onclick","antwortA()");
    document.querySelector("#b").removeAttribute("onclick","antwortB()");
    document.querySelector("#c").removeAttribute("onclick","antwortC()");
    document.querySelector("#d").removeAttribute("onclick","antwortD()");
    document.querySelector("#nextFrage").setAttribute("onclick","nextFrage()");
    anzahl++;
    let aufgabe =gestelltefragen[anzahl-1];
    richtigfalsch(fragen[("f"+aufgabe)].antwort);
    if ((fragen[("f"+aufgabe)].antwort)==ergebnis){
      richtigeAntwort++;}
    if(anzahl==5){
      document.querySelector("#nextFrage").removeAttribute("onclick","nextFrage()");
      setTimeout(function(){finish()},2000);
    }
  }

  const antwortA = function(){
    auswertung("a");}
  const antwortB = function(){
    auswertung("b");}
  const antwortC = function(){
    auswertung("c");}
  const antwortD = function(){
    auswertung("d");}

const antwortenAnzeigen = function(fragenstellung){
  document.querySelector("#fragenNr span").innerHTML=(`Frage ${anzahl+1} von 5`);
  setTimeout(function(){document.querySelector("#quiz p").insertAdjacentText("afterbegin",fragenstellung.frage);},500);
  setTimeout(function(){document.querySelector("#a").style.display="block"},1500);
  setTimeout(function(){document.querySelector("#a").innerHTML=(fragenstellung.a);},2000);
  setTimeout(function(){document.querySelector("#b").style.display="block"},2500);
  setTimeout(function(){document.querySelector("#b").innerHTML=(fragenstellung.b);},3000);
  setTimeout(function(){document.querySelector("#c").style.display="block"},3500);
  setTimeout(function(){document.querySelector("#c").innerHTML=(fragenstellung.c);},4000);
  setTimeout(function(){document.querySelector("#d").style.display="block"},4500);
  setTimeout(function(){document.querySelector("#d").innerHTML=(fragenstellung.d);},5000);
  setTimeout(function(){document.querySelector("#a").setAttribute("onclick","antwortA()");},5100);
  setTimeout(function(){document.querySelector("#b").setAttribute("onclick","antwortB()");},5100);
  setTimeout(function(){document.querySelector("#c").setAttribute("onclick","antwortC()");},5100);
  setTimeout(function(){document.querySelector("#d").setAttribute("onclick","antwortD()");},5100);
}
const frageanzeigen = function(htmlcode,fragenstellung){
  let position = document.querySelector("#quiz");
    if (position == null) {
      document.querySelector("body").insertAdjacentHTML("beforeend",htmlcode);}
    else {
      document.querySelector("#fragenNr").remove();
      document.querySelector("#quiz").remove();
      document.querySelector("body").insertAdjacentHTML("beforeend",htmlcode);}
    antwortenAnzeigen(fragenstellung);
}

const rand =function () {
  return (Math.floor(Math.random() *23)+1);
}

const auswahl =function(){
  let nr=rand();
  while (gestelltefragen.includes(nr)==true) {
    nr=rand();}
  gestelltefragen.push(nr);
  return (fragen[("f"+nr)]);
}

const spielverlauf =function(){
    let htmlcode =`
    <section id="fragenNr">
    <div class="flexbox">
      <div class="flexelement">
        <span></span>
      </div>
      <div class="flexelement" id="nextFrage">
      Nächste Frage
      </div>
    </div>
   </section>
    <section id="quiz">
    <div class="flexbox">
      <div class="flexelement" id="frage">
       <p></p>
      </div>
    </div>
    <div class="flexbox">
    <div class="flexelement">
     <button class="antwortButton" id="a"></button>
    </div>

      <div class="flexelement">
       <button class="antwortButton" id="b" ></button>
      </div>
    </div>
    <div class="flexbox">
      <div class="flexelement">
       <button class="antwortButton" id="c" ></button>
      </div>
      <div class="flexelement">
        <button class="antwortButton" id="d"></button>
      </div>
    </div>
  </section>`;
    frageanzeigen(htmlcode,auswahl());
}

const start =function(){
  document.querySelector("#quizstart").style.display="none";
  if (document.querySelector("#ergebnis")!=null) {
    document.querySelector("#ergebnis").remove();
  }
  gestelltefragen.splice(0, gestelltefragen.length);
  anzahl=0;
  richtigeAntwort=0;
  spielverlauf();
}
