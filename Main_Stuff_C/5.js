function whoPaying(name){

    var NumofPeople = name.length;
    var RandomPersonPos = Math.floor(Math.random() * NumofPeople);
    var RandomPerson = name[RandomPersonPos];

    return RandomPerson + " is going to buy lunch today !";
}