
function find(sent){
    let distructure=sent.split(/[^a-zA-Z]+/);
    console.log(distructure);
   const myset=new Set();
   myset.add('e');
   myset.add('a');
   myset.add('i');
   myset.add('o');
   myset.add('u');
   myset.add('E');
   myset.add('A');
   myset.add('I');
   myset.add('O');
   myset.add('U');
   console.log(myset);
   let count=0;
   let ans='';
   for(let word of distructure){
       let temp=0;
       for(let letter of word){
           if(myset.has(letter)){
               temp++;
           }
       }
       if(count<temp){
           ans=word;
       }
   }
   return ans;
}
let inputsent= prompt("enter the sentence you want to travesrse");
let max_vowel_word =find(inputsent);
console.log('maximum vowel containing word in sentence' ,max_vowel_word);
