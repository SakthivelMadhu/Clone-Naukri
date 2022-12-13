document.querySelector("#form").addEventListener("submit", creatAcc);
var registerArr = JSON.parse(sessionStorage.getItem("registedUser")) || []
function creatAcc(event){
    event.preventDefault();
    var infoObj = {
        sName : document.querySelector("#name").value,
        sEmail : document.querySelector("#email").value,
        sPass : document.querySelector("#pass").value,
        sMobile : document.querySelector("#phone").value
            
    };
    registerArr.push(infoObj);
    sessionStorage.setItem("registedUser", JSON.stringify(registerArr));
    alert("Registerd Successfully. Please Login! ")
    window.location.href = "loginPage.html";
}
