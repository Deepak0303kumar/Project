const arr = [23, 21, 55, 29, 90, 65, 87];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (min > arr[i])
     min = arr[i];
}
console.log("Minimum number in the array: ", min);