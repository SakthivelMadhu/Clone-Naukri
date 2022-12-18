
document.querySelector("#admin_login_form").addEventListener("submit", adminlog)
function adminlog(event) {
    event.preventDefault()
    var userName = document.querySelector("#admin_username").value;
    var userPass = document.querySelector("#admin_password").value;

    if (userName == "ourServices" && userPass == "12345") {

        window.location.href = "dashboard.html"

    } else {
        alert("Incorrect Credentials")
    }
}
const Login_btn = document.querySelector("#admin_login_form form");
Login_btn.addEventListener("submit", LoginFunction);

async function LoginFunction(event) {
    try {
        event.preventDefault();
        let all_login_input = document.querySelectorAll("#admin_login_form input");
        let obj = {};
        for (let i = 0; i < all_login_input.length - 1; i++) {
            obj[all_login_input[i].id] = all_login_input[i].value;
        }
        console.log(obj);
        let login_request = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (login_request.ok) {
            let token = await login_request.json();
            sessionStorage.setItem("access_token", token.accessToken);
            alert("User has been successfully Logged In.");
            window.location.href = ".html";
        } else {
            alert("User not found.");
        }
    } catch (error) {
        console.log(error);
        alert("wrong username or password. Please try again later.");
    }
}
