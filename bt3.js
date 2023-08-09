let wrapper = document.querySelector(".wrapper");
let loginLink = document.querySelector(".login-link");
let registerLink = document.querySelector(".register-link");
registerLink.addEventListener("click", function (e) {
    e.preventDefault()
    wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

// lay thong tin tu form dang ky
let accounts = [];
let usename = document.getElementById("input_name");
let password = document.getElementById("input_pass");
let email = document.getElementById("input_email");
let inputconfirm = document.getElementById("input_confirm");

let warnR = document.getElementById("warningreg");
let warnL = document.getElementById("warninglog");

let loginname = document.getElementById("login_name");
let loginpass = document.getElementById("login_pass");

function register() {
    if (!usename.value || !password.value || !email.value || !inputconfirm.value) {
        warnR.innerHTML = "Hãy nhập thông tin";
    } else if (password.value !== inputconfirm.value) {
        warnR.innerHTML = "Mật khẩu chưa trùng khớp !";
    } else {
        let users = JSON.parse(localStorage.getItem("accounts"));
        let index = users.findindex(account => account.email == email)
        if (index != -1) {
            warnR.innerHTML = "Tài khoản này đã tồn tại";
        } else {
            let obj = { username: usename.value, email: email.value, password: password.value };
            console.log(obj);
            accounts.push(obj);
            localStorage.setItem("accounts", JSON.stringify(accounts));
            warnR.innerHTML = "Tạo tài khoản thành công";
            usename.value = "";
            email.value = "";
            password.value = "";
            inputconfirm.value = "";
        }
    }
}
document.getElementById("loginBtn").addEventListener("submit", function (e) {
    e.preventDefault()
    accounts = JSON.parse(localStorage.getItem("accounts"));

    let check = false;

    for (let i = 0; i < accounts.length; i++) {
        if (loginname.value == accounts[i].username && loginpass.value == accounts[i].password) {
            check = true;
            warnL.innerHTML = "Đăng nhập thành công";
            localStorage.setItem("user_login", JSON.stringify(accounts[i]))
            break;
        }
    }
    if (check) {
        warnL.innerHTML = "Đăng nhập thành công !";
    } else {
        warnL.innerHTML = "Tài khoản không tồn tại!";
    }
});