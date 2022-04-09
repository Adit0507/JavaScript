const itemsToBuy = {
    milk: {
        quantity : 5,
        price: 20
    },
    bread: {
        quantity : 2,
        price: 15
    },
    potato: {
        quantity : 3,
        price: 10
    }
}

// Print the array consisting of the names of the items here

for(const key in itemsToBuy)
{
    console.log(key + itemsToBuy)
}
