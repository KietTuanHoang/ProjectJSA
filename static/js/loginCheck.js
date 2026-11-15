const user = localStorage.getItem("checkLogin")
if (user != null) {
    document.getElementById("logout").classList.remove("d-none")
} else {
    document.getElementById("menuList").innerHTML += `
    <li class="nav-item">
        <a class="nav-link" aria-current="page" href="./static/page/login.html" style="color: white">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" aria-current="page" href="./static/page/register.html" style="color: white">Register</a>
    </li>
    `
}
function logout() {
    localStorage.removeItem("checkLogin")
    window.location.href = "./"
}