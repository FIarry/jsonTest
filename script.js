const list = document.querySelector("#list")
let listItems = []
for (const child of list.children) {listItems.push(child.textContent)}
console.log(listItems)


let json = '["user1","user2","user3","user4","user5"]';
let parsed = JSON.parse(json)
parsed.push('user6')
json = JSON.stringify(parsed)
console.log(json)


let jsonWorkers = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
let jsonWorkParsed = JSON.parse(jsonWorkers)
jsonWorkParsed.push({
    "name": "user4",
    "age": 28,
    "salary": 4000
})
jsonWorkers = JSON.stringify(jsonWorkParsed)
console.log(jsonWorkers)


let jsonList = '["user1","user2","user3","user4","user5"]';
let jsonListParsed = JSON.parse(jsonList)
const list2 = document.querySelector("#list2")
for (i=0;i<jsonListParsed.length;i++) {
    let newItem = document.createElement('li')
    newItem.textContent = jsonListParsed[i]
    list2.appendChild(newItem)
}


let jsonNameData = `[
    {
        "surname": "Иванов",
        "name": "Иван",
        "patronymic": "Иванович"
    },
    {
        "surname": "Петров",
        "name": "Петр",
        "patronymic": "Петрович"
    },
    {
        "surname": "Сидоров",
        "name": "Сидор",
        "patronymic": "Сидорович"
    }
]`
console.log(jsonNameData)