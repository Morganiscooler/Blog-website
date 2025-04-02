// let searchBar2 = document.getElementById("searchBar");
// const platformer2 = document.querySelector(".Game2");
// const automaton2 = document.querySelector(".Game1")

// searchBar2.addEventListener('input', function(event){
//     const searchItem2 = event.target.value;
//     console.log(`Your search term is: ${searchItem2}`);

//     function countLetters2(searchItem2, letters2) {
//         let count2 = 0;
//         const lastIndex2 = searchItem2.length - 1;
//         for (let j = 0; j < searchItem2.length; j++) {
//           let char2 = searchItem2[j].toLowerCase();
//         //   console.log(`the string in lowercase is ${char}`);
//         //  works! all letters in the array below are lowercase
//           if (char2 == letters2[j]) {
//             count2++; 
//             automaton2.style.display = "none";
//             platformer2.style.display = "block";
//             // display Lawrence's games
//           }
//           else if(char2[lastIndex2] !== letters2[j]){
//             count2--;
//             automaton2.style.display = "none";
//             platformer2.style.display = "none";
//           }
//           else {
//             count2--; 
//             automaton2.style.display = "none";
//             platformer2.style.display = "none";
//             // display neither's games, eventually add text that says "No games found."
//           }
//         }
//         return count2;
//       }
//       const myString2 = searchItem2;
//       const lettersToFind2 = ["0", "d", "d", "s", "h", "3", "3", "p"];
//       const occurrences2 = countLetters2(myString2, lettersToFind2);
//       console.log(occurrences2); // Output: 8
//       if (searchBar2.value == 0) {
//         // The search input is empty
//         automaton2.style.display = "block";
//         platformer2.style.display = "block";
//     }
// })