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
  

  console.log(catsArray.length);
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

  console.log("Opgave 3a", ...)



}); // ends DOMContentLoaded
