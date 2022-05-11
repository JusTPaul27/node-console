const fs = require('fs');




// function readCsv() {
//     try {
//         const data = fs.readFileSync('./libri.csv', 'utf8');
//         console.log(data);
//     } catch (err) {
//        throw err;
 
//     }
// }


// try {
//     readCsv()
// } catch (error) {
//     console.log('La funzione non funziona')
// }

let data;

try {
 data = fs.readFileSync('./libri.csv', 'utf8');
} catch (err) {
    console.log('File non trovato');
}

console.log(data)

// let pippo = {nome: "pippo", dob: 2021};

// console.log(pippo['nome']);

// pippo['cognome'] = "De pippis";

// console.log(pippo.cognome)

////
//1) spezzare la nostra stringa in un array di linee
// let lines = ["title,author,price,copies", "iliade,omero,15.00,5, "odissea,omero,12.00,3",  "promessi sposi,manzoni,20.00,10"];
//2) creo una variabile chiamata "properties" che conterrà un array con le parole di cui è composta la prima linea;
// const properties = ["title", "author", "price", "copies"];
// let lines = ["iliade,omero,15.00,5, "odissea,omero,12.00,3",  "promessi sposi,manzoni,20.00,10"];
//3) creo un array vuoto per gli oggetti 
//4) fare un ciclo su tutte le linee dentro lines
// per ogni riga dentro lines 
//creo un nuovo oggetto nuovo:
//trasformo la linea in un array di parole : es lineArray = ["iliade", "omero", "15.00", "5"]
//faccio un ciclo per ogni parola dentro properties
//aggiungo al nuovo oggetto una proprietà con il nome della proprietà e associando il valore corrispondente nella linea
//infilo il mio oggetto nell'array vuoto 
//5) faccio un console.log dell'array 