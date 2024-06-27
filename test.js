const arr = ["mezba", "tonmoy", "mizan"];
// console.log(arr)

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
const level = add(102);
console.log(level(2)(2));
