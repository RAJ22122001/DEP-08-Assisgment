function find_longest(sent){
    let distructure=sent.split(/[^a-zA-Z]+/);
    console.log(words);
    let longestword='';
    for(let word of words){
        if(word.length>longestword.length){
            longestword=word;
        }
    }
    return longestword;
   
}
let sent= prompt("please enter a sentence");
const longestWord= find_longest(sent);
console.log('longestword in sentence',longestWord);
