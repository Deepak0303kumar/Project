const student = {
  name: "Deepak",
  class: 12,
  roll_no: 12,
  marks: { Eng: 95, Maths: 87, science: 70 },
  points: [10, 30, 50, 100, 70, { a: 70 }],
  age: 80,
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.roll_no);
console.log(student.marks);
console.log(student.marks.eng);
console.log(student.marks.Maths);
console.log(student.marks.science);
console.log(student.points);
console.log(student.points[5]);
console.log(student.points[5].a);
