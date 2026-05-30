//wap in function to find news By ID in javascript
const data = [
  { id: "a", news: "Pakistan cannot be found since 2 days" },
  { id: "b", news: "Chankaya found on north koreain border " },
  { id: "c", news: "From Monday Nepal will be state of india" },
];

function findnewsbyId(Newsarray, targetId) {
  for (let i = 0; i < Newsarray.length; i++) {
    if (Newsarray[i].id == targetId) console.log(Newsarray[i]);
  }
  return;
}

findnewsbyId(data, "a");
findnewsbyId(data, "b");

function findnewsbyLast(Newsarray,first,last){
    console.log()
}