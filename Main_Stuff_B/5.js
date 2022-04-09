const book = {
    title : "Collected Short stories" ,
    author : "Satyajit Ray" ,
    pages : 450 , 
    
}

console.log(book);
for (const key in book) {

    console.log(key + " = " + book[key]);
    document.write(key + " = " + book[key] + "\n");
}

book.pages = 250;
book.author = "Ruskin Bond";

console.log(book.pages);

