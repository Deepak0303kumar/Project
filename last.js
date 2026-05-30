const data = [
  { id: "a", news: "Pakistan cannot be found since 2 days" },
  { id: "b", news: "Chankaya found on north koreain border " },
  { id: "c", news: "From Monday Nepal will be state of india" },
];

function printFromTop(newsArray, targetId) {
  let targetIndex = -1;

  // First, find the index of the targetId using a for loop
  for (let i = 0; i < newsArray.length; i++) {
    if (newsArray[i].id === targetId) {
      targetIndex = i;
      break; // stop once we find the target
    }
  }

  if (targetIndex === -1) {
    console.log("Target ID not found");
    return;
  }

  // Now print from the top up to targetIndex
  for (let i = 0; i <= targetIndex; i++) {
    console.log(newsArray[i].news);
  }
}

printFromTop(data, "a");
printFromTop(data, "b");
printFromTop(data, "c");
