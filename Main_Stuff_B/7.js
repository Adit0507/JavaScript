function applyDiscount(cartAmt){
        const discount = 100;
        cartAmt -= discount;
        return cartAmt;
}

console.log(applyDiscount(3000));