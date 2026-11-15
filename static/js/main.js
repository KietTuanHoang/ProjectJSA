document.getElementById("logout").addEventListener("click", logout)

listIngredient = ["Beef", "Chicken", "Pork", "Lamb", "Salmon"]

for (let meal = 0; meal < listIngredient.length; meal++) {
    document.getElementById("meal").innerHTML += `
            <div class="container text-center">
                <h1>${listIngredient[meal]}</h1>
                <div class="row align-items-start" id="${listIngredient[meal]}">
                </div>
            </div>
        `
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${listIngredient[meal]}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(listIngredient[meal])

            for (let index = 0; index < data.meals.length; index++) {
                document.getElementById(`${listIngredient[meal]}`).innerHTML += `
            <div class="col-12 md:col-4 lg:col-3 my-3">
                    <div class="card">
                        <a href="./static/page/meal.html?id=${data.meals[index].idMeal}" style="text-decoration:none; color:black;">
                            <img src="${data.meals[index].strMealThumb}" class="card-img-top imgFilm w-100" alt="...">
                            <div class="card-body" >
                                <h6>${data.meals[index].strCountry}</h6>
                                <h5 class="card-title" style="height:75px ">${data.meals[index].strMeal}</h5>
                            </div>
                        </a>
                    </div>
                </div>
            `
            }
        })
        .catch(error => console.error("Lỗi", error))
}




// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=salmon`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.meals)
//         let meals = data.meals
//         if (data.meals.length > 10) {
//             data.meals.splice(10, data.meals.length - 10)
//         }
//         for (let index = 0; index < meals.length; index++) {

//         }
//     })
//     .catch(error => console.error("Lỗi", error))