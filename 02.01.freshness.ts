/*

Freshness

AKA 'string object literal checking'

- Unknown keys in an object result in an error, because typically it is a typo or misunderstanding of the API


*/
{

type User = {
	firstName: string;
	lastName: string;
	email: string;
}

// I want to add the key "active"
const currentUser: User = {
	firstName: "Alla",
	lastName: "Yakubova",
	email: "ayakubova@ppg.com",
	active: true
}

const goodCurrentUser = {
  firstName: "Alla",
	lastName: "Yakubova",
	email: "ayakubova@ppg.com",
	active: true
}

const printCurrentUser = (user: User) => {
  console.log(user)
  // console.log('user.active', user.active)
}

printCurrentUser(goodCurrentUser)


}
