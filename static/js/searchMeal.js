const name = new URLSearchParams(window.location.search).get("name")
console.log(name)



fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.getElementById("resultNumber").innerHTML = `Results:${data.meals.length}`
        for (let index = 0; index < data.meals.length; index++) {
            document.getElementById(`result`).innerHTML += `
            <div class="col-12 md:col-4 lg:col-3 my-3">
                    <div class="card">
                        <a href="meal.html?id=${data.meals[index].idMeal}" style="text-decoration:none; color:black;">
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