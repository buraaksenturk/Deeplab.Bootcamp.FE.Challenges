function tipCalculator(bill) {
    if(bill<50){
        return bill * 0.2;
    }else if(bill >= 50 && bill < 200){
        return bill * 0.15;
    }else{
        return bill * 0.1;
    }
}

console.log(tipCalculator(20));
console.log(tipCalculator(60));
console.log(tipCalculator(300));