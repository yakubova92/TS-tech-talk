/*
Variadic Functions - rest parameters
*/


const greetPerson = (greeting: string, name: string) => {
	return `${greeting} ${name}!`
}

greetPerson('Hello', 'Jane')
greetPerson('Hello', 'Jane', 'Joe', 'Kim')




























// ANSWER

const greetPeople = (greeting: string, ...names: string[]) => {
	return `${greeting} ${names.join(', ')}!`
}

greetPeople('Hello', 'Jane')
greetPeople('Hello', 'Jane', 'Joe', 'Kim')
