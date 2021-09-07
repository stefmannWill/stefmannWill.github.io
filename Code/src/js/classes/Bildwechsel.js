
"use strict";

class Bildwechsel{

    bilder(){
      document.querySelector("#sprechstunde .pic").removeAttribute("id","bild1");
      document.querySelector("#sprechstunde .pic").setAttribute("id","bild2");
      setTimeout(this.bilder2,5000);
      console.log("bilderAusgeführt");
    }
    bilder2()
    {
      document.querySelector("#sprechstunde .pic").removeAttribute("id","bild2");
      document.querySelector("#sprechstunde .pic").setAttribute("id","bild1");
      setTimeout(this.bilder,5000);
      console.log("bilder2Ausgeführt");
    }


}
