const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3]);
// 1. Returvärdet kommer att vara Maradona då koden börjar från index 0.
names.push("Drogba");
console.log(names.push("Drogba"));
// 2. Returvärdet blir 8
names.unshift("Figo");
console.log(names);
// 3. Metoden som används för att lägga till ett element vid början av arrayen är unshift().
// Ta bort det sista värdet från arrayen
names.pop();
console.log(names.pop());
// 4. Returvärdet av pop() blir Drogba, som var sista elementet av arrayen.
[names[0], names[6]] = [names[6], names[0]];
console.log(names);
// 5. Det finns flera olika sätt att ändra på värden, sättet som jag gjorde det på är enklast.
// 6. Objekt inom Javascript använder sig av passed by reference metoden som gör att man måste ändra original värdet för att kalla på värdet.
const players = [
  "Zlatan",
  "Beckham",
  "Zidane",
  "Ronaldo",
  "Romario",
  "Maradona",
];
console.log(players);
console.log(players.includes("Messi"));
// 7. Resultat blir false då metoden kan antingen returnera true eller false.
if (players.includes("Zlatan")) {
  console.log("Zlatan är med i listan.");
} else {
  console.log("Zlatan är inte med i listan.");
}
// 8. Zlatan finns med i listan.
console.log(players.indexOf("Maradona"));
// 9. Resultatet av indexOf metoden blir 5 då koden börjar med att räkna från 0 och Maradona är det sista värdet (0-5).
console.log(players.indexOf("Messi"));
// 10. indexOf returnerar värdet -1 när elementet inte finns med i arrayen och det är väldigt användbart för att kontrollera vilka element som finns i en array.
console.log(players.join(", "));
// 11. Returvärdet blir att namnen hamnar i samma string som är sepererat med ett commatecken och mellanslag.
console.log(players.join(" - "));
// 12. Namnen visas på följande sätt: Zlatan - Beckham - Zidane - Ronaldo - Romario - Maradona
//players.splice(1, 2);
console.log(players);
// 13. Splice tar några parametrar såsom vart det ska börja inom arrayen och hur många element det ska ta bort.
//players.splice(2, 1, "Ronaldinho");
console.log(players);
// 14. Det som sker är att vi tar bort elementet som ligger i indexposition 2 (vi tar bort ett element) och ersätter elementet med ett nytt element som har värdet "Ronaldinho".
//players.splice(players.indexOf("Ronaldinho"));
console.log(players);
// 15. Koden börjar att ta bort element börjande från Ronaldinho elementet och tar bort elementet.
const newPlayers = players.slice(0, 3);
console.log(newPlayers);
// 16. Det som slice() funktionen gör är att skapa en kopia av arrayen utan att ändra på innehplet.
const newProPlayers = players.slice(2);
console.log(newProPlayers);
console.log(players);
// 17. Den nya arrayen innehåller alla element från index 2 och uppåt, den originala arrayen är oförändrad.
players.with(1, "Mbappé");
console.log(players.with(1, "Mbappe"));
console.log(players);
// 18. with() metoden visar det nya elementet i arrayen utan att ändra på originalvärdet.
// 19.
const numbers = [5, 8, 12, 20, 3];
let count = 0;
// 20.
while (count < numbers.length) {
  console.log(numbers[count]);
  count++;
}
// 21.
let bigCount = 0;
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > count) {
    bigCount = numbers[i];
  }
}
console.log("The largest number is:", bigCount);
// 22.
let doubledNums = [];
for (let num of numbers) {
  doubledNums.push(num * 2);
}
console.log(doubledNums);
// 23.
let totalNums = 0;
for (let num of numbers) [(totalNums += num)];
let averageNums = totalNums / numbers.length;
console.log(averageNums);
// 24.
let minNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minNum) {
    minNum = numbers[i];
  }
}
console.log(minNum);
// 25.
const mixedNumbers = [3, -5, 12, -1, 8, -6];
let positiveNums = [];
for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] > 0) {
    positiveNums[i] = mixedNumbers[i];
  }
}
console.log(positiveNums);
// 26.
for (let num of mixedNumbers) {
  if (num > 0) {
    console.log(num);
  }
}
// 27.
let numCount = 0;
while (numCount < numbers.length) {
  if (numbers[numCount] > 10) {
    console.log(
      `Closing loop, the number ${numbers[numCount]} is bigger than 10.`
    );
    break;
  }
  console.log(numbers[numCount]);
  numCount++;
}
// 28.
let negativeNumCount = 0;
let negativeNums = 0;
while (negativeNumCount < mixedNumbers.length) {
  if (mixedNumbers[negativeNumCount] < 0) {
    let i = mixedNumbers[negativeNumCount];
    console.log(i);
    negativeNums++;
  }
  negativeNumCount++;
}
console.log(`The amount of negative numbers is ${negativeNums}`);
// 29.
const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
for (let word of words) {
  console.log(`The word is ${word} and the length is ${word.length}`);
}
// 30.
let firstLetter = [];
for (let word of words) {
  firstLetter.push(word[0]);
}
console.log(firstLetter);
// 31.
let numCounter = 0;
let totalTwentyFive = 0;
while (numCounter < numbers.length) {
  let currentNumber = numbers[numCounter];
  totalTwentyFive += currentNumber;
  if (totalTwentyFive > 25) {
    break;
  }
  console.log(totalTwentyFive);
  numCounter++;
}
// 32.
let sum = 0;
for (let num of mixedNumbers) {
  sum += num;
}
console.log(`The sum of all numbers in mixedNumbers is ${sum}`);
// 33.
const temperatures = [15, 22, 19, 30, 28, 18, 25];
let highTemp = temperatures[0];
let highIndex = 0;
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > highTemp) {
    highTemp = temperatures[i];
    highIndex = i;
  }
}
console.log(`The highest temp is ${highTemp} and the index is ${highIndex}`);
// 34.
for (let word of words) {
  if (word.length > 5) {
    console.log(word);
  }
}
// 35.
numCount = 0;
let oddNum = 0;
while (numCount < numbers.length) {
  oddNum = numbers[numCount];
  if (oddNum % 2 !== 0) {
    break;
  }
  numCount++;
}
console.log(
  `The first odd number is ${oddNum} and the index for it is ${numCount}`
);
