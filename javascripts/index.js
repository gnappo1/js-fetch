const controls = () => document.querySelector("#controls")
const input = () => document.querySelector("#meal-input")
const button = () => document.querySelector("#meal-button")
const container = () => document.querySelector("#results-container")
const list = () => document.querySelector("#list")
const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const handleClick = (e) => {
    const term = input().value
    apiCall(term)
}

const apiCall = (word) => {
    fetch(baseURL + word)
    .then(result => result.json())
    .then(json => addMealsToUl(json))
    .catch(error => console.log(error))
}

const addMealsToUl = (data) => {
    const firstTenResults = data["meals"].slice(0, 10)
    const newArray = firstTenResults.map((element) => {
        let li = document.createElement("li")
        li.id = element["idMeal"]
        li.innerHTML = element["strMeal"]
        return li
    })

    input().value = ""
    list().innerHTML = ""
    
    newArray.forEach(element => {
        list().appendChild(element)
    });

}

document.addEventListener("DOMContentLoaded", () => {
    button().addEventListener("click", handleClick)
})