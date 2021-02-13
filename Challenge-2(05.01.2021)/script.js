var aTeam = "FENERBAHÇE"
var bTeam = "ANADOLU EFES"

var firstTeamSet1 = 60;
var firstTeamSet2 = 20;
var firstTeamSet3 = 30;

var secondTeamSet1 = 60;
var secondTeamSet2 = 10;
var secondTeamSet3 = 20;

var aTeamPoint = (firstTeamSet1+firstTeamSet2+firstTeamSet3)/3;
console.log(aTeam + "'nin aldığı puanların ortalaması -> " + aTeamPoint);

var bTeamPoint = (secondTeamSet1+secondTeamSet2+secondTeamSet3)/3;
console.log(bTeam + "'in aldığı puanların ortalaması -> " + bTeamPoint);

if (aTeamPoint > bTeamPoint){
    console.log("Bu karşılaşmanın galibi " + aTeam);
}else if(aTeamPoint < bTeamPoint){
    console.log("Bu karşılaşmanın galibi " + bTeam);
}else{
    console.log("Bu karşılaşma da " + aTeam + " ve " + bTeam + " berabere kaldı.")
}
