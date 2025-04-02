let searchBar = document.getElementById("searchBar");
const platformer = document.querySelector(".Game2");
const automaton = document.querySelector(".Game1")

searchBar.addEventListener('input', function(event){
    const searchItem = event.target.value;
    console.log(`Your search term is: ${searchItem}`);

    // Added map for game devs and corresponding html element classes
    // *Make sure this works for multiple games with the same devs
    // *Add more games by Lawrence later
    const gameDevMap = new Map();
    gameDevMap.set("bloxy996", [".Game1"]);
    gameDevMap.set("0ddsh33p", ".Game2");
    
    function countLetters(searchItem, gameList) {
        let count = 0;
        const lastIndex = searchItem.length - 1;
        // new stuff using map
        for (const [name, value] of gameList.entries()) {
            console.log(name);
            let game = document.querySelector(value);
            for (let i = 0; i < searchItem.length; i++) {
                  let char = searchItem[i].toLowerCase();
                //   console.log(`the string in lowercase is ${char}`);
                //  works! all letters in the array below are lowercase
                  if (char == name[i]) {
                      console.log(char.toString() + " is equal to " + name[i]);
                    game.style.display = "block";
                    count++; 
                    // display Lawrence's games
                  }
                  else if(char[lastIndex] !== name[i]){
                    game.style.display = "none";
                    count--;
                  }
                  else {
                    game.style.display = "none";
                    count--; 
                    // display neither's games, eventually add text that says "No games found."
                  }
                }
        }
        return count;
      }
      const myString = searchItem;    
      const occurrences = countLetters(myString, gameDevMap);
      console.log(occurrences); // Output: 8
      if (searchBar.value == 0 && searchItem[0] !== "0") {
        // The search input is empty
        automaton.style.display = "block";
        platformer.style.display = "block";
    }
    //////////////////////////////////////////////////////////////
})