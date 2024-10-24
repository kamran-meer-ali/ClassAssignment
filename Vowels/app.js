function toAdd() {
    var input = document.getElementById('vowel').value;
    console.log(input);
    var vowel=["a","e","i","o","u"]
    var consts=[]

    for(let i=0; i<input.length; i++){
        if(inpu){
           c
        }
    }
    
}

//var consnant=["b","d","g","s","k","n","m"]

//guide
let vowels = [];
let cons = [];
function findVowels() {

    let input = document.getElementById("input").value;
    for (let i = 0; i < input.length; i++) {
        if ((input.slice(i, i + 1) === "a") || (input.slice(i, i + 1) === "e") || (input.slice(i, i + 1) === "i") || (input.slice(i, i + 1) === "o") || (input.slice(i, i + 1) === "u")) {
            vowels.push(input)
            break;
        }
        else {
            cons.push(input)
            break;
        }
    }
    console.log("vowels list: ", vowels)
    console.log("cons list: ", cons)




}