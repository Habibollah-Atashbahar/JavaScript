// // // // // // // -------------------- First ------------------
// // // // // // // Way To Create Array
// // // // // // const firstArray = [1, 2, 3];
// // // // // // console.log(firstArray);
// // // // // // const secondArray = new Array(4, 5, 6); // new Array(4,5,6)
// // // // // // console.log(secondArray);

// // // // // // // -------------------- Second ------------------
// // // // // // Review Index and First Sections
// // // // // const myArray = [
// // // // //   [1, 2, 3],
// // // // //   ["Habibollah", "Atashbahar"],
// // // // //   { name: "Habibollah" },
// // // // // ];
// // // // // console.log(myArray);
// // // // // console.log(myArray.length);
// // // // // console.log(myArray[0]);

// // // // // // -------------------- Third -------------------
// // // // // // Array Methods
// // // // // // pop shift push unshif
// // // // // const myArray = ["habib", "atashbahar", 24];
// // // // // // myArray.push(1);
// // // // // // myArray.unshift(2);
// // // // // // myArray.pop();
// // // // // // myArray.shift();
// // // // // console.log(myArray);

// // // // // delete and toString
// // // // const myArray = ["habib", "atashbahar", 24];
// // // // const myArray2 = myArray.toString();
// // // // console.log(myArray2);
// // // // delete myArray[0];
// // // // console.log(myArray);
// // // // // myArray[0] = "ali";
// // // // // console.log(myArray);

// // // // join concat flat methods
// // // // join
// // // const myArray = ["habibollah", "atashbahar", 24];
// // // console.log(myArray.join(" "));
// // // // concat
// // // const array2 = [1, 2, 3];
// // // console.log(myArray.concat(array2));
// // // // flat
// // // const myArray2 = [
// // //   [1, 2, 3],
// // //   [4, 5, 6],
// // // ];
// // // const finalArray = myArray2.flat();
// // // console.log(finalArray);

// // // indexOf includes
// // const myArray = ["habibollah", "atashbahar", 24];
// // // indexOf
// // console.log(myArray.indexOf(24));
// // // includes
// // console.log(myArray.includes(1));
// // console.log(myArray.includes(24));

// // sort reverse
// const myArray = ["habibollah", "atashbahar", 24, 11, 12, 1, 2, "a"];
// // sort
// console.log(myArray.sort());
// console.log(myArray);
// // reverse
// console.log(myArray.reverse());
// console.log(myArray);

// -------------------- Fourth -------------------
// array Destructuring
// const array = ["habibollah", "atashbahar", 24];
// const [name, lastName, age] = array;
// console.log(name);
// console.log(lastName);
// console.log(age);
// console.log("////////////////");
// const array2 = ["ali", "karimi", 42];
// const [name2, , age2] = array2;
// console.log(name2);
// console.log(age2);
// console.log("/////////////////");
// const array3 = ["habibollah", "atashbahar", 24, 1, 2];
// const [, lastName3] = array3;
// console.log(lastName3, ...array3);

// -------------------- Fourth -------------------
// spread operator ==> ...
// const data = [1, 2, 3];
// const data2 = [4, 5, 6];
// const newData = [...data, ...data2]; // For Connecting two Array
// console.log(newData);
// console.log(...newData);
// const spreadTest = ["Start : ", ...data, "Hello ", ...data2, 1000, "End."];
// console.log(spreadTest);
// console.log(...spreadTest);

///////////////////////////// Exams /////////////////////////
// exam-5=data in a array
// const sports = [];
// sports.push("Football");
// sports.push("Basketball");
// sports.push("Volleyball");
// sports.push("Handball");
// sports.push("Video Game");
// // console.log(sports);

// const stringSports = sports.join(", ");
// // console.log(stringSports);

// const text = `My Favorite Sports Are ${stringSports}`;
// // console.log(text);

// const lastIndex = sports.length - 1;
// // console.log(lastIndex);

// console.log(sports.splice(lastIndex));

// const firstTwoSports = sports.slice(0, 2);
// sports.splice(0, 2, firstTwoSports);
// console.log(sports);
