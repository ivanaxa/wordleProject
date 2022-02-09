const keyboardLayer1 = "qwertyuiop"
const keyboardLayer2 = "asdfghjkl"
const keyboardLayer3 = "zxcvbnm"

const kb = document.querySelector('#kb');
const guesses = document.querySelector('#game');

function printRow(row){
    for (let i = 0; i < row.length; i++){
        kb.appendChild(makeKbLetter(row[i]));
    }
    kb.appendChild(addnl());
}

function makeRows(letters) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < letters; j++) {
            guesses.appendChild(addArea(i, j));
        }
        guesses.appendChild(addnl());
    }
}

function makeKbLetter(letter){
    let kbLetter = document.createElement("button");
    kbLetter.textContent = " "+letter+" ";
    kbLetter.setAttribute("id", letter + "-button")
    return kbLetter;
}

function addArea(x, y) {
    let sec = document.createElement("button");
    sec.textContent = x+"_"+ y + " ";
    sec.setAttribute("id", x + "x_" + y + "y")
    return sec;
}

function addnl(){
    const nl = document.createElement("p");
    nl.textContent = "\n";
    return nl;
}

printRow(keyboardLayer1);
printRow(keyboardLayer2);
printRow(keyboardLayer3);

makeRows(7);

/*
new.forEach((key)=>{
    // and for each one we add a 'click' listener
    key.addEventListener('keydown', function (e){
        key.textContent.style.color = "red";
        console.log(button.textContent+"\n");
    });
}
*/




/*
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
*/



/*
const pText = document.createElement("p");
pText.textContent = " Hey I’ m red!";
pText.style.color = "red";

const isCorrect = function match(word, place, letter) {
    if (word[place] === letter) {
        return true;
    } else {
        return false;
    }
}
*/