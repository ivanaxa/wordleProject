const guesses = document.querySelector('#guesses');

function makeRows(letters){
    for(let i=0; i < letters.length; i++){
        for(let j=0; j < 5; j++){
            guesses.appendChild(makeArea(i, j));
        }
    }
}

function makeArea(x,y) {
    const area = document.createElement("p");
    area.textContent = x+y+" ";
    area.setAttribute("id",  x+"x_"+y+"y")
    return area;
}

makeRows(3)