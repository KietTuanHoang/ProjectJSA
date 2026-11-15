const id = new URLSearchParams(window.location.search).get("id")
console.log(id)

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => {
        const meal = data.meals[0]
        console.log(data)
        document.getElementById("meal").style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${meal.strMealThumb})`
        document.getElementById("meal").style.color = `white`
        document.getElementById("meal").style.backgroundSize = `100%`
        document.getElementById("meal").style.backgroundPosition = `center center`
        document.getElementById("meal").style.height = `80vh`
        document.getElementById("meal").innerHTML = `
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 80vh; text-align: center; padding: 20px;">
            <h1>${meal.strMeal}</h1>
            <p>Instructions: ${meal.strInstructions}</p>
        </div>
        `
        // Danh sách nguyên liệu
        const ingredientsList = [];

        // Vòng lặp từ 1 đến 20 theo chuẩn cấu trúc của TheMealDB
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            // Nếu nguyên liệu tồn tại và không bị trống/khoảng trắng
            if (ingredient && ingredient.trim() !== "") {
                ingredientsList.push({
                    name: ingredient.trim(),
                    measure: measure ? measure.trim() : "" // Định lượng (ví dụ: "1 cup", "50g")
                });
            }
        }

        // Gợi ý cách hiển thị ra HTML (nếu bạn muốn in ra giao diện)
        renderIngredientsToDOM(ingredientsList);
    })
    .catch(error => console.error("Lỗi", error))

// Hàm hỗ trợ render ra giao diện (nếu cần)
function renderIngredientsToDOM(list) {
    // Ví dụ: Tạo thẻ ul/li để hiển thị lên trang web
    const ul = document.createElement('ul');
    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.measure} ${item.name}`;
        ul.appendChild(li);
    });
    document.getElementById("ingredient").appendChild(ul);
}