function registerCheck(event) {
    event.preventDefault()
    let username = document.getElementById("username")
    let pwd = document.getElementById("pwd")
    let name = document.getElementById("inputName")
    let cfpwd = document.getElementById("cfpwd")

    if (!(username.value) || !(pwd.value) || !(name.value) || !(cfpwd.value)) {
        return alert("Chưa nhập đủ thông tin")
    }

    if ((pwd.value) != (cfpwd.value)) {
        return alert("Mật khẩu chưa khớp")
    }

    let account = JSON.parse(localStorage.getItem("account"))

    if (account == null) {
        account = []
    }

    for (let index = 0; index < account.length; index++) {
        if (username.value == account[index].username) {
            return alert("Tài khoản đã tồn tại")
        }
    }

    account.push({ "username": username.value, "pwd": pwd.value, "name": name.value })
    localStorage.setItem("account", JSON.stringify(account))
    window.location.href = "./login.html"
}

document.getElementById("registerForm").addEventListener("submit", registerCheck)