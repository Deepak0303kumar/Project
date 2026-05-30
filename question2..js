const data = [
  { id: "a", news: "Pakistan cannot be found since 2 days" },
  { id: "b", news: "Chankaya found on north koreain border " },
  { id: "c", news: "From Monday Nepal will be state of india" },
];

function Slimit(data,limit){
    return data.slice(0,limit)
}
console.log(Slimit(data,2))
