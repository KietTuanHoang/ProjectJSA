document.getElementById("mealSearch").addEventListener("submit", function (event) {
    event.preventDefault()
    const mealFind = document.getElementById("mealFind").value
    window.location.href = `./static/page/search.html?name=${mealFind}`
})