// function solve(someText) {
//     let newText = someText.replace(/[,!?'"\-:;@#$%^&*()`~/\\]/g, "").replace(/\./g, " ");
//     let words = newText.split(" ")
//     let finalText = ""
//
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] !== "") {
//             finalText += i < words.length - 1 ? `${words[i].toUpperCase()}, ` : `${words[i].toUpperCase()}`
//         }
//     }
//     console.log(finalText)
// }


function solve(text) {

  let result = text.toUpperCase()
    .split(/\W+/)
    .filter(w => w.length > 0)
    .join(", ");

  console.log(result);
}


function solve1(text) {
  let result = text.toUpperCase()
    .match(/\w+/g)
    .join(', ');

  console.log(result);
}

solve('Functions in JS can be nested, i.e. hold other functions')
solve1('Hi, how are you?')