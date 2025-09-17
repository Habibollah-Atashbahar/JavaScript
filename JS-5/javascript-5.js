// // ------------------ First -----------------
// Object
// const data = {
//   name: "me",
//   lastName: "myself",
//   age: 24,
//   skills: ["JavaScript", "Python", "C++"],
//   5: "Yes",
// };
// const key = "age";
// console.log(data.name);
// console.log(data["lastName"]);
// console.log(data[key]);
// console.log(data[5]);
// console.log(data.skills);

// ------------------ Second -----------------
// add data to Object Dynamically
// const key = "Sports";
// const data = {
//   name: "me",
//   lastName: "myself",
//   age: 24,
//   spo: key,
//   [key]: "Football",
// };
// console.log(data);

// ------------------ Third -----------------
// delete data from Object
// const data = {
//   name: "me",
//   lastName: "myself",
//   age: 24,
// };
// // data.name = "Ali";
// // delete data.lastName;
// // data.age = null;
// console.log(data);

// ------------------ Fourth -----------------
// chaining and optional chaining Operators
// const data = {
//   name: "me",
//   lastName: "myself",
//   age: 24,
//   address: {
//     country: "Iran",
//     province: {
//       city: "cfz",
//     },
//   },
//};
// // console.log(data.address.province ?.city);
// console.log(data.address.province.city);

// ------------------ Fifth -----------------
// Object keys and Object values
// const data = {
//   name: "me",
//   lastName: "myself",
//   age: 24,
// };
// console.log(Object.keys(data));
// console.log(Object.values(data));

// ------------------ Sixth ------------------
// spread operator
// const data1 = {
//   name: "me",
//   lastName: "myself",
//   age: 24,
// };
// const data2 = {
//   name: "Ali",
//   lastName: "MM",
//   age: 25,
// };
// const finalData = { ...data1, ...data2 };
// console.log(finalData);
// const newData = { ...data1 };
// console.log(data1);
// console.log(newData);

// ------------------ Seventh ------------------
// const age = 30;
// const data = {
//     name: "me",
//     lastName: "myself",
//     age: 24,
//     address: {
//         country: "Iran",
//         province: {
//             city: "cfz",
//         },
//     },
// };
// const {
//     age: age2,
//     name,
//     address: {
//         country,
//         province: { city }
//     }
// } = data
// console.log(age2, name, country, city);
