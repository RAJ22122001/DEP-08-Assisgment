// it allows users to append a Single event listner to a parent that adds it to all its present and future desecendent that matches a selector
document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(document.querySelector("#football"));
   console.log(e.target.getAttribute('id') +" is our target id");
   let target=e.target;
   if(target.matches('li')){
     target.style.backgroundColor='red';
   }

//   if (target.matches("li")) {
//     target.style.backgroundColor = "yellow";
//   }
});

const sports= document.querySelector('#sports');
const addrow=document.createElement('li');
addrow.setAttribute('id','rubgy');
addrow.innerText='rubgy';
sports.append(addrow);
