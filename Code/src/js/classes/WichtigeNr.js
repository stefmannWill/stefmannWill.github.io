"use strict";

class Wichtigenr{

    nrnr(){
        document.querySelector("#weiterenummern div:first-of-type").removeAttribute("id","ausnr");
        document.querySelector("#weiterenummern div:first-of-type").setAttribute("id","wichtigenr");
    }
    ausaus()
    {
        document.querySelector("#weiterenummern div:first-of-type").removeAttribute("id","wichtigenr");
        document.querySelector("#weiterenummern div:first-of-type").setAttribute("id","ausnr");
    }


}
