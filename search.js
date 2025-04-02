
const clearInput = () => {
    const input = document.getElementById("clearBtn")[0];
        input.value = "";
        automaton.style.display = "block";
        platformer.style.display = "block";

}

// copy this and make a second script for Finn, remember to modify the vars so they don't overlap.
let searchBar = document.getElementById("searchBar");
const platformer = document.querySelector(".Game2");
const automaton = document.querySelector(".Game1")

searchBar.addEventListener('input', function(event){
    const searchItem = event.target.value;
    console.log(`Your search term is: ${searchItem}`);

    function countLetters(searchItem, letters) {
        let count = 0;
        const lastIndex = searchItem.length - 1;
        for (let i = 0; i < searchItem.length; i++) {
          let char = searchItem[i].toLowerCase();
        //   console.log(`the string in lowercase is ${char}`);
        //  works! all letters in the array below are lowercase
          if (char == letters[i]) {
            count++; 
            automaton.style.display = "block";
            platformer.style.display = "none";
            // display Lawrence's games
          }
          else if(char[lastIndex] !== letters[i]){
            count--;
            automaton.style.display = "none";
            platformer.style.display = "none";
          }
          else {
            count--; 
            automaton.style.display = "none";
            platformer.style.display = "none";
            // display neither's games, eventually add text that says "No games found."
          }
        }
        return count;
      }
      const myString = searchItem;
      const lettersToFind = ["b", "l", "o", "x", "y", "9", "9", "6"];
      const occurrences = countLetters(myString, lettersToFind);
      console.log(occurrences); // Output: 8
      if (searchBar.value == 0) {
        // The search input is empty
        automaton.style.display = "block";
        platformer.style.display = "block";
    }
    //////////////////////////////////////////////////////////////
})
