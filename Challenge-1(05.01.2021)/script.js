// Challenge 1 - BKI HESAPLAMA
var kilo1 = 57;
var kilo2 = 65;

var boy1 = 1.83;
var boy2 = 1.67;

var sahis1 = boy1 * boy1 / kilo1;

console.log(
    "Burak, boyun -> " + 
    boy1 + 
    " ve kilon -> " + 
    kilo1 + 
    ". Yaptığımız BKI sonucu ise -> " + 
    sahis1);

var sahis2 = boy2 * boy2 / kilo2;

console.log(
    "Yasin, boyun -> " + 
    boy2 + 
    " ve kilon -> " + 
    kilo2 + 
    ". Yaptığımız BKI sonucu ise -> " + 
    sahis2);

var degerlendirme = sahis1 < sahis2 ;
console.log("Burak'ın BKI oranı Yasin'in BKI oranından küçük mü? " + degerlendirme);