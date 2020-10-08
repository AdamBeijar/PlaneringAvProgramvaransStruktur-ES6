const wholeName = (first, last) => {
    return first + " " + last
}
console.log(wholeName('Adam', 'Beijar'));
var numbers = [3, 4, 5, 6, 7];
const map = numbers.map(x => x * 2);
console.log(map);
numbers.push(5)
console.log(numbers);
let list = "<ul>"
numbers.forEach(element => (list += ` <li>${element}</li>`))
list += "</ul>";
document.querySelector(".arraylist").innerHTML = list;
num2 = [7, 2, 3]
numbers2 = numbers.concat(num2)
let list2 = "<ul>"
numbers2.forEach(element2 => (list2 += ` <li>${element2}</li>`))
list2 += "</ul>";
document.querySelector(".arraylist2").innerHTML = list2;
let datanoms = [
	{ name: 'Paul', occupation: 'teacher', age: 42 }, 
	{ name: 'Alex', occupation: 'teacher', age: 44 },
	{ name: 'Tom', occupation: 'teacher', age: 42 },
	{ name: 'Andreas', occupation: 'student', age: 33 },
	{ name: 'Kevin', occupation: 'student', age: 17 },
	{ name: 'Linus', occupation: 'student', age: 17},
	{ name: 'Mikael', occupation: 'student', age: 17 },
	{ name: 'Eddie', occupation: 'student', age: 19 },
	{ name: 'Kristoffer', occupation: 'student', age: 17 },
	{ name: 'Rasmus', occupation: 'student', age: 18 },
	{ name: 'Max', occupation: 'student', age: 17 },
	{ name: 'Isak', occupation: 'student', age: 17 }
];
let ages = [];
let result = 0;
for(let i=0; i < datanoms.length; i++) {
	ages.push(datanoms[i].age);
}
function totalAge(total, num) {
  return total + num;
}
const showShortcuts = () => {
	let output = `
	<tr>
		<th>Name</th>
		<th>Occupation</th>
		<th>Age</th>
  	</tr>`
	datanoms.forEach(
	  ({ name, occupation, age }) =>
		(output += `
		<tr>
			<td>${name}</td>
			<td>${occupation}</td>
			<td>${age}</td>
		</tr>`)
	)
	output += `
		<tr>
			<td>Total Age</td>
			<td></td>
			<td>${ages.reduce(totalAge)}</td>
		</tr>`
	document.querySelector("table").innerHTML = output
}
showShortcuts()