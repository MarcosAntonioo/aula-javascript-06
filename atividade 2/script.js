//questão A
    var txt = "abcdefghijklm";
    console.log(txt.search("h"));
    
//questão B
    var txt = "Poso comer bananas o dia todo";
    console.log(txt.slice(txt.search("b"),txt.search(" o")));
    
//questão C
    var txt = "Olá, mundo";
    console.log(txt.replace("Olá","Bem-vindo"));
//questão D
    var txt = "Olá, mundo";
    console.log(txt.toUpperCase());
//questão E
    var txt = "Olá, mundo";
    console.log(txt.toLowerCase());
//questão F
    var txt = "Poso comer bananas o dia todo";
    console.log(txt.length);
//questão G
    var str1 = "Hello ";
    var str2 = "World!";
    console.log(str1.concat(str2));
//questão H
    var fruits = ["Banana","Orange","Apple","Kiwi"];
    console.log(fruits.sort());
//questão I
    var fruits = ["Banana","Orange","Apple","Kiwi"];
    fruits.shift();
    fruits.pop();
    console.log(fruits);
//questão J
    var fruits = ["Banana","Orange","Apple"];
    fruits.push("Uva","Caju","Kiwi")
    console.log(fruits);
//questão K
    var fruits = ["Banana","Orange","Apple"];
    fruits.unshift("Pera","Manga");
    fruits.pop();
    console.log(fruits);
