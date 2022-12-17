document.querySelector("#admin_login_form").addEventListener("submit", adminlog)
function adminlog(event){
    event.preventDefault()
    var userName = document.querySelector("#admin_username").value;
    var userPass = document.querySelector("#admin_password").value;
  
    if(userName == "ourServices" && userPass == "12345"){
      
          window.location.href = "dashboard.html"
     
    } else {
  alert("Incorrect Credentials")
    }
}
