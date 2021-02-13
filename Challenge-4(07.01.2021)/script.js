const calcAverage = (deger1,deger2,deger3) => (deger1+deger2+deger3)/3;
console.log(calcAverage(10,20,30));

const scoreDolphins = calcAverage(57,12,8);
const scoreKoalas = calcAverage(20,30,10);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins kazandı (${avgDolphins}) vs ${avgKoalas}`);
    }else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas kazandı (${avgKoalas}) vs ${avgDolphins}`);
    }else{
        console.log("Berabere");
    }
};

checkWinner(scoreDolphins,scoreKoalas);