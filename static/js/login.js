let account = JSON.parse(localStorage.getItem("account"))

function loginCheck(event) {
    event.preventDefault()
    let username = document.getElementById("username")
    let pwd = document.getElementById("pwd")
    if (!(username.value) || !(pwd.value)) {
        return alert("Chưa nhập đủ thông tin")
    }
    for (let index = 0; index < account.length; index++) {
        if (username.value == account[index].username) {
            if (pwd.value == account[index].pwd) {
                localStorage.setItem("checkLogin", username.value)
                return window.location.href = "../../"
            }
            else {
                return alert("Sai mật khẩu")
            }
        }
    }
    return alert("Tài khoản không tồn tại")
}

document.getElementById("myForm").addEventListener("submit", loginCheck)
