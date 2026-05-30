const data = [
  { id: "a", news: "Pakistan cannot be found since 2 days" },
  { id: "b", news: "Chankaya found on north koreain border " },
  { id: "c", news: "From Monday Nepal will be state of india" },
];
function printnews(data, keyboard) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].news.toLowerCase().includes(keyboard.toLowerCase()))
      result.push(data[i]);
  }
  return result;
}
console.log(printnews(data, "pak"));
