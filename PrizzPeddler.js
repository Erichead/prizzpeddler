/*Basic Variables. (In order- How much prizz you have, The maximum amount of
Prizz you can have, how fast your prizz fills up per 5 seconds, how much star (money)
you have, and how much star you make per bottle.*/
var Prizz = 0;
var MaxPrizz = 5;
var FillRate = 0.2;
var Star = 0;
var StarRate = 5;
/*Advanced Variables (Upgrade prices and whatnot)*/
var VatUpgrade = 10;
var FillUpgrade = 20;
var StarUpgrade = 15;
function BottleFill(){
    if (Prizz >= 1){
        Prizz -= 1;
        Star += StarRate;
    }
}
SetInterval(function(){
    if (Prizz<MaxPrizz){
        Prizz += FillRate;
    }
},5000)