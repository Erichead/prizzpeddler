/*Basic Variables. (In order- How much prizz you have, The maximum amount of
Prizz you can have, how fast your prizz fills up per 5 seconds, how much star (money)
you have, and how much star you make per bottle.*/
const Prizz = 0;
const MaxPrizz = 5;
const FillRate = 0.2;
const Star = 0;
const StarRate = 5;
/*Advanced Variables (Upgrade prices and whatnot)*/
var VatUpgrade = 10;
var FillUpgrade = 20;
var StarUpgrade = 15;
function BottleFill(){
    if (Prizz >= 1){
        Prizz -= 1;
        Star += StarRate;
    }
    document.getElementById("Star").innerText=Star;
}
setInterval(function(){
    if (Prizz<MaxPrizz){
        Prizz += FillRate;
    }
    document.getElementById("Prizz").innerText=Prizz;
},1000)
function BuyVat(){
    if(Star>=VatUpgrade){
        Star -= VatUpgrade;
        MaxPrizz += 1;
        VatUpgrade = VatUpgrade + Math.floor(VatUpgrade/2);
    }
}
function BuyFill(){
    if(Star>=FillUpgrade){
        Star -= FillUpgrade;
        FillRate += 0.2;
        FillUpgrade = FillUpgrade + Math.floor(FillUpgrade/2);
    }

}
function BuyStar(){
    if(Star>=StarUpgrade){
        Star -= StarUpgrade;
        StarRate += 2;
        StarUpgrade = StarUpgrade + Math.floor(StarUpgrade/2);
    }

}