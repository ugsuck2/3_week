function calculateOrder(price, grade) {
    let lastPrice = 0;
    if (grade == 'VIP') {
        lastPrice = price*0.8;   
    }
    else if (grade == 'GOLD') {
        lastPrice = price*0.85;
    }
    else if (grade == 'SILVER') {
        lastPrice = price*0.9;
    }
    else if (grade == 'BRONZE') {
        lastPrice = price;
    }
    else {
        lastPrice = price;
    }
    
    let bonus = 0;
    for (let i=1; i<=(lastPrice/100000);i++) {
        bonus = bonus + 1000
    }
    console.log(lastPrice);
    console.log(bonus);
}

calculateOrder(1000000,'VIP');