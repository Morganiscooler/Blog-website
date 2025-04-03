let searchBar = document.getElementById("searchBar");
const platformer = document.querySelector(".Game2");
const automaton = document.querySelector(".Game1")

searchBar.addEventListener('input', function(event){
    const searchItem = event.target.value;
    console.log(`Your search term is: ${searchItem}`);

    // Added map for game devs and corresponding html element classes
    const gameDevMap = new Map();
    gameDevMap.set(".Game1", "bloxy996");
    gameDevMap.set(".Game2", "0ddsh33p");
    gameDevMap.set(".Game3", "bloxy996");
    gameDevMap.set(".Game4", "bloxy996");
    gameDevMap.set(".Game5", "0ddsh33p");

    function countLetters(searchItem, gameList) {
        console.log("The string is " + searchItem);
      
        let count = 0;
        const lastIndex = searchItem.length - 1;
        // new stuff using map
        for (const [id, name] of gameList.entries()) {
            let game = document.querySelector(id);
            for (let i = 0; i < searchItem.length; i++) {
                  //console.log(i);
                  let char = searchItem[i].toLowerCase();
                //   console.log(`the string in lowercase is ${char}`);
                //  works! all letters in the array below are lowercase
                  if (char == name[i]) {
                      console.log(char.toString() + " is equal to " + name[i]);
                    game.style.display = "block";
                    count++; 
                    //automaton.style.display = "block";
                    //platformer.style.display = "none";
                    // display Lawrence's games
                  }
                  else if(char[lastIndex] !== name[i]){
                    game.style.display = "none";
                    count--;
                    //automaton.style.display = "none";
                    //platformer.style.display = "none";
                  }
                  else {
                    console.log("yeah nothing");
                    game.style.display = "none";
                    count--; 
                    //automaton.style.display = "none";
                    //platformer.style.display = "none";
                    // display neither's games, eventually add text that says "No games found."
                  }
                }
            if (searchBar.value == 0 && searchItem[0] !== "0") {
              game.style.display = "block";
              console.log("yay");
            } 
        }

        return count;
      }
      const myString = searchItem;    
      const occurrences = countLetters(myString, gameDevMap);
      console.log(occurrences); // Output: 8
    //////////////////////////////////////////////////////////////
})