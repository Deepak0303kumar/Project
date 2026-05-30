const data = [
  { id: "a", news: "Pakistan cannot be found since 2 days" },
  { id: "b", news: "Chankaya found on north koreain border " },
  { id: "c", news: "From Monday Nepal will be state of india" },
];

function lastlimit(data, limit) {
  const lenofdata = data.length;
  return data.slice(lenofdata - limit, lenofdata);
}
console.log(lastlimit(data, 2));
