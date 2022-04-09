document.write("New Array Functions");

const dir = ["Ray" , "Tarkovsky" , "Kubrick" ,  "Kashyap" , "Dibakar Banerjee" , "Anand Gandhi"];

console.log(dir); 

dir[5] = "Vince Gilligan";
console.log(dir);


dir.unshift("Tarantino" , "Bhardwaj");      // INSERTS THE VALUE AT THE BEGINNING
console.log(dir);


dir.push("Scorscese" , "  " , "Martin");
console.log(dir);


dir.pop();
console.log(dir);


dir.shift();      // REMOVES THE VALUES AT THE BEGINNING
console.log(dir);







