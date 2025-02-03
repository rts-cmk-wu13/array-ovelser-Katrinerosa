document.addEventListener("DOMContentLoaded", function () {
  let catsArray = [
    "Ollie",
    "Sophie",
    "Salem",
    "Tiger",
    "Binx",
    "Pumpkin",
    "Penny",
    "Lenny",
  ];
  let dogsArray = [
    "Barney",
    "Molly",
    "Baxter",
    "Polly",
    "Buddy",
    "Suki",
    "Watson",
  ];
  let fruitsArray = [
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Plum",
    "Apricot",
  ];

  let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

  // --- Løs opgaverne herunder ---
  let newNumbers = numbersArray.filter(function (number) {
    return number > 20;
  });
  console.log("Opgave 1", newNumbers);

  // --opgave 2--

  catsArray.push("Sniffles");
  console.log("Opgave 2", catsArray);
  console.log("Opgave 2");
  // Expected output: 4

  /* let catsArray = [
    "Ollie",
    "snifles",
    "Sophie",
    "Salem",
    "Tiger",
    "Binx",
    "Pumpkin",
    "Penny",
    "Lenny",
  ];
  console.log("Opgave 2"); */

  //--opgave3--
  console.log(dogsArray.includes("Trixie"));
  console.log(dogsArray.includes("Baxter"));

  console.log("Opgave 3");

  //----opgave4

  let foundCat = catsArray.find((cat) => cat === "Bagheera", "Salem"); 
//   let foundCat = catsArray.find((cat) => cat === "Salem"); 

  console.log("Opgave 4a", foundCat);

//   let foundCat = catsArray.find((cat) => cat === "Salem"); 

  console.log("Opgave 4a", foundCat);

  console.log("Opgave 4a");
 
  //opgave5

  const Array1 = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];


const map1 = numbersArray.map((x) => x * 3);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

  console.log("Opgave 5",)

  console.log("Opgave 6",)

  const elements = [
    "Barney",
    "Molly",
    "Baxter",
    "Polly",
    "Buddy",
    "Suki",
    "Watson",
  ];
  console.log(elements.join(''));
//---opgave 7
console.log(fruitsArray.indexOf("mango"));

console.log(fruitsArray.indexOf("Blåbær"));
//---opgave888888

console.log("opgave8")
let index = dogsArray.indexOf("Polly"); // Finder positionen af "Polly" i arrayet

if (index !== -1) { // Hvis "Polly" findes i arrayet
    dogsArray.splice(index, 1); // Fjern ét element på den fundne position
}

console.log("Opgave 8", dogsArray); // Udskriver den opdaterede liste uden "Polly"

//ekstra



let sum = numbersArray.reduce((total, number) => total + number, 0); // Lægger alle tal sammen

console.log("Ekstra-opgave", sum); // Udskriver summen af tallene



}); // ends DOMContentLoaded
