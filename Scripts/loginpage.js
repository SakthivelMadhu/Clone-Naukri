var registerArr = JSON.parse(sessionStorage.getItem("registedUser"));
document.querySelector("#form").addEventListener("submit", loginSub);
function loginSub(event){
    event.preventDefault()
    // var userName = document.querySelector("#name").value;
    var userEmail = document.querySelector("#email").value;
    var userPass = document.querySelector("#pass").value;
    var flag = false;
    for(var i =0;i<registerArr.length;i++){
        if(registerArr[i].sEmail == userEmail  && registerArr[i].sPass == userPass ){
            flag = true;
            break;
        }            
    }
    if(flag == true){
        document.querySelector("#result").textContent = "Logged in Succesfully";
        
        document.querySelector("input[type='submit']").addEventListener("click", function (){
            window.location.href = "homePage.html"
        })
    }
    else{
        document.querySelector("#result").textContent = "Invalid Email ID and Password";       
    }
}